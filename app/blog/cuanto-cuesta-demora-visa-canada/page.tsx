import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta y cuánto demora la visa de Canadá? (2026) | Goviaje",
  description:
    "Costos reales de la visa canadiense de turismo (TRV) para peruanos, colombianos, mexicanos y ecuatorianos: tasa IRCC, biométricos, tiempos de procesamiento y qué esperar.",
  alternates: { canonical: "https://goviaje.uk/blog/cuanto-cuesta-demora-visa-canada" },
};

const SECTIONS = [
  {
    heading: "¿Qué tipo de visa necesitas para entrar a Canadá?",
    blocks: [
      {
        type: "p" as const,
        text: "Los ciudadanos de Perú, Colombia, México y Ecuador necesitan una Visa de Visitante (Temporary Resident Visa, TRV) para ingresar a Canadá con fines turísticos. Esta visa no te da derecho a trabajar ni estudiar — solo a visitar el país por un periodo determinado.",
      },
      {
        type: "p" as const,
        text: "La TRV puede ser de entrada única (para un solo viaje) o de entradas múltiples (permite entrar y salir varias veces mientras la visa esté vigente). IRCC —la autoridad migratoria canadiense— decide cuál otorgar según tu perfil.",
      },
    ],
  },
  {
    heading: "Costos oficiales en 2026",
    blocks: [
      {
        type: "list" as const,
        items: [
          "Tasa de solicitud IRCC: CAD 100 (aproximadamente USD 74 o S/285, según el tipo de cambio del día).",
          "Biométricos: CAD 85 por persona si es la primera vez que los provees o si vencieron. Si viajaste a Canadá recientemente y ya tienes biométricos vigentes, no pagas de nuevo.",
          "Total estimado: CAD 185 por persona adulta en la mayoría de los casos.",
        ],
      },
      {
        type: "callout" as const,
        text: "Los biométricos son obligatorios para peruanos, colombianos y ecuatorianos. Para ciudadanos mexicanos también aplican. Se toman huellas y foto en un Centro de Solicitudes de Visa (CSV) o punto de recolección biométrica en tu ciudad.",
      },
    ],
  },
  {
    heading: "¿Dónde se pagan estas tasas?",
    blocks: [
      {
        type: "p" as const,
        text: "El pago de la tasa IRCC se realiza en línea directamente en el portal oficial de Inmigración, Refugiados y Ciudadanía Canadá (IRCC), al momento de crear tu cuenta y enviar la solicitud. Se puede pagar con tarjeta de crédito o débito internacional.",
      },
      {
        type: "p" as const,
        text: "Los biométricos se pagan como parte de la solicitud en línea y se programan en el punto de recolección de tu país. En Lima, por ejemplo, el Centro de Solicitudes de Visa está operado por VFS Global.",
      },
    ],
  },
  {
    heading: "¿Cuánto tiempo tarda el procesamiento?",
    blocks: [
      {
        type: "p" as const,
        text: "El tiempo de procesamiento varía según la demanda, la temporada y la complejidad de cada caso. Como referencia general para 2026:",
      },
      {
        type: "list" as const,
        items: [
          "Procesamiento en línea (sin biométricos pendientes): entre 2 y 8 semanas.",
          "Si debes entregar biométricos primero: el reloj del procesamiento empieza a correr después de la cita de biométricos, no desde que envías la solicitud.",
          "Temporada alta (verano canadiense, diciembre-enero): los tiempos pueden extenderse hasta 10-12 semanas.",
          "Recomendación general: iniciar el proceso con al menos 3 meses de anticipación a la fecha de viaje deseada.",
        ],
      },
      {
        type: "callout" as const,
        text: "IRCC publica los tiempos de procesamiento actualizados en su sitio oficial. Esos tiempos son estimados, no garantizados: algunos casos tardan menos, otros más. Nunca compres pasajes aéreos antes de tener la visa aprobada.",
      },
    ],
  },
  {
    heading: "¿Hay entrevista para la visa de Canadá?",
    blocks: [
      {
        type: "p" as const,
        text: "A diferencia de la visa americana, la visa canadiense TRV generalmente no requiere entrevista presencial. La solicitud se evalúa de forma documental: un oficial de IRCC revisa tu expediente en línea y toma la decisión sin que debas presentarte ante un cónsul.",
      },
      {
        type: "p" as const,
        text: "Sin embargo, IRCC puede solicitar una entrevista en casos puntuales: si necesita aclarar información, si el expediente está incompleto o si tu perfil genera dudas. Esta citación llegaría por escrito a tu cuenta de IRCC.",
      },
    ],
  },
  {
    heading: "¿Qué se evalúa para aprobar la visa?",
    blocks: [
      {
        type: "p" as const,
        text: "El oficial de IRCC evalúa si tienes intención genuina de visitar Canadá como turista y regresar a tu país. Los factores más relevantes son:",
      },
      {
        type: "list" as const,
        items: [
          "Arraigo en tu país de origen: empleo estable, negocio propio, propiedades, familia a cargo.",
          "Solvencia económica: que puedas cubrir los gastos del viaje sin necesidad de trabajar en Canadá.",
          "Historial de viajes: haber viajado a otros países y retornado sin incidentes refuerza tu perfil.",
          "Propósito del viaje: itinerario claro, carta de invitación si visitas familiares, reservas de alojamiento.",
          "Historial migratorio: visa americana vigente o visas europeas anteriores suman favorablemente.",
        ],
      },
    ],
  },
  {
    heading: "Carta de invitación: ¿cuándo ayuda y cuándo no?",
    blocks: [
      {
        type: "p" as const,
        text: "Si viajas a visitar familiares o amigos en Canadá, una carta de invitación de esa persona puede sumar a tu expediente, pero no es obligatoria ni suficiente por sí sola. IRCC la considera como un documento de contexto, no como garantía de aprobación.",
      },
      {
        type: "p" as const,
        text: "Lo que realmente pesa es la consistencia de tu expediente: que el propósito del viaje, tu situación económica y tu arraigo en el país de origen sean coherentes y estén sustentados con documentos.",
      },
    ],
  },
  {
    heading: "¿Qué pasa si me niegan la visa?",
    blocks: [
      {
        type: "p" as const,
        text: "Si IRCC deniega tu solicitud, recibirás una carta de rechazo indicando el motivo general. Las tasas pagadas no son reembolsables. Puedes volver a aplicar cuando tengas elementos nuevos que refuercen tu expediente: mejor solvencia, historial de viajes adicional, o aclaración del punto que generó la duda.",
      },
      {
        type: "callout" as const,
        text: "Un rechazo previo de visa canadiense no significa que no puedas obtenerla en el futuro, pero sí debe declararse en la nueva solicitud. Ocultarlo puede llevar a una inadmisibilidad por misrepresentation, que es mucho más difícil de levantar.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "¿Puedo solicitar la visa canadiense sin tener visa americana?",
    a: "Sí, la visa americana no es requisito. Sin embargo, tener visa americana vigente (especialmente si es de múltiples entradas) es un factor positivo que algunos oficiales de IRCC valoran como señal de que ya fuiste evaluado por otro consulado exigente.",
  },
  {
    q: "¿Cuánto tiempo de vigencia tiene la visa de Canadá?",
    a: "Si IRCC aprueba una visa de entradas múltiples, la vigencia suele ser de hasta 10 años o hasta 1 mes antes de que venza tu pasaporte, lo que ocurra primero. La estancia permitida por visita la determina el oficial de frontera al ingresar (típicamente hasta 6 meses).",
  },
  {
    q: "¿Necesito contratar una asesoría para solicitar la visa canadiense?",
    a: "No es obligatorio. La solicitud se hace directamente en el portal de IRCC. Una asesoría agrega valor cuando hay factores de riesgo: rechazos previos, historial migratorio complejo, situación laboral informal o dudas sobre cómo presentar el expediente.",
  },
  {
    q: "¿Puedo trabajar en Canadá con una visa de turista TRV?",
    a: "No. La TRV es exclusivamente para visitas de turismo, negocios o tránsito. Trabajar con visa de turista es una violación migratoria que puede llevar a deportación y una prohibición de entrada futura.",
  },
  {
    q: "¿Los menores de edad también pagan biométricos?",
    a: "Los menores de 14 años están exentos de dar biométricos. Entre 14 y 17 años, la tasa de biométricos es de CAD 85 (igual que adultos). La tasa de solicitud es la misma sin importar la edad.",
  },
];

export default function CuantoCuestaVisaCanada() {
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
    headline: "¿Cuánto cuesta y cuánto demora la visa de Canadá? (2026)",
    author: { "@type": "Organization", name: "Goviaje" },
    publisher: { "@type": "Organization", name: "Goviaje" },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    about: "Visa de visitante TRV Canadá costos y tiempos",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa Canadá"
        title="¿Cuánto cuesta y cuánto demora la visa de Canadá? (2026)"
        dek="Costos reales de la visa canadiense de turismo (TRV): tasa IRCC, biométricos, tiempos de procesamiento y qué evalúa la autoridad migratoria canadiense."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-canada"
        relatedLabel="Ver planes de asesoría Visa Canadá"
        ctaHeading="¿Quieres que revisemos tu perfil antes de aplicar?"
        ctaText="Un asesor puede identificar los puntos débiles de tu expediente y ayudarte a presentarlo de la mejor forma posible."
      />
    </>
  );
}
