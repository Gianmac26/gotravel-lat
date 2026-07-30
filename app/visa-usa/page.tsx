import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20Goviaje,%20quiero%20asesor%C3%ADa%20para%20mi%20visa%20americana";

const CONSULTATION_URL = WA_URL;

export const metadata: Metadata = {
  title: "Visa Americana B1/B2 — Asesoría Profesional | Goviaje",
  description:
    "Asesoría especializada para tu visa de turismo a Estados Unidos (B1/B2): primera solicitud, renovación y rechazos previos. Evaluación de perfil y revisión documental por un asesor especializado. Más de 10 años de experiencia, 100% online.",
};

const USA_FAQS = [
  {
    q: "¿Garantizan la aprobación?",
    a: "No. Ninguna empresa puede garantizar aprobación. Nuestro trabajo es ayudarte a preparar mejor tu solicitud.",
  },
  {
    q: "¿Atienden 100% online?",
    a: "Sí. Podemos acompañarte de forma online desde Perú, Colombia, México, Ecuador u otros países.",
  },
  {
    q: "¿Pueden adelantar mi cita?",
    a: "Sí, siempre que exista disponibilidad en el sistema consular.",
  },
] as const;

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
  description:
    "Asesoría profesional para la solicitud de visa americana de turismo B1/B2: perfilado previo, formulario DS-160, preparación de entrevista consular y renovación.",
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
              Prepara tu visa americana con asesoría profesional
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Más de 10 años ayudando a viajeros a aplicar con mayor claridad,
              mejor preparación y acompañamiento 100% online.
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
            price="S/350"
            text="Acompañamiento para renovar tu visa americana de forma ordenada."
            href={WA_URL}
            cta="Solicitar renovación"
          />
          <ServiceCard
            title="Adelanto de Cita"
            price="USD 150"
            text="Monitoreo de oportunidades de adelanto con Agenda VisaBot."
            href={WA_URL}
            cta="Solicitar adelanto"
          />
        </div>
      </section>

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
          <Plan
            name="Estándar"
            price="S/250"
            items={[
              "Perfilado del cliente",
              "Llenado DS-160",
              "Asesoría documental",
              "Creación de usuario IVR",
            ]}
          />

          <Plan
            name="Preferente"
            price="S/350"
            badge="Más solicitado"
            featured
            items={[
              "Todo lo del plan Estándar",
              "Evaluación de tu caso por un asesor",
              "Programación de cita consular",
            ]}
          />

          <Plan
            name="Premium"
            price="S/450"
            items={[
              "Todo lo del plan Preferente",
              "Preparación para entrevista",
              "Preguntas frecuentes reales",
              "Descuento en adelanto de cita",
            ]}
          />
        </div>
      </section>

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
          {[
            [
              "¿Garantizan la aprobación?",
              "No. Ninguna empresa puede garantizar aprobación. Nuestro trabajo es ayudarte a preparar mejor tu solicitud.",
            ],
            [
              "¿Atienden 100% online?",
              "Sí. Podemos acompañarte de forma online desde Perú, Colombia, México, Ecuador u otros países.",
            ],
            [
              "¿Pueden adelantar mi cita?",
              "Sí, siempre que exista disponibilidad en el sistema consular.",
            ],
          ].map(([q, a]) => (
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
}: {
  title: string;
  price: string;
  text: string;
  href: string;
  cta: string;
  featured?: boolean;
}) {
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
      <h3 className="mt-4 text-2xl font-black">{title}</h3>
      <p className="mt-3 text-3xl font-black">{price}</p>
      <p className="mt-4 opacity-80">{text}</p>
      <a
        href={href}
        className="mt-6 inline-flex w-full justify-center rounded-full bg-slate-950 px-5 py-4 font-bold text-white"
      >
        {cta}
      </a>
    </div>
  );
}

function Plan({
  name,
  price,
  items,
  badge,
  featured = false,
}: {
  name: string;
  price: string;
  items: string[];
  badge?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-6 shadow-sm ${
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
      <h3 className="text-2xl font-black">{name}</h3>
      <p className="mt-4 text-4xl font-black text-[#00A87D]">{price}</p>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-[#00A87D]">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-full justify-center rounded-full bg-[#0B1F3A] px-5 py-4 font-bold text-white"
      >
        Solicitar por WhatsApp
      </a>
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
      <h3 className="text-3xl font-black">{title}</h3>
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
