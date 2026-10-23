import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../../components/ArticleLayout";
import WALink from "../../components/WALink";

export const metadata: Metadata = {
  title: "Cómo adelantar tu cita de visa americana en Perú (2026)",
  description:
    "Opciones reales para adelantar tu cita de visa americana en Lima: reprogramar, cita de emergencia y el pilot program de $750. Qué funciona, qué es estafa.",
  alternates: { canonical: "https://goviaje.uk/blog/adelantar-cita-visa-americana-peru" },
  openGraph: {
    title: "Cómo adelantar tu cita de visa americana en Perú (2026)",
    description:
      "Opciones reales para adelantar tu cita de visa americana en Lima: reprogramar, cita de emergencia y el pilot program de $750. Qué funciona, qué es estafa.",
    url: "https://goviaje.uk/blog/adelantar-cita-visa-americana-peru",
    type: "article",
  },
};

const WA_URL =
  "https://wa.me/51928672932?text=Hola%20GoViaje%2C%20quiero%20consultar%20sobre%20adelanto%20de%20cita%20para%20mi%20visa%20americana.";

const SECTIONS = [
  {
    heading: "¿Por qué cuesta tanto conseguir cita de visa americana en Lima?",
    blocks: [
      {
        type: "p" as const,
        text: "La demanda de visas americanas en Perú supera con frecuencia la capacidad de entrevistas disponibles en la Embajada de EE.UU. en Lima. El resultado: fechas de cita que pueden estar a varios meses de distancia, especialmente en temporada alta. Si tienes un viaje planificado, esa espera puede ser un problema real.",
      },
      {
        type: "p" as const,
        text: "Hay opciones legítimas para acortar esa espera, algunas gratuitas y otras de pago. Ninguna garantiza una fecha específica — la disponibilidad depende siempre del sistema consular. Lo que sí puedes controlar es qué herramientas usas y cómo las usas.",
      },
    ],
  },
  {
    heading: "Opción 1: Reprogramar al encontrar disponibilidad (gratis)",
    blocks: [
      {
        type: "p" as const,
        text: "El sistema de citas de la Embajada de EE.UU. en Lima (ais.usvisa-info.com) publica nuevas fechas con cierta regularidad, especialmente cuando otros solicitantes cancelan o reprograman. Si ya tienes una cita agendada, puedes entrar al sistema, revisar si apareció una fecha más próxima y reprogramar directamente. No hay costo adicional.",
      },
      {
        type: "list" as const,
        items: [
          "Inicia sesión en ais.usvisa-info.com con tu cuenta de solicitud.",
          "Accede a tu cita ya agendada y selecciona la opción de reprogramar.",
          "Revisa las fechas disponibles: si hay una más cercana que te convenga, cámbiala.",
          "La reprogramación no afecta tu solicitud ni tu DS-160. Puedes hacerla más de una vez si es necesario.",
          "El mejor momento para revisar es temprano en la mañana o en horarios fuera de pico, cuando el sistema actualiza con más frecuencia.",
        ],
      },
      {
        type: "callout" as const,
        text: "Esta es la opción más accesible y la que deberías explorar primero. No tiene costo y no requiere justificar urgencia. Solo requiere tiempo y constancia para revisar el sistema con regularidad.",
      },
    ],
  },
  {
    heading: "Opción 2: Solicitar una cita expedited (emergencia) — gratis si calificas",
    blocks: [
      {
        type: "p" as const,
        text: "La Embajada de EE.UU. en Lima puede otorgar citas de emergencia (expedited appointments) a solicitantes con situaciones urgentes e imprevistas. Este proceso se gestiona desde ais.usvisa-info.com: primero debes tener una cita regular agendada y luego solicitar la priorización.",
      },
      {
        type: "p" as const,
        text: "La Embajada evalúa cada solicitud y puede aprobarla o rechazarla. Si la aprueba, te asigna una fecha más próxima. Si no, mantienes tu cita original.",
      },
      {
        type: "list" as const,
        items: [
          "Sí califican (situaciones urgentes e imprevistas): emergencia médica documentada, fallecimiento o enfermedad grave de un familiar directo, inicio inminente de clases o programa académico, viaje de negocios urgente no planificado.",
          "No califican: turismo de placer, bodas, graduaciones, conferencias anuales de negocio o academia, acompañar a un familiar que viaja. Presentar estos motivos como urgencia puede resultar en rechazo.",
          "Proceso: inicia sesión en ais.usvisa-info.com, accede a tu solicitud activa, selecciona 'Request Expedite' y sigue las instrucciones. Debes adjuntar documentación que justifique la urgencia.",
        ],
      },
      {
        type: "callout" as const,
        text: "No uses motivos falsos para justificar una cita de emergencia. Si el oficial detecta que la situación no es genuina, puede rechazarte en la ventanilla o afectar tu historial. La cita expedited es para casos reales, no para acelerar viajes de turismo.",
      },
    ],
  },
  {
    heading: "Opción 3: Pilot Program de $750 (cita en 10 días hábiles)",
    blocks: [
      {
        type: "p" as const,
        text: "El Departamento de Estado de EE.UU. implementó un programa piloto (Nonimmigrant Visa Expedited Appointment Pilot Program) vigente hasta el 31 de diciembre de 2026. Permite a solicitantes de visa B1/B2 pagar USD $750 adicionales para obtener una cita dentro de los 10 días hábiles siguientes, sujeto a disponibilidad.",
      },
      {
        type: "list" as const,
        items: [
          "Quién puede usarlo: solicitantes de visa B (B1/B2), ya sea con cita nueva o con cita existente y tarifa MRV aún vigente.",
          "Cómo funciona: primero pagas la tarifa MRV normal ($185) y agendas una cita regular. Luego, si tu embajada participa, aparece la opción de pagar $750 adicionales para una cita expedita dentro de 10 días hábiles.",
          "Condiciones: el pago de $750 debe completarse en 10 minutos de seleccionada la fecha. Una vez confirmada, la cita no puede cambiarse. Si no asistes, el monto no se reembolsa.",
          "Aplicabilidad a Lima: el programa corre en embajadas y consulados seleccionados. La lista de sedes participantes puede cambiar. Verifica si Lima está incluida al acceder a tu cuenta en ais.usvisa-info.com — si la opción aparece, el programa está disponible para ti.",
        ],
      },
      {
        type: "callout" as const,
        text: "Verificado: octubre 2026. Fuente oficial: travel.state.gov — 'Nonimmigrant Visa Expedited Appointment Pilot Program'. La disponibilidad de este programa en la Embajada de Lima puede cambiar. Consulta siempre ais.usvisa-info.com para confirmar si aplica a tu solicitud.",
      },
    ],
  },
  {
    heading: "Lo que NO funciona: estafas y métodos que debes evitar",
    blocks: [
      {
        type: "p" as const,
        text: "Ante la dificultad de conseguir citas, han proliferado servicios informales que prometen conseguirte una fecha garantizada a cambio de un pago. Estos servicios operan al margen del sistema oficial y pueden causarte problemas graves:",
      },
      {
        type: "list" as const,
        items: [
          "Citas \"garantizadas\" vendidas por terceros: cualquier persona que te diga que puede darte una fecha específica está mintiendo. El sistema consular no permite que terceros intervengan en la asignación de citas. Pagar por estas promesas es perder dinero.",
          "Personas que \"tienen contactos en la Embajada\": nadie fuera de la estructura oficial del Departamento de Estado tiene influencia sobre las citas. Estas afirmaciones son falsas.",
          "Formularios DS-160 presupuestados a terceros: no des a nadie acceso a tu cuenta de ais.usvisa-info.com ni les encargues completar tu DS-160. Las declaraciones falsas o inconsistencias en ese formulario pueden derivar en inadmisibilidad.",
          "Servicios que \"hackean\" el sistema o usan métodos no autorizados: cualquier interacción con el sistema consular fuera de los canales oficiales viola los términos de uso y puede resultar en suspensión de tu cuenta de solicitud.",
        ],
      },
      {
        type: "p" as const,
        text: "La regla es simple: si alguien te ofrece una cita garantizada a cambio de dinero y fuera del portal oficial, es una estafa. Las únicas formas legítimas de adelantar la cita son las que describe este artículo.",
      },
    ],
  },
  {
    heading: "Cuándo conviene contratar un servicio de monitoreo de disponibilidad",
    blocks: [
      {
        type: "p" as const,
        text: "Si no tienes tiempo o disponibilidad para revisar el sistema de citas con frecuencia, un servicio de monitoreo puede ayudarte. La diferencia entre un servicio legítimo y una estafa es lo que promete: uno legítimo monitorea la disponibilidad real en el sistema oficial y te alerta cuando aparece una fecha más próxima; uno fraudulento te promete una fecha garantizada.",
      },
      {
        type: "list" as const,
        items: [
          "Un servicio de monitoreo legítimo trabaja dentro del portal oficial ais.usvisa-info.com y solo actúa cuando hay disponibilidad real en el sistema consular.",
          "No garantiza una fecha específica ni un plazo determinado, porque eso depende exclusivamente de cuándo aparezcan plazas disponibles.",
          "Es especialmente útil si tu viaje está próximo y necesitas reaccionar rápido cuando aparezca disponibilidad.",
          "No interfiere con tu solicitud, no accede a información de tu expediente consular y no puede influir en la decisión de la entrevista.",
        ],
      },
    ],
  },
  {
    heading: "Nuestro servicio de monitoreo: qué hacemos y qué no hacemos",
    blocks: [
      {
        type: "p" as const,
        text: "En GoViaje ofrecemos monitoreo de disponibilidad de citas consulares. Vigilamos el sistema oficial para detectar cuando aparecen fechas más próximas a las ya agendadas y te informamos en tiempo real para que puedas reprogramar.",
      },
      {
        type: "list" as const,
        items: [
          "Lo que hacemos: monitoreamos la disponibilidad de citas en el sistema oficial y te alertamos cuando aparece una fecha más próxima a la tuya.",
          "Lo que NO hacemos: no garantizamos una fecha, no intervenimos en el proceso consular, no prometemos plazos específicos. La disponibilidad depende de lo que ofrezca el sistema de la Embajada.",
          "No operamos al margen del sistema oficial ni tomamos acciones que violen los términos de uso del portal consular.",
        ],
      },
      {
        type: "callout" as const,
        text: "GoViaje es una asesoría privada, no afiliada a la Embajada de EE.UU. ni al Departamento de Estado. No tenemos influencia sobre la asignación de citas ni sobre la decisión del oficial consular en tu entrevista.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "¿Puedo adelantar mi cita de visa si ya la tengo agendada?",
    a: "Sí. Puedes reprogramar tu cita desde ais.usvisa-info.com sin costo adicional, siempre que haya disponibilidad. También puedes solicitar una cita expedited (emergencia) si tienes una situación urgente e imprevista que lo justifique. Y si el Pilot Program de $750 está disponible en Lima, puedes usarlo para una fecha dentro de 10 días hábiles, previo pago.",
  },
  {
    q: "¿Qué es una cita de emergencia (expedited) y cómo la pido?",
    a: "Es una solicitud de priorización que puedes presentar en ais.usvisa-info.com después de tener una cita regular agendada. La Embajada la aprueba solo para situaciones urgentes e imprevistas: emergencia médica, fallecimiento de familiar, inicio inminente de clases. No aplica para turismo, bodas, graduaciones ni viajes planificados con anticipación. Si la aprueba, te asignan una fecha más próxima. Si no, mantienes tu cita original.",
  },
  {
    q: "¿En qué consiste el Expedited Appointment Pilot Program de $750?",
    a: "Es un programa piloto del Departamento de Estado (vigente hasta dic 2026) que permite a solicitantes de visa B1/B2 pagar USD $750 adicionales para obtener una cita dentro de los 10 días hábiles siguientes, sujeto a disponibilidad en la embajada. Primero debes haber pagado la tarifa MRV normal ($185). El pago de $750 no es reembolsable y la cita no puede cambiarse una vez confirmada. Verifica si la opción aparece en tu cuenta de ais.usvisa-info.com, ya que la lista de sedes participantes puede cambiar.",
  },
  {
    q: "¿Es legal contratar a alguien para que monitoree las citas por mí?",
    a: "Sí, siempre que el servicio opere dentro del sistema oficial y no prometa citas garantizadas. Un servicio de monitoreo legítimo vigila la disponibilidad en el portal oficial y te alerta cuando aparece una fecha más próxima. Lo ilegal —y lo que debes evitar— es cualquier servicio que afirme tener contactos en la Embajada, que prometa fechas garantizadas o que opere al margen del sistema consular.",
  },
  {
    q: "¿Qué hago si mi viaje está próximo y no hay citas disponibles?",
    a: "Primero revisa el sistema con frecuencia (las cancellaciones aparecen en cualquier momento). Si tienes una situación genuinamente urgente e imprevista, presenta una solicitud de cita expedited. Evalúa si el Pilot Program de $750 está disponible en Lima. Y si no tienes tiempo para monitorear tú mismo, considera un servicio de monitoreo legítimo que te avise cuando aparezca disponibilidad. No pagues por promesas de citas garantizadas.",
  },
];

export default function AdelantarCitaVisaAmericanaPeruPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://goviaje.uk" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://goviaje.uk/blog" },
      { "@type": "ListItem", position: 3, name: "Cómo adelantar tu cita de visa americana en Perú", item: "https://goviaje.uk/blog/adelantar-cita-visa-americana-peru" },
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
    headline: "Cómo adelantar tu cita de visa americana en Perú (2026)",
    author: { "@type": "Organization", name: "GoViaje" },
    publisher: { "@type": "Organization", name: "GoViaje" },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    about: "Adelantar cita visa americana Lima Perú",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa USA"
        title="Cómo adelantar tu cita de visa americana en Perú (2026)"
        dek="Hay tres formas legítimas de conseguir una fecha más próxima: reprogramar cuando haya disponibilidad, solicitar cita de emergencia si calificas, o el Pilot Program de $750. Ninguna garantiza una fecha; todas trabajan dentro del sistema oficial."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-usa"
        relatedLabel="Ver servicio de monitoreo de citas"
        ctaHeading="¿Quieres monitorear disponibilidad para adelantar tu cita?"
        ctaText="Te alertamos cuando aparezca una fecha más próxima en el sistema consular. No garantizamos una fecha específica — trabajamos dentro de lo que ofrece el sistema oficial de la Embajada."
      >
        <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-sm">
          <p className="font-semibold text-[#0B1F3A]">Fuentes oficiales verificadas</p>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="https://travel.state.gov/content/travel/en/News/visas-news/niv-visa-expedited-appointment-pilot-program.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008F6B] hover:underline"
              >
                → travel.state.gov: Expedited Appointment Pilot Program
              </a>
            </li>
            <li>
              <a
                href="https://ais.usvisa-info.com/en-pe/niv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008F6B] hover:underline"
              >
                → ais.usvisa-info.com: Portal oficial de citas para Perú
              </a>
            </li>
            <li>
              <a
                href="https://pe.usembassy.gov/visas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008F6B] hover:underline"
              >
                → pe.usembassy.gov: Información de visas — Embajada en Lima
              </a>
            </li>
          </ul>
          <p className="mt-2 text-slate-500">Verificado: octubre 2026</p>
        </div>
        <nav className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Artículos relacionados</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/blog/cuanto-cuesta-demora-visa-americana" className="text-sm text-[#008F6B] hover:underline">
                → Visa americana: costo y tiempo de espera
              </Link>
            </li>
            <li>
              <Link href="/blog/renovacion-visa-americana-sin-entrevista" className="text-sm text-[#008F6B] hover:underline">
                → Renovación sin entrevista: quiénes califican y cómo funciona
              </Link>
            </li>
          </ul>
        </nav>
        <WALink
          href={WA_URL}
          cta_position="middle"
          service="visa-usa"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1fb855]"
        >
          Escribir a WhatsApp — Consultar monitoreo de citas
        </WALink>
      </ArticleLayout>
    </>
  );
}
