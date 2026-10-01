import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";

export const metadata: Metadata = {
  title: "Cómo llenar el DS-160 paso a paso (2026) — Guía completa | Goviaje",
  description:
    "Guía paso a paso para completar el formulario DS-160 de visa americana sin errores: campos críticos, fotos, preguntas difíciles y errores más comunes a evitar.",
  alternates: { canonical: "https://goviaje.uk/blog/como-llenar-ds160-paso-a-paso" },
};

const SECTIONS = [
  {
    heading: "¿Qué es el DS-160 y por qué es tan importante?",
    blocks: [
      {
        type: "p" as const,
        text: "El DS-160 es el formulario oficial de solicitud de visa no inmigrante de Estados Unidos. Es obligatorio para todos los que solicitan una visa de turismo (B1/B2), y se completa en línea en la plataforma del Departamento de Estado americano.",
      },
      {
        type: "p" as const,
        text: "Lo que mucha gente no sabe es que el oficial consular revisa el DS-160 antes de tu entrevista. Las respuestas que das en el formulario son la base de las preguntas que te harán. Un DS-160 inconsistente, incompleto o con errores puede ser motivo de rechazo incluso antes de que abras la boca.",
      },
    ],
  },
  {
    heading: "Antes de empezar: lo que necesitas tener a la mano",
    blocks: [
      {
        type: "list" as const,
        items: [
          "Pasaporte vigente (número, fechas de emisión y vencimiento).",
          "Historial de viajes internacionales de los últimos 5 años: países visitados y fechas aproximadas.",
          "Datos de tu empleo actual o negocio: nombre de la empresa, dirección, teléfono, cargo y sueldo.",
          "Nombre y dirección de la persona o lugar que visitarás en EE.UU. (si aplica).",
          "Información de familiares en EE.UU. si los tienes (nombre, dirección, estatus migratorio).",
          "Historial de solicitudes de visa anteriores a EE.UU. y otros países.",
          "Una foto digital reciente que cumpla las especificaciones del Departamento de Estado.",
        ],
      },
    ],
  },
  {
    heading: "Paso 1 — Crear la sesión en el portal oficial",
    blocks: [
      {
        type: "p" as const,
        text: "Ingresa a ceac.state.gov y crea una nueva solicitud de visa. El sistema te asignará un número de aplicación (Application ID) de 10 dígitos que debes guardar: lo necesitarás para retomar el formulario si no lo completas en una sola sesión.",
      },
      {
        type: "callout" as const,
        text: "El formulario tiene una sesión activa de 20 minutos. Si no guardas y el tiempo se agota, perderás lo que no hayas guardado. Guarda cada sección antes de continuar.",
      },
    ],
  },
  {
    heading: "Paso 2 — Información personal",
    blocks: [
      {
        type: "p" as const,
        text: "Ingresa tus datos exactamente como aparecen en tu pasaporte: nombre completo, fecha y lugar de nacimiento, nacionalidad y número de pasaporte. Cualquier discrepancia entre el formulario y el pasaporte en la ventanilla consular genera problemas.",
      },
      {
        type: "list" as const,
        items: [
          "Si tienes otro nombre (apodo, nombre religioso, nombre anterior), decláralo en 'Other names used'. No ocultarlo.",
          "El número de identificación tributaria (RUC, CURP, NIT) va en el campo 'National Identification Number'. Si no tienes, marca 'Does not apply'.",
          "El género debe coincidir con el del pasaporte.",
        ],
      },
    ],
  },
  {
    heading: "Paso 3 — Información del viaje",
    blocks: [
      {
        type: "p" as const,
        text: "Aquí el formulario te pregunta el propósito de tu viaje, las fechas planeadas y dónde te hospedarás. Si aún no tienes fechas exactas, puedes poner fechas estimadas — no es necesario tener boletos comprados. Lo importante es que sean coherentes con tu situación real.",
      },
      {
        type: "list" as const,
        items: [
          "Purpose of trip: para turismo marca 'Temporary Visitor for Pleasure (B-2)'.",
          "Specific travel plans: si no tienes itinerario fijo, puedes indicar las ciudades que planeas visitar.",
          "Address where you'll stay: si te quedas con un familiar, pon su dirección. Si irás a un hotel, pon el nombre y dirección del hotel.",
          "Who is paying for your trip: si pagas tú mismo, marca 'Self'. Si alguien más paga, especifica quién y cómo.",
        ],
      },
    ],
  },
  {
    heading: "Paso 4 — Historial de viajes y visas anteriores",
    blocks: [
      {
        type: "p" as const,
        text: "Esta sección genera muchos errores por omisión. Debes declarar TODOS los países que has visitado en los últimos 5 años, aunque sea de paso (escala con salida al exterior). El sistema migratorio de EE.UU. tiene acceso a registros de varios países.",
      },
      {
        type: "callout" as const,
        text: "Si has tenido una visa americana anterior — aprobada o negada — debes declararla. Ocultar una negación anterior es motivo de deportación o ban permanente si se descubre.",
      },
    ],
  },
  {
    heading: "Paso 5 — Información laboral y económica",
    blocks: [
      {
        type: "p" as const,
        text: "El oficial evalúa si tienes razones reales para regresar a tu país. Tu situación laboral y económica es clave. Si eres dependiente, incluye el nombre de tu empresa, dirección y teléfono verificable. Si eres independiente o tienes negocio, detalla tu actividad.",
      },
      {
        type: "list" as const,
        items: [
          "Si eres estudiante, incluye el nombre de tu institución y año de estudios.",
          "Si estás desempleado o jubilado, decláralos tal cual. No inventes empleo — el oficial puede verificarlo.",
          "Los ingresos van en moneda local. Si tienes múltiples fuentes de ingreso, suma el total.",
        ],
      },
    ],
  },
  {
    heading: "Paso 6 — Preguntas de seguridad",
    blocks: [
      {
        type: "p" as const,
        text: "Al final del formulario hay una serie de preguntas de tipo 'sí/no' sobre antecedentes penales, afiliaciones políticas, enfermedades contagiosas y temas de seguridad. Para la gran mayoría de solicitantes turistas, todas las respuestas son 'No'.",
      },
      {
        type: "callout" as const,
        text: "Si alguna respuesta es 'Sí', no significa negación automática — pero sí debes poder explicarlo con documentación. Nunca respondas 'No' a algo que debería ser 'Sí': mentir en el DS-160 puede resultar en una prohibición de entrada permanente.",
      },
    ],
  },
  {
    heading: "Paso 7 — La foto del DS-160",
    blocks: [
      {
        type: "p" as const,
        text: "La foto tiene requisitos muy específicos: fondo blanco uniforme, rostro centrado sin lentes, resolución mínima de 600x600 píxeles y tomada en los últimos 6 meses. Una foto rechazada por el sistema obliga a rehacer esa sección del formulario.",
      },
      {
        type: "p" as const,
        text: "Usa la herramienta de verificación de fotos del Departamento de Estado antes de subirla. Una foto incorrecta que pase el sistema pero sea cuestionada en ventanilla puede retrasar tu solicitud.",
      },
    ],
  },
  {
    heading: "Los errores más comunes al llenar el DS-160",
    blocks: [
      {
        type: "list" as const,
        items: [
          "Escribir el nombre en un orden diferente al del pasaporte (apellidos/nombres invertidos).",
          "Omitir viajes internacionales recientes, especialmente escalas con paso por migración.",
          "No declarar una visa americana anterior o un rechazo previo.",
          "Inventar empleo o ingresos que no se pueden sustentar con documentos.",
          "Dejar la sesión sin guardar y perder avances.",
          "Usar un número de teléfono o correo que no controlan — el consulado puede contactarte por esas vías.",
        ],
      },
    ],
  },
];

const FAQS = [
  {
    q: "¿Puedo llenar el DS-160 yo mismo o necesito un asesor?",
    a: "Puedes llenarlo tú mismo — es un formulario del gobierno de EE.UU. y no tiene costo. Un asesor agrega valor cuando hay situaciones complejas: rechazo previo, historial migratorio irregular, situación laboral informal o dudas sobre cómo declarar ciertos datos.",
  },
  {
    q: "¿Cuánto tiempo tarda llenar el DS-160?",
    a: "Entre 45 minutos y 2 horas, dependiendo de la complejidad de tu historial. Si tienes muchos viajes internacionales o empleos anteriores, puede tomar más. No lo hagas a último momento ni en un solo intento sin haber preparado los datos primero.",
  },
  {
    q: "¿Puedo corregir el DS-160 después de enviarlo?",
    a: "Una vez enviado, no puedes editar el mismo formulario. Si detectas un error importante antes de la entrevista, debes crear un nuevo DS-160, completarlo correctamente y llevar ese número nuevo a la cita. El consulado usará el último formulario enviado.",
  },
  {
    q: "¿En qué idioma lleno el DS-160?",
    a: "En inglés. Todos los campos deben completarse en inglés: nombres de empresas, países, ciudades, ocupaciones. Los nombres propios se escriben tal como aparecen en tu pasaporte.",
  },
  {
    q: "¿El DS-160 tiene costo?",
    a: "El formulario DS-160 en sí es gratuito. El costo es la tasa consular MRV (USD 185), que se paga por separado antes de la entrevista a través del banco designado en tu país.",
  },
];

export default function ComoLlenarDS160() {
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
    headline: "Cómo llenar el DS-160 paso a paso (2026)",
    author: { "@type": "Organization", name: "Goviaje" },
    publisher: { "@type": "Organization", name: "Goviaje" },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    about: "Formulario DS-160 visa americana",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa USA"
        title="Cómo llenar el DS-160 paso a paso (2026)"
        dek="Guía práctica para completar el formulario de visa americana sin errores: los campos más críticos, las preguntas difíciles y los errores que debes evitar."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-usa"
        relatedLabel="Ver planes de asesoría Visa USA"
        ctaHeading="¿Tienes dudas sobre cómo declarar tu situación en el DS-160?"
        ctaText="Un asesor especializado puede revisar tu caso puntual antes de que envíes el formulario."
      />
    </>
  );
}
