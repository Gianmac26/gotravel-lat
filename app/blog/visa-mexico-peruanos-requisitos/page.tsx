import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";

export const metadata: Metadata = {
  title: "¿Peruanos necesitan visa para México? Requisitos",
  description:
    "Sí, desde el 6 de mayo de 2024 según la SRE/INM. Exonerados con visa vigente de EE.UU., Canadá, Schengen, UK o Japón. Requisitos y cita consular en Lima.",
  alternates: { canonical: "https://goviaje.uk/blog/visa-mexico-peruanos-requisitos" },
  openGraph: {
    title: "¿Peruanos necesitan visa para México? Requisitos",
    description:
      "Sí, desde el 6 de mayo de 2024 según la SRE/INM. Exonerados con visa vigente de EE.UU., Canadá, Schengen, UK o Japón. Requisitos y cita consular en Lima.",
    url: "https://goviaje.uk/blog/visa-mexico-peruanos-requisitos",
    type: "article",
  },
};

const SECTIONS = [
  {
    heading: "¿Por qué ahora se necesita visa para México?",
    blocks: [
      { type: "p" as const, text: "Desde el 6 de mayo de 2024, la Secretaría de Relaciones Exteriores (SRE) y el Instituto Nacional de Migración (INM) de México establecieron que los ciudadanos peruanos necesitan visa de visitante para ingresar al país, incluso por turismo. Antes de ese cambio, los peruanos podían viajar a México sin visa; hoy ya no es así." },
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
  { q: "¿Los peruanos necesitan visa para México en 2026?", a: "Sí. Desde el 6 de mayo de 2024 los peruanos necesitan visa para viajar a México por turismo o negocios, salvo que tengan una visa vigente de Estados Unidos, Canadá, Reino Unido, Japón o el espacio Schengen, o residencia en esos países, según el INM. Verificado el 25 de octubre de 2026." },
  { q: "¿Cuáles son los requisitos para viajar a México desde Perú en 2026?", a: "Pasaporte vigente, comprobante de solvencia económica, carta laboral, carta de motivos de viaje, comprobantes de arraigo y cita para la entrevista consular en la Embajada de México en Lima. Si tienes una de las visas o residencias de excepción, no necesitas tramitar la visa mexicana." },
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
    headline: "¿Peruanos necesitan visa para México? Requisitos",
    author: { "@type": "Organization", name: "GoViaje" },
    publisher: { "@type": "Organization", name: "GoViaje" },
    datePublished: "2026-07-30",
    dateModified: "2026-10-25",
    about: "Visa de turista para México desde Perú",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa México"
        title="¿Peruanos necesitan visa para México? Requisitos"
        dek="Desde el 6 de mayo de 2024 según la SRE/INM. Si tienes visa vigente de EE.UU., Canadá, Schengen, UK o Japón, estás exonerado. Requisitos y cita consular en Lima."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-mexico"
        relatedLabel="Ver planes desde S/180"
      />
    </>
  );
}
