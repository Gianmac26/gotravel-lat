import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";

export const metadata: Metadata = {
  title: "Preguntas en la entrevista de visa americana B1/B2 (2026) | Goviaje",
  description:
    "Las preguntas más comunes en la entrevista consular de la visa americana, qué evalúa realmente el oficial y cómo prepararte para responder con seguridad.",
  alternates: { canonical: "https://goviaje.uk/blog/preguntas-entrevista-visa-americana" },
};

const SECTIONS = [
  {
    heading: "¿Qué pasa realmente en la entrevista consular?",
    blocks: [
      {
        type: "p" as const,
        text: "La entrevista para la visa americana dura entre 2 y 5 minutos en la mayoría de los casos. En ese tiempo, el oficial consular ya revisó tu DS-160 y tiene una primera impresión de tu perfil. Las preguntas no son un examen — son una conversación destinada a verificar que tu historia es coherente y que tienes razones reales para regresar a tu país.",
      },
      {
        type: "p" as const,
        text: "El oficial no busca información nueva: busca confirmar lo que ya vio en papel. Si tu DS-160 dice que eres gerente de una empresa de construcción en Lima, espera que puedas hablar de eso con naturalidad. Si no puedes, eso genera duda.",
      },
    ],
  },
  {
    heading: "Las preguntas más frecuentes en la entrevista",
    blocks: [
      {
        type: "p" as const,
        text: "Aunque cada entrevista es diferente, hay preguntas que aparecen en la mayoría de los casos:",
      },
      {
        type: "list" as const,
        items: [
          "¿Cuál es el propósito de su viaje a Estados Unidos?",
          "¿Cuánto tiempo planea quedarse?",
          "¿Dónde va a hospedarse?",
          "¿Tiene familia en Estados Unidos?",
          "¿A qué se dedica usted actualmente?",
          "¿Cuánto tiempo lleva trabajando ahí?",
          "¿Quién financia su viaje?",
          "¿Ha viajado a otros países anteriormente?",
          "¿Ha tenido visa americana antes? ¿Por qué no la renovó / qué pasó con la anterior?",
          "¿Por qué eligió ese destino y esas fechas?",
        ],
      },
    ],
  },
  {
    heading: "¿Qué evalúa realmente el oficial?",
    blocks: [
      {
        type: "p" as const,
        text: "El oficial tiene un objetivo claro: determinar si tienes intención de quedarte ilegalmente en EE.UU. Para eso evalúa dos cosas fundamentales:",
      },
      {
        type: "list" as const,
        items: [
          "Arraigo: ¿tienes razones suficientes para regresar? Empleo estable, negocio propio, propiedades, familia dependiente, compromisos concretos en tu país.",
          "Coherencia: ¿tu historia se sostiene? ¿Lo que dices coincide con lo que declaraste en el DS-160? ¿Tu nivel de ingresos es compatible con el viaje que planeas?",
        ],
      },
      {
        type: "callout" as const,
        text: "La visa no se aprueba por convencer al oficial con argumentos. Se aprueba porque tu perfil ya es sólido antes de entrar a la ventanilla. La entrevista confirma lo que el expediente muestra — no puede compensar un expediente débil.",
      },
    ],
  },
  {
    heading: "Preguntas sobre trabajo y situación económica",
    blocks: [
      {
        type: "p" as const,
        text: "Esta es el área donde más se pierde consistencia. Si eres empleado dependiente, el oficial puede preguntar: ¿Cuánto gana al mes? ¿Quién es su jefe directo? ¿Cuántos empleados tiene su empresa? ¿Le dieron permiso para viajar? ¿Cuántos días pidió de vacaciones?",
      },
      {
        type: "p" as const,
        text: "Si eres independiente o tienes negocio propio: ¿En qué consiste su negocio? ¿Cuántos años lleva operando? ¿Cuántos clientes tiene? ¿Quién lo maneja mientras usted viaja?",
      },
      {
        type: "p" as const,
        text: "No se trata de memorizar respuestas — se trata de que tu situación real sea tu respuesta. Si inventas datos, el oficial lo detecta cuando las cifras no cuadran o cuando no puedes ampliar el detalle.",
      },
    ],
  },
  {
    heading: "La pregunta sobre familia en EE.UU.",
    blocks: [
      {
        type: "p" as const,
        text: "Esta es quizás la pregunta más malinterpretada. Mucha gente cree que tener familiares en Estados Unidos es una desventaja. No necesariamente. El problema no es tener familia allá — el problema es no tener arraigo suficiente en tu país de origen para equilibrarlo.",
      },
      {
        type: "p" as const,
        text: "Si tienes hermanos, tíos o primos en EE.UU., decláralo con naturalidad. Ocultar esa información cuando el oficial puede verla en el sistema es peor que admitirla. Lo que debes poder mostrar es que también tienes razones sólidas para regresar.",
      },
    ],
  },
  {
    heading: "Si ya te negaron la visa antes",
    blocks: [
      {
        type: "p" as const,
        text: "Si tuviste una negación previa, el oficial la verá en el sistema. No hay forma de ocultarlo ni tiene sentido intentarlo. Lo que sí puedes hacer es explicar qué ha cambiado desde entonces: nueva situación laboral, más arraigo, historial de viajes adicional, mejor solvencia.",
      },
      {
        type: "callout" as const,
        text: "Presentarse a una segunda entrevista con el mismo perfil que generó el primer rechazo raramente resulta diferente. Solicitar asesoría antes de volver a aplicar puede marcar la diferencia entre otro rechazo y una aprobación.",
      },
    ],
  },
  {
    heading: "Cómo prepararte sin memorizar respuestas de manual",
    blocks: [
      {
        type: "p" as const,
        text: "El mayor error es aprender respuestas en lugar de conocer tu propio expediente. El oficial puede preguntar lo mismo de 5 formas distintas. Si memorizaste una respuesta, tropiezas con la variante.",
      },
      {
        type: "list" as const,
        items: [
          "Relee tu DS-160 completo el día anterior. Tienes que conocer lo que declaraste mejor que el oficial.",
          "Practica hablar de tu trabajo, tu empresa o negocio con naturalidad y con cifras reales.",
          "Ten clara la razón del viaje: qué vas a hacer, con quién, por cuánto tiempo.",
          "Prepara una respuesta breve y honesta para la pregunta del arraigo: ¿por qué vas a regresar?",
          "Lleva tus documentos organizados, pero no los saques a menos que el oficial te los pida.",
        ],
      },
    ],
  },
  {
    heading: "¿Qué pasa después de la entrevista?",
    blocks: [
      {
        type: "p" as const,
        text: "Al terminar la entrevista, el oficial puede: aprobarte en el momento, pedirte documentación adicional (revisión administrativa) o negarte. Si te aprueba, tu pasaporte va a procesamiento y la visa puede estar lista en 3 a 5 días hábiles. Si solicita documentos, tendrás entre 1 y 3 semanas para entregarlos.",
      },
      {
        type: "p" as const,
        text: "Si te niegan, recibirás un papel explicando el artículo de la ley bajo el que se denegó. El más común es el artículo 214(b), que significa que el oficial no fue convencido de que tienes suficiente arraigo. No es una prohibición permanente — puedes volver a aplicar.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "¿La entrevista es en español o en inglés?",
    a: "En la mayoría de los consulados de Latinoamérica, la entrevista se hace en español. Si el oficial habla español, responde en español. Si no, hay un intérprete. No hay ventaja en responder en inglés si no lo dominas bien — un error de comunicación puede crear malos entendidos.",
  },
  {
    q: "¿Puedo llevar acompañante a la entrevista?",
    a: "No. La entrevista es individual. Si viajas con familia y cada uno aplicó por separado, cada uno tendrá su propia entrevista. Los menores de 14 años pueden ir con un padre o tutor, pero el adulto no entra a la entrevista del menor.",
  },
  {
    q: "¿Qué documentos debo llevar a la entrevista?",
    a: "El pasaporte vigente, la hoja de confirmación de la cita y el comprobante de pago de la tasa MRV son los documentos básicos. Puedes llevar documentos de respaldo (cartas laborales, estados de cuenta, títulos de propiedad), pero solo los presentes si el oficial los solicita. Llegar con una carpeta enorme no garantiza aprobación.",
  },
  {
    q: "¿Qué pasa si no entiendo una pregunta del oficial?",
    a: "Pide que te la repitan o la expliquen. Es mejor pedir aclaración que responder algo que no te preguntaron. Responde solo lo que te preguntan — respuestas largas o espontáneas que no te pidieron pueden abrir nuevas dudas.",
  },
  {
    q: "¿Cuánto dura la entrevista?",
    a: "Entre 2 y 5 minutos en la mayoría de los casos. Si el oficial te hace más preguntas, no es necesariamente malo — puede que quiera entender mejor algún punto. Si es muy corta, tampoco es señal de nada: algunos casos se aprueban en segundos.",
  },
];

export default function PreguntasEntrevistaVisaAmericana() {
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
    headline: "Preguntas en la entrevista de visa americana B1/B2 (2026)",
    author: { "@type": "Organization", name: "Goviaje" },
    publisher: { "@type": "Organization", name: "Goviaje" },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    about: "Entrevista consular visa americana B1/B2",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa USA"
        title="Preguntas en la entrevista de visa americana B1/B2 (2026)"
        dek="Las preguntas más comunes en la entrevista consular, qué evalúa realmente el oficial y cómo prepararte para responder con naturalidad — sin memorizar guiones."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-usa"
        relatedLabel="Ver planes de asesoría Visa USA"
        ctaHeading="¿Quieres una preparación específica para tu entrevista?"
        ctaText="Podemos revisar tu perfil, identificar las preguntas más probables y prepararte para responderlas según tu situación real."
      />
    </>
  );
}
