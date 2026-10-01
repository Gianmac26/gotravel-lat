/**
 * Libro de Reclamaciones Virtual – GoViajes (AMG COMUNICA S.A.C.)
 * Backend en Google Apps Script: registra en Google Sheets, asigna número
 * correlativo, envía copia al consumidor y alerta al proveedor.
 *
 * INSTALACIÓN
 * 1. Crea un Google Sheet nuevo: "Libro de Reclamaciones GoViajes".
 * 2. Extensiones > Apps Script. Pega este archivo completo.
 * 3. Ajusta CONFIG (correo de alertas, webhook n8n opcional).
 * 4. Implementar > Nueva implementación > Aplicación web
 *      Ejecutar como: Yo   |   Quién tiene acceso: Cualquier persona
 * 5. Copia la URL /exec y pégala en CONFIG.endpoint del HTML.
 * 6. Revisa y actualiza FERIADOS cada año.
 */

const CONFIG = {
  razonSocial: 'AMG COMUNICA S.A.C.',
  nombreComercial: 'GoViajes',
  ruc: '20606668733',
  domicilio: 'Av. Benavides 1944, Miraflores, Lima',
  emailAlertas: 'gian.marcal26@gmail.com',   // quien recibe el aviso de cada reclamo
  n8nWebhook: '',                            // opcional: URL de webhook n8n (WhatsApp, recordatorios)
  hoja: 'Reclamos',
  tz: 'America/Lima',
  plazoDiasHabiles: 15
};

// Feriados nacionales Perú (yyyy-MM-dd). Actualizar cada año.
const FERIADOS = [
  '2026-01-01','2026-04-02','2026-04-03','2026-05-01','2026-06-07','2026-06-29',
  '2026-07-23','2026-07-28','2026-07-29','2026-08-06','2026-08-30','2026-10-08',
  '2026-11-01','2026-12-08','2026-12-09','2026-12-25',
  '2027-01-01','2027-03-25','2027-03-26','2027-05-01','2027-06-07','2027-06-29',
  '2027-07-23','2027-07-28','2027-07-29','2027-08-06','2027-08-30','2027-10-08',
  '2027-11-01','2027-12-08','2027-12-09','2027-12-25'
];

const COLS = ['N° Hoja','Fecha registro','Tipo','Nombres','Apellidos','Tipo doc','N° doc','Domicilio',
  'Teléfono','Email','Menor de edad','Apoderado','Tipo bien','Servicio','Monto (S/)','Descripción',
  'N° pedido','Detalle','Pedido consumidor','Notif. por email','Fecha límite respuesta','Estado',
  'Fecha respuesta','Respuesta / acciones del proveedor','Origen'];

/** Ejecutar UNA vez desde el editor: crea el recordatorio diario (8 a. m.). */
function instalarActivador() {
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'recordatorioPlazos').forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('recordatorioPlazos').timeBased().everyDays(1).atHour(8).inTimezone(CONFIG.tz).create();
  SpreadsheetApp.getActiveSpreadsheet().rename('Libro de Reclamaciones GoViajes');
  sheet_();
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    if (d.website) return json_({ ok: false, error: 'spam' });           // honeypot
    const req = ['nombres','apellidos','numDoc','domicilio','telefono','email','servicio','descBien','detalle','pedidoConsumidor'];
    for (const k of req) if (!String(d[k] || '').trim()) return json_({ ok: false, error: 'Falta ' + k });

    const sh = sheet_();
    const now = new Date();
    const anio = Utilities.formatDate(now, CONFIG.tz, 'yyyy');
    const correl = sh.getLastRow();                                      // fila 1 = encabezado
    const numero = 'N° ' + String(correl).padStart(6, '0') + '-' + anio;
    const fecha = Utilities.formatDate(now, CONFIG.tz, "dd/MM/yyyy HH:mm 'h'");
    const limite = sumarDiasHabiles_(now, CONFIG.plazoDiasHabiles);
    const plazo = Utilities.formatDate(limite, CONFIG.tz, 'dd/MM/yyyy');

    const clean = v => String(v == null ? '' : v).replace(/^[=+\-@]/, "'$&").slice(0, 3000); // evita inyección de fórmulas
    sh.appendRow([numero, fecha, d.tipo, d.nombres, d.apellidos, d.tipoDoc, d.numDoc, d.domicilio,
      d.telefono, d.email, d.menor ? 'Sí' : 'No', d.apoderado || '', d.tipoBien, d.servicio, d.monto || '',
      d.descBien, d.pedido || '', d.detalle, d.pedidoConsumidor, d.notifEmail ? 'Sí' : 'No', plazo,
      'Pendiente', '', '', d.origen || ''].map(clean));

    const html = constancia_(numero, fecha, plazo, d);
    MailApp.sendEmail({
      to: d.email,
      subject: `Constancia de ${d.tipo} ${numero} – Libro de Reclamaciones ${CONFIG.nombreComercial}`,
      htmlBody: html, name: CONFIG.nombreComercial, replyTo: CONFIG.emailAlertas
    });
    MailApp.sendEmail({
      to: CONFIG.emailAlertas,
      subject: `⚠ Nuevo ${d.tipo} ${numero} – responder antes del ${plazo}`,
      htmlBody: html, name: 'Libro de Reclamaciones'
    });

    if (CONFIG.n8nWebhook) {
      try {
        UrlFetchApp.fetch(CONFIG.n8nWebhook, { method: 'post', contentType: 'application/json',
          payload: JSON.stringify({ numero, fecha, plazo, ...d }), muteHttpExceptions: true });
      } catch (err) {}
    }
    return json_({ ok: true, numero, fecha, plazo });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() { return json_({ ok: true, servicio: 'Libro de Reclamaciones ' + CONFIG.nombreComercial }); }

/** Recordatorio diario: programar con Activadores > recordatorioPlazos > diario 8–9 a. m. */
function recordatorioPlazos() {
  const sh = sheet_(), rows = sh.getDataRange().getValues().slice(1);
  const hoy = new Date();
  const pend = rows.filter(r => r[21] !== 'Respondido').map(r => {
    let lim = r[20];
    if (!(lim instanceof Date)) { const [dd, mm, yy] = String(lim).split('/'); lim = new Date(+yy, +mm - 1, +dd); }
    return { n: r[0], cliente: r[3] + ' ' + r[4], lim: r[20], dias: diasHabilesEntre_(hoy, lim) };
  }).filter(p => p.dias <= 5);
  if (!pend.length) return;
  const body = pend.map(p => `${p.n} – ${p.cliente} – vence ${p.lim} (${p.dias < 0 ? 'VENCIDO' : p.dias + ' días hábiles'})`).join('\n');
  MailApp.sendEmail(CONFIG.emailAlertas, `Libro de Reclamaciones: ${pend.length} por vencer`, body);
}

/* ---------------- utilidades ---------------- */
function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(CONFIG.hoja);
  if (!sh) {
    sh = ss.insertSheet(CONFIG.hoja);
    sh.getRange('A:Y').setNumberFormat('@');                          // todo como texto: evita que Sheets convierta fechas
    sh.appendRow(COLS); sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, COLS.length).setFontWeight('bold').setBackground('#0B3D91').setFontColor('#fff');
  }
  return sh;
}
function esHabil_(d) {
  const dow = d.getDay(), k = Utilities.formatDate(d, CONFIG.tz, 'yyyy-MM-dd');
  return dow !== 0 && dow !== 6 && FERIADOS.indexOf(k) === -1;
}
function sumarDiasHabiles_(desde, n) {
  const d = new Date(desde); let c = 0;
  while (c < n) { d.setDate(d.getDate() + 1); if (esHabil_(d)) c++; }
  return d;
}
function diasHabilesEntre_(a, b) {
  const d = new Date(a); d.setHours(0,0,0,0); const fin = new Date(b); fin.setHours(0,0,0,0);
  let c = 0, s = d <= fin ? 1 : -1;
  while (d.getTime() !== fin.getTime()) { d.setDate(d.getDate() + s); if (esHabil_(d)) c += s; }
  return c;
}
function esc_(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function constancia_(numero, fecha, plazo, d) {
  const row = (k, v) => `<tr><td style="padding:6px 10px;border:1px solid #ddd;background:#f5f7fa;width:38%"><b>${k}</b></td><td style="padding:6px 10px;border:1px solid #ddd">${esc_(v)}</td></tr>`;
  const sec = t => `<tr><td colspan="2" style="padding:8px 10px;background:#0B3D91;color:#fff;font-weight:bold">${t}</td></tr>`;
  return `<div style="font-family:Arial,sans-serif;max-width:680px;color:#1b1f24">
  <h2 style="margin:0 0 4px">Libro de Reclamaciones – Hoja de Reclamación Virtual</h2>
  <p style="margin:0 0 12px">${esc_(numero)} · ${esc_(fecha)}</p>
  <table style="border-collapse:collapse;width:100%;font-size:14px">
  ${sec('Proveedor')}${row('Razón social', CONFIG.razonSocial)}${row('Nombre comercial', CONFIG.nombreComercial)}${row('RUC', CONFIG.ruc)}${row('Domicilio fiscal', CONFIG.domicilio)}
  ${sec('1. Identificación del consumidor reclamante')}${row('Nombre', d.nombres + ' ' + d.apellidos)}${row(d.tipoDoc || 'Documento', d.numDoc)}${row('Domicilio', d.domicilio)}${row('Teléfono', d.telefono)}${row('Correo', d.email)}${d.menor ? row('Padre, madre o apoderado', d.apoderado) : ''}
  ${sec('2. Identificación del bien contratado')}${row('Tipo', d.tipoBien)}${row('Servicio', d.servicio)}${row('Monto reclamado', d.monto ? 'S/ ' + d.monto : '—')}${row('Descripción', d.descBien)}${d.pedido ? row('N° pedido', d.pedido) : ''}
  ${sec('3. Detalle de la reclamación y pedido del consumidor')}${row('Tipo', d.tipo)}${row('Detalle', d.detalle)}${row('Pedido', d.pedidoConsumidor)}
  ${sec('4. Observaciones y acciones adoptadas por el proveedor')}${row('Estado', 'Pendiente de respuesta')}${row('Fecha límite de respuesta', plazo)}
  </table>
  <p style="font-size:12px;color:#5b6470">* La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el Indecopi.<br>
  * El proveedor deberá dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles.</p></div>`;
}
