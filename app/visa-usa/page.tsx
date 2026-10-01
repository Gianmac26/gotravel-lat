import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PlanesSection, { PayPalSection, IzipayMicrocopy } from "./PlanesSection";
import { PAYMENTS, izipayLinksActive } from "../lib/payments";
import { EMPRESA } from "../lib/empresa";

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20Goviaje,%20quiero%20asesor%C3%ADa%20para%20mi%20visa%20americana";

const CONSULTATION_URL = WA_URL;

export const metadata: Metadata = {
  title: "Asesoría Visa Americana B1/B2 Lima, Perú",
  description:
    "Asesoría para tu visa americana B1/B2 desde Lima y Perú. Primera solicitud, renovación y rechazos previos. Evalúa tu caso gratis. +10 años, 100% online.",
  alternates: { canonical: "https://goviaje.uk/visa-usa" },
};

const USA_FAQS = [
  {
    q: "¿Desde dónde atienden y qué experiencia tienen con Lima, Perú?",
    a: "Atendemos 100% online a clientes de Perú, Colombia, México y Ecuador. Tenemos más de 10 años acompañando solicitudes ante la Embajada de EE.UU. en Lima: primera solicitud, renovación y casos con rechazo previo.",
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
    a: "Sí, monitoreamos oportunidades de adelanto mediante Agenda VisaBot, siempre que exista disponibilidad real en el sistema consular. No garantizamos fechas ni ofrecemos citas al margen del sistema oficial.",
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
  provider: { "@type": "Organization", name: "Goviaje", url: "https://goviaje.uk" },
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
              Más de 10 años acompañando solicitudes de visa B1/B2 ante la Embajada de EE.UU.
              en Lima: primera solicitud, renovación y casos con rechazo previo. Evaluación
              previa de tu caso incluida, 100% online.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#00C896] px-6 py-4 text-center font-bold text-slate-950 shadow-lg shadow-[#00C896]/20"
              >
                Agendar asesoría gratuita
              </a>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center font-bold text-white backdrop-blur"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                +10 años
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
            text="Acompañamiento para renovar tu visa americana de forma ordenada."
            href={WA_URL}
            cta="Solicitar renovación"
            paypalKey="renovacion"
            izipayKey="renovacion"
          />
          <ServiceCard
            title="Adelanto de Cita"
            price={`S/${PAYMENTS.izipay.links.adelanto.amount} · USD ${PAYMENTS.paypal.usdAmounts.adelanto}`}
            text="Monitoreo de oportunidades de adelanto con Agenda VisaBot."
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
            title="Adelanto con Agenda VisaBot"
            text="Gracias a nuestra alianza tecnológica, monitoreamos oportunidades de adelanto de cita cuando exista disponibilidad consular."
            items={[
              "Monitoreo automatizado",
              "Búsqueda de fechas cercanas",
              "Proceso supervisado",
              "Sujeto a disponibilidad oficial",
            ]}
            button="Consultar adelanto"
            href={WA_URL}
          />
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
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#00C896] px-6 py-4 font-bold text-slate-950"
          >
            Agendar asesoría gratuita
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-6 py-4 font-bold"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>

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
            <a
              href={waAfterPay}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#25D366] hover:underline"
            >
              envía tu comprobante por WhatsApp
            </a>{" "}
            para iniciar tu trámite.
          </p>
        </div>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full justify-center rounded-full bg-slate-950 px-5 py-4 font-bold text-white"
        >
          {cta}
        </a>
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
}: {
  title: string;
  text: string;
  items: string[];
  button: string;
  href: string;
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

      <a
        href={href}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="mt-8 inline-flex w-full justify-center rounded-full bg-[#00C896] px-5 py-4 font-bold text-slate-950"
      >
        {button}
      </a>
    </div>
  );
}
