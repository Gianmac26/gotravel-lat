import type { Metadata } from "next";
import Link from "next/link";

function wa(text: string) {
  return `https://wa.me/51928672932?text=${encodeURIComponent(text)}`;
}

const WA_GENERAL = wa("Hola GoTravel, quiero información sobre la visa de turismo para Canadá.");
const WA_BASICO = wa("Hola GoTravel, quiero cotizar el plan Básico para visa de turismo a Canadá.");
const WA_SMART = wa("Hola GoTravel, quiero cotizar el plan Smart para visa de turismo a Canadá.");
const WA_PREMIUM = wa("Hola GoTravel, quiero cotizar el plan Premium para visa de turismo a Canadá.");
const WA_RECHAZO = wa("Hola GoTravel, me rechazaron una visa para Canadá y quiero saber si puedo volver a aplicar.");
const WA_ARRAIGO = wa("Hola GoTravel, quiero evaluar mi perfil de arraigo para la visa de Canadá.");

const IA_URL = "/analisis-perfil-ia";

type Plan = {
  name: string;
  price: string;
  badge?: string;
  featured: boolean;
  items: string[];
  wa: string;
};

const PLANES: Plan[] = [
  {
    name: "Básico",
    price: "S/350",
    featured: false,
    items: [
      "Evaluación del perfil del cliente",
      "Elaboración del itinerario",
      "Llenado del formulario",
      "Subida de documentos",
      "Organización de sustentos de arraigo",
    ],
    wa: WA_BASICO,
  },
  {
    name: "Smart",
    price: "S/450",
    badge: "Más solicitado",
    featured: true,
    items: [
      "Todo lo del Plan Básico",
      "Carta de intención en inglés",
      "Asesoría sobre la mejor estrategia para aplicar",
      "Creación del usuario IRCC",
      "Programación para la toma de biométricos",
      "Soporte continuo",
    ],
    wa: WA_SMART,
  },
  {
    name: "Premium",
    price: "S/550",
    featured: false,
    items: [
      "Todo lo del Plan Smart",
      "Seguimiento del envío y recojo del pasaporte",
      "Modelo optimizado de carta de invitación en inglés",
      "Seguro de trámite gratuito por rechazo",
    ],
    wa: WA_PREMIUM,
  },
];

const COMPARATIVA_FEATURES: {
  feature: string;
  basico: boolean;
  smart: boolean;
  premium: boolean;
}[] = [
  { feature: "Evaluación del perfil del cliente", basico: true, smart: true, premium: true },
  { feature: "Elaboración del itinerario", basico: true, smart: true, premium: true },
  { feature: "Llenado del formulario", basico: true, smart: true, premium: true },
  { feature: "Subida de documentos", basico: true, smart: true, premium: true },
  { feature: "Organización de sustentos de arraigo", basico: true, smart: true, premium: true },
  { feature: "Carta de intención en inglés", basico: false, smart: true, premium: true },
  { feature: "Asesoría sobre estrategia de aplicación", basico: false, smart: true, premium: true },
  { feature: "Creación del usuario IRCC", basico: false, smart: true, premium: true },
  { feature: "Programación para toma de biométricos", basico: false, smart: true, premium: true },
  { feature: "Soporte continuo", basico: false, smart: true, premium: true },
  { feature: "Seguimiento del envío y recojo del pasaporte", basico: false, smart: false, premium: true },
  { feature: "Carta de invitación optimizada en inglés", basico: false, smart: false, premium: true },
  { feature: "Seguro de trámite gratuito por rechazo", basico: false, smart: false, premium: true },
];

const PROCESO_STEPS = [
  {
    number: "01",
    title: "Evaluación de tu perfil",
    text: "Analizamos tu situación laboral, económica y migratoria para identificar fortalezas y alertas antes de iniciar.",
  },
  {
    number: "02",
    title: "Preparación del expediente",
    text: "Te guiamos en la recopilación y organización de cada documento que el IRCC necesita revisar.",
  },
  {
    number: "03",
    title: "Revisión documental rigurosa",
    text: "Revisamos cada documento antes de presentarlo. Detectamos errores o vacíos que podrían afectar tu solicitud.",
  },
  {
    number: "04",
    title: "Carga en línea ante el IRCC",
    text: "Te acompañamos en la carga oficial de tu expediente en el sistema del IRCC (Gobierno de Canadá).",
  },
  {
    number: "05",
    title: "Seguimiento y orientación",
    text: "Resolvemos tus dudas durante el proceso y te orientamos sobre tiempos y próximos pasos.",
  },
] as const;

const FAQS = [
  {
    q: "¿Garantizan la aprobación de la visa?",
    a: "No. Ninguna empresa puede garantizar la aprobación. La decisión final depende exclusivamente del IRCC (Gobierno de Canadá). Lo que hacemos es ayudarte a presentar el expediente más sólido posible.",
  },
  {
    q: "¿Cuánto tarda el proceso de solicitud?",
    a: "Los tiempos de decisión varían según el IRCC y el volumen de solicitudes. Actualmente pueden tomar entre 4 y 12 semanas desde la carga del expediente completo. Recomendamos iniciar con al menos 3 meses de anticipación.",
  },
  {
    q: "¿Necesito comprar boletos antes de aplicar?",
    a: "No. No es necesario comprar boletos aéreos para aplicar a la visa de Canadá. Sin embargo, es importante que el motivo y las fechas de tu viaje sean coherentes con tu solicitud. Te orientamos sobre cómo presentar esta información correctamente.",
  },
  {
    q: "¿Hay entrevista consular para la visa de Canadá?",
    a: "Generalmente no. A diferencia de la visa americana, la visa de turismo a Canadá (TRV) se tramita en línea ante el IRCC y no requiere entrevista presencial en la mayoría de los casos.",
  },
  {
    q: "¿Qué es el arraigo y por qué importa?",
    a: "El arraigo son los vínculos que demuestran que tienes razones reales para regresar a tu país: empleo, familia, propiedades, negocios. El IRCC evalúa estos vínculos para determinar que tu intención es de turismo y no de permanencia.",
  },
  {
    q: "¿Me pueden ayudar si ya me rechazaron antes?",
    a: "Sí. Un rechazo previo no te impide volver a aplicar, pero requiere una estrategia cuidadosa. Analizamos las razones del rechazo y evaluamos qué cambió en tu perfil antes de recomendar una nueva solicitud.",
  },
  {
    q: "¿Atienden a personas fuera de Perú?",
    a: "Sí. Trabajamos 100% online y acompañamos a viajeros de Colombia, Ecuador, México, Argentina y otros países de Latinoamérica.",
  },
  {
    q: "¿La visa canadiense da acceso a Estados Unidos?",
    a: "No. La visa de Canadá solo permite ingreso a Canadá. Para ingresar a Estados Unidos necesitas una visa B1/B2 o ser ciudadano de un país del Programa de Exención de Visas (VWP).",
  },
  {
    q: "¿Cuánto tiempo de vigencia tiene la visa?",
    a: "La duración la determina el oficial del IRCC según tu perfil. Puede ser de meses o hasta varios años con múltiples entradas. El tiempo de permanencia permitido por visita es generalmente de hasta 6 meses.",
  },
  {
    q: "¿Qué pasa si el IRCC pide documentos adicionales?",
    a: "Es parte del proceso normal. Si el IRCC solicita información complementaria, te acompañamos para responder de forma adecuada y oportuna.",
  },
  {
    q: "¿Es necesario tener saldo mínimo en el banco?",
    a: "No existe un saldo mínimo oficial establecido. Lo importante es demostrar solvencia económica proporcional al viaje planeado: hospedaje, movilidad, estadía. Te orientamos sobre cómo presentar esta información.",
  },
  {
    q: "¿Cuándo NO conviene aplicar?",
    a: "Hay perfiles en los que aplicar sin preparación puede resultar en un rechazo que complique futuras solicitudes. Si tienes historial de rechazos recientes, ingresos inestables o vínculos débiles, lo mejor es evaluar primero antes de iniciar.",
  },
] as const;

export const metadata: Metadata = {
  title: "Visa de Turismo a Canadá — Asesoría Profesional | GoTravel",
  description:
    "Gestiona tu visa de turismo a Canadá con asesoría profesional ante el IRCC. Sin entrevista consular, expediente 100% en línea. Más de 10 años acompañando solicitudes.",
};

export default function VisaCanada() {
  return (
    <main className="min-h-screen bg-white pb-20 text-slate-900 sm:pb-0">

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#0B1F3A] px-4 pb-14 pt-5 text-white sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,200,150,0.14),transparent_42%),linear-gradient(315deg,rgba(255,255,255,0.08),transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl">
          <header className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight text-white" aria-label="GoTravel">
              Go<span className="text-[#00C896]">Travel</span>
            </Link>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15 sm:inline-flex"
            >
              WhatsApp
            </a>
          </header>

          <div className="pt-14 sm:pt-20 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-10">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-[#00C896]/30 bg-[#00C896]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#00C896]">
                Visa de Turismo — Canadá (TRV)
              </p>
              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight min-[375px]:text-5xl md:text-6xl">
                Visa de Turismo a Canadá — Asesoría Profesional para tu Solicitud ante el IRCC
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 min-[375px]:text-lg">
                En Canadá no hay entrevista consular. Tu expediente es lo único que evalúa el IRCC. Nosotros te ayudamos a construirlo correctamente — con rigor, experiencia y acompañamiento real.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BtnPrimary href={IA_URL} className="w-full sm:w-auto">
                  Evalúa tu caso ahora
                  <ArrowIcon />
                </BtnPrimary>
                <BtnWA href={WA_GENERAL} className="w-full sm:w-auto">
                  Hablar por WhatsApp
                </BtnWA>
              </div>
              <p className="mt-3 text-center text-xs text-slate-400 sm:text-left">
                Sin compromiso · Respuesta en menos de 24 horas
              </p>
              <div className="mt-8 grid gap-3 text-sm text-slate-300 min-[375px]:grid-cols-3">
                {["+10 años", "Sin entrevista", "100% online"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <CheckIcon className="mb-2 h-4 w-4 text-[#00C896]" />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur sm:p-7 lg:mt-0">
              <div className="rounded-[1.5rem] bg-white p-5 text-[#0B1F3A] sm:p-7">
                <p className="text-sm font-bold text-[#00A87D]">Diferencia clave</p>
                <h2 className="mt-3 text-xl font-black leading-snug tracking-tight">
                  La visa canadiense se decide por expediente, no por entrevista
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Un oficial del IRCC revisa tu documentación en línea. No hay una segunda oportunidad para aclarar dudas en persona. Por eso, preparar correctamente el expediente marca la diferencia.
                </p>
                <div className="mt-6 space-y-3">
                  {["Perfil de arraigo", "Soporte financiero", "Coherencia del viaje"].map((label) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl bg-[#F1F5F9] px-4 py-3">
                      <span className="text-sm font-semibold">{label}</span>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#00C896]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUÉ ES EL IRCC ═══ */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>¿Qué es el IRCC?</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              El organismo del Gobierno de Canadá que decide tu visa
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              IRCC son las siglas de <strong>Immigration, Refugees and Citizenship Canada</strong> — el ministerio federal canadiense encargado de procesar todas las solicitudes de visa de turismo (TRV), residencia y ciudadanía.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A diferencia de otros países, Canadá no tiene una embajada física que atienda solicitudes de turismo en la mayoría de países de Latinoamérica. Todo el proceso se realiza en línea directamente en la plataforma oficial del IRCC.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Organismo oficial", value: "Gobierno de Canadá" },
              { label: "Tipo de visa", value: "Temporary Resident Visa (TRV)" },
              { label: "Proceso", value: "100% en línea" },
              { label: "Decisión", value: "Revisión por oficial del IRCC" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
                <p className="mt-2 text-base font-bold text-[#0B1F3A]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CÓMO EVALÚA EL IRCC ═══ */}
      <section className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>Cómo toma su decisión</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              ¿Qué evalúa el oficial del IRCC al revisar tu expediente?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              No hay fórmula pública. Pero la experiencia en solicitudes procesadas muestra que el IRCC presta especial atención a los siguientes factores.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", title: "Arraigo en el país de origen", desc: "Empleo activo, familia, bienes e ingresos que demuestren razones reales para regresar." },
              { num: "02", title: "Solvencia económica", desc: "Capacidad financiera proporcional al viaje planificado: estadía, transporte y alojamiento." },
              { num: "03", title: "Motivo y coherencia del viaje", desc: "Que el propósito del viaje sea claro y esté respaldado por el resto del expediente." },
              { num: "04", title: "Historial migratorio", desc: "Viajes anteriores respetados, visas vigentes en otros países, ausencia de overstays o rechazos sin resolver." },
              { num: "05", title: "Documentación presentada", desc: "Que cada documento sea completo, legible, actualizado y coherente con la información declarada." },
              { num: "06", title: "Coherencia general del expediente", desc: "Que todos los elementos —itinerario, carta, sustentos— cuenten la misma historia de forma consistente." },
            ].map((item) => (
              <article key={item.num} className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1F3A] text-sm font-black text-[#00C896]">
                  {item.num}
                </span>
                <h3 className="mt-5 text-base font-black leading-snug text-[#0B1F3A]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VISA AMERICANA VIGENTE ═══ */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl">
            <Eyebrow>Si ya tienes visa americana</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Una visa B1/B2 vigente puede reforzar tu expediente canadiense
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Haber obtenido y usado correctamente una visa americana (B1/B2) es una señal positiva para el IRCC. Demuestra que otro sistema de control migratorio exigente ya evaluó tu perfil y confió en tu intención de retorno. Sin embargo, no garantiza la aprobación — cada solicitud se evalúa de forma independiente.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Señal de confiabilidad", desc: "El IRCC puede interpretar la visa americana vigente como indicador de historial migratorio limpio." },
                { title: "No garantiza aprobación", desc: "Tener visa americana no asegura la aprobación canadiense. Los criterios de evaluación son independientes." },
                { title: "Cómo incluirla", desc: "Te orientamos sobre cómo presentar esta información en el expediente para que el oficial pueda considerarla." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] p-6">
                  <CheckIcon className="h-5 w-5 text-[#00A87D]" />
                  <p className="mt-4 text-base font-bold leading-snug text-[#0B1F3A]">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[480px] overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white text-sm shadow-sm">
                <thead>
                  <tr className="bg-[#F1F5F9]">
                    <th className="px-6 py-4 text-left font-bold text-[#0B1F3A]">Aspecto</th>
                    <th className="px-6 py-4 text-center font-bold text-[#0B1F3A]">Canadá (TRV)</th>
                    <th className="px-6 py-4 text-center font-bold text-[#0B1F3A]">Estados Unidos (B1/B2)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {[
                    ["Entrevista consular", "No requerida (generalmente)", "Sí, obligatoria"],
                    ["Proceso", "100% en línea ante el IRCC", "Presencial en embajada"],
                    ["Decisión basada en", "Expediente documental", "Entrevista + documentos"],
                    ["Tiempo estimado", "4 a 12 semanas", "Variable, desde semanas"],
                    ["Vigencia usual", "Meses a años (múltiple entrada)", "Hasta 10 años"],
                  ].map(([aspect, canada, usa]) => (
                    <tr key={String(aspect)} className="hover:bg-[#F8FAFC]">
                      <td className="px-6 py-4 font-medium text-[#0B1F3A]">{aspect}</td>
                      <td className="px-6 py-4 text-center text-slate-700">{canada}</td>
                      <td className="px-6 py-4 text-center text-slate-700">{usa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ¿PARA QUIÉN ES? ═══ */}
      <section className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>¿Para quién es este servicio?</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Acompañamos a quienes quieren preparar una solicitud sólida
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Primera solicitud", desc: "Personas que nunca han aplicado y quieren entender el proceso antes de comenzar." },
              { title: "Segunda oportunidad", desc: "Viajeros que tuvieron un rechazo previo y necesitan una estrategia diferente." },
              { title: "Perfil en construcción", desc: "Personas que quieren reforzar su arraigo o documentación antes de aplicar." },
              { title: "Viaje planificado", desc: "Quienes tienen un viaje próximo y necesitan iniciar el proceso con anticipación suficiente." },
              { title: "Latinoamérica", desc: "Atendemos a viajeros de Perú, Colombia, Ecuador, México y otros países de la región." },
              { title: "100% online", desc: "Toda la asesoría y acompañamiento se realiza de forma remota, sin desplazamientos." },
            ].map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:border-[#00C896]/30 hover:shadow-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00C896]/10 text-sm font-bold text-[#00A87D]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-base font-semibold leading-snug text-[#0B1F3A]">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ¿CUÁNDO NO RECOMENDAMOS APLICAR? ═══ */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl">
            <Eyebrow>Transparencia antes de iniciar</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              ¿Cuándo NO recomendamos aplicar?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Creemos en la transparencia. Hay situaciones en las que aplicar sin preparación puede generar un rechazo que complique futuras solicitudes. Si identificamos alguna de estas condiciones, te lo decimos antes de comenzar.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { flag: "Rechazo reciente sin cambios en el perfil", note: "Si tu situación no cambió desde el rechazo, presentar la misma solicitud tiene alta probabilidad de ser denegada nuevamente." },
                { flag: "Vínculos de arraigo muy débiles", note: "Sin empleo estable, familia o bienes en el país de origen, el IRCC puede interpretar intención de permanencia." },
                { flag: "Ingresos insuficientes o inconsistentes", note: "No demostrar capacidad económica proporcional al viaje planeado puede levantar observaciones." },
                { flag: "Historial migratorio comprometido", note: "Overstays, cancelaciones o problemas en viajes anteriores requieren una estrategia específica antes de volver a aplicar." },
              ].map((item) => (
                <div key={item.flag} className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <p className="font-bold text-amber-900">{item.flag}</p>
                  <p className="mt-2 text-sm leading-relaxed text-amber-800">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-[#F1F5F9] p-6 text-center sm:p-8">
              <p className="text-base font-semibold text-[#0B1F3A]">¿No estás seguro si tu perfil está listo?</p>
              <p className="mt-2 text-sm text-slate-600">Evalúa tu caso antes de iniciar. Es el primer paso que recomendamos.</p>
              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BtnPrimary href={IA_URL} className="w-full sm:w-auto">
                  Evalúa tu caso ahora
                  <ArrowIcon />
                </BtnPrimary>
                <BtnWA href={WA_GENERAL} className="w-full sm:w-auto">
                  Hablar por WhatsApp
                </BtnWA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESO ═══ */}
      <section className="bg-[#0B1F3A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow dark>Proceso de trabajo</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Cómo te acompañamos paso a paso
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {PROCESO_STEPS.map((step) => (
              <article key={step.number} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00C896]/15 text-sm font-black text-[#00C896]">
                  {step.number}
                </span>
                <h3 className="mt-5 text-base font-black leading-snug text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:mt-12 sm:p-10">
            <h3 className="text-xl font-bold text-white sm:text-2xl">¿Listo para iniciar tu proceso?</h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
              Recibe una evaluación profesional de tu caso y conoce los pasos a seguir.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BtnPrimary href={IA_URL} className="w-full sm:w-auto">
                Evalúa tu caso ahora
                <ArrowIcon />
              </BtnPrimary>
              <BtnWA href={WA_GENERAL} className="w-full sm:w-auto">
                Hablar por WhatsApp
              </BtnWA>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BIOMÉTRICOS ═══ */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Biométricos canadienses</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Registro biométrico con vigencia de 10 años
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              La solicitud de visa de Canadá requiere el registro de biométricos: huella dactilar y fotografía. Este registro se realiza en un centro de biométricos autorizado y tiene una vigencia de 10 años.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Si ya registraste tus biométricos en el pasado y están vigentes, no necesitas repetirlos. Si es tu primera solicitud, te orientamos sobre cuándo y cómo agendar la cita dentro del proceso.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "¿Qué se registra?", desc: "Huellas dactilares y fotografía digital ante el centro de aplicación autorizado por el IRCC." },
              { title: "Vigencia", desc: "10 años desde el registro. Si están vigentes, no es necesario repetirlos en una nueva solicitud." },
              { title: "¿Cuándo se hace?", desc: "Luego de presentar la solicitud al IRCC o en paralelo, según las instrucciones del sistema." },
              { title: "¿Dónde en Perú?", desc: "En el centro de aplicación VFS Global autorizado por el IRCC, ubicado en Lima." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] p-5">
                <p className="text-sm font-bold text-[#0B1F3A]">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIEMPO DE RESPUESTA ═══ */}
      <section className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl">
            <Eyebrow>Tiempos de respuesta</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              ¿Cuánto tiempo tarda el IRCC en resolver?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              El IRCC no tiene plazos fijos garantizados. Los tiempos varían según el volumen de solicitudes, el país de residencia y la complejidad del caso. Actualmente, la mayoría de solicitudes de turismo desde Latinoamérica toman entre 4 y 12 semanas desde la carga del expediente completo.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { range: "4–6 semanas", label: "Tiempo mínimo estimado", note: "Expedientes completos, perfiles sin observaciones." },
                { range: "6–12 semanas", label: "Tiempo habitual", note: "El rango más frecuente para solicitudes estándar desde la región." },
                { range: "+12 semanas", label: "Con revisión adicional", note: "Cuando el IRCC solicita información complementaria o documentos extra." },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 text-center shadow-sm">
                  <p className="text-3xl font-black text-[#0B1F3A]">{item.range}</p>
                  <p className="mt-2 text-sm font-bold text-[#00A87D]">{item.label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#E2E8F0] bg-white p-5 text-sm leading-7 text-slate-600 sm:p-6">
              <strong className="text-[#0B1F3A]">Recomendación:</strong> Inicia el proceso con al menos 3 meses de anticipación a tu fecha planificada de viaje. Los tiempos de respuesta del IRCC no están bajo el control de GoTravel ni del solicitante.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PAGO OFICIAL CAD 185 ═══ */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl">
            <Eyebrow>Costo oficial ante el IRCC</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              El pago al Gobierno de Canadá es de CAD 185
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Independientemente del plan que elijas con GoTravel, existe un costo oficial establecido por el Gobierno de Canadá que se paga directamente al IRCC al momento de presentar la solicitud. Este monto es obligatorio y no forma parte del servicio de asesoría.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] p-6">
                <p className="text-4xl font-black text-[#0B1F3A]">CAD 185</p>
                <p className="mt-2 text-sm font-bold text-[#00A87D]">Tasa oficial del IRCC por persona</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Este monto incluye CAD 100 por la solicitud de visa de turismo y CAD 85 por el registro biométrico. Se paga en línea al momento de cargar el expediente.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm font-black uppercase tracking-wide text-amber-900">Importante</p>
                <p className="mt-3 text-sm leading-6 text-amber-800">
                  Este pago va directamente al Gobierno de Canadá y es independiente del costo del servicio de GoTravel. Si la solicitud es denegada, el IRCC no reembolsa esta tasa. El plan Premium de GoTravel incluye un seguro de trámite gratuito ante rechazo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLANES ═══ */}
      <section id="planes" className="scroll-mt-10 bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>Planes disponibles</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Elige el nivel de acompañamiento para tu solicitud
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
              Todos los planes incluyen evaluación inicial y acompañamiento por especialistas.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PLANES.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">Sin compromiso · Respuesta en menos de 24 horas</p>
        </div>
      </section>

      {/* ═══ TABLA COMPARATIVA DE PLANES ═══ */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>Comparativa de planes</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              ¿Qué incluye cada plan?
            </h2>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white text-sm shadow-sm">
              <thead>
                <tr className="bg-[#0B1F3A] text-white">
                  <th className="px-6 py-4 text-left font-bold">Servicio incluido</th>
                  <th className="px-5 py-4 text-center font-bold text-slate-300">
                    Básico<br /><span className="text-xs font-normal opacity-70">S/350</span>
                  </th>
                  <th className="px-5 py-4 text-center font-bold text-[#00C896]">
                    Smart ★<br /><span className="text-xs font-normal opacity-70">S/450</span>
                  </th>
                  <th className="px-5 py-4 text-center font-bold text-slate-300">
                    Premium<br /><span className="text-xs font-normal opacity-70">S/550</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {COMPARATIVA_FEATURES.map((row) => (
                  <tr key={row.feature} className="hover:bg-[#F8FAFC]">
                    <td className="px-6 py-4 font-medium text-[#0B1F3A]">{row.feature}</td>
                    <td className="px-5 py-4 text-center">{row.basico ? <CheckCell /> : <DashCell />}</td>
                    <td className="bg-[#00C896]/5 px-5 py-4 text-center">{row.smart ? <CheckCell /> : <DashCell />}</td>
                    <td className="px-5 py-4 text-center">{row.premium ? <CheckCell /> : <DashCell />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ CARTA DE INVITACIÓN — PREMIUM ═══ */}
      <section className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-10">
            <Eyebrow>Exclusivo del plan Premium</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Carta de invitación optimizada en inglés
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Si viajas para visitar a un familiar o amigo residente en Canadá, una carta de invitación bien redactada puede reforzar significativamente tu expediente. El plan Premium incluye un modelo optimizado de carta de invitación en inglés, preparado según los estándares que el IRCC espera encontrar.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { title: "¿Cuándo aplica?", desc: "Cuando el motivo del viaje incluye visitar a una persona residente en Canadá: familiar, amigo o conocido." },
                { title: "¿Qué debe incluir?", desc: "Datos del anfitrión, propósito de la visita, duración estimada del viaje y relación con el solicitante. Todo en inglés." },
                { title: "¿Por qué importa?", desc: "Una carta mal redactada puede generar inconsistencias en el expediente. El modelo del plan Premium está optimizado para evitar esos errores." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-[#F1F5F9] p-5">
                  <p className="text-sm font-bold text-[#0B1F3A]">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <BtnWA href={WA_PREMIUM} className="w-full sm:w-auto">
                Consultar plan Premium
              </BtnWA>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ARRAIGO ═══ */}
      <section className="bg-[#0B1F3A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow dark>Arraigo y vínculos</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              El IRCC evalúa tu intención de retorno
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              La visa canadiense no es solo un trámite documental. El IRCC analiza si tienes razones reales para volver a tu país: tu empleo, tu familia, tus bienes. Eso es el arraigo — y es uno de los factores más determinantes en la evaluación.
            </p>
            <div className="mt-8">
              <BtnWA href={WA_ARRAIGO} className="w-full sm:w-auto">
                Evaluar mi arraigo
              </BtnWA>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "Empleo o negocio", desc: "Demostrar actividad laboral activa y estable en el país de origen." },
              { title: "Vínculos familiares", desc: "Cónyuge, hijos u otros dependientes que permanecen en el país." },
              { title: "Bienes y propiedades", desc: "Inmuebles, vehículos u otros activos que anclan al solicitante." },
              { title: "Historial de retorno", desc: "Viajes anteriores donde se respetó la duración autorizada." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <CheckIcon className="h-5 w-5 text-[#00C896]" />
                <p className="mt-3 font-bold leading-snug text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RECHAZO PREVIO ═══ */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-10">
            <Eyebrow>Si ya te rechazaron antes</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Un rechazo no es el final — pero sí requiere una estrategia
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Tener un rechazo previo no te impide volver a aplicar. Lo que sí es importante es no repetir el mismo expediente sin cambios. Analizamos qué ocurrió, qué cambió en tu perfil desde entonces y qué debería ser diferente esta vez.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { step: "01", text: "Análisis del rechazo anterior" },
                { step: "02", text: "Evaluación de cambios en el perfil" },
                { step: "03", text: "Estrategia para la nueva solicitud" },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl bg-[#F1F5F9] p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1F3A] text-sm font-black text-[#00C896]">
                    {item.step}
                  </span>
                  <p className="mt-4 text-sm font-semibold leading-snug text-[#0B1F3A]">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <BtnWA href={WA_RECHAZO} className="w-full sm:w-auto">
                Consultar mi caso de rechazo
              </BtnWA>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA EVALUACIÓN IA ═══ */}
      <section className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>Antes de aplicar</Eyebrow>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-5xl">
            Conoce tus posibilidades reales antes de iniciar tu solicitud
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Nuestro análisis de perfil identifica fortalezas, alertas y oportunidades de mejora antes de que inviertas tiempo y dinero en el proceso.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BtnPrimary href={IA_URL} className="w-full sm:w-auto">
              Evalúa tu caso ahora
              <ArrowIcon />
            </BtnPrimary>
            <BtnWA href={WA_GENERAL} className="w-full sm:w-auto">
              Hablar por WhatsApp
            </BtnWA>
          </div>
          <p className="mt-3 text-sm text-slate-500">Sin compromiso · Respuesta en menos de 24 horas</p>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Dudas frecuentes sobre la visa de Canadá
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-[#0B1F3A]">
                  <span>{faq.q}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-slate-500 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-7 text-slate-600">{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-[#F1F5F9] p-6 text-center sm:p-8">
            <h3 className="text-xl font-bold text-[#0B1F3A] sm:text-2xl">¿Todavía tienes dudas?</h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
              Nuestro equipo puede orientarte sobre tu situación específica.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BtnWA href={WA_GENERAL} className="w-full sm:w-auto">
                Hablar por WhatsApp
              </BtnWA>
              <BtnPrimary href={IA_URL} className="w-full sm:w-auto">
                Evaluar mi caso
                <ArrowIcon />
              </BtnPrimary>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="bg-[#0B1F3A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
            ¿Quieres conocer tus posibilidades reales antes de aplicar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Evaluamos tu perfil, identificamos los puntos que reforzar y te acompañamos en cada etapa del proceso — para que llegues al IRCC con la mejor solicitud posible.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BtnPrimary href={IA_URL} className="w-full sm:w-auto">
              Evalúa tu caso ahora
              <ArrowIcon />
            </BtnPrimary>
            <BtnWA href={WA_GENERAL} className="w-full sm:w-auto">
              Hablar por WhatsApp
            </BtnWA>
          </div>
          <p className="mt-3 text-sm text-slate-400">Sin compromiso · Respuesta en menos de 24 horas</p>
        </div>
      </section>

      {/* ═══ STICKY MOBILE BAR ═══ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
        <a
          href={IA_URL}
          className="flex flex-1 items-center justify-center rounded-full bg-[#0B1F3A] px-4 py-3 text-sm font-bold text-white"
        >
          Evaluar caso
        </a>
        <a
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white"
        >
          <WAIcon className="h-4 w-4 shrink-0" />
          WhatsApp
        </a>
      </div>
    </main>
  );
}

// ═══ COMPONENTS ═══

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-wide ${
        dark ? "bg-[#00C896]/15 text-[#00C896]" : "bg-[#00C896]/10 text-[#00A87D]"
      }`}
    >
      {children}
    </p>
  );
}

function BtnPrimary({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#00C896] px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-lg shadow-[#00C896]/20 transition hover:bg-[#00b386] min-[375px]:text-base ${className}`}
    >
      {children}
    </a>
  );
}

function BtnWA({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#1fb855] min-[375px]:text-base ${className}`}
    >
      <WAIcon className="h-5 w-5 shrink-0" />
      <span>{children}</span>
    </a>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative rounded-3xl p-6 shadow-sm ${
        plan.featured
          ? "border-2 border-[#00C896] bg-white shadow-xl"
          : "border border-[#E2E8F0] bg-white"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-4 left-6 rounded-full bg-[#00C896] px-4 py-2 text-sm font-bold text-[#0B1F3A]">
          {plan.badge}
        </span>
      )}
      <h3 className="text-2xl font-black text-[#0B1F3A]">{plan.name}</h3>
      <p className="mt-4 text-4xl font-black text-[#00A87D]">{plan.price}</p>
      <ul className="mt-6 space-y-3">
        {plan.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#00A87D]" />
            <span className="text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={plan.wa}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0B1F3A] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#0d2548]"
      >
        <WAIcon className="h-4 w-4 shrink-0" />
        Solicitar por WhatsApp
      </a>
    </div>
  );
}

function CheckCell() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#00C896]/10 text-[#00A87D]">
      <CheckIcon className="h-3.5 w-3.5" />
    </span>
  );
}

function DashCell() {
  return <span className="text-slate-300">—</span>;
}

// ═══ ICONS ═══

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function WAIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
