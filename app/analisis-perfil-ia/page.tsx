import type { Metadata } from "next";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/51928672932?text=Hola%20GoTravel,%20quiero%20solicitar%20la%20evaluaci%C3%B3n%20de%20probabilidad%20con%20IA";

const STEPS = [
  {
    number: "01",
    title: "Completa una entrevista guiada.",
    text: "Recolectamos la información clave de tu caso con preguntas claras y ordenadas.",
  },
  {
    number: "02",
    title: "Analizamos tu perfil utilizando IA.",
    text: "Cruzamos factores relevantes para detectar patrones, fortalezas y puntos sensibles.",
  },
  {
    number: "03",
    title: "Identificamos fortalezas y posibles alertas.",
    text: "Te mostramos dónde tu perfil luce sólido y qué aspectos podrían requerir atención.",
  },
  {
    number: "04",
    title: "Recibes orientación profesional.",
    text: "Un especialista te ayuda a interpretar el resultado y definir los siguientes pasos.",
  },
] as const;

const ANALYSIS_ITEMS = [
  "Situación laboral",
  "Ingresos",
  "Historial de viajes",
  "Vínculos familiares",
  "Documentación",
  "Motivo del viaje",
] as const;

const BENEFITS = [
  "Mayor claridad antes de aplicar",
  "Identificación de riesgos",
  "Mejor preparación documental",
  "Decisiones más informadas",
] as const;

export const metadata: Metadata = {
  title: "Evaluación de Probabilidad con IA | GoTravel",
  description:
    "Conoce fortalezas, posibles riesgos y oportunidades de mejora antes de iniciar tu solicitud de visa con la evaluación de probabilidad con IA de GoTravel.",
};

export default function EvaluacionIA() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#0B1F3A] px-4 pb-14 pt-5 text-white sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,200,150,0.14),transparent_42%),linear-gradient(315deg,rgba(255,255,255,0.08),transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl">
          <header className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight text-white" aria-label="GoTravel">
              Go<span className="text-[#00C896]">Travel</span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15 sm:inline-flex"
            >
              WhatsApp
            </a>
          </header>

          <div className="grid gap-10 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-[#00C896]/30 bg-[#00C896]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#00C896]">
                Evaluación de probabilidad con IA
              </p>
              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight min-[375px]:text-5xl md:text-6xl">
                Conoce tus probabilidades antes de iniciar tu solicitud de visa
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 min-[375px]:text-lg">
                Combinamos inteligencia artificial y experiencia humana para identificar fortalezas, posibles riesgos y oportunidades de mejora antes de aplicar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton>Hablar por WhatsApp</WhatsAppButton>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-slate-300 min-[375px]:grid-cols-3">
                {["+10 años", "100% online", "Revisión experta"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <CheckIcon className="mb-2 h-4 w-4 text-[#00C896]" />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur sm:p-7">
              <div className="rounded-[1.5rem] bg-white p-5 text-[#0B1F3A] sm:p-7">
                <p className="text-sm font-bold text-[#00A87D]">Antes de aplicar</p>
                <h2 className="mt-3 text-2xl font-black tracking-tight">Una mirada profesional a tu perfil</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  La evaluación ayuda a convertir dudas dispersas en prioridades concretas: qué reforzar, qué documentar mejor y qué conversar con un asesor.
                </p>
                <div className="mt-6 space-y-3">
                  {["Perfil personal", "Soporte documental", "Plan de mejora"].map((label) => (
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

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionEyebrow>El problema</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Muchas personas aplican sin conocer las debilidades de su perfil
            </h2>
          </div>
          <div className="rounded-3xl bg-[#F1F5F9] p-6 sm:p-8">
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Una solicitud de visa no depende solo de llenar formularios. El oficial consular evalúa coherencia, vínculos, ingresos, historial y documentación. Cuando esos puntos no se revisan antes, el solicitante puede llegar con dudas, vacíos o soportes insuficientes.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
              La evaluación previa te ayuda a entender tu situación con más claridad antes de invertir tiempo, dinero y expectativas en el proceso.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <SectionEyebrow>Cómo funciona</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Un proceso guiado, claro y acompañado por especialistas
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <article key={step.number} className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1F3A] text-sm font-black text-[#00C896]">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-black leading-snug text-[#0B1F3A]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionEyebrow>Qué analiza la evaluación</SectionEyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl">
              Factores que suelen influir en la lectura de tu caso
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#E2E8F0] bg-white px-5 py-3 shadow-sm sm:px-7">
            {ANALYSIS_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-[#E2E8F0] py-5 last:border-b-0"
              >
                <CheckIcon className="h-5 w-5 shrink-0 text-[#00A87D]" />
                <p className="text-base font-black leading-snug text-[#0B1F3A]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionEyebrow dark>Beneficios</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Aplica con una visión más clara de tu caso
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              La evaluación no reemplaza la decisión consular, pero sí te ayuda a llegar mejor preparado y con menos incertidumbre.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <CheckIcon className="h-5 w-5 text-[#00C896]" />
                <p className="mt-4 font-bold leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-950 shadow-sm sm:p-8">
            <p className="text-sm font-black uppercase tracking-wide">Importante</p>
            <p className="mt-3 text-xl font-black leading-snug sm:text-2xl">
              La evaluación no garantiza aprobación. La decisión final depende exclusivamente del oficial consular.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#F1F5F9] px-6 py-12 text-center sm:px-10 sm:py-16">
          <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-5xl">
            ¿Quieres conocer tu perfil antes de aplicar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Conversa con GoTravel y solicita una evaluación profesional antes de iniciar tu solicitud de visa.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton>Solicitar evaluación</WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionEyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
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

function WhatsAppButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#1fb855] min-[375px]:text-base sm:w-auto"
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span>{children}</span>
    </a>
  );
}

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
