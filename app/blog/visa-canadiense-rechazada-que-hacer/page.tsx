import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../../components/ArticleLayout";
import WALink from "../../components/WALink";

export const metadata: Metadata = {
  title: "Visa canadiense rechazada: qué hacer (2026)",
  description:
    "Si te rechazaron la visa canadiense, aprende cómo leer las notas del oficial, cuándo conviene volver a aplicar y qué documentación mejora tu caso.",
  alternates: { canonical: "https://goviaje.uk/blog/visa-canadiense-rechazada-que-hacer" },
  openGraph: {
    title: "Visa canadiense rechazada: qué hacer y cómo volver a aplicar (2026)",
    description:
      "Si te rechazaron la visa canadiense, aprende cómo leer las notas del oficial, cuándo conviene volver a aplicar y qué documentación mejora tu caso.",
    url: "https://goviaje.uk/blog/visa-canadiense-rechazada-que-hacer",
    type: "article",
  },
};

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20GoViaje%2C%20me%20rechazaron%20la%20visa%20canadiense%20y%20quiero%20evaluar%20mi%20caso%20para%20volver%20a%20aplicar.";

const SECTIONS = [
  {
    heading: "¿Qué significa que te rechacen la visa canadiense?",
    blocks: [
      {
        type: "p" as const,
        text: "Un rechazo de visa canadiense es la decisión de un oficial de IRCC (Immigration, Refugees and Citizenship Canada) de que, con la información presentada en tu solicitud, no pudo satisfacerse de que regresarás a tu país al terminar tu visita. No es una prohibición permanente de entrada a Canadá, y en la mayoría de los casos puedes volver a aplicar cuando tu situación haya cambiado.",
      },
      {
        type: "p" as const,
        text: "La diferencia clave con respecto a la visa americana es que IRCC da más información sobre el motivo del rechazo. Desde julio de 2025, las cartas de rechazo de visas de turismo, estudiantiles y de trabajo incluyen automáticamente las notas del oficial, lo que te permite entender con mayor precisión qué generó la negación.",
      },
    ],
  },
  {
    heading: "Razones más comunes por las que IRCC rechaza visas de turismo",
    blocks: [
      {
        type: "p" as const,
        text: "La mayoría de los rechazos de visa canadiense para latinos se concentran en dos áreas: arraigo insuficiente y fondos insuficientes. Un oficial que revisa tu solicitud tiene pocos minutos para determinar si presentas el perfil de alguien que regresará a su país. Si tu expediente no lo muestra con claridad, el resultado es el rechazo.",
      },
      {
        type: "list" as const,
        items: [
          "Arraigo insuficiente: no se acreditaron vínculos sólidos con el país de origen (empleo, propiedades, familia a cargo, negocio propio). Esta es la razón más frecuente para peruanos y latinoamericanos en general.",
          "Fondos insuficientes o no documentados: el oficial no pudo verificar que tienes los recursos económicos para costear el viaje y mantenerte durante tu estancia en Canadá.",
          "Propósito del viaje poco claro: el itinerario o la justificación del viaje no fue convincente o no guarda coherencia con el perfil del solicitante.",
          "Historial de viajes limitado: poca o ninguna experiencia de viajes internacionales previos puede aumentar la percepción de riesgo.",
          "Documentación incompleta o inconsistente: documentos faltantes, fechas contradictorias o información que no coincide entre el formulario y los soportes presentados.",
          "Historial migratorio desfavorable: estadías prolongadas o irregulares en otros países, rechazos previos no declarados, o inadmisibilidades registradas.",
        ],
      },
    ],
  },
  {
    heading: "Cómo conocer el motivo real del rechazo",
    blocks: [
      {
        type: "p" as const,
        text: "Antes de volver a aplicar, necesitas entender por qué te rechazaron. IRCC ofrece dos mecanismos para acceder a esa información:",
      },
      {
        type: "list" as const,
        items: [
          "Notas del oficial en la carta de rechazo: desde el 29 de julio de 2025, IRCC incluye automáticamente un resumen de las razones del oficial en las cartas de rechazo de visas de turismo. Si recibiste una carta de rechazo después de esa fecha, revísala con atención — es el primer lugar donde buscar.",
          "GCMS notes vía ATIP: las notas del Sistema Global de Gestión de Casos (GCMS) son el registro interno completo de tu solicitud — comentarios del oficial, códigos de actividad, historial de revisión documental y datos que no aparecen en la carta. La tarifa es CAD $5 y el plazo oficial es 30 días (en la práctica, 6 a 12 semanas). Requisito importante: el gobierno de Canadá solo acepta solicitudes ATIP de ciudadanos canadienses, residentes permanentes o personas y empresas físicamente en Canadá. Si resides en Perú, necesitas que alguien en Canadá la presente por ti con tu consentimiento (formulario IMM 5744 de IRCC). Opciones: un familiar o amigo en Canadá, o un representante autorizado. Si no tienes a nadie allá, escríbenos y evaluamos tu caso.",
        ],
      },
      {
        type: "callout" as const,
        text: "Verificado: octubre 2026. La inclusión de notas del oficial en cartas de rechazo está documentada en la página oficial de IRCC 'Explaining application refusals: Officer decision note' (canada.ca). Las GCMS notes vía ATIP siguen disponibles pero requieren un representante en Canadá si el solicitante reside fuera del país (ver fuente oficial de ATIP enlazada al final del artículo). Tarifas: ircc.canada.ca.",
      },
    ],
  },
  {
    heading: "¿Cuándo puedes volver a aplicar?",
    blocks: [
      {
        type: "p" as const,
        text: "No hay un tiempo mínimo de espera obligatorio después de un rechazo de visa canadiense, salvo que tu carta de rechazo indique explícitamente lo contrario. Puedes volver a aplicar cuando quieras, pero hacerlo con exactamente la misma información producirá con casi toda certeza el mismo resultado. IRCC tiene acceso a tu historial de solicitudes y el nuevo oficial puede ver el rechazo anterior.",
      },
      {
        type: "list" as const,
        items: [
          "Vuelve a aplicar cuando tengas documentación nueva y relevante que responda directamente a la razón del rechazo anterior.",
          "Si el rechazo fue por arraigo: espera hasta poder acreditar un cambio concreto — ascenso laboral, carta de trabajo con mayor estabilidad, propiedad adquirida, nuevo contrato activo.",
          "Si el rechazo fue por fondos: reúne estados de cuenta de los últimos 6 meses que muestren un saldo consistente, no solo un depósito reciente antes de aplicar.",
          "Si el rechazo fue por propósito del viaje: redefine el motivo con mayor detalle y coherencia, incluyendo itinerario, alojamiento confirmado y vínculos con el destino si existen.",
          "Si el rechazo fue por historial migratorio: evalúa si hay un problema de inadmisibilidad que requiera tratamiento diferente antes de volver a aplicar.",
        ],
      },
    ],
  },
  {
    heading: "Cuánto cuesta volver a aplicar (tarifas verificadas IRCC)",
    blocks: [
      {
        type: "list" as const,
        items: [
          "Tarifa de procesamiento de la visa: CAD $100 por persona. No es reembolsable si la visa es denegada.",
          "Biometría: CAD $85 por persona (si ya entregaste biometría en los últimos 10 años, no necesitas pagarla de nuevo).",
          "Total aproximado por solicitud individual nueva: CAD $185 sin contar biometría reiterada.",
          "GCMS notes vía ATIP: CAD $5. Separado del costo de la solicitud de visa.",
        ],
      },
      {
        type: "callout" as const,
        text: "Las tarifas son las vigentes a octubre 2026 según ircc.canada.ca. Pueden cambiar sin previo aviso. Verifica el monto actual directamente en ircc.canada.ca/english/information/fees/fees.asp antes de pagar.",
      },
    ],
  },
  {
    heading: "Casos en que conviene NO volver a aplicar (todavía)",
    blocks: [
      {
        type: "p" as const,
        text: "No siempre la mejor decisión después de un rechazo es volver a aplicar de inmediato. Hay situaciones en que esperar y trabajar el perfil es más inteligente que pagar la tarifa otra vez:",
      },
      {
        type: "list" as const,
        items: [
          "Si nada ha cambiado en tu perfil desde el rechazo anterior: presentar la misma solicitud con documentación similar tiene una probabilidad muy alta de producir el mismo resultado.",
          "Si el rechazo fue por razones de inadmisibilidad específicas (historial criminal, estadía irregular previa): estos casos pueden requerir una solicitud de autorización especial (Authorization to Return to Canada o Temporary Resident Permit) antes de poder aplicar de forma regular.",
          "Si llevas dos o más rechazos consecutivos: el patrón de rechazos se vuelve un factor negativo en sí mismo. Aplicar nuevamente sin un análisis profundo del perfil es arriesgar un tercer rechazo que refuerza ese historial.",
          "Si no tienes claridad sobre el motivo del rechazo: aplicar sin entender qué generó la negación anterior es operar a ciegas. Lee las notas del oficial o solicita las GCMS notes antes de invertir en una nueva solicitud.",
        ],
      },
    ],
  },
  {
    heading: "Errores frecuentes en una segunda solicitud de visa canadiense",
    blocks: [
      {
        type: "list" as const,
        items: [
          "Presentar exactamente los mismos documentos con fecha nueva: IRCC ve el historial completo. La diferencia entre un rechazo y una aprobación es el cambio real en el perfil, no el paso del tiempo.",
          "Agregar fondos de golpe antes de aplicar: un depósito grande justo antes de la solicitud levanta sospechas. Lo que IRCC valora es un saldo consistente a lo largo del tiempo.",
          "No declarar el rechazo anterior: el formulario de visa canadiense pregunta por rechazos previos en Canadá y en otros países. Omitirlo es una declaración falsa que puede derivar en inadmisibilidad por misrepresentation.",
          "Cambiar el motivo del viaje sin coherencia: si en la primera solicitud el motivo era turismo y en la segunda es visita familiar, el cambio debe estar documentado y ser creíble.",
          "Ignorar las notas del oficial: si IRCC te las entregó con la carta de rechazo, son la hoja de ruta para la próxima solicitud. No leerlas es el error más costoso.",
        ],
      },
      {
        type: "callout" as const,
        text: "GoViaje es una asesoría privada, no afiliada al gobierno de Canadá, IRCC ni ninguna embajada. No tenemos influencia sobre las decisiones de los oficiales de IRCC ni garantizamos aprobaciones. Nuestra función es ayudarte a preparar la solicitud más sólida posible según tu situación real.",
      },
    ],
  },
  {
    heading: "¿Vale la pena asesorarse antes de volver a aplicar?",
    blocks: [
      {
        type: "p" as const,
        text: "Una asesoría no garantiza aprobación. Lo que sí puede hacer es reducir los errores evitables: documentación que no responde al motivo del rechazo, fondos presentados de forma incorrecta, un itinerario que no guarda coherencia con el perfil. Para quienes vienen de un rechazo, ese análisis previo mejora las condiciones de la nueva solicitud.",
      },
      {
        type: "p" as const,
        text: "En GoViaje evaluamos tu caso antes de recomendar que vuelvas a aplicar. Si el perfil aún no está listo para una nueva solicitud, te lo decimos directamente para no gastar CAD $100 en una solicitud que no tiene condiciones para prosperar.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "¿Puedo volver a aplicar inmediatamente después del rechazo?",
    a: "Sí, salvo que tu carta de rechazo diga lo contrario. No hay un tiempo mínimo de espera obligatorio. Lo que importa no es cuándo aplicas, sino si tu perfil o documentación cambió desde la solicitud anterior. Aplicar demasiado pronto, sin ningún cambio, casi siempre produce el mismo resultado.",
  },
  {
    q: "¿Cómo pido las GCMS notes para saber por qué me rechazaron?",
    a: "A través de la plataforma ATIP Online de IRCC (atip.ircc.gc.ca). La tarifa es CAD $5 y el plazo oficial es 30 días, aunque en la práctica puede demorar entre 6 y 12 semanas. Importante: solo pueden presentar la solicitud directamente ciudadanos canadienses, residentes permanentes o personas y empresas dentro de Canadá. Si estás en Perú, necesitas un representante en Canadá (ver la pregunta siguiente). Si tu rechazo fue posterior a julio de 2025, revisa primero la carta de rechazo — en muchos casos recientes IRCC ya incluye las notas del oficial automáticamente.",
  },
  {
    q: "¿Puedo pedir mis notas GCMS desde Perú?",
    a: "No directamente. El gobierno de Canadá solo acepta solicitudes ATIP de ciudadanos canadienses, residentes permanentes o personas y empresas que estén físicamente en Canadá. Si resides en Perú, necesitas que alguien con presencia en Canadá presente la solicitud en tu nombre, con tu consentimiento mediante el formulario IMM 5744 de IRCC. Las opciones más comunes son un familiar o amigo en Canadá, o un representante autorizado. Antes de ir por esa vía, revisa si tu carta de rechazo ya incluye las notas del oficial — para rechazos recientes, en muchos casos ya vienen adjuntas.",
  },
  {
    q: "¿El rechazo de la visa canadiense afecta una futura solicitud de visa americana?",
    a: "El formulario DS-160 (visa americana) pregunta si alguna vez te han negado una visa o entrada a algún país. Si tuviste un rechazo canadiense, debes declararlo con honestidad. Ocultarlo puede ser más perjudicial que el rechazo en sí. El rechazo canadiense no impide automáticamente la aprobación de la visa americana, pero es un factor que el oficial americano puede tomar en cuenta.",
  },
  {
    q: "¿Qué documentos nuevos ayudan en una segunda solicitud de visa canadiense?",
    a: "Depende del motivo del rechazo anterior. Si fue por arraigo: carta laboral actualizada con cargo y antigüedad, estados de cuenta de los últimos 6 meses, constancias de propiedad o contratos activos. Si fue por fondos: extractos bancarios con historial de saldo consistente, no solo un saldo alto reciente. Si fue por propósito del viaje: itinerario detallado, alojamiento confirmado, datos de contacto del anfitrión si aplica.",
  },
  {
    q: "¿Cuánto cuesta volver a solicitar la visa canadiense?",
    a: "La tarifa de procesamiento es CAD $100 por persona. Si ya diste biometría en los últimos 10 años, no necesitas pagarla de nuevo. Si es la primera vez o si venció, agrega CAD $85 por persona. Total aproximado: CAD $185 sin biometría reiterada. Nada de esto es reembolsable si la visa es denegada.",
  },
];

export default function VisaCanadienzeRechazadaQueHacer() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://goviaje.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://goviaje.uk/blog" },
      { "@type": "ListItem", position: 3, name: "Visa canadiense rechazada: qué hacer", item: "https://goviaje.uk/blog/visa-canadiense-rechazada-que-hacer" },
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
    headline: "Visa canadiense rechazada: qué hacer y cómo volver a aplicar (2026)",
    author: { "@type": "Organization", name: "GoViaje" },
    publisher: { "@type": "Organization", name: "GoViaje" },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    about: "Rechazo visa de turismo Canadá TRV y segunda solicitud",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa Canadá"
        title="Visa canadiense rechazada: qué hacer y cómo volver a aplicar (2026)"
        dek="Un rechazo de IRCC no es el fin. Desde julio de 2025, las cartas ya incluyen las notas del oficial. Aprende a leerlas, cuándo conviene volver a aplicar y qué documentación cambia el resultado."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-canada"
        relatedLabel="Ver servicio de asesoría Visa Canadá"
        ctaHeading="¿Te rechazaron la visa canadiense y quieres evaluar tu caso?"
        ctaText="Revisamos tu carta de rechazo y las notas del oficial para identificar qué cambiar antes de volver a aplicar. Si el perfil aún no está listo, te lo decimos directamente."
      >
        <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-sm">
          <p className="font-semibold text-[#0B1F3A]">Fuentes oficiales verificadas</p>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/officer-decision-notes.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008F6B] hover:underline"
              >
                → Canada.ca: Notas del oficial en cartas de rechazo (official)
              </a>
            </li>
            <li>
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/transparency/access-information-privacy/requests-information-act.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008F6B] hover:underline"
              >
                → Canada.ca: Requisitos para solicitar ATIP / GCMS notes
              </a>
            </li>
            <li>
              <a
                href="https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=1485&top=16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008F6B] hover:underline"
              >
                → IRCC: Reapplicar después de un rechazo de visa de turismo
              </a>
            </li>
            <li>
              <a
                href="https://ircc.canada.ca/english/information/fees/fees.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008F6B] hover:underline"
              >
                → IRCC: Tarifas vigentes (fees.asp)
              </a>
            </li>
          </ul>
          <p className="mt-2 text-slate-500">Verificado: octubre 2026</p>
        </div>
        <nav className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Artículos relacionados</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/blog/carta-invitacion-arraigo-visa-canada" className="text-sm text-[#008F6B] hover:underline">
                → Carta de invitación y arraigo: qué evalúa Canadá en tu visa
              </Link>
            </li>
            <li>
              <Link href="/blog/me-negaron-la-visa-americana" className="text-sm text-[#008F6B] hover:underline">
                → Me negaron la visa americana: qué hacer
              </Link>
            </li>
          </ul>
        </nav>
        <WALink
          href={WA_URL}
          cta_position="middle"
          service="visa-canada"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1fb855]"
        >
          Escribir a WhatsApp — Evaluar mi caso ahora
        </WALink>
      </ArticleLayout>
    </>
  );
}
