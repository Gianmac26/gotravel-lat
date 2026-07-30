import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

function wa(text: string) {
  return `https://wa.me/51928672932?text=${encodeURIComponent(text)}`;
}

const WA_GENERAL = wa("Hola Goviaje, quiero información sobre la visa de turismo para México.");
const WA_BASICO = wa("Hola Goviaje, quiero cotizar el plan Básico para visa de turismo a México.");
const WA_SMART = wa("Hola Goviaje, quiero cotizar el plan Smart para visa de turismo a México.");
const WA_PREMIUM = wa("Hola Goviaje, quiero cotizar el plan Premium para visa de turismo a México.");
const WA_EXCEPCION = wa("Hola Goviaje, tengo visa vigente de EE.UU./Canadá/Schengen y quiero saber si necesito visa mexicana.");

const CONSULTATION_URL = WA_GENERAL;

export const metadata: Metadata = {
  title: "Visa de Turismo a México desde Perú — Asesoría Profesional | Goviaje",
  description:
    "Desde 2024 México exige visa a los peruanos para turismo. Asesoría profesional para tu visa mexicana: documentación, solvencia económica y preparación de entrevista. Más de 10 años de experiencia, 100% online.",
};

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
    price: "S/180",
    featured: false,
    items: [
      "Evaluación de tu perfil y elegibilidad",
      "Checklist de documentos requeridos",
      "Armado de carta de motivos de viaje",
      "Orientación para agendar tu cita",
    ],
    wa: WA_BASICO,
  },
  {
    name: "Smart",
    price: "S/250",
    badge: "Más solicitado",
    featured: true,
    items: [
      "Todo lo del Plan Básico",
      "Revisión de solvencia económica y sustento financiero",
      "Armado de carta laboral y comprobantes de arraigo",
      "Asesoría en el agendamiento de cita consular",
    ],
    wa: WA_SMART,
  },
  {
    name: "Premium",
    price: "S/320",
    featured: false,
    items: [
      "Todo lo del Plan Smart",
      "Simulacro personalizado de entrevista consular",
      "Revisión final completa del expediente",
      "Soporte prioritario durante todo el proceso",
    ],
    wa: WA_PREMIUM,
  },
];

const REQUISITOS = [
  { title: "Pasaporte vigente", desc: "Con al menos 6 meses de vigencia desde la fecha de tu viaje." },
  { title: "Solvencia económica", desc: "Estados de cuenta bancarios de los últimos 6 meses que respalden tu viaje." },
  { title: "Carta laboral o de negocio", desc: "Documento que demuestre tu actividad económica actual en Perú." },
  { title: "Carta de motivos de viaje", desc: "Explicación clara del propósito, fechas y duración de tu visita." },
  { title: "Comprobantes de arraigo", desc: "Bienes, contratos o vínculos que demuestren razones reales para regresar a Perú." },
  { title: "Entrevista consular", desc: "Cita obligatoria en la Embajada de México en Lima." },
] as const;

const FAQS = [
  {
    q: "¿Los peruanos necesitamos visa para entrar a México?",
    a: "Sí. Desde 2024 el gobierno de México exige visa de visitante a los ciudadanos peruanos para fines de turismo y negocios. Antes no era necesaria, pero la política cambió.",
  },
  {
    q: "¿Hay alguna excepción para no tramitar la visa mexicana?",
    a: "Sí. Si ya tienes una visa vigente de Estados Unidos, Canadá, Reino Unido, Japón o del Espacio Schengen, puedes ingresar a México sin tramitar la visa mexicana. Si no tienes ninguna de estas, sí necesitas tramitarla.",
  },
  {
    q: "¿Cuánto cuesta la visa mexicana y ese pago está incluido en el servicio?",
    a: "El costo oficial de la visa ronda entre USD 52 y 56, y se paga directamente a la Embajada de México en Lima. Este pago es independiente del costo de nuestra asesoría.",
  },
  {
    q: "¿Es obligatoria la entrevista?",
    a: "Sí. La Embajada de México en Lima requiere una entrevista presencial antes de emitir la visa. Conseguir la cita puede tomar varias semanas, especialmente en temporada alta, por lo que recomendamos iniciar el proceso con anticipación.",
  },
  {
    q: "¿Cuánto tiempo puedo permanecer en México con la visa de turismo?",
    a: "La visa de visitante permite permanecer hasta 180 días sin realizar actividades remuneradas.",
  },
  {
    q: "¿Garantizan la aprobación de la visa?",
    a: "No. Ninguna empresa puede garantizar la aprobación. Nuestro trabajo es ayudarte a preparar un expediente sólido y presentarte bien preparado a tu entrevista en la Embajada de México.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Asesoría para visa de turismo a México",
  provider: { "@type": "Organization", name: "Goviaje", url: "https://goviaje.uk" },
  areaServed: ["PE"],
  description:
    "Asesoría profesional para la solicitud de visa de turismo a México desde Perú: revisión documental, solvencia económica, carta de motivos y preparación de entrevista en la Embajada de México en Lima.",
};

export default function VisaMexico() {
  return (
    <main className="min-h-screen bg-white pb-20 text-slate-900 sm:pb-0">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <SiteHeader />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-[#0B1F3A] px-4 pb-14 pt-5 text-white sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,200,150,0.14),transparent_42%),linear-gradient(315deg,rgba(255,255,255,0.08),transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="pt-14 sm:pt-20 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-10">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-[#00C896]/30 bg-[#00C896]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#00C896]">
                Visa de Turismo — México
              </p>
              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight min-[375px]:text-5xl md:text-6xl">
                Visa de Turismo a México desde Perú — Asesoría Profesional
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 min-[375px]:text-lg">
                Desde 2024, México exige visa de visitante a los peruanos para ingresar como turistas. Te ayudamos a preparar un expediente sólido para tu entrevista en la Embajada de México en Lima.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BtnPrimary href={CONSULTATION_URL} external className="w-full sm:w-auto">
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
                {["+10 años", "Entrevista obligatoria", "100% online"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <CheckIcon className="mb-2 h-4 w-4 text-[#00C896]" />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur sm:p-7 lg:mt-0">
              <div className="rounded-[1.5rem] bg-white p-5 text-[#0B1F3A] sm:p-7">
                <p className="text-sm font-bold text-[#00A87D]">Cambio importante</p>
                <h2 className="mt-3 text-xl font-black leading-snug tracking-tight">
                  Desde 2024, la visa mexicana ya es obligatoria para peruanos
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Antes los peruanos podían viajar a México sin visa. Eso cambió: hoy se requiere trámite consular, salvo algunas excepciones puntuales.
                </p>
                <div className="mt-6 space-y-3">
                  {["Solvencia económica", "Carta de motivos", "Entrevista consular"].map((label) => (
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

      {/* ═══ EXCEPCIÓN ═══ */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#00C896]/20 bg-[#00C896]/5 p-6 sm:p-10">
            <Eyebrow>¿Necesitas tramitar la visa?</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Si ya tienes visa de EE.UU., Canadá, Reino Unido, Japón o Schengen, no necesitas la mexicana
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              México exime del trámite de visa a quienes cuentan con una visa vigente de Estados Unidos, Canadá, Reino Unido, Japón o cualquier país del Espacio Schengen, o con una tarjeta de residencia permanente de esos mismos países (o de Chile, Colombia o Perú). Si no tienes ninguno de estos documentos, sí necesitas tramitar la visa mexicana antes de viajar.
            </p>
            <div className="mt-6">
              <BtnWA href={WA_EXCEPCION} className="w-full sm:w-auto">
                Consultar si aplico a la excepción
              </BtnWA>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ REQUISITOS ═══ */}
      <section className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>Requisitos</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Qué necesitas para tramitar tu visa de turismo a México
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              La Embajada de México en Lima evalúa tu solvencia, tu arraigo a Perú y la coherencia de tu motivo de viaje.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REQUISITOS.map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:border-[#00C896]/30 hover:shadow-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00C896]/10 text-sm font-bold text-[#00A87D]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-base font-semibold leading-snug text-[#0B1F3A]">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900 sm:p-6">
            <strong className="font-black">Costo oficial:</strong> la visa mexicana tiene un costo aproximado de USD 52 a 56, pagado directamente a la Embajada de México. Este monto es independiente del costo de nuestra asesoría y no es reembolsable en caso de rechazo.
          </div>
        </div>
      </section>

      {/* ═══ PLANES ═══ */}
      <section id="planes" className="scroll-mt-10 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
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

      {/* ═══ CTA EVALUACIÓN ═══ */}
      <section className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>Antes de aplicar</Eyebrow>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-5xl">
            Conoce tus posibilidades reales antes de iniciar tu solicitud
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Evaluamos tu perfil, identificamos fortalezas y alertas, y te orientamos antes de que inviertas tiempo y dinero en el proceso.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BtnPrimary href={CONSULTATION_URL} external className="w-full sm:w-auto">
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
              Dudas frecuentes sobre la visa de México
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
              <BtnPrimary href={CONSULTATION_URL} external className="w-full sm:w-auto">
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
            Evaluamos tu perfil, identificamos los puntos que reforzar y te acompañamos en cada etapa del proceso — para que llegues a tu entrevista con la mejor solicitud posible.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BtnPrimary href={CONSULTATION_URL} external className="w-full sm:w-auto">
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

      <SiteFooter />

      {/* ═══ STICKY MOBILE BAR ═══ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
        <a
          href={CONSULTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
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

function BtnPrimary({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B1F3A] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#0d2548]"
      >
        <WAIcon className="h-4 w-4 shrink-0" />
        Solicitar por WhatsApp
      </a>
    </div>
  );
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
