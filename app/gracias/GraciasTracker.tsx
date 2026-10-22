"use client";

import { useEffect } from "react";

type WinWithAnalytics = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: Record<string, unknown>[];
};

/**
 * Dispara `purchase` (no `generate_lead`) al llegar a /gracias tras pagar.
 * Así Google Ads distingue un clic en WhatsApp (lead) de un cliente que pagó.
 *
 * Parámetros opcionales en la URL de retorno de cada link de Izipay:
 *   /gracias?plan=usa-preferente&v=350   (v = monto en soles)
 * Si no vienen, el evento se envía igual, sin valor.
 * Se deduplica por sesión para no contar recargas de la página.
 */
export default function GraciasTracker() {
  useEffect(() => {
    const w = window as unknown as WinWithAnalytics;
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan") || "sin_plan";
    const value = Number(params.get("v"));
    const key = `purchase_fired_${plan}`;

    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      /* sin sessionStorage: se dispara igual */
    }

    const payload: Record<string, unknown> = {
      currency: "PEN",
      transaction_id: `${Date.now()}-${plan}`,
      items: [{ item_name: plan, quantity: 1 }],
    };
    if (Number.isFinite(value) && value > 0) payload.value = value;

    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "purchase_complete", plan, value: payload.value });
    if (typeof w.gtag === "function") w.gtag("event", "purchase", payload);
  }, []);

  return null;
}
