import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";
import WALink from "../../components/WALink";

export const metadata: Metadata = {
  title: "Visa Canadá sin viajes previos: cómo aplicar por primera vez (2026)",
  description:
    "¿Se puede pedir la visa de Canadá sin haber viajado antes? Qué dice IRCC, qué pesa en tu solicitud y cómo reforzar tu perfil si es tu primera visa.",
  alternates: { canonical: "https://goviaje.uk/blog/visa-canada-sin-viajes-previos" },
  openGraph: {
    title: "Visa Canadá sin viajes previos: cómo aplicar por primera vez (2026)",
    description:
      "¿Se puede pedir la visa de Canadá sin haber viajado antes? Qué dice IRCC, qué pesa en tu solicitud y cómo reforzar tu perfil si es tu primera visa.",
    url: "https://goviaje.uk/blog/visa-canada-sin-viajes-previos",
    type: "article",
  },
};

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20GoViaje%2C%20nunca%20he%20viajado%20y%20quiero%20saber%20c%C3%B3mo%20preparar%20mi%20primera%20visa%20de%20Canad%C3%A1.";

const SECTIONS = [
  {
    heading: "¿Necesito haber viajado antes para pedir la visa de Canadá?",
    blocks: [
      {
        type: "p" as const,
        text: "No. Entre los requisitos que IRCC enumera para la visa de visitante no figura haber viajado antes. Lo que pide es tener un documento de viaje válido, estar en buen estado de salud, no tener antecedentes penales ni migratorios, convencer al oficial de que tienes vínculos que te harán regresar a tu país y de que saldrás de Canadá al terminar tu visita, y tener dinero suficiente para tu estadía.",
      },
      {
        type: "callout" as const,
        text: "El historial de viajes aparece en IRCC como un documento recomendado, no como un requisito. Puede ayudar, pero su ausencia no te descalifica de entrada. Cada solicitud se evalúa de forma individual, y la decisión final es siempre del oficial.",
      },
    ],
  },
  {
    heading: "Por qué se menciona el historial de viajes",
    blocks: [
      {
        type: "p" as const,
        text: "IRCC explica que haber viajado a Canadá o a otros países puede mostrar que ya conseguiste visas en el pasado. Como prueba, menciona copias de tus pasaportes o visas anteriores usados en los últimos 10 años para viajar fuera de tu país, sellos de entrada y salida, o permisos de estudio o trabajo que muestren el tiempo que pasaste fuera.",
      },
      {
        type: "p" as const,
        text: "Si es tu primera solicitud, simplemente no tendrás ese documento para adjuntar. Eso significa que el resto de tu expediente cumple un papel más importante a la hora de mostrar que tu viaje es genuino. Esta es una apreciación nuestra, no un criterio publicado por IRCC.",
      },
    ],
  },
  {
    heading: "Qué evalúa IRCC cuando no hay viajes previos",
    blocks: [
      {
        type: "p" as const,
        text: "Las condiciones que IRCC establece siguen siendo las mismas, tengas o no historial de viajes:",
      },
      {
        type: "list" as const,
        items: [
          "Vínculos con Perú: un empleo, una vivienda, bienes financieros o familia que den razones para regresar.",
          "Intención de salir de Canadá al terminar la visita: un viaje con fechas, plan y motivo coherentes.",
          "Dinero suficiente para tu estadía, que depende de cuánto tiempo te quedes y de dónde te alojes.",
        ],
      },
      {
        type: "p" as const,
        text: "Profundizamos los dos puntos más pesados en otras guías: cómo funcionan los vínculos en la guía de carta de invitación y arraigo, y cómo calcular y respaldar el dinero en la guía de cuánto dinero necesitas.",
      },
    ],
  },
  {
    heading: "Cómo reforzar tu solicitud si es tu primera visa",
    blocks: [
      {
        type: "list" as const,
        items: [
          "Un itinerario claro: IRCC recomienda documentos que muestren cuánto tiempo planeas quedarte y qué harás, como detalles de vuelo, pruebas de alojamiento o la inscripción a un evento.",
          "Un estado de cuenta bancario con tu nombre y dirección y al menos 6 meses de movimientos con saldos, que es lo que IRCC describe.",
          "Pruebas de tus vínculos con Perú, como constancia laboral, boletas, documentos de tu negocio, o familiares a tu cargo.",
          "Si visitas a alguien en Canadá, una carta de invitación y documentos que prueben tu relación, ya que IRCC indica que podrías necesitarlos.",
          "Coherencia total: que lo que declaras en el formulario coincida con tus documentos y con el propósito del viaje.",
        ],
      },
      {
        type: "callout" as const,
        text: "No compres pasajes antes de tener la visa aprobada. Para el itinerario puedes usar reservas o cotizaciones como referencia del plan, sin pagar un viaje que aún no está autorizado.",
      },
    ],
  },
  {
    heading: "Errores frecuentes en una primera solicitud",
    blocks: [
      {
        type: "list" as const,
        items: [
          "Un viaje sin plan, o con una estadía muy larga que no se corresponde con tu motivo ni con tu presupuesto.",
          "Documentos que no coinciden con lo declarado: ingresos, empleo o fechas distintas entre el formulario y los respaldos.",
          "Depósitos de último momento en la cuenta, sin relación con tu movimiento habitual.",
          "Omitir información, como rechazos previos de visas de otros países. Declarar todo es más seguro que ocultarlo, porque la omisión puede llevar a una inadmisibilidad por falsa declaración.",
          "Enviar el expediente incompleto o con documentos ilegibles.",
        ],
      },
    ],
  },
  {
    heading: "Si es tu primera vez con IRCC",
    blocks: [
      {
        type: "p" as const,
        text: "Hay dos vías para presentar la solicitud en línea. IRCC indica que el Portal en su versión nueva puede usarse si tienes 18 años o más, aplicas sin acompañantes, nunca has solicitado nada a IRCC y no usas un representante, incluidos familiares o amigos que apliquen por ti. Si no cumples esas condiciones, se usa el portal anterior.",
      },
      {
        type: "p" as const,
        text: "Las tasas oficiales son CAD 100 de procesamiento individual y CAD 85 de biometría individual, cuando corresponde darla. IRCC te indica en la solicitud si debes dar biometría. Revisamos estos costos y los tiempos en nuestra guía de costo y tiempo de espera.",
      },
      {
        type: "callout" as const,
        text: "GoViaje es una asesoría privada, no afiliada a IRCC ni al Gobierno de Canadá. No garantizamos aprobaciones ni tenemos influencia sobre las decisiones de los oficiales. Nuestra función es ayudarte a presentar una solicitud mejor preparada.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "¿Me pueden negar la visa de Canadá si nunca he viajado?",
    a: "No hay una regla que niegue la visa por no tener viajes previos, y IRCC no lo incluye entre sus requisitos. Sin embargo, la decisión depende del conjunto de tu expediente, y la visa puede ser negada por cualquier motivo que el oficial considere. Por eso conviene reforzar tus vínculos con Perú, tu solvencia y la coherencia del viaje.",
  },
  {
    q: "¿Qué documentos de viajes anteriores acepta IRCC?",
    a: "IRCC menciona copias de pasaportes o visas anteriores usados en los últimos 10 años para viajar fuera de tu país, sellos de entrada y salida, y permisos de estudio o trabajo que muestren el tiempo que pasaste fuera. También se aceptan visas vencidas o vigentes.",
  },
  {
    q: "¿Una carta de invitación reemplaza el historial de viajes?",
    a: "No. La carta de invitación es un documento de respaldo, y por sí sola no sustituye la evaluación de tus vínculos, tu solvencia y la coherencia del viaje. Si visitas a alguien en Canadá, IRCC indica que podrías necesitarla junto con pruebas de tu relación.",
  },
  {
    q: "¿Cuánto dinero debo tener si es mi primera visa?",
    a: "IRCC no fija un monto mínimo. Debes tener dinero suficiente para tu estadía, y el monto depende de cuánto tiempo te quedes y de dónde te alojes. Explicamos cómo estimarlo y qué estado de cuenta presentar en nuestra guía sobre cuánto dinero necesitas.",
  },
  {
    q: "¿Tengo que dar biometría si es mi primera vez?",
    a: "IRCC indica que la tasa individual de biometría es de CAD 85 y que, al aplicar, se te informa si debes darla. En ese caso recibirás una carta de instrucciones para reservar tu cita.",
  },
];

export default function VisaCanadaSinViajesPrevios() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://goviaje.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://goviaje.uk/blog" },
      { "@type": "ListItem", position: 3, name: "Visa Canadá sin viajes previos", item: "https://goviaje.uk/blog/visa-canada-sin-viajes-previos" },
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
    headline: "Visa Canadá sin viajes previos: cómo aplicar por primera vez (2026)",
    author: { "@type": "Organization", name: "GoViaje" },
    publisher: { "@type": "Organization", name: "GoViaje" },
    datePublished: "2026-10-25",
    dateModified: "2026-10-25",
    about: "Visa de turista a Canadá para quienes solicitan por primera vez y no tienen historial de viajes",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa Canadá"
        title="Visa Canadá sin viajes previos: cómo aplicar por primera vez (2026)"
        dek="No haber viajado antes no es un requisito que IRCC exija, pero cambia lo que debes reforzar. Qué dice IRCC y cómo preparar una primera solicitud."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-canada"
        relatedLabel="Ver asesoría Visa Canadá"
        ctaHeading="¿Es tu primera visa y quieres revisar tu caso?"
        ctaText="Evaluamos tu perfil, identificamos qué reforzar y te orientamos antes de que apliques. Sin compromiso y sin promesas de aprobación."
        service="visa-canada"
      >
        <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Fuentes oficiales</p>
          <p className="mt-1 text-xs text-slate-500">Verificadas el 25 de octubre de 2026. IRCC puede actualizar sus requisitos sin previo aviso.</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eligibility.html" target="_blank" rel="noopener noreferrer" className="text-sm text-[#008F6B] hover:underline">
                → Eligibility to apply for a visitor visa — canada.ca
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html" target="_blank" rel="noopener noreferrer" className="text-sm text-[#008F6B] hover:underline">
                → How to apply for a visitor visa — canada.ca
              </a>
            </li>
          </ul>
        </div>
        <nav className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Artículos relacionados</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/blog/cuanto-dinero-necesito-visa-canadiense" className="text-sm text-[#008F6B] hover:underline">
                → ¿Cuánto dinero necesito para la visa canadiense?
              </a>
            </li>
            <li>
              <a href="/blog/carta-invitacion-arraigo-visa-canada" className="text-sm text-[#008F6B] hover:underline">
                → Carta de invitación y arraigo: qué evalúa Canadá en tu visa
              </a>
            </li>
            <li>
              <a href="/blog/cuanto-cuesta-demora-visa-canada" className="text-sm text-[#008F6B] hover:underline">
                → Visa Canadá: costo y tiempo de espera (2026)
              </a>
            </li>
            <li>
              <a href="/blog/visa-canadiense-rechazada-que-hacer" className="text-sm text-[#008F6B] hover:underline">
                → Visa canadiense rechazada: qué hacer y cómo volver a aplicar
              </a>
            </li>
            <li>
              <a href="/visa-canada" className="text-sm text-[#008F6B] hover:underline">
                → Asesoría para tu visa de Canadá
              </a>
            </li>
          </ul>
        </nav>
        <WALink
          href={WA_URL}
          cta_position="middle"
          service="visa-canada"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1fb855]"
        >
          Consultar mi caso de primera visa
        </WALink>
      </ArticleLayout>
    </>
  );
}
