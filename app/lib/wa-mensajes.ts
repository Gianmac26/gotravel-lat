// Mensajes prellenados de WhatsApp para los CTA genéricos (header, footer y botones generales de cada página).
// Los mensajes específicos (cotización de plan, rechazo previo, arraigo, excepción por visa vigente,
// comprobante de pago) viven en cada página y NO se reemplazan: le dan al bot un contexto más preciso.
import { EMPRESA } from "./empresa";

export const WA_MENSAJES = {
  general: "Hola, quiero información sobre sus servicios de asesoría de visas.",
  usa: "Hola, quiero info sobre la visa de EE.UU.",
  canada: "Hola, quiero info sobre la visa de Canadá.",
  mexico: "Hola, quiero info sobre la visa de México.",
  cliente: "Hola, ya soy cliente y tengo una consulta sobre mi trámite.",
} as const;

export function waUrl(text: string) {
  return `${EMPRESA.whatsappHref}?text=${encodeURIComponent(text)}`;
}

const enRuta = (pathname: string, base: string) => pathname === base || pathname.startsWith(`${base}/`);

/** Mensaje genérico según la ruta: /visa-usa, /visa-canada, /visa-mexico, /gracias (clientes); cualquier otra → general. */
export function waMensajePorRuta(pathname: string | null) {
  const p = pathname || "/";
  if (enRuta(p, "/visa-usa")) return WA_MENSAJES.usa;
  if (enRuta(p, "/visa-canada")) return WA_MENSAJES.canada;
  if (enRuta(p, "/visa-mexico")) return WA_MENSAJES.mexico;
  if (enRuta(p, "/gracias")) return WA_MENSAJES.cliente;
  return WA_MENSAJES.general;
}
