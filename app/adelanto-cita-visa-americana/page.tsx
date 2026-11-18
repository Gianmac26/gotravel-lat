import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import AvisoNoAfiliacion from "../components/AvisoNoAfiliacion";
import LineaHonorarios from "../components/LineaHonorarios";
import WALink from "../components/WALink";
import GuideCards from "../components/GuideCards";
import { PayPalSection, IzipayMicrocopy } from "../visa-usa/PlanesSection";
import { PAYMENTS, izipayLinksActive } from "../lib/payments";
import { ADELANTO, EMPRESA, TASA_USA } from "../lib/empresa";

const WA_TEXT =
  "Hola GoViaje, quiero que busquen cupos para adelantar mi cita de visa americana. Ya tengo cita.";
const WA_URL = `https://wa.me/51928672932?text=${encodeURIComponent(WA_TEXT)}`;
const WA_DESDE_CERO = `https://wa.me/51928672932?text=${encodeURIComponent(
  "Hola GoViaje, aún no inicié mi trámite de visa americana y quiero ayuda desde cero."
)}`;

const PAGE_URL = "https://goviaje.uk/adelanto-cita-visa-americana";
const PAGE_TITLE = "Adelanto de cita visa americana en Perú";
const PAGE_DESCRIPTION =
  "Monitoreo de fechas para adelantar tu cita de visa americana si ya la tienes programada. Sin garantía de una fecha más próxima. Atención 100% online desde Perú.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "es_PE",
    siteName: "GoViaje",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const ADELANTO_FAQS = [
  {
    q: "¿Garantizan una fecha más próxima?",
    a: ADELANTO.disponibilidad,
  },
  {
    q: "¿Qué es VisaBot y quién busca las fechas?",
    a: `Monitoreamos la disponibilidad con VisaBot y te avisamos si aparece una fecha más cercana. ${ADELANTO.proveedor}`,
  },
  {
    q: "¿Qué pasa si no logran adelantar mi cita?",
    a: `${ADELANTO.devolucion} ${ADELANTO.solicitud}`,
  },
  {
    q: "¿Este pago incluye la tasa consular?",
    a: `No. Este servicio es para quien ya tiene cita y ya pagó la tasa MRV. ${TASA_USA.nota}`,
  },
  {
    q: "¿Puedo contratar el adelanto si aún no tengo cita?",
    a: "No todavía. Para buscar una fecha más cercana primero tiene que existir una cita. Si aún no iniciaste el trámite ni pagaste la tasa consular, te ayudamos a dejar lista la solicitud y después evaluamos el adelanto.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ADELANTO_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Monitoreo para adelantar cita de visa americana",
  serviceType: "Monitoreo de disponibilidad de citas consulares para visa B1/B2",
  url: PAGE_URL,
  provider: { "@type": "Organization", name: "GoViaje", url: "https://goviaje.uk" },
  areaServed: "PE",
  description:
    "Servicio de monitoreo de fechas para quien ya tiene una cita de visa americana programada y quiere una fecha más cercana. La disponibilidad depende del consulado. No se garantiza conseguir una fecha más próxima.",
};

const STEPS = [
  {
    n: "1",
    title: "Confirmas que ya tienes cita",
    text: "Revisamos que tu cuenta exista y que la tasa consular ya esté pagada. Sin esa cita no hay fecha que adelantar.",
  },
  {
    n: "2",
    title: "Dejas de refrescar el sistema",
    text: "El monitoreo corre por ti. Recuperas las horas que hoy se van en entrar una y otra vez a buscar cupos.",
  },
  {
    n: "3",
    title: "Te avisamos si aparece un cupo",
    text: "Si el consulado abre una fecha más cercana, te lo decimos para que decidas. Que aparezca no depende de nosotros.",
  },
  {
    n: "4",
    title: "Tú eliges si tomas esa fecha",
    text: "La nueva fecha, si existe, la confirma el sistema oficial. Tú conservas el control de aceptarla.",
  },
];

const GAINS = [
  {
    title: "Recupera el control de tu fecha",
    text: "Una cita lejana deja de ser la única información que miras cada noche. Sigues tu viaje con un aviso claro si surge algo antes.",
  },
  {
    title: "No pierdas el evento por estar pegado a la pantalla",
    text: "Bodas, trabajo o un viaje familiar no deberían depender de refrescar el calendario. Delegas la búsqueda pesada.",
  },
  {
    title: "Si no hay adelanto, recuperas lo pagado",
    text: "Garantía de reembolso del 100% si no se logra el adelanto dentro del plazo de 90 días. El detalle está en el aviso legal.",
  },
];

export default function AdelantoCitaVisaAmericana() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#0B1F3A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#10b98133,transparent_35%),radial-gradient(circle_at_bottom_left,#3b82f633,transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-8 sm:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#00C896]/30 bg-[#00C896]/10 px-3 py-1.5 text-xs text-[#00C896] sm:px-4 sm:py-2 sm:text-sm">
              Adelanto de cita · Visa americana · Perú
            </span>
            <h1 className="mt-4 text-[28px] font-bold leading-[1.15] tracking-tight sm:text-5xl">
              Recupera el control de tu fecha de viaje
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300 sm:text-lg">
              Si ya tienes cita de visa americana y la fecha te queda lejos, monitoreamos cupos por ti
              y te avisamos cuando aparece una más cercana. Dejas de refrescar el sistema. La
              disponibilidad la decide solo el consulado.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WALink
                href={WA_URL}
                cta_position="top"
                service="visa-usa"
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#00C896] px-6 py-3 text-center text-[15px] font-bold text-slate-950 shadow-lg shadow-[#00C896]/20 sm:w-auto"
              >
                Quiero buscar una fecha más cercana
              </WALink>
            </div>
            <AvisoNoAfiliacion />
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-200">
              <span className="rounded-full bg-white/10 px-3 py-1.5">Para quien ya tiene cita</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5">Reembolso si no hay adelanto</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5">100% online</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
          <p className="text-[15px] font-bold leading-snug text-[#0B1F3A]">
            ¿Aún no has iniciado tu trámite ni pagado la tasa consular?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Para adelantar una cita primero debemos dejar lista tu solicitud. Escríbenos por WhatsApp
            para ayudarte desde cero.
          </p>
          <WALink
            href={WA_DESDE_CERO}
            cta_position="middle"
            service="visa-usa"
            className="mt-3 inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-[#0B1F3A] sm:w-auto"
          >
            Empezar mi solicitud por WhatsApp
          </WALink>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10 sm:py-16">
        <h2 className="text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
          Una cita lejana te quita el viaje, no solo un día en el calendario
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-lg">
          Si la fecha quedó a meses, cada refresco del sistema es tiempo que no estás con tu familia
          ni cerrando el plan que sí importa. El cupo no aparece porque alguien lo mire más veces.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">
          Este servicio es para quien ya creó su cuenta y ya pagó la tasa MRV. Delegas la búsqueda.
          {` ${ADELANTO.disponibilidad}`}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 sm:pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
          Lo que ganas al dejar de buscar solo
        </h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {GAINS.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3.5 rounded-2xl bg-white p-4 shadow-sm sm:p-6"
            >
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00C896]/15 text-sm font-bold text-[#008F6B]"
                aria-hidden
              >
                ✓
              </span>
              <div>
                <h3 className="text-[15px] font-bold leading-snug text-[#0B1F3A]">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 sm:pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
          Cómo recuperas tu fecha
        </h2>
        <ol className="mt-6 flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-5">
          {STEPS.map((step) => (
            <li key={step.n} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00C896] text-sm font-bold text-[#0B1F3A]">
                {step.n}
              </span>
              <div>
                <h3 className="text-[15px] font-bold leading-snug text-[#0B1F3A]">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <PriceSection />

      <section className="mx-auto max-w-4xl px-6 pb-4">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 sm:px-6 sm:py-5">
          <p className="font-bold text-amber-950">Importante</p>
          <div className="mt-2 space-y-2 text-sm leading-6 text-amber-900">
            <p>{ADELANTO.disponibilidad}</p>
            <p>{ADELANTO.proveedor}</p>
            <p>{ADELANTO.devolucion}</p>
            <p>{ADELANTO.solicitud}</p>
            <p>
              Este servicio no influye en la decisión de la visa. Esa decisión depende exclusivamente
              del oficial consular.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 sm:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-6 space-y-3 sm:mt-10 sm:space-y-4">
          {ADELANTO_FAQS.map(({ q, a }) => (
            <div key={q} className="rounded-2xl bg-white p-4 shadow-sm sm:p-6">
              <h3 className="text-[15px] font-bold text-[#0B1F3A] sm:text-base">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-6 py-12 text-center text-white sm:py-20">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl">
          Deja de refrescar el sistema tú solo
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-base">
          Cuéntanos la fecha que ya tienes. Buscamos cupos por ti. Sin promesa de una fecha más
          próxima.
        </p>
        <div className="mx-auto mt-6 flex max-w-md flex-col justify-center gap-3">
          <WALink
            href={WA_URL}
            cta_position="bottom"
            service="visa-usa"
            className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#00C896] px-6 py-3 text-[15px] font-bold text-slate-950"
          >
            Consultar adelanto por WhatsApp
          </WALink>
        </div>
      </section>

      <GuideCards
        heading="Guías sobre tu cita de visa americana"
        posts={[
          {
            href: "/blog/adelantar-cita-visa-americana-peru",
            title: "Cómo adelantar tu cita de visa americana en Perú",
            excerpt: "Qué opciones existen cuando la fecha quedó lejos y qué conviene evitar.",
          },
          {
            href: "/blog/cuanto-cuesta-demora-visa-americana",
            title: "Cuánto cuesta y cuánto demora la visa americana",
            excerpt: "Tasas oficiales, honorarios de asesoría y plazos que marca el consulado.",
          },
          {
            href: "/blog/preguntas-entrevista-visa-americana",
            title: "Preguntas de la entrevista de visa americana",
            excerpt: "Qué suele preguntar el oficial y cómo preparar tu caso sin improvisar.",
          },
        ]}
      />

      <SiteFooter />
    </main>
  );
}

function PriceSection() {
  const adelanto = PAYMENTS.izipay.links.adelanto;
  const usd = PAYMENTS.paypal.usdAmounts.adelanto;
  const active = izipayLinksActive();
  const waAfterPay = `${EMPRESA.whatsappHref}?text=${encodeURIComponent(
    `Hola, acabo de pagar ${adelanto.label} por Izipay. Adjunto mi comprobante para iniciar mi trámite.`
  )}`;

  return (
    <section id="precio" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-4 sm:py-8">
      <div className="rounded-3xl bg-white p-5 shadow-xl sm:p-8">
        <p className="text-sm font-bold text-[#008F6B]">Inversión en tu fecha</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
          {adelanto.label}
        </h2>
        <p className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">{`S/${adelanto.amount} · USD ${usd}`}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          A cambio dejas la búsqueda de cupos en nuestras manos y recuperas el tiempo que hoy se va
          en el calendario. Si no hay una fecha más cercana, no te quedas con el costo.
        </p>
        <p className="mt-3 rounded-2xl bg-[#00C896]/10 px-4 py-3 text-sm font-semibold leading-relaxed text-[#0B1F3A]">
          Garantía de reembolso del 100% si no se logra el adelanto dentro del plazo de 90 días.
        </p>

        <div className="mt-6 space-y-3">
          {active ? (
            <>
              <a
                href={adelanto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#0B1F3A] px-5 py-3 font-bold text-white transition hover:bg-[#162d52]"
              >
                {`Pagar S/ ${adelanto.amount} con Izipay`}
              </a>
              <IzipayMicrocopy />
              <p className="text-center text-xs text-slate-500">
                Después de pagar,{" "}
                <WALink
                  href={waAfterPay}
                  cta_position="middle"
                  service="visa-usa"
                  event="payment_proof_click"
                  className="font-medium text-[#25D366] hover:underline"
                >
                  envía tu comprobante por WhatsApp
                </WALink>{" "}
                para iniciar el monitoreo.
              </p>
            </>
          ) : (
            <WALink
              href={WA_URL}
              cta_position="middle"
              service="visa-usa"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#00C896] px-5 py-3 font-bold text-slate-950"
            >
              Consultar adelanto por WhatsApp
            </WALink>
          )}

          <PayPalSection planKey="adelanto" instance="adelanto-landing" />

          <WALink
            href={WA_URL}
            cta_position="middle"
            service="visa-usa"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-slate-200 px-5 py-3 font-bold text-[#0B1F3A]"
          >
            Prefiero consultar mi cita por WhatsApp
          </WALink>
        </div>

        <div className="mt-4 border-t border-slate-100 pt-4">
          <LineaHonorarios />
        </div>
      </div>
    </section>
  );
}
