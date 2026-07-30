import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";

export const metadata: Metadata = {
  title: "Visa Mexicana para Peruanos: Guía Completa 2026 | Goviaje",
  description:
    "Desde 2024 los peruanos necesitan visa para entrar a México por turismo. Requisitos, costo, excepciones y cómo tramitarla.",
  alternates: { canonical: "https://goviaje.uk/blog/visa-mexico-peruanos-requisitos" },
};

const SECTIONS = [
  {
    heading: "¿Por qué ahora se necesita visa para México?",
    blocks: [
      { type: "p" as const, text: "Desde 2024, el gobierno de México estableció que los ciudadanos peruanos necesitan visa de visitante para ingresar al país, incluso por turismo. Antes de ese cambio, los peruanos podían viajar a México sin visa; hoy ya no es así." },
      { type: "callout" as const, text: "Este es uno de los cambios de política migratoria más recientes de la región y genera bastante confusión — muchos viajeros aún creen que pueden entrar sin visa." },
    ],
  },
  {
    heading: "¿Hay excepciones?",
    blocks: [
      { type: "p" as const, text: "Sí. No necesitas tramitar la visa mexicana si cuentas con alguno de los siguientes documentos vigentes:" },
      { type: "list" as const, items: [
        "Visa vigente de Estados Unidos, Canadá, Reino Unido, Japón o el espacio Schengen.",
        "Tarjeta de residente permanente de alguno de esos países, o de Chile, Colombia o Perú (según el caso).",
      ] },
      { type: "callout" as const, text: "Si tienes alguno de estos documentos vigentes, puedes ingresar a México sin tramitar visa adicional. Conviene verificar tu caso puntual antes de asumirlo." },
    ],
  },
  {
    heading: "Requisitos para tramitar la visa",
    blocks: [
      { type: "list" as const, items: [
        "Pasaporte vigente.",
        "Comprobante de solvencia económica.",
        "Carta laboral o documento que sustente tu ocupación.",
        "Carta de motivos de viaje.",
        "Comprobantes de arraigo (propiedades, vínculos familiares, historial de viajes).",
        "Entrevista consular obligatoria en la Embajada de México en Lima.",
      ] },
    ],
  },
  {
    heading: "Costo y duración de estadía",
    blocks: [
      { type: "p" as const, text: "El costo de la visa mexicana ronda entre USD 52 y 56, pagado directamente a la Embajada de México en Lima. La visa aprobada permite una estadía de hasta 180 días por entrada." },
      { type: "callout" as const, text: "Este monto es la tasa oficial del consulado; es independiente del costo de una asesoría para preparar tu expediente." },
    ],
  },
];

const FAQS = [
  { q: "¿Los peruanos siempre necesitaron visa para México?", a: "No. El requisito de visa para peruanos que viajan a México por turismo es reciente, vigente desde 2024. Antes de ese cambio no se necesitaba." },
  { q: "¿Cuánto demora el trámite de la visa mexicana?", a: "Incluye una entrevista consular obligatoria; el tiempo total depende de la disponibilidad de citas en la Embajada de México en Lima, por lo que conviene iniciarlo con anticipación." },
  { q: "¿La visa mexicana garantiza mi ingreso al país?", a: "No. Al igual que con cualquier visa, la decisión final de admisión la toma el oficial de migración mexicano en el punto de entrada." },
  { q: "¿Qué pasa si tengo visa americana vigente?", a: "Si tu visa de Estados Unidos está vigente, puedes ingresar a México sin necesidad de tramitar la visa mexicana, según la excepción vigente." },
];

export default function VisaMexicoPeruanos() {
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
    headline: "Visa Mexicana para Peruanos: Guía Completa 2026",
    author: { "@type": "Organization", name: "Goviaje" },
    publisher: { "@type": "Organization", name: "Goviaje" },
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    about: "Visa de turista para México desde Perú",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa México"
        title="Visa Mexicana para Peruanos: Guía Completa 2026"
        dek="Desde 2024 los peruanos necesitan visa para entrar a México por turismo. Requisitos, costo y excepciones."
        updated="julio de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-mexico"
        relatedLabel="Ver planes desde S/180"
      />
    </>
  );
}
