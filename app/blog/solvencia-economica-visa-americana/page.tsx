import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";
import WALink from "../../components/WALink";

export const metadata: Metadata = {
  title: "Solvencia económica para la visa americana (2026)",
  description:
    "No hay un monto mínimo oficial para la visa americana. Te explicamos qué evalúa realmente el oficial, qué documentos ayudan y los errores más comunes con los estados de cuenta.",
  alternates: { canonical: "https://goviaje.uk/blog/solvencia-economica-visa-americana" },
  openGraph: {
    title: "Solvencia económica para la visa americana (2026)",
    description:
      "No hay un monto mínimo oficial para la visa americana. Te explicamos qué evalúa realmente el oficial, qué documentos ayudan y los errores más comunes con los estados de cuenta.",
    url: "https://goviaje.uk/blog/solvencia-economica-visa-americana",
    type: "article",
  },
};

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20GoViaje%2C%20quiero%20saber%20si%20mi%20perfil%20econ%C3%B3mico%20es%20suficiente%20para%20la%20visa%20americana.";

const SECTIONS = [
  {
    heading: "No hay un monto mínimo oficial: por qué el mito persiste",
    blocks: [
      {
        type: "p" as const,
        text: "Uno de los mitos más repetidos sobre la visa americana es que debes tener 'mínimo $5,000 en el banco', '$10,000', o cualquier otra cifra redonda. Ese número no existe en ningún documento oficial del Departamento de Estado ni de la Embajada de EE.UU. en Lima.",
      },
      {
        type: "p" as const,
        text: "El mito se perpetúa porque la gente comparte lo que le 'funcionó' a alguien conocido, sin entender qué evaluó realmente el oficial. La realidad es que dos personas con exactamente el mismo saldo bancario pueden obtener resultados distintos — porque la solvencia es solo uno de varios factores.",
      },
      {
        type: "callout" as const,
        text: "La ley migratoria de EE.UU. (sección 214(b) de la INA) establece que todo solicitante se presume inmigrante hasta que demuestre lo contrario. El oficial evalúa vínculos con tu país de origen y capacidad de pagar el viaje. No hay un número mínimo en la ley.",
      },
    ],
  },
  {
    heading: "Qué evalúa realmente el oficial: la sección 214(b)",
    blocks: [
      {
        type: "p" as const,
        text: "La sección 214(b) de la Ley de Inmigración y Nacionalidad (INA) es la base legal de la mayoría de rechazos de visa de turismo. Bajo esta sección, el oficial debe estar convencido de que el solicitante tiene motivos suficientes para regresar a su país.",
      },
      {
        type: "p" as const,
        text: "Para la solvencia específicamente, el oficial evalúa dos preguntas concretas: ¿tienes capacidad de pagar el viaje sin quedarte a trabajar ilegalmente? ¿Tu situación económica en Perú es un incentivo para regresar? No se trata solo de cuánto dinero tienes, sino de la coherencia entre tu situación económica y el viaje que estás proponiendo.",
      },
      {
        type: "list" as const,
        items: [
          "Coherencia entre ingresos y costo del viaje: si ganas S/3,000 al mes y tu viaje cuesta $2,000, el oficial quiere ver que puedes cubrirlo con tus recursos o con apoyo familiar documentado.",
          "Vínculos económicos en Perú: empleo estable, negocio propio, propiedades. Estos son incentivos reales para regresar.",
          "Historial de movimiento de fondos: una cuenta con movimiento regular es más convincente que una cuenta con mucho dinero parado.",
          "Coherencia con lo declarado en el DS-160: si en el formulario declaras ingresos de S/2,000 mensuales pero presentas $15,000 en el banco sin justificación, eso genera preguntas.",
        ],
      },
    ],
  },
  {
    heading: "Qué documentos suelen respaldar la solvencia",
    blocks: [
      {
        type: "p" as const,
        text: "Los documentos de soporte económico no son obligatorios ni garantizan nada. El oficial puede aprobar tu visa sin pedirte un solo papel, o puede pedir documentación adicional aunque tengas todo preparado. Lo que sí hacen estos documentos es respaldar lo que declaraste en el DS-160:",
      },
      {
        type: "list" as const,
        items: [
          "Estados de cuenta bancarios (últimos 3 a 6 meses): muestran el movimiento real de tu cuenta. Deben coincidir con los ingresos que declaraste en el formulario.",
          "Boletas de pago o constancia de haberes: para empleados en relación de dependencia, confirman el sueldo y la estabilidad laboral.",
          "Carta del empleador: útil para confirmar puesto, sueldo y que tienes licencia o permiso para viajar. Debe tener membrete, firma y fecha.",
          "Declaración de Renta o recibos por honorarios (si eres independiente): para quienes trabajan de forma independiente, demuestran ingresos regulares declarados ante SUNAT.",
          "Documentos de actividad empresarial (RUC activo, Ficha RUC): si tienes negocio propio, muestran que tienes algo que perder si no regresas.",
          "Documentos de propiedad (inmuebles, vehículos): no son imprescindibles, pero refuerzan el arraigo económico.",
        ],
      },
      {
        type: "callout" as const,
        text: "En muchas entrevistas el oficial no pide estos documentos. La conversación de ventanilla es corta — a veces 2 o 3 minutos. Lo que más pesa es lo que declaraste en el DS-160 y la coherencia de tus respuestas, no el folder de papeles que llevas.",
      },
    ],
  },
  {
    heading: "Errores comunes con los estados de cuenta",
    blocks: [
      {
        type: "p" as const,
        text: "La mayoría de errores económicos que generan rechazos no son por falta de dinero, sino por inconsistencias que el oficial puede detectar fácilmente:",
      },
      {
        type: "list" as const,
        items: [
          "Depósitos de último momento: recibir S/20,000 en la cuenta 2 semanas antes de la entrevista cuando el movimiento habitual era de S/1,500 al mes. El oficial sabe que ese dinero no es tuyo. Es uno de los errores más comunes y más fáciles de detectar.",
          "Fondos prestados no declarados: solicitar que un familiar o amigo te preste dinero para que 'aparezca' en tu cuenta. Si ese dinero no coincide con tu historial, genera más dudas que tranquilidad.",
          "Inconsistencia con el DS-160: declarar en el formulario que ganas S/4,000 mensuales y presentar estados de cuenta que muestran depósitos irregulares de S/800. La discrepancia habla sola.",
          "Presentar solo el saldo sin el movimiento: un extracto que muestra solo el saldo actual no dice nada sobre la fuente de esos fondos. El movimiento de los últimos meses es más informativo.",
          "No justificar el origen de fondos cuando son inusuales: si tienes un ingreso extraordinario legítimo (venta de un bien, bonificación, herencia), puedes documentarlo. Que el oficial lo encuentre sin contexto es peor.",
        ],
      },
    ],
  },
  {
    heading: "¿Cuánto dinero es 'suficiente'?",
    blocks: [
      {
        type: "p" as const,
        text: "No hay una respuesta exacta, porque depende del perfil de cada solicitante y del viaje propuesto. Pero sí hay una lógica clara: el oficial quiere ver que puedes pagar el viaje que declaras sin necesidad de trabajar en EE.UU.",
      },
      {
        type: "p" as const,
        text: "Un viaje de 10 días con alojamiento y pasajes razonables puede costar entre $1,500 y $3,000. Si tus ingresos regulares muestran capacidad de cubrir eso en un periodo de tiempo razonable, o si tienes ahorros coherentes con tu historial de ingresos, eso suele ser suficiente para el análisis.",
      },
      {
        type: "p" as const,
        text: "Lo que sí puede ser un problema: ingresos muy bajos para el viaje propuesto sin una explicación coherente (patrocinador familiar, por ejemplo). O ahorros que no se corresponden con los ingresos declarados.",
      },
    ],
  },
  {
    heading: "Solvencia y arraigo: van juntos",
    blocks: [
      {
        type: "p" as const,
        text: "La solvencia económica por sí sola no garantiza la visa. Un solicitante con $20,000 en el banco pero sin empleo, sin familia a cargo y sin propiedad puede ser rechazado, porque el oficial no ve un incentivo claro para regresar. Por el contrario, alguien con ingresos moderados pero estables, empleo formal y familia dependiente en Perú puede tener una solicitud más convincente.",
      },
      {
        type: "p" as const,
        text: "La evaluación del oficial considera el perfil completo, no un solo factor. Por eso es importante que lo que declaras en el DS-160 sea coherente con tus documentos y con lo que dices en la entrevista.",
      },
      {
        type: "callout" as const,
        text: "GoViaje es una asesoría privada, no afiliada a la Embajada de EE.UU. ni al Departamento de Estado. No garantizamos aprobaciones ni tenemos influencia sobre las decisiones consulares. Nuestra función es ayudarte a llegar mejor preparado.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "¿Hay un monto mínimo en el banco para la visa americana?",
    a: "No. El Departamento de Estado no establece ningún monto mínimo. Lo que evalúa el oficial es la coherencia entre tus ingresos, tus ahorros y el viaje propuesto. Cifras como '$5,000' o '$10,000' que circulan en internet no tienen respaldo oficial.",
  },
  {
    q: "¿Me pueden negar la visa si tengo poco dinero en el banco?",
    a: "Depende del contexto. Si tus ingresos son bajos en relación al costo del viaje que propones y no hay una explicación coherente (patrocinio familiar documentado, por ejemplo), puede generar dudas. Pero muchos solicitantes con ingresos moderados obtienen su visa porque presentan un perfil consistente con arraigo sólido en Perú.",
  },
  {
    q: "¿Sirve que un familiar me preste dinero para que aparezca en mi cuenta?",
    a: "No es una estrategia recomendable. Si el movimiento de tu cuenta no es consistente con ese depósito, el oficial puede detectarlo. Fondos que no corresponden a tu historial de ingresos generan más sospechas que tranquilidad.",
  },
  {
    q: "¿Tengo que llevar los documentos a la entrevista?",
    a: "No hay una lista obligatoria impuesta por la Embajada para visas de turismo. Puedes llevarlos como soporte si el oficial los pide, pero en muchas entrevistas no se solicitan. Lo que sí debes tener claro son las cifras: cuánto ganas, cuánto tienes ahorrado, cuánto cuesta el viaje.",
  },
  {
    q: "¿Qué pasa si el oficial me pide documentos que no llevé?",
    a: "En algunos casos el oficial puede emitir un 221(g) — una solicitud de documentación adicional — que pausa el proceso. Si te lo entregan, tendrás un plazo para presentar los documentos que se piden. No es una negación definitiva, pero sí un proceso más largo.",
  },
];

export default function SolvenciaEconomicaVisaAmericana() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://goviaje.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://goviaje.uk/blog" },
      { "@type": "ListItem", position: 3, name: "Solvencia económica para la visa americana", item: "https://goviaje.uk/blog/solvencia-economica-visa-americana" },
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
    headline: "Solvencia económica para la visa americana: qué evalúa realmente el oficial (2026)",
    author: { "@type": "Organization", name: "GoViaje" },
    publisher: { "@type": "Organization", name: "GoViaje" },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    about: "Solvencia económica visa americana requisitos banco Peru",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa USA"
        title="Solvencia económica para la visa americana: qué evalúa realmente el oficial (2026)"
        dek="No hay un monto mínimo oficial. El $5,000 que circula en internet no existe en ningún documento del Departamento de Estado. Te explicamos qué evalúa el oficial y qué errores evitar."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-usa"
        relatedLabel="Ver planes de asesoría visa americana"
        ctaHeading="¿No sabes si tu perfil económico es suficiente?"
        ctaText="Evaluamos tu caso de forma gratuita: ingresos, ahorros, arraigo y coherencia con el viaje propuesto. Sin compromisos."
      >
        <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Fuentes oficiales</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html" target="_blank" rel="noopener noreferrer" className="text-sm text-[#008F6B] hover:underline">
                → Visitor Visa — travel.state.gov
              </a>
            </li>
            <li>
              <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-denials.html" target="_blank" rel="noopener noreferrer" className="text-sm text-[#008F6B] hover:underline">
                → Explicación oficial del rechazo bajo 214(b) — travel.state.gov
              </a>
            </li>
          </ul>
        </div>
        <nav className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Artículos relacionados</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/blog/requisitos-visa-americana-turismo" className="text-sm text-[#008F6B] hover:underline">
                → Requisitos completos para la visa americana de turismo
              </a>
            </li>
            <li>
              <a href="/blog/razones-rechazo-visa-americana" className="text-sm text-[#008F6B] hover:underline">
                → Razones de rechazo de visa americana: qué evalúa el oficial
              </a>
            </li>
          </ul>
        </nav>
        <WALink
          href={WA_URL}
          cta_position="middle"
          service="visa-usa"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1fb855]"
        >
          Consultar si mi perfil económico es suficiente
        </WALink>
      </ArticleLayout>
    </>
  );
}
