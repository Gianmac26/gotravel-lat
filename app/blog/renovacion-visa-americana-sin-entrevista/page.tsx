import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../../components/ArticleLayout";
import WALink from "../../components/WALink";

export const metadata: Metadata = {
  title: "Renovación visa americana sin entrevista en Perú",
  description:
    "Requisitos vigentes para renovar tu visa americana sin entrevista desde Perú. La ventana cambió en 2025: ahora son 12 meses, no 48. Verifica si calificas.",
  alternates: { canonical: "https://goviaje.uk/blog/renovacion-visa-americana-sin-entrevista" },
  openGraph: {
    title: "Renovación de visa americana sin entrevista en Perú: requisitos vigentes (2026)",
    description:
      "Requisitos actualizados: la ventana de exención de entrevista cambió de 48 a 12 meses desde septiembre de 2025. Verifica si calificas antes de iniciar el proceso.",
    url: "https://goviaje.uk/blog/renovacion-visa-americana-sin-entrevista",
    type: "article",
  },
};

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20Goviaje%2C%20quiero%20renovar%20mi%20visa%20americana%20y%20saber%20si%20califico%20para%20la%20exenci%C3%B3n%20de%20entrevista.";

const SECTIONS = [
  {
    heading: "¿Qué es la renovación de visa americana sin entrevista?",
    blocks: [
      {
        type: "p" as const,
        text: "La renovación de visa americana sin entrevista —conocida oficialmente como Interview Waiver o exención de entrevista— es un proceso que permite a ciertos solicitantes renovar su visa B1/B2 sin presentarse físicamente ante un oficial consular. En lugar de asistir a una entrevista, el expediente se evalúa de forma documental y el resultado se comunica por correo.",
      },
      {
        type: "p" as const,
        text: "No todos los solicitantes peruanos califican para esta exención. La Embajada de EE.UU. en Lima aplica criterios específicos, y el incumplimiento de cualquiera de ellos obliga a seguir el proceso regular con entrevista presencial. Verificar tu elegibilidad antes de iniciar el trámite ahorra tiempo y evita confusiones.",
      },
    ],
  },
  {
    heading: "Requisitos vigentes en 2026 para calificar a la exención",
    blocks: [
      {
        type: "p" as const,
        text: "Para solicitar la renovación de visa americana sin entrevista desde Perú, debes cumplir todos los siguientes criterios al momento de presentar la solicitud:",
      },
      {
        type: "list" as const,
        items: [
          "Tu visa B1/B2 anterior es de validez completa (fue emitida con su vigencia estándar, no truncada por el consulado) y está vigente o venció hace no más de 12 meses. Este es el criterio más importante y el que más personas no cumplen desde el cambio de septiembre de 2025 (ver sección siguiente).",
          "La visa que vas a renovar es del mismo tipo que la anterior (B1/B2 renovando como B1/B2).",
          "Tenías al menos 18 años de edad cuando te emitieron la visa anterior. Si sacaste tu visa anterior siendo menor de edad, sí te toca entrevista, sin importar cuándo venció.",
          "La visa anterior fue emitida por la Embajada de EE.UU. en Lima, Perú.",
          "La visa no fue reportada como perdida, robada o revocada.",
          "No tienes antecedentes policiales ni penales en Estados Unidos.",
          "Eres ciudadano peruano o residente legal en Perú.",
          "Tu pasaporte tiene vigencia de al menos 6 meses más allá de tu fecha de entrada planificada a EE.UU.",
          "No tienes ninguna negación de visa americana registrada sin superar.",
        ],
      },
      {
        type: "callout" as const,
        text: "Cumplir todos los requisitos no garantiza la exención. La Embajada puede citar a entrevista a cualquier solicitante en cualquier momento, sin dar explicaciones. Que el sistema te permita aplicar por Interview Waiver no significa que el consulado esté obligado a concederlo.",
      },
    ],
  },
  {
    heading: "El cambio clave de 2025 que debes conocer",
    blocks: [
      {
        type: "p" as const,
        text: "Hasta el 1 de septiembre de 2025, los solicitantes peruanos podían renovar su visa americana sin entrevista si la visa anterior había vencido hace no más de 48 meses (4 años). El Departamento de Estado de EE.UU. anunció el cambio el 25 de julio de 2025 y entró en vigor el 2 de septiembre de 2025: la ventana se redujo a 12 meses. Si tu visa venció hace más de un año, ya no calificas para la exención de entrevista y debes seguir el proceso regular con cita consular.",
      },
      {
        type: "callout" as const,
        text: "Actualizado: octubre 2026. Fuente oficial: U.S. Department of State, anuncio del 25 de julio de 2025 (travel.state.gov). Las reglas del Interview Waiver pueden cambiar sin previo aviso. Verifica siempre las condiciones actuales en ais.usvisa-info.com (portal oficial de citas para Perú) antes de iniciar tu proceso. Goviaje es una asesoría privada, no afiliada a ninguna embajada ni gobierno.",
      },
    ],
  },
  {
    heading: "Cómo funciona el proceso de renovación sin entrevista",
    blocks: [
      {
        type: "p" as const,
        text: "El proceso de renovación con Interview Waiver sigue los mismos pasos que una solicitud regular, con la diferencia de que no hay cita de entrevista presencial. En cambio, el expediente se evalúa de forma remota:",
      },
      {
        type: "list" as const,
        items: [
          "Completar el DS-160 (formulario de solicitud de visa) en línea en ceac.state.gov. Incluye foto que cumpla los requisitos del Departamento de Estado.",
          "Pagar la tasa consular MRV (USD 185, no reembolsable) a través del portal oficial de pagos para Perú.",
          "Ingresar al portal ais.usvisa-info.com y seleccionar la opción de renovación por Interview Waiver, si el sistema confirma que calificas.",
          "Enviar el expediente completo: pasaporte vigente, pasaporte anterior con la visa a renovar, DS-160 y comprobante de pago.",
          "Recibir el resultado por correo. El tiempo de procesamiento varía entre 2 y 8 semanas aproximadamente.",
        ],
      },
    ],
  },
  {
    heading: "Cuánto cuesta la renovación (verificado: octubre 2026)",
    blocks: [
      {
        type: "list" as const,
        items: [
          "Tasa consular MRV: USD 185. Se paga antes de iniciar el proceso y no es reembolsable si la visa es denegada.",
          "Visa Integrity Fee: USD 250 adicionales. Se paga solo si la visa es aprobada, en una segunda etapa del proceso.",
          "Total si la visa es aprobada: USD 435 aproximadamente, más los costos de mensajería del pasaporte si aplica.",
        ],
      },
      {
        type: "callout" as const,
        text: "Estos montos son los vigentes a la fecha de actualización de este artículo. Las tasas del gobierno de EE.UU. pueden cambiar. Verifica siempre el monto actual en travel.state.gov o ais.usvisa-info.com antes de realizar el pago.",
      },
    ],
  },
  {
    heading: "Si tu visa venció hace más de 12 meses, ¿qué puedes hacer?",
    blocks: [
      {
        type: "p" as const,
        text: "Si no calificas para el Interview Waiver porque tu visa venció hace más de 12 meses, necesitas seguir el proceso regular de renovación con entrevista presencial. Esto no es una desventaja: millones de personas renuevan su visa americana con entrevista cada año y, si el perfil está bien preparado, la entrevista no representa un obstáculo mayor.",
      },
      {
        type: "list" as const,
        items: [
          "Completa el DS-160 y paga la tasa MRV como en cualquier solicitud.",
          "Agenda una cita de entrevista en la Embajada de EE.UU. en Lima a través de ais.usvisa-info.com.",
          "Prepara tu documentación de arraigo: cartas laborales actualizadas, estados de cuenta recientes, propiedades o vínculos familiares en Perú.",
          "Si la cita disponible está muy lejos, evalúa si aplica el servicio de adelanto de cita (sujeto a disponibilidad real en el sistema consular).",
        ],
      },
    ],
  },
  {
    heading: "Por qué te pueden citar a entrevista aunque califiques",
    blocks: [
      {
        type: "p" as const,
        text: "La exención de entrevista no es un derecho automático. El consulado puede requerir una entrevista presencial en cualquier momento, incluso si cumples todos los criterios. Algunos de los factores que pueden derivar en una cita obligatoria son: historial de viajes inusuales, información inconsistente en el DS-160, actividad migratoria que genere dudas, o simplemente una revisión aleatoria del expediente.",
      },
      {
        type: "p" as const,
        text: "Si el sistema te asigna una entrevista, no es una señal de que tu solicitud va a ser rechazada. Muchos solicitantes que pasan por entrevista en una renovación obtienen su visa sin problemas. Lo importante es estar preparado para responder con coherencia sobre tu situación actual y tu propósito de viaje.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "¿La exención de entrevista garantiza que me aprueben la renovación?",
    a: "No. La exención de entrevista solo significa que no tienes que presentarte físicamente. La decisión de aprobar o denegar la visa sigue siendo del oficial consular, que evalúa tu expediente de forma remota. Un expediente débil puede ser rechazado igual, con o sin entrevista.",
  },
  {
    q: "¿Puedo renovar mi visa si tuve una negación anterior?",
    a: "Depende de si esa negación fue superada. Si el consulado la marcó como 'overcame' (superada en una solicitud posterior aprobada), puedes aplicar. Si la negación más reciente no fue superada, no calificas para el Interview Waiver y el proceso con entrevista puede ser más exigente. Evalúa tu caso antes de aplicar.",
  },
  {
    q: "¿Califico si mi visa venció hace más de 12 meses?",
    a: "No. Si tu visa venció hace más de 12 meses, no calificas para el Interview Waiver según las reglas vigentes desde el 2 de septiembre de 2025. Debes seguir el proceso regular con entrevista presencial en la Embajada de EE.UU. en Lima. Esto no impide la renovación: solo cambia el proceso.",
  },
  {
    q: "¿Puedo renovar en un consulado diferente al de Lima si vivo en Perú?",
    a: "En general, los peruanos deben renovar en la Embajada de EE.UU. en Lima, ya que aplican en su país de residencia. Renovar en otro país es posible en casos excepcionales, pero puede generar complicaciones adicionales. Verifica las condiciones directamente en ais.usvisa-info.com.",
  },
  {
    q: "¿Cuánto tiempo antes del vencimiento debo iniciar la renovación?",
    a: "No hay una regla fija, pero se recomienda iniciar el proceso al menos 3 meses antes de la fecha en que planeas viajar, no de la fecha en que vence la visa. Los tiempos de procesamiento pueden variar y en temporada alta pueden extenderse. Si tu visa ya venció, igualmente puedes aplicar siempre que no hayan pasado más de 12 meses desde el vencimiento.",
  },
];

export default function RenovacionVisaAmericanaSinEntrevista() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://goviaje.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://goviaje.uk/blog" },
      { "@type": "ListItem", position: 3, name: "Renovación visa americana sin entrevista en Perú", item: "https://goviaje.uk/blog/renovacion-visa-americana-sin-entrevista" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Renovación de visa americana sin entrevista en Perú: requisitos vigentes (2026)",
    author: { "@type": "Organization", name: "Goviaje" },
    publisher: { "@type": "Organization", name: "Goviaje" },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    about: "Renovación visa americana B1/B2 sin entrevista Interview Waiver Perú",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa USA"
        title="Renovación de visa americana sin entrevista en Perú: requisitos vigentes (2026)"
        dek="La ventana de exención de entrevista cambió en 2025: ahora son 12 meses, no 48. Aquí están los criterios vigentes, el proceso paso a paso y los costos reales."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-usa"
        relatedLabel="Ver servicio de renovación de visa"
        ctaHeading="¿Quieres saber si calificas para renovar sin entrevista?"
        ctaText="Evaluamos tu caso de forma gratuita: revisamos si cumples los criterios del Interview Waiver y te orientamos sobre los pasos a seguir según tu situación."
      >
        <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-sm">
          <p className="font-semibold text-[#0B1F3A]">Fuente oficial</p>
          <p className="mt-1 text-slate-600">U.S. Department of State — anuncio del 25 de julio de 2025:</p>
          <a
            href="https://travel.state.gov/content/travel/en/News/visas-news/interview-waiver-update-july-25-2025.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block break-all text-[#008F6B] hover:underline"
          >
            travel.state.gov — Interview Waiver Update July 25 2025
          </a>
          <p className="mt-2 text-slate-500">Para Perú, verifica también: ais.usvisa-info.com</p>
        </div>
        <nav className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Artículos relacionados</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/blog/cuanto-cuesta-demora-visa-americana" className="text-sm text-[#008F6B] hover:underline">
                → ¿Cuánto cuesta y cuánto demora la visa americana?
              </Link>
            </li>
            <li>
              <Link href="/blog/preguntas-entrevista-visa-americana" className="text-sm text-[#008F6B] hover:underline">
                → Preguntas frecuentes en la entrevista de visa americana
              </Link>
            </li>
          </ul>
        </nav>
        <WALink
          href={WA_URL}
          cta_position="middle"
          service="visa-usa"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1fb855]"
        >
          Escribir a WhatsApp — Evaluar mi renovación
        </WALink>
      </ArticleLayout>
    </>
  );
}
