import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";

export const metadata: Metadata = {
  title: "Requisitos para la Visa Americana de Turismo 2026 (Perú, Colombia, México, Ecuador) | Goviaje",
  description:
    "Guía actualizada de requisitos, costos y tiempos para la visa de turismo B1/B2 a Estados Unidos desde Perú, Colombia, México y Ecuador.",
  alternates: { canonical: "https://goviaje.uk/blog/requisitos-visa-americana-turismo" },
};

const SECTIONS = [
  {
    heading: "¿Qué es la visa B1/B2 y quién la necesita?",
    blocks: [
      { type: "p" as const, text: "La visa B1/B2 es la visa de turismo y negocios de Estados Unidos. Los ciudadanos de Perú, Colombia, México y Ecuador la necesitan obligatoriamente para ingresar a EE.UU.: no existe programa de exención de visa (ESTA) para ninguno de estos pasaportes." },
      { type: "p" as const, text: "La visa no garantiza el ingreso al país; ese permiso final lo otorga el oficial de migración en el aeropuerto. Lo que la visa acredita es que el consulado autorizó tu solicitud para viajar con fines turísticos o de negocios." },
    ],
  },
  {
    heading: "Requisitos básicos",
    blocks: [
      { type: "list" as const, items: [
        "Pasaporte vigente, idealmente con al menos 6 meses de validez desde la fecha de tu viaje.",
        "Formulario DS-160 completado en línea, con datos personales y motivo de viaje.",
        "Fotografía tipo visa reciente, con fondo blanco, según las especificaciones oficiales.",
        "Pago de la tasa consular (MRV).",
        "Cita para la entrevista en el consulado o embajada de EE.UU. de tu país.",
      ] },
    ],
  },
  {
    heading: "Costos vigentes en 2026",
    blocks: [
      { type: "list" as const, items: [
        "Tasa consular MRV: USD 185, se paga antes de la entrevista y no es reembolsable si la visa es negada.",
        "Visa Integrity Fee: USD 250 adicionales, vigente desde octubre de 2025, se paga después de que la visa es aprobada.",
      ] },
      { type: "callout" as const, text: "Ninguna de estas tasas oficiales las cobra Goviaje: se pagan directamente al gobierno de EE.UU. Nuestra asesoría es un costo aparte, por la preparación de tu expediente." },
    ],
  },
  {
    heading: "Tiempos de espera",
    blocks: [
      { type: "p" as const, text: "Desde que completas el DS-160 hasta la fecha de tu entrevista pueden pasar entre 2 semanas y 3 meses, dependiendo de la demanda del consulado en tu país y la temporada del año." },
      { type: "p" as const, text: "Si la entrevista es aprobada, la visa suele estar lista para recoger entre 3 y 5 días hábiles después. Recomendación general: inicia el proceso con 3 a 4 meses de anticipación, especialmente si planeas viajar entre julio y enero, cuando la demanda de citas sube." },
    ],
  },
  {
    heading: "Qué evalúa realmente el oficial consular",
    blocks: [
      { type: "p" as const, text: "Más allá de los papeles, el oficial busca una cosa: evidencia de que regresarás a tu país al terminar tu viaje. Eso se traduce en arraigo — trabajo estable, propiedades, familia, historial de viajes previos sin incidentes — y en que tu perfil y tu relato sean coherentes entre sí." },
    ],
  },
];

const FAQS = [
  { q: "¿Cuánto tiempo dura la visa americana de turismo?", a: "La vigencia típica para peruanos, colombianos, mexicanos y ecuatorianos suele ser de varios años con múltiples entradas, pero el tiempo exacto lo determina el consulado caso por caso y puede variar." },
  { q: "¿Si me niegan la visa una vez, puedo volver a aplicar?", a: "Sí, puedes volver a aplicar. Pagas la tasa nuevamente y es recomendable reforzar la documentación que generó la duda del oficial la primera vez, no repetir la solicitud igual." },
  { q: "¿Necesito comprar el pasaje aéreo antes de la entrevista?", a: "No es obligatorio ni recomendable. Comprar el pasaje antes de tener la visa aprobada es un riesgo económico innecesario." },
  { q: "¿La visa garantiza que voy a poder entrar a Estados Unidos?", a: "No. La visa te permite presentarte en el punto de entrada; la decisión final de admisión la toma el oficial de CBP en el aeropuerto o frontera." },
];

export default function RequisitosVisaAmericana() {
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
    headline: "Requisitos para la Visa Americana de Turismo 2026",
    author: { "@type": "Organization", name: "Goviaje" },
    publisher: { "@type": "Organization", name: "Goviaje" },
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    about: "Visa de turismo B1/B2 para Estados Unidos",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa USA"
        title="Requisitos para la Visa Americana de Turismo (2026)"
        dek="Guía actualizada de documentos, costos y tiempos para la visa B1/B2 desde Perú, Colombia, México y Ecuador."
        updated="julio de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-usa"
        relatedLabel="Ver planes de asesoría Visa USA"
      />
    </>
  );
}
