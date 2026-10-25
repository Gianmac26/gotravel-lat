import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";
import WALink from "../../components/WALink";

export const metadata: Metadata = {
  title: "¿Cuánto dinero necesito para la visa canadiense? (Perú, 2026)",
  description:
    "IRCC no fija un monto mínimo para la visa de turista a Canadá. Qué evalúa sobre tu solvencia, qué documentos presentar desde Perú y los errores más comunes.",
  alternates: { canonical: "https://goviaje.uk/blog/cuanto-dinero-necesito-visa-canadiense" },
  openGraph: {
    title: "¿Cuánto dinero necesito para la visa canadiense? (Perú, 2026)",
    description:
      "IRCC no fija un monto mínimo para la visa de turista a Canadá. Qué evalúa sobre tu solvencia, qué documentos presentar desde Perú y los errores más comunes.",
    url: "https://goviaje.uk/blog/cuanto-dinero-necesito-visa-canadiense",
    type: "article",
  },
};

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20GoViaje%2C%20quiero%20saber%20si%20mi%20perfil%20econ%C3%B3mico%20es%20suficiente%20para%20la%20visa%20de%20Canad%C3%A1.";

const SECTIONS = [
  {
    heading: "No existe un monto mínimo oficial",
    blocks: [
      {
        type: "p" as const,
        text: "Si buscas cuánto dinero debes tener en el banco para la visa de turista a Canadá, la respuesta oficial es que no hay una cifra fija. IRCC, la autoridad migratoria canadiense, pide que tengas dinero suficiente para tu estadía y aclara que el monto depende de cuánto tiempo te quedarás y de si te alojarás en un hotel o con familiares o amigos.",
      },
      {
        type: "p" as const,
        text: "Las cifras redondas que circulan en redes y grupos de WhatsApp no salen de ninguna norma de IRCC. Sirven de poco, porque dos personas con el mismo saldo pueden tener viajes, ingresos y perfiles muy distintos.",
      },
      {
        type: "callout" as const,
        text: "Lo que IRCC evalúa es si el dinero que demuestras es coherente con el viaje que propones y con tu situación en Perú. No evalúa un saldo en abstracto.",
      },
    ],
  },
  {
    heading: "Cómo evalúa IRCC tu solvencia",
    blocks: [
      {
        type: "p" as const,
        text: "Según IRCC, para obtener la visa de visitante debes cumplir varias condiciones a la vez. Tres de ellas se relacionan con el dinero y con tu vida en Perú:",
      },
      {
        type: "list" as const,
        items: [
          "Tener dinero suficiente para tu estadía.",
          "Convencer al oficial de que tienes vínculos con tu país, como un empleo, una vivienda, bienes financieros o familia, que te harán regresar.",
          "Convencer al oficial de que saldrás de Canadá al terminar tu visita.",
        ],
      },
      {
        type: "p" as const,
        text: "Por eso la solvencia no se evalúa sola. Un buen saldo con un empleo poco claro o un viaje poco coherente puede generar dudas, y una situación económica moderada pero estable y bien documentada puede ser más convincente. Explicamos los vínculos con tu país en nuestra guía sobre carta de invitación y arraigo.",
      },
    ],
  },
  {
    heading: "Cómo estimar cuánto necesitas tú",
    blocks: [
      {
        type: "p" as const,
        text: "En lugar de buscar una cifra universal, calcula el costo real de tu propio viaje. Estos son los rubros que suelen entrar en el cálculo:",
      },
      {
        type: "list" as const,
        items: [
          "Pasajes de ida y vuelta.",
          "Alojamiento: noches de hotel o alquiler, o la explicación de dónde te quedarás si te hospedas con alguien.",
          "Gastos diarios: comida, transporte local y actividades, multiplicados por los días de tu estadía.",
          "Un margen para imprevistos.",
          "Las tasas oficiales de la solicitud: CAD 100 de visa y CAD 85 de biometría por persona, según IRCC. Detallamos estos costos en nuestra guía de costos y tiempos.",
        ],
      },
      {
        type: "p" as const,
        text: "Luego compara el total con tus ingresos y ahorros. La pregunta de fondo es si puedes cubrir ese viaje con tus propios recursos, sin necesidad de trabajar en Canadá. Si la respuesta es sí y tus documentos lo respaldan, tu planteamiento es coherente.",
      },
      {
        type: "callout" as const,
        text: "No compres pasajes antes de tener la visa aprobada. Para el itinerario, IRCC acepta como referencia detalles de vuelo o pruebas de alojamiento, pero no exige que el viaje esté pagado.",
      },
    ],
  },
  {
    heading: "Qué documentos presentar desde Perú",
    blocks: [
      {
        type: "p" as const,
        text: "Para los visitantes que viajan como turistas, IRCC recomienda adjuntar un estado de cuenta bancario que ayude a entender si tienes dinero suficiente para tu estadía. Pide que incluya estos elementos:",
      },
      {
        type: "list" as const,
        items: [
          "El nombre del banco y sus datos de contacto, para que IRCC pueda hacer consultas.",
          "Una prueba de que la cuenta es tuya: tu nombre y dirección en el estado de cuenta.",
          "Al menos 6 meses de movimientos, con saldos, para entender tu situación financiera.",
        ],
      },
      {
        type: "p" as const,
        text: "Además de lo que menciona IRCC, estos documentos suelen ayudar a respaldar de dónde vienen tus ingresos. No son requisitos oficiales y su utilidad depende de cada caso:",
      },
      {
        type: "list" as const,
        items: [
          "Si eres dependiente: boletas de pago recientes y una constancia de trabajo que confirme tu puesto, antigüedad y que cuentas con permiso para viajar.",
          "Si eres independiente: recibos por honorarios y declaraciones presentadas ante SUNAT.",
          "Si tienes un negocio: ficha RUC activa y documentos que muestren su actividad.",
          "Bienes a tu nombre, como un inmueble o un vehículo, que respaldan tus vínculos con Perú.",
        ],
      },
    ],
  },
  {
    heading: "Errores comunes con el dinero",
    blocks: [
      {
        type: "p" as const,
        text: "La mayoría de los problemas no vienen de tener poco dinero, sino de que la información no es coherente:",
      },
      {
        type: "list" as const,
        items: [
          "Depósitos de último momento: un monto muy superior al movimiento habitual, aparecido pocas semanas antes de aplicar y sin explicación.",
          "Dinero prestado para que figure en la cuenta, sin que coincida con tu historial de ingresos.",
          "Estados de cuenta que no coinciden con los ingresos o el empleo que declaras en tu solicitud.",
          "Presentar solo el saldo actual, o menos de 6 meses de movimientos, cuando IRCC pide ver al menos 6 meses con saldos.",
          "Estados de cuenta ilegibles, o que no muestran tu nombre y dirección.",
          "Un viaje largo o costoso que no guarda relación con tus ingresos, sin explicar quién cubre la diferencia.",
        ],
      },
    ],
  },
  {
    heading: "Si otra persona va a cubrir parte de tu viaje",
    blocks: [
      {
        type: "p" as const,
        text: "Es común que un familiar en Canadá o en Perú ayude con los gastos. La información oficial que revisamos no detalla cómo documentarlo en una visa de turista. Nuestra recomendación es no ocultarlo: explica con claridad quién cubre qué y respáldalo con documentos coherentes, porque una explicación transparente genera menos dudas que una cuenta que aparenta algo distinto de la realidad.",
      },
      {
        type: "p" as const,
        text: "Si tu viaje es para visitar a alguien en Canadá, IRCC indica que además podrías necesitar una carta de invitación de esa persona. Lo explicamos en la guía de carta de invitación y arraigo.",
      },
      {
        type: "callout" as const,
        text: "GoViaje es una asesoría privada, no afiliada a IRCC ni al Gobierno de Canadá. No garantizamos aprobaciones ni tenemos influencia sobre las decisiones de los oficiales. Nuestra función es ayudarte a presentar una solicitud mejor preparada.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "¿Hay un monto mínimo en el banco para la visa de Canadá?",
    a: "No. IRCC no publica un monto mínimo para la visa de visitante. Pide que tengas dinero suficiente para tu estadía y aclara que la cantidad depende de cuánto tiempo te quedarás y de si te alojarás en un hotel o con familiares o amigos.",
  },
  {
    q: "¿Cuántos meses de estado de cuenta debo presentar?",
    a: "IRCC indica que al menos 6 meses de movimientos, incluidos los saldos, ayudan a entender tu situación financiera. El estado de cuenta debe mostrar tu nombre y dirección, y el nombre y contacto del banco.",
  },
  {
    q: "¿Sirven las cifras que circulan en internet, como un saldo mínimo exacto?",
    a: "No tienen respaldo en IRCC. Lo que se evalúa es la coherencia entre tus ingresos, tus ahorros y el viaje que propones, junto con tus vínculos en Perú.",
  },
  {
    q: "Si me hospedo con un familiar en Canadá, ¿igual debo demostrar dinero?",
    a: "Sí. Debes demostrar que tienes dinero suficiente para tu estadía. El alojamiento con familiares o amigos puede reducir el monto necesario, pero no elimina el requisito. Además, IRCC indica que podrías necesitar una carta de invitación de la persona que vive en Canadá.",
  },
  {
    q: "¿Cuánto cuesta la tasa de la visa de turista a Canadá?",
    a: "Según IRCC, la tasa de procesamiento individual es de CAD 100 y la biometría individual es de CAD 85, cuando corresponde darla. Revisamos los costos y tiempos con más detalle en nuestra guía de costo y tiempo de espera.",
  },
];

export default function CuantoDineroVisaCanadiense() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://goviaje.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://goviaje.uk/blog" },
      { "@type": "ListItem", position: 3, name: "¿Cuánto dinero necesito para la visa canadiense?", item: "https://goviaje.uk/blog/cuanto-dinero-necesito-visa-canadiense" },
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
    headline: "¿Cuánto dinero necesito para la visa canadiense? Guía para peruanos (2026)",
    author: { "@type": "Organization", name: "GoViaje" },
    publisher: { "@type": "Organization", name: "GoViaje" },
    datePublished: "2026-10-25",
    dateModified: "2026-10-25",
    about: "Solvencia económica para la visa de turista a Canadá desde Perú",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa Canadá"
        title="¿Cuánto dinero necesito para la visa canadiense? Guía para peruanos (2026)"
        dek="IRCC no fija un monto mínimo. Te explicamos qué evalúa sobre tu solvencia, cómo estimar lo que necesita tu viaje y qué documentos presentar desde Perú."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-canada"
        relatedLabel="Ver asesoría Visa Canadá"
        ctaHeading="¿No sabes si tu perfil económico es suficiente?"
        ctaText="Revisamos tu caso: ingresos, ahorros, vínculos y coherencia con el viaje propuesto. Sin compromiso y sin promesas de aprobación."
        service="visa-canada"
      >
        <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Fuentes oficiales</p>
          <p className="mt-1 text-xs text-slate-500">Verificadas el 25 de octubre de 2026. IRCC puede actualizar sus requisitos sin previo aviso.</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eligibility.html" target="_blank" rel="noopener noreferrer" className="text-sm text-[#008F6B] hover:underline">
                → Eligibility to apply for a visitor visa — canada.ca
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html" target="_blank" rel="noopener noreferrer" className="text-sm text-[#008F6B] hover:underline">
                → How to apply for a visitor visa — canada.ca
              </a>
            </li>
          </ul>
        </div>
        <nav className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Artículos relacionados</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/blog/carta-invitacion-arraigo-visa-canada" className="text-sm text-[#008F6B] hover:underline">
                → Carta de invitación y arraigo: qué evalúa Canadá en tu visa
              </a>
            </li>
            <li>
              <a href="/blog/cuanto-cuesta-demora-visa-canada" className="text-sm text-[#008F6B] hover:underline">
                → Visa Canadá: costo y tiempo de espera (2026)
              </a>
            </li>
            <li>
              <a href="/blog/visa-canada-sin-viajes-previos" className="text-sm text-[#008F6B] hover:underline">
                → Visa Canadá sin viajes previos: cómo aplicar por primera vez
              </a>
            </li>
            <li>
              <a href="/blog/visa-canadiense-rechazada-que-hacer" className="text-sm text-[#008F6B] hover:underline">
                → Visa canadiense rechazada: qué hacer y cómo volver a aplicar
              </a>
            </li>
            <li>
              <a href="/visa-canada" className="text-sm text-[#008F6B] hover:underline">
                → Asesoría para tu visa de Canadá
              </a>
            </li>
          </ul>
        </nav>
        <WALink
          href={WA_URL}
          cta_position="middle"
          service="visa-canada"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1fb855]"
        >
          Consultar si mi perfil económico es suficiente
        </WALink>
      </ArticleLayout>
    </>
  );
}
