import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import AvisoNoAfiliacion from "../components/AvisoNoAfiliacion";
import LineaHonorarios from "../components/LineaHonorarios";
import PlanesSection from "./PlanesSection";
import WALink from "../components/WALink";
import GuideCards from "../components/GuideCards";

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20GoViaje,%20quiero%20asesor%C3%ADa%20para%20mi%20visa%20americana";

const CONSULTATION_URL = WA_URL;

const VISA_USA_PAGE_URL = "https://goviaje.uk/visa-usa";
const VISA_USA_OG_IMAGE = "/og-visa-usa.jpg";
const VISA_USA_TITLE = "Asesoría Visa Americana B1/B2 Lima, Perú";
const VISA_USA_DESCRIPTION =
  "Asesoría para tu primera visa americana B1/B2 o para volver a aplicar tras un rechazo. DS-160, documentos y entrevista en Lima. Evalúa tu caso gratis. 100% online.";

export const metadata: Metadata = {
  title: VISA_USA_TITLE,
  description: VISA_USA_DESCRIPTION,
  alternates: { canonical: VISA_USA_PAGE_URL },
  openGraph: {
    title: VISA_USA_TITLE,
    description: VISA_USA_DESCRIPTION,
    url: VISA_USA_PAGE_URL,
    type: "website",
    locale: "es_PE",
    siteName: "GoViaje",
    images: [
      {
        url: VISA_USA_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "GoViaje — Asesoría profesional para visa americana B1/B2 en Lima, Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: VISA_USA_TITLE,
    description: VISA_USA_DESCRIPTION,
    images: [VISA_USA_OG_IMAGE],
  },
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
    q: "¿Ayudan si me negaron la visa antes?",
    a: "Sí. Volver a aplicar después de un rechazo entra en esta asesoría de solicitud nueva. Revisamos qué cambió en tu perfil antes de armar el DS-160. La decisión sigue siendo del oficial consular.",
  },
  {
    q: "¿Esta página incluye renovación o adelanto de cita?",
    a: "No. Si tu visa venció y quieres renovarla, el camino es la asesoría de renovación. Si ya tienes una cita lejana y quieres una fecha más cercana, el camino es el adelanto de cita. Aquí preparamos la solicitud nueva.",
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
    "Asesoría profesional para la primera solicitud de visa americana de turismo B1/B2 y para volver a aplicar tras un rechazo: evaluación de perfil, formulario DS-160 y preparación de entrevista consular.",
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

        <div className="relative mx-auto max-w-6xl px-6 py-8 sm:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#00C896]/30 bg-[#00C896]/10 px-4 py-2 text-sm text-[#00C896]">
              Visa de Turismo B1/B2 • Estados Unidos
            </span>

            <h1 className="mt-4 text-[28px] font-bold leading-[1.15] tracking-tight sm:text-5xl">
              Prepara tu visa americana nueva sin improvisar el DS-160
            </h1>

            <p className="mt-3 text-[15px] leading-relaxed text-slate-300 sm:text-lg">
              Para tu primera solicitud B1/B2 o para volver a aplicar después de un rechazo.
              Revisamos tu perfil, ordenamos el formulario y te dejamos listo para la entrevista
              en Lima. 100% online. La decisión la toma solo el oficial consular.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <WALink
                href={CONSULTATION_URL}
                cta_position="top"
                service="visa-usa"
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#00C896] px-6 py-3 text-center text-[15px] font-bold text-slate-950 shadow-lg shadow-[#00C896]/20 sm:w-auto"
              >
                Evaluar mi solicitud nueva
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

      <section className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <ServiceCard
            title="Visa nueva B1/B2"
            price="Desde S/250"
            text="Llegas a la entrevista con el formulario ordenado y un checklist que evita errores de primera solicitud o de un rechazo anterior."
            href="#planes"
            cta="Ver planes de solicitud nueva"
            featured
          />
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-2xl font-black text-[#0B1F3A]">
              ¿Buscas renovar tu visa vencida o adelantar una cita que ya tienes programada?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Esos dos caminos tienen su propia asesoría. Aquí solo preparamos la solicitud nueva.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="/renovacion-visa-americana"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#00C896] px-5 py-3 text-center text-sm font-bold text-slate-950"
              >
                Renovar mi visa
              </a>
              <a
                href="/adelanto-cita-visa-americana"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-bold text-[#0B1F3A]"
              >
                Adelantar una cita que ya tengo
              </a>
            </div>
          </div>
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

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-black">Si tu caso no es una solicitud nueva</h2>
            <p className="mt-4 text-slate-600">
              Renovar una visa vencida o mover una cita que ya pagaste son servicios aparte. Así no mezclas el pago de una solicitud nueva con otro trámite.
            </p>
            <div className="mt-6 grid gap-3">
              <a href="/renovacion-visa-americana" className="rounded-xl bg-white p-3 text-sm font-medium text-[#008F6B] hover:underline">
                Renovación de visa americana
              </a>
              <a href="/adelanto-cita-visa-americana" className="rounded-xl bg-white p-3 text-sm font-medium text-[#008F6B] hover:underline">
                Adelanto de una cita que ya tienes
              </a>
            </div>
          </div>
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
}: {
  title: string;
  price: string;
  text: string;
  href: string;
  cta: string;
  featured?: boolean;
}) {
  return (
    <div className={`rounded-3xl p-6 shadow-xl ${featured ? "bg-[#00C896] text-slate-950" : "bg-white text-slate-900"}`}>
      {featured && (
        <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
          Solicitud nueva
        </span>
      )}
      <h2 className="mt-4 text-2xl font-black">{title}</h2>
      <p className="mt-3 text-3xl font-black">{price}</p>
      <LineaHonorarios />
      <p className="mt-4 opacity-80">{text}</p>
      <a
        href={href}
        className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 font-bold text-white"
      >
        {cta}
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
