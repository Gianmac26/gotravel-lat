import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../../components/ArticleLayout";

export const metadata: Metadata = {
  title: "Tramitar la visa americana solo o con asesoría (2026)",
  description:
    "Comparativa honesta: qué puedes hacer tú mismo gratis, dónde se equivoca la gente y para qué perfiles conviene una asesoría visa americana en Lima.",
  alternates: { canonical: "https://goviaje.uk/blog/tramitar-visa-americana-sola-o-con-asesoria" },
  openGraph: {
    title: "Tramitar la visa americana solo o con asesoría (2026)",
    description:
      "Comparativa honesta: qué puedes hacer tú mismo gratis, dónde se equivoca la gente y para qué perfiles conviene una asesoría visa americana en Lima.",
    url: "https://goviaje.uk/blog/tramitar-visa-americana-sola-o-con-asesoria",
    type: "article",
  },
};

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20Goviaje%2C%20quiero%20evaluar%20si%20necesito%20asesor%C3%ADa%20para%20mi%20visa%20americana.";

const SECTIONS = [
  {
    heading: "La respuesta corta: depende de tu perfil",
    blocks: [
      {
        type: "p" as const,
        text: "Muchas personas tramitan su visa americana sin ayuda profesional y la obtienen sin problemas. No hay ninguna regla que obligue a contratar una asesoría, y para ciertos perfiles hacerlo sería gastar dinero innecesariamente. Pero para otros perfiles, intentarlo sin orientación aumenta el riesgo de cometer errores que cuestan más que la asesoría misma.",
      },
      {
        type: "p" as const,
        text: "Este artículo no es un argumento de venta. Es una comparativa honesta para que puedas decidir con información real cuál opción te conviene.",
      },
    ],
  },
  {
    heading: "Qué puedes hacer tú mismo, sin costo adicional",
    blocks: [
      {
        type: "p" as const,
        text: "El proceso de solicitud de visa americana B1/B2 es completamente gestionable por el propio solicitante. Toda la burocracia necesaria está disponible de forma gratuita en los portales oficiales:",
      },
      {
        type: "list" as const,
        items: [
          "Completar el DS-160 en línea (ceac.state.gov): es el formulario oficial de solicitud. Puedes completarlo en varios pasos, guardarlo y volver a editarlo antes de enviarlo. No necesitas pagar a nadie para llenarlo.",
          "Pagar la tarifa MRV ($185 USD) a través del portal ais.usvisa-info.com: el proceso de pago está disponible para cualquier solicitante con tarjeta.",
          "Agendar tu cita de entrevista: desde ais.usvisa-info.com, con tu comprobante de pago y el número de confirmación del DS-160.",
          "Prepararte para la entrevista: los temas comunes de entrevista son públicos (propósito del viaje, arraigo, situación económica). La Embajada de EE.UU. también publica guías generales en pe.usembassy.gov.",
          "Reunir los documentos de soporte: carta laboral, extractos bancarios, documentos de propiedad. No necesitas a nadie que los tramite por ti — los genera tú mismo o tu empleador.",
        ],
      },
    ],
  },
  {
    heading: "Los errores más comunes al tramitar solo",
    blocks: [
      {
        type: "p" as const,
        text: "El trámite es gratuito y manejable, pero los errores tienen un costo: la tarifa MRV no se reembolsa si te rechazan la visa. Estos son los puntos donde más falla la gente cuando tramita sin orientación:",
      },
      {
        type: "list" as const,
        items: [
          "Inconsistencias en el DS-160: declarar un empleo con ingresos distintos a los que muestran los estados de cuenta, fechas de viajes anteriores que no coinciden con los sellos del pasaporte, información de viajes previos incompleta. El oficial nota estas diferencias.",
          "Mala preparación para la entrevista: no saber cómo responder preguntas sobre el propósito del viaje, contradecirse entre lo que dice el formulario y lo que se dice en ventanilla, ponerse nervioso sin haber practicado. La entrevista dura pocos minutos — lo que dices importa.",
          "No entender el concepto de arraigo: presentar documentos sin entender qué valora el oficial. Un estado de cuenta por sí solo no sustituye una carta laboral sólida o un contrato vigente.",
          "Aplicar con un perfil que no está listo: solicitantes con rechazo previo, con historial laboral inestable o con viajes anteriores cuestionables que no fueron preparados correctamente.",
          "No corregir el DS-160 antes de la entrevista: errores de tipeo o información desactualizada que pudieron corregirse y no se corrigieron.",
        ],
      },
    ],
  },
  {
    heading: "Tabla: Solo vs. con asesoría visa americana",
    blocks: [
      {
        type: "p" as const,
        text: "La siguiente comparativa resume las diferencias principales según perfil y situación:",
      },
      {
        type: "list" as const,
        items: [
          "Costo — Solo: USD $185 (tarifa MRV). Con asesoría: USD $185 + costo de asesoría (varía según el plan y el tipo de solicitud).",
          "Preparación del DS-160 — Solo: tú lo haces, sin revisión externa. Con asesoría: revisión de consistencia con tus documentos antes de enviar.",
          "Preparación de entrevista — Solo: por tu cuenta, con guías públicas. Con asesoría: simulación de entrevista orientada a tu perfil específico.",
          "Revisión de riesgos — Solo: no la tienes. Con asesoría: el asesor identifica aspectos del perfil que pueden generar dudas antes de que llegues a ventanilla.",
          "Casos con rechazo previo — Solo: alto riesgo de repetir los mismos errores. Con asesoría: análisis de qué falló y cómo abordarlo en la nueva solicitud.",
          "Perfiles simples (primer viaje, empleo estable, buen arraigo) — Solo: completamente viable. Con asesoría: puede no ser necesaria.",
          "Perfiles complejos (rechazo previo, arraigo débil, empleo informal) — Solo: riesgo elevado. Con asesoría: mayor preparación para reducir errores evitables.",
        ],
      },
    ],
  },
  {
    heading: "Para quién NO hace falta una asesoría",
    blocks: [
      {
        type: "p" as const,
        text: "Seamos directos: hay perfiles donde contratar una asesoría es un gasto innecesario. Si cumples todas estas condiciones, probablemente puedes tramitar tu visa sin ayuda profesional y obtener un buen resultado:",
      },
      {
        type: "list" as const,
        items: [
          "Primera solicitud de visa con empleo formal estable, carta laboral clara y estados de cuenta que reflejan tus ingresos declarados.",
          "Sin rechazos de visa previos en ningún país.",
          "Propósito del viaje claro y coherente con tu perfil (turismo, visita familiar con documentación).",
          "Arraigo sólido: tendrías que regresar porque tienes trabajo, propiedades o familia a cargo en Perú.",
          "Disposición a dedicar tiempo a leer el formulario DS-160 con cuidado y prepararte para las preguntas de entrevista.",
        ],
      },
      {
        type: "callout" as const,
        text: "Si tu perfil entra en esta categoría, no necesitas pagar una asesoría. El trámite es manejable y la información oficial está disponible sin costo.",
      },
    ],
  },
  {
    heading: "Para quién sí conviene una asesoría visa americana en Lima",
    blocks: [
      {
        type: "p" as const,
        text: "Una asesoría agrega valor real cuando el perfil tiene elementos que aumentan el riesgo de error o de rechazo, y donde una preparación más rigurosa puede marcar la diferencia:",
      },
      {
        type: "list" as const,
        items: [
          "Tienes un rechazo de visa previo, ya sea americano u otro: el historial de rechazos es un factor que el oficial evalúa. Volver a aplicar sin analizar qué generó el rechazo anterior es arriesgado.",
          "Tu arraigo es débil o difícil de documentar: trabajas de forma independiente, cambiaste de empleo recientemente, no tienes propiedades o tu situación familiar no es fácil de acreditar.",
          "Es la primera solicitud y tienes dudas sobre el DS-160 o sobre qué esperar en la entrevista.",
          "Tu viaje tiene características que pueden generar preguntas: vas a visitar a alguien que vive en EE.UU., tienes familiares con residencia allá o tu propósito de viaje no es completamente turístico.",
          "Ya llenaste el DS-160 antes pero no lo recuerdas bien y necesitas que coincida con lo que declararás en ventanilla.",
        ],
      },
    ],
  },
  {
    heading: "Qué hace y qué no hace una asesoría profesional",
    blocks: [
      {
        type: "p" as const,
        text: "Una asesoría profesional de visa americana no tiene acceso al sistema consular, no puede influir sobre la decisión del oficial y no puede garantizar la aprobación. Lo que sí puede hacer:",
      },
      {
        type: "list" as const,
        items: [
          "Revisar tu DS-160 para detectar inconsistencias antes de que llegues a la entrevista.",
          "Evaluar tu perfil y señalarte los aspectos que pueden generar dudas en ventanilla.",
          "Prepararte para la entrevista con base en tu situación real, no con respuestas genéricas.",
          "Orientarte sobre qué documentos presentar y cómo estructurarlos para que cuenten la historia correcta.",
          "En casos con rechazo previo, analizar qué falló y qué cambió desde entonces.",
        ],
      },
      {
        type: "callout" as const,
        text: "Goviaje es una asesoría privada, no afiliada a la Embajada de EE.UU. ni al Departamento de Estado. No garantizamos aprobaciones ni tenemos influencia sobre las decisiones consulares. Nuestra función es ayudarte a llegar mejor preparado.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "¿Es obligatorio contratar una asesoría para tramitar la visa americana?",
    a: "No. El proceso de visa americana es completamente gestionable por el propio solicitante. No existe ningún requisito legal ni consular que obligue a contratar una asesoría. Muchas personas tramitan su visa sin ayuda profesional y la obtienen sin problemas.",
  },
  {
    q: "¿Qué pasa si cometo un error en el DS-160?",
    a: "Depende del error. Si lo detectas antes de la entrevista, puedes corregirlo. Si lo detectas después de enviarlo pero antes de la cita, puedes generar un nuevo DS-160 y actualizar el número de confirmación en ais.usvisa-info.com con al menos 3 días hábiles de anticipación. Los errores de tipeo menores no suelen ser determinantes, pero las inconsistencias con tus documentos o viajes anteriores sí pueden ser un problema.",
  },
  {
    q: "¿Cuánto cuesta contratar una asesoría visa americana?",
    a: "Varía según el tipo de solicitud y el nivel de servicio. En Goviaje los planes empiezan desde S/250. El costo de la asesoría se suma a la tarifa MRV de USD $185 que paga cualquier solicitante. La evaluación inicial de tu caso es gratuita.",
  },
  {
    q: "¿Puedo tramitar la visa solo si tuve un rechazo previo?",
    a: "Técnicamente sí, nadie te impide volver a aplicar sin asesoría. Pero es uno de los casos donde el riesgo de repetir el error es más alto. El sistema consular registra tus solicitudes anteriores y el oficial verá que ya hubo una negación. Si no tienes claridad sobre qué generó el rechazo, es difícil corregirlo solo.",
  },
  {
    q: "¿La asesoría garantiza que me aprobarán la visa?",
    a: "No. Ninguna asesoría puede garantizar la aprobación. La decisión es exclusiva del oficial consular. Lo que una asesoría puede hacer es reducir los errores evitables y ayudarte a llegar mejor preparado. El resultado sigue dependiendo de tu perfil real y de la evaluación del oficial.",
  },
];

export default function TramitarVisaAmericanaSolaOConAsesoriaPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://goviaje.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://goviaje.uk/blog" },
      { "@type": "ListItem", position: 3, name: "Tramitar la visa americana solo o con asesoría", item: "https://goviaje.uk/blog/tramitar-visa-americana-sola-o-con-asesoria" },
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
    headline: "Tramitar la visa americana solo o con asesoría en Lima, Perú (2026)",
    author: { "@type": "Organization", name: "Goviaje" },
    publisher: { "@type": "Organization", name: "Goviaje" },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    about: "Asesoría visa americana Lima Perú comparativa tramitar solo",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa USA"
        title="Tramitar la visa americana solo o con asesoría en Lima, Perú (2026)"
        dek="Comparativa honesta: qué puedes hacer gratis, dónde se equivoca la gente y para qué perfiles conviene pagar una asesoría. Para muchos perfiles simples, no hace falta."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-usa"
        relatedLabel="Ver asesoría visa americana en Lima"
        ctaHeading="¿No sabes si necesitas asesoría para tu caso?"
        ctaText="Evaluamos tu perfil de forma gratuita y te decimos con honestidad si conviene o no contratar una asesoría. Si no la necesitas, te lo decimos directamente."
      >
        <nav className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Artículos relacionados</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/blog/me-negaron-la-visa-americana" className="text-sm text-[#008F6B] hover:underline">
                → Me negaron la visa americana: qué hacer y cómo volver a aplicar
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
          Escribir a WhatsApp — Evaluar si necesito asesoría
        </a>
      </ArticleLayout>
    </>
  );
}
