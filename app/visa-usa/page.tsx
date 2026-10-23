import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import AvisoNoAfiliacion from "../components/AvisoNoAfiliacion";
import LineaHonorarios from "../components/LineaHonorarios";
import PlanesSection, { PayPalSection, IzipayMicrocopy } from "./PlanesSection";
import { PAYMENTS, izipayLinksActive } from "../lib/payments";
import { ADELANTO, EMPRESA } from "../lib/empresa";
import WALink from "../components/WALink";
import GuideCards from "../components/GuideCards";

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20GoViaje,%20quiero%20asesor%C3%ADa%20para%20mi%20visa%20americana";

const CONSULTATION_URL = WA_URL;

export const metadata: Metadata = {
  title: "Asesoría Visa Americana B1/B2 Lima, Perú",
  description:
    "Asesoría para tu visa americana B1/B2 desde Lima y Perú. Primera solicitud, renovación y rechazos previos. Evalúa tu caso gratis. Fundador con +10 años en asesoría de visas, 100% online.",
  alternates: { canonical: "https://goviaje.uk/visa-usa" },
};

const USA_FAQS = [
  {
    q: "¿Desde dónde atienden y qué experiencia tienen con Lima, Perú?",
    a: "Atendemos 100% online a clientes de Perú, Colombia, México y Ecuador. Nuestro fundador tiene más de 10 años de experiencia en asesoría de visas, incluidas solicitudes ante la Embajada de EE.UU. en Lima: primera solicitud, renovación y casos con rechazo previo.",
  },
  {
    q: "¿Qué diferencia hace contratar una asesoría vs. tramitar la visa solo?",
    a: "Una asesoría profesional te ayuda a identificar riesgos antes de aplicar, completar correctamente el DS-160 y prepararte para la entrevista con base en tu perfil real. No garantizamos aprobación — la decisión es del consulado — pero sí reducimos los errores evitables que llevan a rechazos innecesarios.",
  },
  {
    q: "¿Garantizan la aprobación de la visa?",
    a: "No. Ninguna empresa puede garantizar la aprobación de una visa. La decisión es exclusiva del oficial consular. Nuestro trabajo es preparar el mejor expediente posible según tu situación.",
  },
  {
    q: "¿Ayudan con renovaciones y casos con rechazo previo?",
    a: "Sí. La renovación de visa americana y los casos con rechazo previo son parte de nuestros servicios. En cada caso evaluamos el perfil antes de iniciar cualquier trámite.",
  },
  {
    q: "¿Pueden adelantar mi cita consular?",
    a: `Sí, ofrecemos un servicio de monitoreo automatizado de fechas con VisaBot y te avisamos cuando aparece una fecha más cercana. ${ADELANTO.proveedor} ${ADELANTO.disponibilidad} ${ADELANTO.devolucion}`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: USA_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Asesoría para visa americana de turismo B1/B2",
  provider: { "@type": "Organization", name: "GoViaje", url: "https://goviaje.uk" },
  areaServed: ["PE", "CO", "MX", "EC"],
  serviceArea: { "@type": "City", name: "Lima", containedIn: { "@type": "Country", name: "Perú" } },
  description:
    "Asesoría profesional para la solicitud de visa americana de turismo B1/B2 desde Lima y Perú: evaluación de perfil, formulario DS-160, preparación de entrevista consular, renovación y casos con rechazo previo.",
};

export default function VisaUSA() {
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

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#00C896]/30 bg-[#00C896]/10 px-4 py-2 text-sm text-[#00C896]">
              Visa de Turismo B1/B2 • Estados Unidos
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Asesoría profesional para tu visa americana en Lima, Perú
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Más de 10 años de experiencia de nuestro fundador en asesoría de visas B1/B2
              para la Embajada de EE.UU. en Lima: primera solicitud, renovación y casos con rechazo previo. Evaluación
              previa de tu caso incluida, 100% online.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <WALink
                href={CONSULTATION_URL}
                cta_position="top"
                service="visa-usa"
                className="rounded-full bg-[#00C896] px-6 py-4 text-center font-bold text-slate-950 shadow-lg shadow-[#00C896]/20"
              >
                Agendar asesoría gratuita
              </WALink>

              <WALink
                href={WA_URL}
                cta_position="top"
                service="visa-usa"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center font-bold text-white backdrop-blur"
              >
                Hablar por WhatsApp
              </WALink>
            </div>

            <AvisoNoAfiliacion />

            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                Fundador con +10 años en asesoría de visas
              </div>
              <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                Revisión documental experta
              </div>
              <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                100% online
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 -mt-8 relative z-10">
        <div className="grid gap-5 md:grid-cols-3">
          <ServiceCard
            title="Visa Nueva B1/B2"
            price="Desde S/250"
            text="Asesoría completa para preparar tu solicitud de visa de turismo."
            href="#planes"
            cta="Ver planes"
            featured
          />
          <ServiceCard
            title="Renovación de Visa"
            price={`S/${PAYMENTS.izipay.links.renovacion.amount} · USD ${PAYMENTS.paypal.usdAmounts.renovacion}`}
            text="Acompañamiento para renovar tu visa americana de forma ordenada. Incluye evaluación de caso, asesoría en el llenado del DS-160, revisión de historial migratorio y checklist."
            href={WA_URL}
            cta="Solicitar renovación"
            paypalKey="renovacion"
            izipayKey="renovacion"
          />
          <ServiceCard
            title="Adelanto de Cita"
            price={`S/${PAYMENTS.izipay.links.adelanto.amount} · USD ${PAYMENTS.paypal.usdAmounts.adelanto}`}
            text={`Monitoreo automatizado de disponibilidad para adelantar tu cita. ${ADELANTO.disponibilidad}`}
            href={WA_URL}
            cta="Solicitar adelanto"
            paypalKey="adelanto"
            izipayKey="adelanto"
          />
        </div>
      </section>

      <PlanesSection />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <InfoBox
            title="Evaluación previa de tu caso"
            text="Un asesor revisa tu perfil antes de iniciar el trámite para identificar fortalezas, posibles riesgos y oportunidades de mejora. Esta evaluación no garantiza aprobación. La decisión final depende exclusivamente del oficial consular."
            items={[
              "Evaluación previa",
              "Identificación de riesgos",
              "Mejor toma de decisiones",
              "Orientación profesional",
            ]}
            button="Agendar asesoría gratuita"
            href={CONSULTATION_URL}
          />

          <InfoBox
            title="Adelanto de cita"
            text={`Monitoreo automatizado de fechas con VisaBot: te avisamos cuando aparece una fecha más cercana. ${ADELANTO.proveedor} ${ADELANTO.disponibilidad} ${ADELANTO.devolucion}`}
            items={[
              "Un asesor revisa la disponibilidad por ti",
              "Búsqueda de fechas cercanas",
              "Proceso supervisado",
              "Sujeto a disponibilidad oficial",
            ]}
            button="Consultar adelanto"
            href={WA_URL}
            blogHref="/blog/adelantar-cita-visa-americana-peru"
          />
        </div>
      </section>

      {/* Callout solvencia económica */}
      <section className="mx-auto max-w-4xl px-6 pb-0 pt-2">
        <div className="rounded-2xl border border-[#00C896]/25 bg-[#00C896]/5 px-6 py-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">
            ¿No sabes cómo demostrar tu solvencia económica ante el consulado?
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            El monto mínimo que circula en redes no existe en ningún documento oficial. Entiende qué evalúa realmente el oficial y qué errores evitar.
          </p>
          <a
            href="/blog/solvencia-economica-visa-americana"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#008F6B] hover:text-[#006B52] hover:underline"
          >
            Leer guía: cómo demostrar solvencia económica para la visa americana →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-center text-3xl font-black">
          Preguntas frecuentes
        </h2>

        <div className="mt-10 space-y-4">
          {USA_FAQS.map(({ q, a }) => (
            <div key={q} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold">{q}</h3>
              <p className="mt-2 text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-black">Empieza con una evaluación profesional</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Conoce tu perfil, resuelve tus dudas y elige el servicio adecuado para tu visa americana.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <WALink
            href={CONSULTATION_URL}
            cta_position="bottom"
            service="visa-usa"
            className="rounded-full bg-[#00C896] px-6 py-4 font-bold text-slate-950"
          >
            Agendar asesoría gratuita
          </WALink>
          <WALink
            href={WA_URL}
            cta_position="bottom"
            service="visa-usa"
            className="rounded-full border border-white/20 px-6 py-4 font-bold"
          >
            Hablar por WhatsApp
          </WALink>
        </div>
      </section>

      <GuideCards
        heading="Guías útiles para tu visa americana"
        posts={[
          { href: "/blog/me-negaron-la-visa-americana", title: "Me negaron la visa americana: qué hacer (2026)", excerpt: "Qué significa el rechazo 214(b) y cuándo puedes volver a aplicar." },
          { href: "/blog/renovacion-visa-americana-sin-entrevista", title: "Renovación de visa americana sin entrevista (2026)", excerpt: "Quiénes califican para renovar por correo y qué documentos necesitas." },
          { href: "/blog/adelantar-cita-visa-americana-peru", title: "Cómo adelantar tu cita de visa americana en Perú (2026)", excerpt: "Estrategias legales para conseguir una fecha más cercana en la embajada." },
          { href: "/blog/solvencia-economica-visa-americana", title: "Solvencia económica para visa americana (2026)", excerpt: "Qué evalúa realmente el oficial consular y qué documentos ayudan." },
        ]}
      />

      <SiteFooter />
    </main>
  );
}

function ServiceCard({
  title,
  price,
  text,
  href,
  cta,
  featured = false,
  paypalKey,
  izipayKey,
}: {
  title: string;
  price: string;
  text: string;
  href: string;
  cta: string;
  featured?: boolean;
  paypalKey?: "renovacion" | "adelanto";
  izipayKey?: "renovacion" | "adelanto";
}) {
  const active = izipayLinksActive();
  const izipay = izipayKey ? PAYMENTS.izipay.links[izipayKey] : null;

  const waAfterPay = izipay
    ? `${EMPRESA.whatsappHref}?text=${encodeURIComponent(
        `Hola, acabo de pagar ${izipay.label} por Izipay. Adjunto mi comprobante para iniciar mi trámite.`
      )}`
    : href;

  return (
    <div
      className={`rounded-3xl p-6 shadow-xl ${
        featured
          ? "bg-[#00C896] text-slate-950"
          : "bg-white text-slate-900"
      }`}
    >
      {featured && (
        <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
          Servicio principal
        </span>
      )}
      <h2 className="mt-4 text-2xl font-black">{title}</h2>
      <p className="mt-3 text-3xl font-black">{price}</p>
      <LineaHonorarios />
      <p className="mt-4 opacity-80">{text}</p>

      {izipay && active ? (
        <div className="mt-6 space-y-3">
          <a
            href={izipay.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center rounded-full bg-[#0B1F3A] px-5 py-4 font-bold text-white transition hover:bg-[#162d52]"
          >
            Pagar S/ {izipay.amount} con Izipay
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
        </div>
      ) : (
        <WALink
          href={href}
          cta_position="middle"
          service="visa-usa"
          className="mt-6 inline-flex w-full justify-center rounded-full bg-slate-950 px-5 py-4 font-bold text-white"
        >
          {cta}
        </WALink>
      )}

      {paypalKey && <PayPalSection planKey={paypalKey} instance="card" />}
    </div>
  );
}


function InfoBox({
  title,
  text,
  items,
  button,
  href,
  blogHref,
}: {
  title: string;
  text: string;
  items: string[];
  button: string;
  href: string;
  blogHref?: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
      <h2 className="text-3xl font-black">{title}</h2>
      <p className="mt-4 text-slate-600">{text}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-xl bg-white p-3 text-sm font-medium">
            ✓ {item}
          </div>
        ))}
      </div>

      <WALink
        href={href}
        cta_position="middle"
        service="visa-usa"
        className="mt-8 inline-flex w-full justify-center rounded-full bg-[#00C896] px-5 py-4 font-bold text-slate-950"
      >
        {button}
      </WALink>

      {blogHref && (
        <a href={blogHref} className="mt-3 block text-center text-sm text-[#008F6B] hover:underline">
          → Cómo adelantar tu cita: opciones y qué evitar
        </a>
      )}
    </div>
  );
}
