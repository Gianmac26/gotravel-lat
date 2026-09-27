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
    clientId: "BAAfRhMjl4IcMXAHY4Py3DjqWHXWBL3EGMsU1rM0BHQvhFUWFf1cqgN4nO3v8o4fGfFGSCNlM5O6LipFWQzJGOvhXW0OZSg7rDXlr",
    // IDs de los botones alojados en PayPal (configurados desde el panel PayPal)
    // TODO: sustituir por los IDs reales de cada Hosted Button al crearlos
    buttonIds: {
      estandar:   "TODO_PAYPAL_BTN_ESTANDAR",
      preferente: "TODO_PAYPAL_BTN_PREFERENTE",
      premium:    "TODO_PAYPAL_BTN_PREMIUM",
      renovacion: "TODO_PAYPAL_BTN_RENOVACION",
      adelanto:   "TODO_PAYPAL_BTN_ADELANTO",
    },
  },
} as const;

export type IzipayPlanKey = keyof typeof PAYMENTS.izipay.links;

/** Devuelve true si los links de Izipay siguen vigentes. */
export function izipayLinksActive(): boolean {
  return Date.now() < new Date(PAYMENTS.izipay.expiresAt).getTime();
}
