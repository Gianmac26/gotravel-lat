export const EMPRESA = {
  razonSocial: "AMG COMUNICA S.A.C.",
  nombreComercial: "GoViaje",
  ruc: "20606668733",
  domicilio: "Av. Benavides 1944, Miraflores, Lima",
  whatsapp: "+51 928 672 932",
  whatsappHref: "https://wa.me/51928672932",
  descriptorCobro: "IZI*MARCALCORP",

  emailAtencion: "hola@goviaje.uk",
  ciudadJurisdiccion: "Lima (jueces y tribunales del Distrito Judicial de Lima)",
} as const;

/** Adelanto de cita: textos únicos para web y Términos. */
export const ADELANTO = {
  proveedor:
    "VisaBot es un servicio de un proveedor tecnológico privado, sin vínculo con el consulado ni con la embajada.",
  disponibilidad:
    "La disponibilidad de fechas depende exclusivamente del consulado; no garantizamos conseguir una fecha más próxima.",
  devolucion:
    "Si no conseguimos adelantar tu cita dentro del plazo del servicio, te devolvemos el 100 % de lo pagado por este servicio.",
  solicitud: `Tras los 90 días sin conseguir un adelanto, solicita la devolución por WhatsApp o a ${EMPRESA.emailAtencion} con tu nombre y comprobante de pago. La procesamos en un máximo de 7 días hábiles desde tu solicitud. Si pagaste con tarjeta, el abono puede tardar hasta 30 días adicionales según tu banco.`,
} as const;

/** Tasas oficiales de la visa USA: no se publica un total fijo. */
export const TASA_USA = {
  nota: "Tasa consular MRV: USD 185, se paga directamente al gobierno de EE. UU. Además, puede aplicarse la Visa Integrity Fee de USD 250, que se cobra solo si la visa es emitida. Confirma el monto vigente en el sitio oficial de la Embajada de EE. UU. en el Perú antes de pagar.",
  url: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/fees-visa-services.html",
} as const;

/** Aviso de no afiliación (footer de todas las páginas). */
export const AVISO_NO_AFILIACION =
  "GoViaje es una asesoría privada e independiente. No somos entidad gubernamental ni estamos afiliados a ningún consulado, embajada ni autoridad migratoria. Los formularios oficiales pueden presentarse gratuitamente en los sitios oficiales del gobierno. Nuestros honorarios corresponden únicamente a la asesoría y no incluyen las tasas consulares, que se pagan directamente a la autoridad correspondiente. La decisión sobre la visa es exclusiva de la autoridad consular.";

/** Versión breve para la banda junto al primer CTA de las landings. */
export const AVISO_NO_AFILIACION_BREVE =
  "GoViaje es una asesoría privada e independiente, sin vínculo con consulados, embajadas ni autoridades migratorias. Nuestros honorarios no incluyen las tasas consulares, que se pagan directamente al gobierno.";
