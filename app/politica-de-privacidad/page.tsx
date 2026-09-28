import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { EMPRESA } from "../lib/empresa";

export const metadata: Metadata = {
  title: "Política de Privacidad | Goviaje",
  description:
    "Política de privacidad de GoViajes conforme a la Ley N° 29733 (Ley de Protección de Datos Personales del Perú). Conozca cómo recopilamos, usamos y protegemos su información.",
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidad() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white text-slate-900">
        {/* ── Hero ── */}
        <section className="bg-[#0B1F3A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Política de Privacidad</h1>
            <p className="mt-3 text-sm text-slate-300">
              {EMPRESA.razonSocial} · RUC {EMPRESA.ruc}
            </p>
            <p className="mt-1 text-sm text-slate-400">Última actualización: septiembre de 2026</p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 text-sm leading-relaxed text-slate-700 sm:px-6 sm:text-base lg:px-8">

          {/* 1 */}
          <section aria-labelledby="h-responsable">
            <h2 id="h-responsable" className="mb-3 text-xl font-bold text-[#0B1F3A]">1. Responsable del tratamiento</h2>
            <p>
              <strong>{EMPRESA.razonSocial}</strong> (nombre comercial: {EMPRESA.nombreComercial}), RUC{" "}
              {EMPRESA.ruc}, con domicilio en {EMPRESA.domicilio}, es responsable del banco de datos
              personales de clientes registrado ante la Autoridad Nacional de Protección de Datos Personales
              del Perú.
            </p>
            <p className="mt-3">
              Contacto del responsable:{" "}
              {EMPRESA.emailAtencion} ·{" "}
              <a
                href={`${EMPRESA.whatsappHref}?text=Hola%20Goviaje,%20tengo%20una%20consulta%20sobre%20mi%20privacidad`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#00A87D] underline-offset-2 hover:underline"
              >
                WhatsApp {EMPRESA.whatsapp}
              </a>
            </p>
          </section>

          {/* 2 */}
          <section aria-labelledby="h-datos">
            <h2 id="h-datos" className="mb-3 text-xl font-bold text-[#0B1F3A]">2. Datos personales que recopilamos</h2>
            <p>Según el servicio contratado, recopilamos las siguientes categorías de datos:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Datos de identificación:</strong> nombre completo, tipo y número de documento de
                identidad (DNI, CE, pasaporte), nacionalidad.
              </li>
              <li>
                <strong>Datos de contacto:</strong> número de teléfono o WhatsApp, correo electrónico,
                domicilio.
              </li>
              <li>
                <strong>Datos del pasaporte:</strong> número, fecha de emisión y vencimiento, país emisor,
                historial de visas (cuando aplica).
              </li>
              <li>
                <strong>Datos laborales y económicos:</strong> empleador, cargo, antigüedad, ingresos
                mensuales aproximados, documentación de solvencia. Solicitados para sustentar el arraigo
                económico ante el consulado.
              </li>
              <li>
                <strong>Datos familiares:</strong> estado civil, hijos, vínculos familiares en el país de
                destino (cuando corresponda al perfil migratorio).
              </li>
              <li>
                <strong>Datos de navegación:</strong> páginas visitadas, dispositivo, origen del tráfico,
                recopilados mediante Google Analytics y, si aplica, píxeles de Google Ads y Meta Ads, con
                fines de medición y mejora del sitio.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section aria-labelledby="h-finalidad">
            <h2 id="h-finalidad" className="mb-3 text-xl font-bold text-[#0B1F3A]">3. Finalidad del tratamiento</h2>
            <p>Utilizamos sus datos exclusivamente para:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Brindar la asesoría migratoria contratada y evaluar su perfil de solicitud.</li>
              <li>Preparar la documentación requerida por el consulado o el IRCC.</li>
              <li>Comunicarnos con usted a través de WhatsApp o correo electrónico.</li>
              <li>Gestionar el pago del servicio a través de las pasarelas autorizadas.</li>
              <li>Cumplir con obligaciones legales, incluyendo el Libro de Reclamaciones.</li>
              <li>
                Medir el rendimiento de nuestras campañas publicitarias y mejorar la experiencia del sitio
                (datos de navegación únicamente).
              </li>
            </ul>
            <p className="mt-3">
              <strong>
                No vendemos, cedemos ni compartimos sus datos personales con terceros para fines comerciales
                ajenos al servicio contratado.
              </strong>
            </p>
          </section>

          {/* 4 */}
          <section aria-labelledby="h-destinatarios">
            <h2 id="h-destinatarios" className="mb-3 text-xl font-bold text-[#0B1F3A]">4. Destinatarios</h2>
            <p>Con el fin de prestar el servicio, compartimos información con:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Pasarelas de pago (Izipay, PayPal):</strong> solo los datos necesarios para procesar
                la transacción. No compartimos datos de tarjeta; el procesamiento es externo.
              </li>
              <li>
                <strong>Proveedores de medición (Google Analytics, Google Ads, Meta Ads):</strong> datos de
                navegación agregados y seudoanonimizados.
              </li>
              <li>
                <strong>Herramientas de automatización interna (n8n):</strong> para el envío de
                comunicaciones por WhatsApp relacionadas con el servicio contratado.
              </li>
            </ul>
            <p className="mt-3">
              No compartimos su información personal ni la de su caso migratorio con consulados, embajadas,
              el IRCC ni ningún tercero no autorizado.
            </p>
          </section>

          {/* 5 */}
          <section aria-labelledby="h-conservacion">
            <h2 id="h-conservacion" className="mb-3 text-xl font-bold text-[#0B1F3A]">5. Plazo de conservación</h2>
            <p>
              Los datos se conservan mientras sea necesario para brindar el servicio y durante el período
              que exija la legislación peruana aplicable (incluyendo la Ley N° 29571 para los registros del
              Libro de Reclamaciones). Transcurrido ese plazo, los datos son eliminados o anonimizados.
            </p>
          </section>

          {/* 6 */}
          <section aria-labelledby="h-derechos">
            <h2 id="h-derechos" className="mb-3 text-xl font-bold text-[#0B1F3A]">6. Derechos del titular (ARCO)</h2>
            <p>
              Conforme a la Ley N° 29733, usted tiene derecho a:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li><strong>Acceso:</strong> conocer qué datos tenemos sobre usted.</li>
              <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong>Cancelación:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, escríbanos a{" "}
              <a href={`mailto:${EMPRESA.emailAtencion}`} className="font-medium text-[#00A87D] underline-offset-2 hover:underline">{EMPRESA.emailAtencion}</a>{" "}
              o por{" "}
              <a
                href={`${EMPRESA.whatsappHref}?text=Hola%20Goviaje,%20quiero%20ejercer%20mis%20derechos%20ARCO`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#00A87D] underline-offset-2 hover:underline"
              >
                WhatsApp
              </a>
              . Responderemos en el plazo establecido por la ley.
            </p>
          </section>

          {/* 7 */}
          <section aria-labelledby="h-cookies">
            <h2 id="h-cookies" className="mb-3 text-xl font-bold text-[#0B1F3A]">7. Cookies y tecnologías similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para analizar el tráfico del sitio y medir el
              rendimiento de nuestras campañas publicitarias (Google Analytics, Google Ads, Meta Ads). Puede
              gestionar o desactivar las cookies desde la configuración de su navegador.
            </p>
          </section>

          {/* 8 */}
          <section aria-labelledby="h-seguridad">
            <h2 id="h-seguridad" className="mb-3 text-xl font-bold text-[#0B1F3A]">8. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger sus datos personales
              frente a accesos no autorizados, pérdida o divulgación. Los pagos se procesan a través de
              pasarelas certificadas PCI-DSS; GoViajes no almacena datos de tarjetas de crédito o débito.
            </p>
          </section>

          {/* 9 */}
          <section aria-labelledby="h-cambios">
            <h2 id="h-cambios" className="mb-3 text-xl font-bold text-[#0B1F3A]">9. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política cuando sea necesario. La fecha de la última actualización
              aparece al inicio de esta página. Para cambios significativos, notificaremos a nuestros
              clientes activos por los canales habituales.
            </p>
          </section>

          {/* Contacto */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] p-6">
            <p className="font-semibold text-[#0B1F3A]">¿Tienes dudas sobre el manejo de tus datos?</p>
            <p className="mt-2 text-sm text-slate-600">
              Escríbenos por{" "}
              <a
                href={`${EMPRESA.whatsappHref}?text=Hola%20Goviaje,%20tengo%20una%20consulta%20sobre%20mi%20privacidad`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0B1F3A] underline underline-offset-2"
              >
                WhatsApp
              </a>
              . También puedes consultar los{" "}
              <Link href="/terminos-y-condiciones" className="font-medium text-[#00A87D] underline-offset-2 hover:underline">
                Términos y Condiciones
              </Link>{" "}
              del servicio.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
