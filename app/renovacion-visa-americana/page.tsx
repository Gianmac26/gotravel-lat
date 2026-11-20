import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import AvisoNoAfiliacion from "../components/AvisoNoAfiliacion";
import LineaHonorarios from "../components/LineaHonorarios";
import WALink from "../components/WALink";
import GuideCards from "../components/GuideCards";
import { PayPalSection, IzipayMicrocopy } from "../visa-usa/PlanesSection";
import { PAYMENTS, izipayLinksActive } from "../lib/payments";
import { EMPRESA, TASA_USA } from "../lib/empresa";

const WA_TEXT =
  "Hola GoViaje, quiero evaluar si califico para renovar mi visa americana sin entrevista";
const WA_URL = `https://wa.me/51928672932?text=${encodeURIComponent(WA_TEXT)}`;
const WA_ACOMPANAR = `https://wa.me/51928672932?text=${encodeURIComponent(
  "Hola GoViaje, quiero asesoría para renovar mi visa americana con acompañamiento"
)}`;

const PAGE_URL = "https://goviaje.uk/renovacion-visa-americana";
const PAGE_TITLE = "Renovación de Visa Americana B1/B2 en Perú";
const PAGE_DESCRIPTION =
  "Asesoría para renovar tu visa americana B1/B2 desde Perú: elegibilidad de exención de entrevista, DS-160 y orientación de cita o entrega en Lima. 100% online.";

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

const RENOVACION_FAQS = [
  {
    q: "¿Puedo renovar mi visa americana sin entrevista?",
    a: "A veces sí. La Embajada de EE.UU. en Lima puede permitir la renovación de una visa B1/B2 sin entrevista (entrega de documentos, a menudo llamada dropbox) si tu visa anterior y tu perfil cumplen los criterios vigentes. Revisamos tu caso antes de iniciar: la exención no es automática ni la decide GoViaje.",
  },
  {
    q: "¿Qué pasa si no califico para la exención de entrevista?",
    a: "Si tu perfil requiere entrevista, te orientamos en el DS-160, el checklist documental y la programación de la cita en Lima. La asesoría no cambia el criterio del consulado; te ayuda a presentar la solicitud de forma ordenada.",
  },
  {
    q: "¿Los honorarios incluyen las tasas del gobierno de EE.UU.?",
    a: `No. ${TASA_USA.nota}`,
  },
  {
    q: "¿Garantizan la aprobación de la renovación?",
    a: "No. Ninguna empresa puede garantizar la aprobación de una visa. La decisión es exclusiva del oficial consular. Nuestro trabajo es revisar tu elegibilidad aparente, reducir errores en el DS-160 y orientarte en los pasos de cita o entrega en Lima.",
  },
  {
    q: "¿La atención es solo para Lima?",
    a: "La asesoría es 100% online. La entrega de documentos o la entrevista, cuando corresponden, se realizan en los puntos que indique el sistema oficial para Perú, habitualmente en Lima. Te explicamos qué agenda y qué plazos puedes esperar según el canal que te asigne el consulado.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: RENOVACION_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asesoría para renovación de visa americana B1/B2",
  serviceType: "Asesoría para renovación de visa de turismo B1/B2",
  url: PAGE_URL,
  provider: { "@type": "Organization", name: "GoViaje", url: "https://goviaje.uk" },
  areaServed: "PE",
  serviceArea: { "@type": "City", name: "Lima", containedIn: { "@type": "Country", name: "Perú" } },
  description:
    "Asesoría para la renovación de visa americana de turismo B1/B2 desde Perú: revisión de elegibilidad para exención de entrevista, formulario DS-160 y orientación de cita o entrega en Lima.",
};

const STEPS = [
  {
    n: "1",
    title: "Sales sabiendo si puedes evitar la entrevista",
    text: "Revisamos tu visa anterior y tu historial. Si el perfil no apunta a dropbox, te lo decimos antes de perder tiempo. El criterio final lo define el consulado.",
  },
  {
    n: "2",
    title: "Tu historia queda coherente",
    text: "Viajes, pasaporte y soportes se contrastan con lo que vas a declarar, para que un dato viejo no choque con el de hoy.",
  },
  {
    n: "3",
    title: "El DS-160 deja de comerte el fin de semana",
    text: "Te guiamos en el formulario oficial para cerrar omisiones antes del envío, en lugar de rehacerlo cuando ya urge viajar.",
  },
  {
    n: "4",
    title: "Llegas a Lima con el paso claro",
    text: "Sabes si toca entrega o cita, qué llevar y qué plazos puedes esperar. Esos tiempos los marca el sistema oficial.",
  },
];

const GAINS = [
  {
    title: "Evita retrabajos por errores en el formulario",
    text: "Una contradicción corregida a tiempo evita retrabajos que empujan tu viaje. Los plazos del consulado no los controlamos.",
  },
  {
    title: "Verifica si calificas para la exención de entrevista",
    text: "Alineamos visa previa y respuestas con los criterios de dropbox. Si no calzas, lo ves antes. La exención la concede el consulado.",
  },
  {
    title: "Revisión técnica de tu DS-160 antes de enviarlo",
    text: "Revisamos omisiones e inconsistencias del formulario oficial antes de enviarlo. Eso no cambia la decisión del oficial consular.",
  },
  {
    title: "Acompañamiento hasta tener tu pasaporte de vuelta",
    text: "Sigues con claridad la entrega o la cita en Lima y los pasos posteriores, hasta que el pasaporte regresa.",
  },
  {
    title: "Recupera tardes con tu familia",
    text: "Dejas las noches de foros. La asesoría es 100% online y va a tu ritmo, sin que el trámite ocupe la casa.",
  },
  {
    title: "Claridad sobre lo que sí pagas",
    text: "Los honorarios son solo la asesoría. La tasa consular y cualquier cobro del gobierno de EE.UU. van aparte.",
  },
];

export default function RenovacionVisaAmericana() {
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
              Renovación Visa Americana B1/B2 · Perú
            </span>
            <h1 className="mt-4 text-[28px] font-bold leading-[1.15] tracking-tight sm:text-5xl">
              Renueva tu visa americana sin el estrés del trámite
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300 sm:text-lg">
              Cuida la elegibilidad de tu exención de entrevista (dropbox) y no pierdas horas rehaciendo
              el DS-160. Te acompañamos 100% online hasta la cita o la entrega en Lima. La decisión de
              la visa corresponde solo al oficial consular.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WALink
                href={WA_URL}
                cta_position="top"
                service="visa-usa"
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#00C896] px-6 py-3 text-center text-[15px] font-bold text-slate-950 shadow-lg shadow-[#00C896]/20 sm:w-auto"
              >
                Evaluar si califico sin entrevista por WhatsApp
              </WALink>
              <WALink
                href={WA_ACOMPANAR}
                cta_position="top"
                service="visa-usa"
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-[15px] font-bold text-white backdrop-blur sm:w-auto"
              >
                Quiero renovar con acompañamiento
              </WALink>
            </div>
            <AvisoNoAfiliacion />
            <p className="mt-2 max-w-xl border-l-2 border-[#00C896]/50 pl-3 text-xs leading-relaxed text-slate-300">
              No brindamos asesoría legal ni migratoria: solo apoyo administrativo y documental
              para el formulario DS-160 y la cita.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-200">
              <span className="rounded-full bg-white/10 px-3 py-1.5">Fundador con +10 años en asesoría de visas</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5">Exención de entrevista y DS-160</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5">100% online</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10 sm:py-16">
        <h2 className="text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
          Hacerlo solo puede costarte la entrevista que querías evitar
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-lg">
          Renovar copiando un DS-160 de hace años es el riesgo más común. Una respuesta que ya no
          coincide con tus viajes, tu trabajo o tu pasaporte actual puede obligarte a una entrevista
          que tu perfil parecía poder evitar, o retrasar el viaje mientras corriges el formulario.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">
          Revisar el caso antes te devuelve tiempo y orden. No cambia la decisión del oficial consular
          y no evita un rechazo: la visa la concede o la niega solo esa autoridad. Esta página es para
          renovación de visa americana B1/B2, no para una primera solicitud.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 sm:pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
          Lo que ganas con nuestra asesoría
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Menos horas en el formulario, más claridad sobre la exención de entrevista y alguien al lado
          hasta que el pasaporte vuelve.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
          Cuatro pasos para renovar con calma
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
          <p className="mt-2 text-sm leading-6 text-amber-900">
            La asesoría no garantiza aprobación. La decisión final depende exclusivamente del oficial
            consular.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 sm:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-6 space-y-3 sm:mt-10 sm:space-y-4">
          {RENOVACION_FAQS.map(({ q, a }) => (
            <div key={q} className="rounded-2xl bg-white p-4 shadow-sm sm:p-6">
              <h3 className="text-[15px] font-bold text-[#0B1F3A] sm:text-base">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-6 py-12 text-center text-white sm:py-20">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl">
          Renueva sin cargar el trámite en soledad
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-base">
          Cuéntanos la vigencia de tu visa anterior. Revisamos si conviene cuidar la exención de
          entrevista antes de tocar el DS-160. Sin promesa de aprobación.
        </p>
        <div className="mx-auto mt-6 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
          <WALink
            href={WA_URL}
            cta_position="bottom"
            service="visa-usa"
            className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#00C896] px-6 py-3 text-[15px] font-bold text-slate-950 sm:w-auto"
          >
            Evaluar si califico sin entrevista
          </WALink>
          <WALink
            href={WA_ACOMPANAR}
            cta_position="bottom"
            service="visa-usa"
            className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[15px] font-bold sm:w-auto"
          >
            Hablar de mi renovación por WhatsApp
          </WALink>
        </div>
      </section>

      <GuideCards
        heading="Guías para renovar tu visa americana"
        posts={[
          {
            href: "/blog/renovacion-visa-americana-sin-entrevista",
            title: "Renovación de visa americana sin entrevista (2026)",
            excerpt: "Quiénes pueden calificar para renovar por entrega de documentos y qué conviene revisar antes.",
          },
          {
            href: "/blog/como-llenar-ds160-paso-a-paso",
            title: "Cómo llenar el DS-160 paso a paso",
            excerpt: "Qué datos pide el formulario oficial y dónde suelen aparecer inconsistencias.",
          },
          {
            href: "/blog/cuanto-cuesta-demora-visa-americana",
            title: "Cuánto cuesta y cuánto demora la visa americana",
            excerpt: "Honorarios de asesoría, tasas oficiales y plazos que dependen del consulado.",
          },
        ]}
      />

      <SiteFooter />
    </main>
  );
}

function PriceSection() {
  const renovacion = PAYMENTS.izipay.links.renovacion;
  const usd = PAYMENTS.paypal.usdAmounts.renovacion;
  const active = izipayLinksActive();
  const waAfterPay = `${EMPRESA.whatsappHref}?text=${encodeURIComponent(
    `Hola, acabo de pagar ${renovacion.label} por Izipay. Adjunto mi comprobante para iniciar mi trámite.`
  )}`;

  return (
    <section id="precio" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-4 sm:py-8">
      <div className="rounded-3xl bg-white p-5 shadow-xl sm:p-8">
        <p className="text-sm font-bold text-[#008F6B]">Inversión en tu renovación</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#0B1F3A] sm:text-3xl">
          Tranquilidad para renovar, sin adivinar el formulario
        </h2>
        <p className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">{`S/${renovacion.amount} · USD ${usd}`}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          A cambio recuperas tiempo y calma: alguien revisa contigo si tu perfil apunta a entrega sin
          entrevista y el DS-160, y sigues el proceso hasta la cita o la entrega en Lima.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
          <li>✓ Menos horas perdidas en el DS-160</li>
          <li>✓ Menos incertidumbre sobre entrevista o entrega</li>
          <li>✓ Acompañamiento hasta que el pasaporte vuelve</li>
        </ul>

        <div className="mt-6 space-y-3">
          {active ? (
            <>
              <a
                href={renovacion.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#0B1F3A] px-5 py-3 font-bold text-white transition hover:bg-[#162d52]"
              >
                {`Pagar S/ ${renovacion.amount} con Izipay`}
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
                para iniciar tu trámite.
              </p>
            </>
          ) : (
            <WALink
              href={WA_URL}
              cta_position="middle"
              service="visa-usa"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#00C896] px-5 py-3 font-bold text-slate-950"
            >
              Evaluar mi renovación por WhatsApp
            </WALink>
          )}

          <PayPalSection planKey="renovacion" instance="renovacion-landing" />

          <WALink
            href={WA_ACOMPANAR}
            cta_position="middle"
            service="visa-usa"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-slate-200 px-5 py-3 font-bold text-[#0B1F3A]"
          >
            Prefiero hablar de mi renovación por WhatsApp
          </WALink>
        </div>

        <div className="mt-4 border-t border-slate-100 pt-4">
          <LineaHonorarios />
          <p className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
            <strong>Costos oficiales aparte:</strong> {TASA_USA.nota}{" "}
            <a
              href={TASA_USA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2"
            >
              Ver tasas oficiales
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
