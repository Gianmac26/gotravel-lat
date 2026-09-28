// Todos los links de Izipay vencen el 31/12/2026 23:59 (hora Lima, UTC-5).
// Cuando AMG Comunica reciba credenciales propias de Izipay, solo cambian las URLs aquí.
export const PAYMENTS = {
  izipay: {
    merchantDescriptor: "IZI*MARCALCORP",
    // ISO 8601 con offset Lima (UTC-5)
    expiresAt: "2026-12-31T23:59:00-05:00",
    links: {
      estandar: {
        label: "Plan Estándar",
        amount: 250,
        currency: "PEN",
        url: "https://checkout.izipay.pe/link/29e9e7hwft2utu",
      },
      preferente: {
        label: "Plan Preferente",
        amount: 350,
        currency: "PEN",
        url: "https://checkout.izipay.pe/link/29e9e7euxi91if",
      },
      premium: {
        label: "Plan Premium",
        amount: 450,
        currency: "PEN",
        url: "https://checkout.izipay.pe/link/29e9e7hna6ea8v",
      },
      renovacion: {
        label: "Renovación de Visa",
        amount: 350,
        currency: "PEN",
        url: "https://checkout.izipay.pe/link/29e9e7sckeay1k",
      },
      adelanto: {
        label: "Adelanto de Cita",
        amount: 500,
        currency: "PEN",
        url: "https://checkout.izipay.pe/link/29e9e7nhbmrrfu",
        addon: true,
      },
    },
  },
  paypal: {
    // Hosted Button (no REST API). clientId "BAA..." solo identifica el comercio al cargar el SDK.
    clientId: "BAARx7f9jXhttLnr1zRiClkt_HVzrvkDm34v19WVfZgnDjFjX1Hq3VM8YDTZz8ODAXq3YA6IdF_vcDr1Cw",
    // IDs de los botones alojados en PayPal (configurados desde el panel PayPal)
    // Creados 27/09/2026 — USD: estándar 70, preferente 110, premium 150, renovación 110, adelanto 150
    buttonIds: {
      estandar:   "LXNR3V4RJX84U",
      preferente: "CP8C9FAAMK48U",
      premium:    "AW9E474GM7HVS",
      renovacion: "96EGGFKC28BVE",
      adelanto:   "STG7DBHANW8HE",
    },
  },
} as const;

export type IzipayPlanKey = keyof typeof PAYMENTS.izipay.links;

/** Devuelve true si los links de Izipay siguen vigentes. */
export function izipayLinksActive(): boolean {
  return Date.now() < new Date(PAYMENTS.izipay.expiresAt).getTime();
}
