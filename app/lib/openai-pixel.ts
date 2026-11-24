// Píxel de conversiones de OpenAI Ads (anuncios en ChatGPT).
// Se inyecta como <script> inline al inicio del <head> del layout raíz: corre una sola vez por carga
// completa de página. En la navegación SPA de Next el layout no se vuelve a montar y React no ejecuta
// scripts inline al hidratar, así que no se reinicializa; además el snippet se corta si window.oaiq ya existe.
//
// Conversión: "lead_created" (customer_action) en cada clic hacia WhatsApp, con un listener delegado en
// document (no por botón). Detecta enlaces con wa.me, whatsapp.com o api.whatsapp.
// No cuenta como lead los enlaces marcados por <WALink> con data-wa-event="payment_proof_click"
// (enviar comprobante tras pagar) ni "customer_whatsapp_click" (clientes en /gracias), igual que el
// evento Lead de Meta.
// Deduplicación: máximo 1 evento cada 2 s (un clic que dispare click + auxclick, o dos handlers, cuenta 1).
// Debug: activo solo con `next dev` (NODE_ENV !== "production").

export const OPENAI_PIXEL_ID = "WpsARU4HLn7AK9v47YVhvR";

const DEBUG = process.env.NODE_ENV !== "production";

export const OPENAI_PIXEL_SCRIPT = `(function (w, d, s, u) {
  if (w.oaiq) return;
  var q = function () { q.q.push(arguments); };
  q.q = []; w.oaiq = q;
  var js = d.createElement(s); js.async = true; js.src = u;
  var f = d.getElementsByTagName(s)[0]; f.parentNode.insertBefore(js, f);
})(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");
oaiq("init", { pixelId: ${JSON.stringify(OPENAI_PIXEL_ID)}${DEBUG ? ", debug: true" : ""} });
(function (w, d) {
  if (w.__oaiqWaListener) return;
  w.__oaiqWaListener = true;
  var WA = /(^|\\/\\/|\\.)(wa\\.me|whatsapp\\.com)(\\/|$|\\?)|api\\.whatsapp/i;
  var NO_LEAD = { payment_proof_click: 1, customer_whatsapp_click: 1 };
  var last = 0;
  function onClick(e) {
    if (e.type === "auxclick" && e.button !== 1) return;
    var t = e.target;
    var a = t && t.closest ? t.closest("a[href]") : null;
    if (!a || !WA.test(a.href)) return;
    if (a.getAttribute("data-wa-event") in NO_LEAD) return;
    var now = Date.now();
    if (now - last < 2000) return;
    last = now;
    try { w.oaiq("measure", "lead_created", { type: "customer_action" }); } catch (_) {}${DEBUG ? `
    console.log("[oaiq] lead_created", a.href);` : ""}
  }
  d.addEventListener("click", onClick, true);
  d.addEventListener("auxclick", onClick, true);
})(window, document);`;
