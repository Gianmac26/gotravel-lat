import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";

export const metadata: Metadata = {
  title: "Por qué Niegan la Visa Americana: 5 Razones Comunes (2026) | Goviaje",
  description:
    "Las razones más frecuentes de rechazo de la visa americana B1/B2 y cómo preparar mejor tu solicitud para evitarlas.",
  alternates: { canonical: "https://goviaje.uk/blog/razones-rechazo-visa-americana" },
};

const SECTIONS = [
  {
    heading: "1. Falta de arraigo — el motivo más común (Sección 214(b))",
    blocks: [
      { type: "p" as const, text: "Es la causa de rechazo más frecuente. El oficial consular no queda convencido de que tienes vínculos suficientemente fuertes con tu país — trabajo, familia, propiedades, estudios — como para asegurar que regresarás al terminar tu viaje." },
      { type: "p" as const, text: "No se trata de tener mucho dinero, sino de mostrar una situación estable y coherente con el motivo del viaje que declaras." },
    ],
  },
  {
    heading: "2. Inconsistencias en el formulario DS-160",
    blocks: [
      { type: "list" as const, items: [
        "Declarar una ocupación distinta a la que mencionas en la entrevista.",
        "Omitir familiares que ya viven en Estados Unidos.",
        "Errores en nombres, fechas o número de pasaporte que generan alertas automáticas en el sistema.",
      ] },
    ],
  },
  {
    heading: "3. Documentación falsa o inexacta",
    blocks: [
      { type: "p" as const, text: "Presentar documentos falsos o información inexacta no solo genera un rechazo inmediato: puede derivar en una prohibición permanente de ingreso a Estados Unidos. Nunca vale la pena el riesgo." },
    ],
  },
  {
    heading: "4. Antecedentes penales o migratorios",
    blocks: [
      { type: "p" as const, text: "Delitos graves, infracciones relacionadas con drogas, o un historial migratorio previo problemático (overstay en una visita anterior, deportaciones) son causal de rechazo bajo la sección 212(a) de la ley de inmigración." },
    ],
  },
  {
    heading: "5. Errores de forma que parecen menores",
    blocks: [
      { type: "list" as const, items: [
        "Pasaporte con menos de 6 meses de vigencia.",
        "Foto que no cumple las especificaciones oficiales (tamaño, fondo, expresión).",
        "Falta de comprobante de pago de la tasa consular al momento de la cita.",
      ] },
      { type: "callout" as const, text: "Ninguno de estos errores es grave por sí solo, pero sumados dan la impresión de una solicitud poco preparada — y eso también juega en contra." },
    ],
  },
];

const FAQS = [
  { q: "¿Qué significa que me nieguen la visa por el artículo 214(b)?", a: "Significa que el oficial no encontró evidencia suficiente de que planeas regresar a tu país después del viaje. No es un rechazo definitivo: puedes volver a aplicar con mejor documentación." },
  { q: "¿Un rechazo previo afecta futuras solicitudes?", a: "Queda registrado, pero no te descalifica de por vida. Lo importante es que la nueva solicitud muestre un cambio real en tu situación o una mejor preparación del expediente, no una repetición idéntica." },
  { q: "¿Puedo apelar una decisión del consulado?", a: "No existe un proceso formal de apelación para el artículo 214(b). La vía es volver a aplicar, pagando la tasa nuevamente, con un expediente más sólido." },
  { q: "¿Goviaje puede garantizar que no me la nieguen?", a: "No. Ninguna empresa puede garantizar la aprobación de una visa; la decisión es exclusiva del oficial consular. Lo que sí podemos hacer es ayudarte a preparar tu expediente y tu entrevista con el mayor rigor posible." },
];

export default function RazonesRechazoVisa() {
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
    headline: "Por qué Niegan la Visa Americana: 5 Razones Comunes",
    author: { "@type": "Organization", name: "Goviaje" },
    publisher: { "@type": "Organization", name: "Goviaje" },
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    about: "Rechazo de visa de turismo B1/B2 para Estados Unidos",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa USA"
        title="Por qué Niegan la Visa Americana: 5 Razones Comunes"
        dek="Las causas más frecuentes de rechazo de la visa B1/B2 y cómo evitarlas al preparar tu solicitud."
        updated="julio de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-usa"
        relatedLabel="Ver planes de asesoría Visa USA"
        ctaHeading="¿Ya te negaron la visa antes?"
        ctaText="Tenemos un plan específico para casos con rechazo previo. Revisamos qué falló y preparamos tu próxima solicitud con más rigor."
      />
    </>
  );
}
