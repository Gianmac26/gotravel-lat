import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";

export const metadata: Metadata = {
  title: "Carta de Invitación y Arraigo: Qué Evalúa Canadá en tu Visa de Turista | Goviaje",
  description:
    "Cómo funciona la carta de invitación y qué es el arraigo para la visa de turista TRV a Canadá desde Perú, Colombia, México y Ecuador.",
  alternates: { canonical: "https://goviaje.uk/blog/carta-invitacion-arraigo-visa-canada" },
};

const SECTIONS = [
  {
    heading: "¿Necesito una carta de invitación para viajar a Canadá?",
    blocks: [
      { type: "p" as const, text: "Solo es necesaria si tu motivo de viaje es visitar a un familiar o amigo residente en Canadá. Si viajas por turismo general (sin anfitrión), no se requiere carta de invitación, pero sí debes sustentar tu itinerario y alojamiento de otra forma (reservas, plan de viaje)." },
    ],
  },
  {
    heading: "Qué debe incluir la carta de invitación",
    blocks: [
      { type: "list" as const, items: [
        "Datos completos de quien invita: nombre, dirección, estatus migratorio en Canadá.",
        "Datos completos del invitado (tú): nombre, relación con el anfitrión.",
        "Fechas exactas y motivo de la visita.",
        "Compromiso claro sobre quién cubre los gastos durante la estadía.",
        "Copia de un documento de identidad del anfitrión (pasaporte, tarjeta de residencia o ciudadanía canadiense).",
      ] },
      { type: "callout" as const, text: "No existe un formato único obligatorio, pero mientras más completa y verificable sea la información, mejor respalda tu solicitud." },
    ],
  },
  {
    heading: "Qué es el arraigo y por qué es la pieza central",
    blocks: [
      { type: "p" as const, text: "El arraigo es la evidencia de que tienes vínculos suficientemente fuertes con tu país de origen como para garantizar tu regreso una vez termine tu visita — es lo que más pesa en la evaluación del IRCC." },
      { type: "list" as const, items: [
        "Situación laboral estable (contrato, carta laboral, negocio propio).",
        "Propiedades o bienes registrados a tu nombre.",
        "Vínculos familiares en tu país (hijos, cónyuge, dependientes).",
        "Historial de viajes previos sin incidentes migratorios.",
      ] },
    ],
  },
  {
    heading: "Solvencia económica",
    blocks: [
      { type: "p" as const, text: "Debes demostrar capacidad financiera para cubrir alojamiento, transporte y gastos diarios durante tu estadía. Como referencia general se recomienda contar con el equivalente a CAD 1,000, aunque el monto real depende de la duración y naturaleza de tu viaje." },
    ],
  },
  {
    heading: "Duración y condiciones de la visa de turista",
    blocks: [
      { type: "p" as const, text: "La visa de turista (TRV) permite estadías de hasta 6 meses por entrada. No habilita a trabajar en Canadá bajo ninguna circunstancia — es exclusivamente para fines de turismo, visita familiar o negocios sin relación laboral." },
    ],
  },
];

const FAQS = [
  { q: "¿La carta de invitación garantiza que me den la visa?", a: "No. Es un documento de respaldo, pero el IRCC evalúa el conjunto: arraigo, solvencia, historial migratorio y coherencia del viaje." },
  { q: "¿Quién puede firmar la carta de invitación?", a: "Cualquier residente permanente o ciudadano canadiense, o alguien con estatus migratorio válido en Canadá, siempre que pueda respaldar su identidad con documentos." },
  { q: "¿Qué pasa si no tengo a nadie que me invite en Canadá?", a: "No es un impedimento. Puedes aplicar como turista independiente, sustentando tu viaje con reservas de alojamiento, itinerario y tu propia solvencia económica." },
  { q: "¿Cuánto cuesta la tasa oficial de la visa de turista a Canadá?", a: "La tasa gubernamental (IRCC) para la visa de visitante es de CAD 100 aproximadamente; este monto es independiente del costo de una asesoría profesional." },
];

export default function CartaInvitacionArraigoCanada() {
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
    headline: "Carta de Invitación y Arraigo: Qué Evalúa Canadá en tu Visa de Turista",
    author: { "@type": "Organization", name: "Goviaje" },
    publisher: { "@type": "Organization", name: "Goviaje" },
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    about: "Visa de turista TRV para Canadá",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa Canadá"
        title="Carta de Invitación y Arraigo: Qué Evalúa Canadá en tu Visa de Turista"
        dek="Cómo funciona la carta de invitación, qué es el arraigo y qué solvencia económica pide el IRCC."
        updated="julio de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-canada"
        relatedLabel="Ver asesoría Visa Canadá"
      />
    </>
  );
}
