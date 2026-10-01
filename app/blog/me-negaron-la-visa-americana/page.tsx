import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../../components/ArticleLayout";

export const metadata: Metadata = {
  title: "Me negaron la visa americana: qué hacer (2026) | Goviaje",
  description:
    "Si te negaron la visa americana, no es el fin. Qué significa el rechazo bajo el artículo 214(b), cuándo puedes volver a aplicar y cómo preparar mejor tu caso.",
  alternates: { canonical: "https://goviaje.uk/blog/me-negaron-la-visa-americana" },
  openGraph: {
    title: "Me negaron la visa americana: qué hacer y cómo volver a aplicar (2026)",
    description:
      "Si te negaron la visa americana, no es el fin. Aprende qué significa el rechazo, cuándo volver a aplicar y cómo mejorar tu caso.",
    url: "https://goviaje.uk/blog/me-negaron-la-visa-americana",
    type: "article",
  },
};

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20Goviaje%2C%20me%20negaron%20la%20visa%20americana%20y%20quiero%20evaluar%20mi%20caso%20para%20volver%20a%20aplicar.";

const SECTIONS = [
  {
    heading: "¿Qué significa que te nieguen la visa americana?",
    blocks: [
      {
        type: "p" as const,
        text: "Una negación de visa americana no es una prohibición permanente ni un castigo. Es la decisión de un oficial consular que, en ese momento y con la información que tenía, consideró que tu caso no reunía los requisitos suficientes para otorgarte la visa. Puedes volver a aplicar cuando las circunstancias que generaron la duda hayan cambiado o estén mejor sustentadas.",
      },
      {
        type: "p" as const,
        text: "Lo primero que debes hacer después de un rechazo es entender por qué ocurrió. La mayoría de las negaciones se explican en el papel que te entrega el oficial en ventanilla. Ese documento cita el artículo de la ley bajo el cual se denegó tu solicitud. Leerlo con calma es el punto de partida para cualquier segunda solicitud.",
      },
    ],
  },
  {
    heading: "El artículo 214(b): la razón más común de rechazo",
    blocks: [
      {
        type: "p" as const,
        text: "El 214(b) de la Ley de Inmigración de EE.UU. es el artículo más citado en rechazos de visa de turismo. Dice, en términos simples, que el oficial no encontró evidencia suficiente de que tienes vínculos sólidos con tu país de origen que te obliguen a regresar al terminar tu viaje. Esos vínculos —también llamados arraigo— incluyen empleo estable, negocio propio, propiedades, familia a cargo, o cualquier compromiso concreto que justifique tu regreso.",
      },
      {
        type: "p" as const,
        text: "Recibir un 214(b) no significa que el oficial pensó que eres una mala persona o que quieres quedarte ilegalmente. Significa que, con lo que presentaste ese día, no pudo descartar esa posibilidad. La pregunta correcta después de un 214(b) no es \"¿cuándo puedo volver a aplicar?\" sino \"¿qué cambió en mi perfil desde la última vez?\".",
      },
    ],
  },
  {
    heading: "¿Cuándo puedes volver a solicitar la visa?",
    blocks: [
      {
        type: "p" as const,
        text: "No hay un tiempo mínimo de espera obligatorio después de una negación de visa americana bajo el artículo 214(b). Puedes volver a aplicar cuando quieras, pero hacerlo sin que nada haya cambiado en tu perfil casi siempre produce el mismo resultado. El tiempo que esperes debe usarse en fortalecer tu caso, no simplemente en \"dejar pasar\".",
      },
      {
        type: "list" as const,
        items: [
          "Si el rechazo fue por arraigo insuficiente: espera hasta tener documentación nueva que lo demuestre — carta laboral más reciente, extractos bancarios de varios meses, contrato de arrendamiento o título de propiedad.",
          "Si el rechazo fue por inconsistencias en tu DS-160 o en la entrevista: corrígelas antes de volver a aplicar, no repitas la misma solicitud.",
          "Si el rechazo fue por un viaje planificado que ya no realizarás: cambia el motivo del viaje y documenta el nuevo propósito de forma coherente.",
          "Si tuviste una negación por artículo 212(a) (inadmisibilidad por causa específica como antecedentes penales o ingreso ilegal previo): el proceso es más complejo y puede requerir una exención (waiver). Consulta un especialista.",
          "Si te negaron varias veces bajo 214(b): considera esperar al menos 12 meses y enfocarte en construir historial de viajes a otros países y en mejorar el sustento económico documentado.",
        ],
      },
    ],
  },
  {
    heading: "Qué debes cambiar antes de volver a aplicar",
    blocks: [
      {
        type: "p" as const,
        text: "El error más frecuente después de un rechazo es volver a aplicar presentando exactamente los mismos documentos con una fecha diferente. El sistema consular registra tus solicitudes anteriores. El oficial que te atienda en la segunda entrevista verá que ya hubo una negación y va a evaluar si algo cambió. Si la respuesta es no, el resultado probablemente será el mismo.",
      },
      {
        type: "list" as const,
        items: [
          "Actualiza y refuerza la documentación de arraigo: carta laboral con cargo, sueldo y tiempo de servicio; estado de cuenta de los últimos 3 a 6 meses; constancia de propiedades o contratos activos.",
          "Revisa tu DS-160: compara lo que declaraste la primera vez con lo que vas a declarar ahora. Las inconsistencias entre solicitudes generan desconfianza.",
          "Prepara una respuesta honesta para la pregunta sobre el rechazo anterior: el oficial te preguntará. No lo niegues, no lo dramatices. Explica brevemente qué cambió.",
          "Si tienes historial de viajes a otros países desde el primer rechazo, documéntalo: visas de otros países y sellos de entrada son señales positivas.",
          "No compres pasajes aéreos ni reserves hospedaje antes de tener la visa aprobada.",
        ],
      },
    ],
  },
  {
    heading: "Los errores más frecuentes en una segunda solicitud",
    blocks: [
      {
        type: "list" as const,
        items: [
          "Repetir la misma solicitud sin cambios: el 214(b) es difícil de revertir si el perfil es idéntico al que ya fue rechazado.",
          "Exagerar o inventar ingresos, empleos o propiedades: el oficial puede verificar y el intento de misrepresentation puede derivar en una prohibición más severa.",
          "No mencionar el rechazo anterior: la pregunta \"¿Alguna vez le han negado una visa?\" en el DS-160 es obligatoria. Responderla con falsedad es una causal de inadmisibilidad.",
          "Ir a la entrevista sin saber qué generó el rechazo anterior: si no entiendes por qué te dijeron no, es difícil corregirlo.",
          "Aplicar demasiado pronto: volver a la semana siguiente del rechazo, sin ningún cambio en el perfil, rara vez produce un resultado diferente.",
        ],
      },
      {
        type: "callout" as const,
        text: "Goviaje es una asesoría privada, no afiliada a ninguna embajada ni gobierno. No tenemos influencia sobre las decisiones consulares ni garantizamos la aprobación de visas. Nuestra función es ayudarte a presentar el mejor expediente posible según tu situación real.",
      },
    ],
  },
  {
    heading: "Si te negaron la visa varias veces",
    blocks: [
      {
        type: "p" as const,
        text: "Dos o más rechazos bajo el artículo 214(b) no son el fin, pero sí son una señal de que el perfil necesita un trabajo más profundo antes de volver a intentarlo. Cada negación queda registrada en el sistema y el oficial de la siguiente entrevista puede verlas. Esto no hace imposible la aprobación, pero eleva la exigencia probatoria.",
      },
      {
        type: "p" as const,
        text: "En estos casos, una evaluación profesional previa es especialmente valiosa: no para garantizar el resultado, sino para identificar qué está pesando negativamente en tu perfil y qué documentación puede contrarrestarlo. Volver a aplicar sin ese análisis es asumir el riesgo de un tercer rechazo.",
      },
    ],
  },
  {
    heading: "¿Vale la pena asesorarse antes de volver a aplicar?",
    blocks: [
      {
        type: "p" as const,
        text: "Una asesoría no garantiza aprobación. Lo que sí hace es reducir los errores evitables: un DS-160 inconsistente, una respuesta mal formulada en la entrevista, documentación que no sustenta lo que declaras. Para quienes vienen de un rechazo, ese análisis previo mejora las condiciones de la nueva solicitud — aunque el resultado final siempre depende del oficial consular.",
      },
      {
        type: "p" as const,
        text: "En Goviaje evaluamos tu caso antes de recomendar que vuelvas a aplicar. Si encontramos que el perfil aún no está listo, te lo decimos con honestidad. La tasa consular no es reembolsable (USD 185 desde 2026) y no tiene sentido gastarla en una solicitud que no está lista.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "¿Cuánto tiempo debo esperar después de que me negaron la visa?",
    a: "No hay un plazo mínimo obligatorio. Puedes volver a aplicar cuando quieras, pero hacerlo sin que tu perfil haya cambiado produce casi siempre el mismo resultado. Lo más importante no es cuánto tiempo esperas, sino qué fortaleció tu expediente en ese tiempo.",
  },
  {
    q: "¿El rechazo de la visa americana me afecta en futuros trámites de visa en otros países?",
    a: "Depende del país. Algunos consulados (como el canadiense) preguntan por rechazos previos en otros países. Ocultarlo cuando te preguntan directamente puede ser más perjudicial que la negación misma. Infórmate sobre las reglas del país donde vas a solicitar antes de aplicar.",
  },
  {
    q: "¿Tengo que declarar la negación anterior en el DS-160?",
    a: "Sí, obligatoriamente. El DS-160 pregunta si alguna vez te han negado una visa americana. Responder 'No' cuando la respuesta correcta es 'Sí' es una declaración falsa que puede resultar en inadmisibilidad permanente por misrepresentation, algo mucho más difícil de revertir que un 214(b).",
  },
  {
    q: "¿Puedo tramitar la visa yo mismo después de una negación o necesito asesoría?",
    a: "Puedes tramitarla tú mismo. No es obligatorio contratar una asesoría. Sin embargo, después de un rechazo el nivel de exigencia del expediente es mayor, y los errores que se pueden cometer sin orientación son más costosos. Una asesoría agrega más valor cuando hay un antecedente de negación.",
  },
  {
    q: "¿Mi rechazo de visa significa que nunca podré entrar a Estados Unidos?",
    a: "No. Un rechazo bajo el artículo 214(b) no es una prohibición de entrada permanente. Puedes volver a aplicar cuando tu perfil haya mejorado. Solo los rechazos bajo ciertos artículos (como el 212(a)) implican inadmisibilidad que puede requerir una exención especial.",
  },
];

export default function MeNegaronLaVisaAmericana() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://goviaje.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://goviaje.uk/blog" },
      { "@type": "ListItem", position: 3, name: "Me negaron la visa americana: qué hacer", item: "https://goviaje.uk/blog/me-negaron-la-visa-americana" },
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
    headline: "Me negaron la visa americana: qué hacer y cómo volver a aplicar (2026)",
    author: { "@type": "Organization", name: "Goviaje" },
    publisher: { "@type": "Organization", name: "Goviaje" },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    about: "Rechazo de visa americana B1/B2 y segunda solicitud",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa USA"
        title="Me negaron la visa americana: qué hacer y cómo volver a aplicar (2026)"
        dek="Un rechazo de visa no es el fin. Te explicamos qué significa, cuándo puedes volver a aplicar y qué tiene que cambiar en tu expediente para que el resultado sea diferente."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-usa"
        relatedLabel="Evaluar mi caso con un asesor"
        ctaHeading="¿Te negaron la visa y quieres saber si puedes volver a aplicar?"
        ctaText="Evaluamos tu caso antes de recomendarte volver a intentarlo. Si el perfil aún no está listo, te lo decimos con honestidad para no gastar la tasa consular en vano."
      >
        <nav className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Artículos relacionados</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/blog/razones-rechazo-visa-americana" className="text-sm text-[#008F6B] hover:underline">
                → Por qué niegan la visa americana: 5 razones comunes
              </Link>
            </li>
            <li>
              <Link href="/blog/preguntas-entrevista-visa-americana" className="text-sm text-[#008F6B] hover:underline">
                → Preguntas frecuentes en la entrevista de visa americana
              </Link>
            </li>
          </ul>
        </nav>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1fb855]"
        >
          Escribir a WhatsApp — Evaluar mi caso ahora
        </a>
      </ArticleLayout>
    </>
  );
}
