"use client";

import { useEffect, useRef, useState } from "react";
import { PAYMENTS, izipayLinksActive } from "../lib/payments";
import { EMPRESA } from "../lib/empresa";

// Alias local — fuente de verdad en PAYMENTS.paypal.usdAmounts
const USD_PRICES = PAYMENTS.paypal.usdAmounts;

const PLANES = [
  {
    key: "estandar" as const,
    badge: undefined as string | undefined,
    featured: false,
    items: [
      "Perfilado del cliente",
      "Llenado DS-160",
      "Asesoría documental",
      "Creación de usuario IVR",
    ],
  },
  {
    key: "preferente" as const,
    badge: "Más solicitado",
    featured: true,
    items: [
      "Todo lo del plan Estándar",
      "Evaluación de tu caso por un asesor",
      "Programación de cita consular",
    ],
  },
  {
    key: "premium" as const,
    badge: undefined,
    featured: false,
    items: [
      "Todo lo del plan Preferente",
      "Preparación para entrevista",
      "Preguntas frecuentes reales",
      "Descuento en adelanto de cita",
    ],
  },
] as const;

function fireCheckout(planLabel: string, amount: number, currency: "PEN" | "USD") {
  const w = window as unknown as WinWithAnalytics;
  w.gtag?.("event", "begin_checkout", {
    currency,
    value: amount,
    items: [{ item_name: planLabel, price: amount, quantity: 1 }],
  });
}

function fireContact(label: string) {
  const w = window as unknown as WinWithAnalytics;
  w.gtag?.("event", "contact", { event_category: "whatsapp", event_label: label });
}

export function IzipayMicrocopy() {
  return (
    <p className="mt-2 text-center text-[11px] leading-4 text-slate-400">
      Pago seguro con tarjeta, Yape, Plin o QR.<br />
      En tu estado de cuenta: <span className="font-semibold">{PAYMENTS.izipay.merchantDescriptor}</span>
    </p>
  );
}

type WinWithAnalytics = Window & {
  gtag?: (...args: unknown[]) => void;
  paypal?: { HostedButtons: (opts: { hostedButtonId: string }) => { render: (selector: string) => void } };
};

// Singleton para el SDK de PayPal — evita cargas paralelas y race conditions
let _sdkLoaded = false;
const _sdkCallbacks = new Set<() => void>();
function ensurePaypalSdk(onReady: () => void) {
  if (_sdkLoaded) { onReady(); return; }
  _sdkCallbacks.add(onReady);
  if (document.getElementById("paypal-sdk")) {
    // Script ya en DOM: si PayPal ya cargó (ej. tras HMR) disparar callbacks ahora
    if ((window as unknown as WinWithAnalytics).paypal) {
      _sdkLoaded = true;
      _sdkCallbacks.forEach((cb) => cb());
      _sdkCallbacks.clear();
    }
    // Si no: aún cargando, onload lo drenará
    return;
  }
  const script = document.createElement("script");
  script.id = "paypal-sdk";
  script.src = `https://www.paypal.com/sdk/js?client-id=${PAYMENTS.paypal.clientId}&components=hosted-buttons&disable-funding=venmo&currency=USD`;
  script.onload = () => {
    _sdkLoaded = true;
    _sdkCallbacks.forEach((cb) => cb());
    _sdkCallbacks.clear();
  };
  document.head.appendChild(script);
}

// PayPal lazy-load section — carga el SDK de PayPal solo cuando #planes es visible
export function PayPalSection({
  planKey,
  instance = "plan",
}: {
  planKey: keyof typeof PAYMENTS.paypal.buttonIds;
  instance?: string; // permite renderizar el mismo botón en varios lugares sin IDs duplicados
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);

  const buttonId = PAYMENTS.paypal.buttonIds[planKey];
  const hasBtnId = !buttonId.startsWith("TODO_");
  const usdAmount = USD_PRICES[planKey];

  useEffect(() => {
    if (!hasBtnId) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        ensurePaypalSdk(() => setSdkReady(true));
      },
      { rootMargin: "200px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasBtnId]);

  useEffect(() => {
    if (!sdkReady || !hasBtnId || !containerRef.current) return;
    const containerId = `paypal-container-${planKey}-${instance}`;
    const container = document.getElementById(containerId);
    if (!container || container.dataset.rendered) return;
    const paypal = (window as unknown as WinWithAnalytics).paypal;
    if (!paypal) return;
    container.dataset.rendered = "1";
    paypal.HostedButtons({ hostedButtonId: buttonId }).render(`#${containerId}`);
  }, [sdkReady, hasBtnId, buttonId, planKey, instance]);

  if (!hasBtnId) return null;

  return (
    <div className="mt-4 border-t border-slate-100 pt-4">
      <p className="mb-2 text-center text-xs font-medium text-slate-500">
        ¿Pagas desde el extranjero? USD {usdAmount} con PayPal
      </p>
      {/* min-height reservado para evitar CLS mientras carga el SDK */}
      <div ref={containerRef} className="min-h-[55px]">
        <div id={`paypal-container-${planKey}-${instance}`} />
      </div>
    </div>
  );
}

export default function PlanesSection() {
  const active = izipayLinksActive();
  const adelanto = PAYMENTS.izipay.links.adelanto;

  const waAfterPay = (planLabel: string) =>
    `${EMPRESA.whatsappHref}?text=${encodeURIComponent(
      `Hola, acabo de pagar el ${planLabel} por Izipay. Adjunto mi comprobante para iniciar mi trámite.`
    )}`;

  return (
    <section id="planes" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-10">
      <div className="mb-10 text-center">
        <p className="font-bold text-[#00A87D]">Planes disponibles</p>
        <h2 className="mt-2 text-3xl font-black md:text-4xl">
          Planes para Visa Nueva B1/B2
        </h2>
        <p className="mt-4 text-slate-600">
          Elige el nivel de acompañamiento según tu necesidad.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {PLANES.map(({ key, badge, featured, items }) => {
          const plan = PAYMENTS.izipay.links[key];
          const waLink = `${EMPRESA.whatsappHref}?text=${encodeURIComponent(
            `Hola Goviaje, quiero información sobre el ${plan.label} para visa americana.`
          )}`;

          return (
            <div
              key={key}
              className={`relative flex flex-col rounded-3xl p-6 shadow-sm ${
                featured
                  ? "border-2 border-[#00C896] bg-white shadow-xl"
                  : "border border-slate-200 bg-white"
              }`}
            >
              {badge && (
                <span className="absolute -top-4 left-6 rounded-full bg-[#00C896] px-4 py-2 text-sm font-bold text-slate-950">
                  {badge}
                </span>
              )}
              <h3 className="text-2xl font-black">{plan.label}</h3>
              <p className="mt-4 text-4xl font-black text-[#00A87D]">S/ {plan.amount}</p>
              <ul className="mt-6 grow space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#00A87D]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3">
                {/* CTA primario: Izipay (si vigente) o WhatsApp (si vencido) */}
                {active ? (
                  <>
                    <a
                      href={plan.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => fireCheckout(plan.label, plan.amount, "PEN")}
                      className="inline-flex w-full justify-center rounded-full bg-[#0B1F3A] px-5 py-4 font-bold text-white transition hover:bg-[#162d52]"
                    >
                      Pagar S/ {plan.amount} con Izipay
                    </a>
                    <IzipayMicrocopy />
                    {/* Nota post-pago */}
                    <p className="text-center text-xs text-slate-500">
                      Después de pagar,{" "}
                      <a
                        href={waAfterPay(plan.label)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#25D366] hover:underline"
                        onClick={() => fireContact(`post-pago ${plan.label}`)}
                      >
                        envía tu comprobante por WhatsApp
                      </a>{" "}
                      para iniciar tu trámite.
                    </p>
                  </>
                ) : (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => fireContact(plan.label)}
                    className="inline-flex w-full justify-center rounded-full bg-[#0B1F3A] px-5 py-4 font-bold text-white transition hover:bg-[#162d52]"
                  >
                    Solicitar por WhatsApp
                  </a>
                )}

                {/* CTA secundario: WhatsApp si aún tiene dudas */}
                {active && (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => fireContact(`consulta ${plan.label}`)}
                    className="inline-flex w-full justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    ¿Tienes dudas? Evalúa tu caso gratis
                  </a>
                )}

                {/* PayPal para clientes internacionales */}
                <PayPalSection planKey={key} />
              </div>

              {/* Nota precio por persona */}
              <p className="mt-4 text-center text-[11px] leading-4 text-slate-400">
                Precio por persona. ¿Viajan varios? Paga un link por cada solicitante o{" "}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  escríbenos por WhatsApp
                </a>.
              </p>
            </div>
          );
        })}
      </div>

      {/* ─── Adelanto de Cita (addon) ─── */}
      <div className="mt-10 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 md:flex md:items-center md:gap-8">
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00A87D]">Complemento opcional</p>
          <h3 className="mt-1 text-xl font-black text-[#0B1F3A]">{adelanto.label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Monitoreamos el sistema consular hasta <strong>90 días calendario</strong> para encontrar
            una fecha anterior a la que ya tienes. Si no lo logramos, recibes un{" "}
            <strong>crédito del 100 %</strong> para cualquier otro servicio.{" "}
            <strong>No reemplaza el pago del plan.</strong>
          </p>
        </div>
        <div className="mt-6 min-w-[220px] space-y-3 md:mt-0">
          <p className="text-center text-3xl font-black text-[#00A87D]">S/ {adelanto.amount}</p>
          {active ? (
            <>
              <a
                href={adelanto.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => fireCheckout(adelanto.label, adelanto.amount, "PEN")}
                className="inline-flex w-full justify-center rounded-full bg-[#0B1F3A] px-5 py-3 font-bold text-white transition hover:bg-[#162d52]"
              >
                Contratar Adelanto
              </a>
              <IzipayMicrocopy />
              <p className="text-center text-xs text-slate-500">
                Después de pagar,{" "}
                <a
                  href={waAfterPay(adelanto.label)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#25D366] hover:underline"
                  onClick={() => fireContact("post-pago adelanto")}
                >
                  envía tu comprobante por WhatsApp
                </a>.
              </p>
            </>
          ) : (
            <a
              href={`${EMPRESA.whatsappHref}?text=${encodeURIComponent("Hola Goviaje, quiero contratar el Adelanto de Cita.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center rounded-full bg-[#0B1F3A] px-5 py-3 font-bold text-white transition hover:bg-[#162d52]"
            >
              Consultar por WhatsApp
            </a>
          )}
          <PayPalSection planKey="adelanto" instance="addon" />
        </div>
      </div>
    </section>
  );
}
