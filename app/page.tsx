/* ─────────────────────────────────────────────
   GoTravel — Landing Page (mobile-first)
   Colores: navy #0B1F3A · green #00C896 · gray #F1F5F9
───────────────────────────────────────────── */

const WHATSAPP_URL =
  "https://wa.me/51928672932?text=Hola%20GoTravel,%20quiero%20asesoría%20para%20mi%20visa";
const WHATSAPP_HERO_URL =
  "https://wa.me/51928672932?text=Hola%20GoTravel,%20quiero%20evaluar%20mi%20caso%20para%20una%20visa%20de%20turismo.";
const WHATSAPP_USA_URL =
  "https://wa.me/51928672932?text=Hola%20GoTravel,%20quiero%20información%20sobre%20la%20visa%20de%20turismo%20para%20Estados%20Unidos.";
const WHATSAPP_CANADA_URL =
  "https://wa.me/51928672932?text=Hola%20GoTravel,%20quiero%20información%20sobre%20la%20visa%20de%20turismo%20para%20Canadá.";
const WHATSAPP_MEXICO_URL =
  "https://wa.me/51928672932?text=Hola%20GoTravel,%20quiero%20información%20sobre%20la%20visa%20de%20turismo%20para%20México.";
const WHATSAPP_CITA_URL =
  "https://wa.me/51928672932?text=Hola%20GoTravel,%20quiero%20consultar%20disponibilidad%20para%20adelantar%20mi%20cita.";
const IA_EVALUATION_URL = "/analisis-perfil-ia";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Visa USA", href: "#visa-usa" },
  { label: "Visa Canadá", href: "#visa-canada" },
  { label: "Visa México", href: "#visa-mexico" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
] as const;

const TRUST_ITEMS = [
  "Más de 10 años de experiencia",
  "Revisión documental especializada",
  "Atención 100% online",
] as const;

const QUICK_LINKS = [
  { label: "Visa USA", icon: "🇺🇸", href: "#visa-usa" },
  { label: "Visa Canadá", icon: "🇨🇦", href: "#visa-canada" },
  { label: "Visa México", icon: "🇲🇽", href: "#visa-mexico" },
  { label: "Adelanto de cita", icon: "📅", href: "#adelanto-citas" },
] as const;

const WHY_CHOOSE = [
  {
    title: "Más de 10 años de experiencia",
    desc: "Llevamos más de una década asesorando solicitudes de visa para Estados Unidos, Canadá y México. Conocemos qué revisa el consulado y cómo preparar un caso sólido.",
  },
  {
    title: "Especialistas en visas, no en viajes",
    desc: "No vendemos paquetes ni vuelos. Nos dedicamos exclusivamente a la gestión de visas de turismo. Eso nos permite conocer a fondo cada solicitud y sus requisitos.",
  },
  {
    title: "Evaluación inteligente de tu caso",
    desc: "Analizamos tu perfil antes de iniciar el proceso para identificar fortalezas, riesgos y oportunidades de mejora en tu solicitud.",
  },
  {
    title: "Revisión documental rigurosa",
    desc: "Revisamos cada documento antes de presentarlo. Detectamos errores y observaciones que podrían afectar tu proceso.",
  },
  {
    title: "Acompañamiento durante todo el proceso",
    desc: "Te guiamos desde la evaluación inicial hasta la presentación de tu solicitud para que avances con claridad y confianza.",
  },
  {
    title: "Atención 100% online",
    desc: "Realiza todo tu proceso desde cualquier lugar. Atendemos viajeros de distintos países de Latinoamérica de forma remota.",
  },
] as const;

const IA_EVALUATION_BENEFITS = [
  "Evaluación previa",
  "Identificación de riesgos",
  "Orientación profesional",
  "Más confianza para aplicar",
] as const;

const SERVICES = [
  {
    title: "Visa Americana",
    description: "Perfilado previo, DS-160 y documentación para tu entrevista consular B1/B2.",
    href: "#visa-usa",
    featured: true,
  },
  {
    title: "Renovación Visa Americana",
    description: "Evaluamos tu historial y te guiamos según tu caso particular.",
    href: "#visa-usa",
    featured: false,
  },
  {
    title: "Adelanto de Cita",
    description: "Monitoreo con Agenda VisaBot ante disponibilidad consular.",
    href: "#adelanto-citas",
    featured: false,
  },
  {
    title: "Visa Canadá",
    description: "Requisitos, formularios y preparación de tu solicitud canadiense.",
    href: "#visa-canada",
    featured: false,
  },
  {
    title: "Visa México",
    description: "Acompañamiento en el trámite para ingresar a México.",
    href: "#visa-mexico",
    featured: false,
  },
] as const;

const USA_FEATURES = [
  "Visa de turismo B1/B2 — primera solicitud",
  "Renovación de visa americana",
  "Preparación de formulario DS-160",
  "Perfilado previo con evaluación de IA",
  "Orientación para entrevista consular",
  "Adelanto de cita con Agenda VisaBot",
] as const;

const CANADA_FEATURES = [
  "Visa de turismo (Temporary Resident Visa)",
  "Revisión de requisitos según tu nacionalidad",
  "Asesoría en formularios y documentación",
  "Preparación de carta de motivos de viaje",
  "Acompañamiento 100% online",
  "Orientación sobre tiempos y proceso IRCC",
] as const;

const MEXICO_FEATURES = [
  "Visa de turismo para ingresar a México",
  "Asesoría según tu país de origen",
  "Revisión de documentación requerida",
  "Orientación en formularios y trámites",
  "Proceso remoto sin desplazamientos",
  "Soporte hasta la presentación de tu solicitud",
] as const;

const PROCESS_STEPS = [
  { step: "01", title: "Evaluamos tu perfil", desc: "Analizamos tu caso con rigor antes de iniciar cualquier trámite." },
  { step: "02", title: "Definimos el servicio", desc: "Te indicamos el camino correcto según tu destino y situación." },
  { step: "03", title: "Preparamos documentación", desc: "Formularios, checklist y revisión de soportes." },
  { step: "04", title: "Te acompañamos", desc: "Hasta tu cita consular o presentación de solicitud." },
  { step: "05", title: "Seguimiento", desc: "Monitoreo y orientación post-trámite cuando aplica." },
] as const;

const BLOG_POSTS = [
  {
    title: "Requisitos para visa americana de turismo",
    excerpt: "Documentos, formularios y criterios que evalúa el consulado antes de tu entrevista.",
    tag: "Estados Unidos",
  },
  {
    title: "Errores comunes al solicitar una visa",
    excerpt: "Fallas frecuentes en formularios, documentación y respuestas en la entrevista.",
    tag: "Consejos",
  },
  {
    title: "Cómo prepararte para tu entrevista consular",
    excerpt: "Tips para presentar tu caso con claridad, honestidad y confianza.",
    tag: "Entrevista",
  },
] as const;

const FAQS = [
  {
    q: "¿GoTravel garantiza la aprobación de la visa?",
    a: "No. Ninguna empresa puede garantizar la aprobación. Nuestro trabajo es asesorarte con un proceso riguroso, transparente y basado en más de 10 años de experiencia para maximizar la calidad de tu solicitud.",
  },
  {
    q: "¿Atienden 100% online?",
    a: "Sí. Todo nuestro proceso de asesoría es remoto. Atendemos principalmente a clientes de Perú, Colombia, México y Ecuador.",
  },
  {
    q: "¿Pueden ayudarme si ya me rechazaron una visa?",
    a: "Sí. Evaluamos tu caso previo, identificamos posibles causas del rechazo y definimos un plan de acción antes de una nueva solicitud.",
  },
  {
    q: "¿Pueden adelantar mi cita?",
    a: "Monitoreamos disponibilidad consular mediante Agenda VisaBot. El adelanto depende exclusivamente de la disponibilidad en el sistema del consulado.",
  },
  {
    q: "¿También trabajan visas para Canadá y México?",
    a: "Sí. Somos especialistas en visas de turismo para Estados Unidos, Canadá y México. No vendemos vuelos, hoteles ni paquetes turísticos.",
  },
] as const;

/* ── Iconos SVG inline ── */

function IconWhatsApp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconArrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function IconCheck({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

/* ── Componentes UI reutilizables ── */

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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#00C896] px-6 py-3 text-sm font-semibold text-[#0B1F3A] shadow-lg shadow-[#00C896]/20 transition hover:bg-[#00A87D] sm:text-base ${className}`}
    >
      {children}
    </a>
  );
}

function BtnWhatsApp({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1fb855] sm:text-base ${className}`}
    >
      <IconWhatsApp className="h-5 w-5" />
      {children}
    </a>
  );
}

function BtnOutline({
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0B1F3A]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#0B1F3A]/40 hover:shadow-sm sm:text-base ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#00C896]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#00A87D]">
      {children}
    </span>
  );
}

function SectionTitle({
  children,
  className = "text-[#0B1F3A]",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${className}`}>
      {children}
    </h2>
  );
}

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00C896]/15 text-[#00A87D]">
            <IconCheck className="h-3 w-3" />
          </span>
          <span className="text-sm leading-relaxed text-slate-600 sm:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── Página principal ── */

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      {/* ═══════════ HEADER ═══════════ */}
      <header className="sticky top-0 z-50 border-b border-[#E2E8F0]/80 bg-white/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="text-xl font-bold tracking-tight text-[#0B1F3A]">
            Go<span className="text-[#00C896]">Travel</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-[#0B1F3A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <BtnWhatsApp href={WHATSAPP_URL} className="!hidden !px-4 !py-2 !text-sm sm:!inline-flex">
              WhatsApp
            </BtnWhatsApp>

            <details className="relative lg:hidden">
              <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F1F5F9] text-[#0B1F3A] [&::-webkit-details-marker]:hidden">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <span className="sr-only">Abrir menú</span>
              </summary>
              <nav className="absolute right-0 mt-2 w-60 rounded-2xl border border-[#E2E8F0] bg-white p-3 shadow-xl">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-[#F1F5F9]"
                  >
                    {link.label}
                  </a>
                ))}
                <BtnWhatsApp href={WHATSAPP_URL} className="mt-2 w-full !text-sm">
                  WhatsApp
                </BtnWhatsApp>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main className="pb-20 sm:pb-0">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative overflow-hidden bg-[#0B1F3A] px-4 pb-8 pt-7 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00C896]/10 blur-3xl sm:h-80 sm:w-80" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-6xl">
            <div className="inline-flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#00C896] sm:max-w-none sm:text-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00C896]" />
              <span className="truncate">Especialistas en visas de turismo</span>
            </div>

            <h1 className="mt-4 line-clamp-2 max-w-[calc(100vw-2rem)] text-[1.35rem] font-bold leading-[1.14] tracking-tight text-white min-[375px]:text-[1.5rem] sm:mt-6 sm:max-w-3xl sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Aumenta tus posibilidades de aprobación
            </h1>

            <p className="mt-3 max-w-[calc(100vw-2rem)] text-[0.8rem] leading-snug text-slate-300 min-[375px]:text-sm sm:mt-4 sm:max-w-3xl sm:text-lg sm:leading-relaxed">
              Más de 10 años de experiencia ayudando a viajeros a preparar solicitudes de visa para Estados Unidos y Canadá.
            </p>

            <div className="mt-5 flex max-w-[calc(100vw-2rem)] flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:items-start">
              <BtnPrimary href={IA_EVALUATION_URL} className="w-full max-w-full sm:w-auto">
                Evalúa tu caso ahora
                <IconArrow />
              </BtnPrimary>
              <a
                href={WHATSAPP_HERO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto sm:text-base"
              >
                <IconWhatsApp className="h-5 w-5 shrink-0 text-[#25D366]" />
                <span className="truncate">Hablar por WhatsApp</span>
              </a>
            </div>

            <div className="mt-5 grid max-w-[calc(100vw-2rem)] gap-2 min-[375px]:grid-cols-3 sm:mt-8 sm:max-w-3xl sm:gap-3">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item}
                  className="flex min-h-10 min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium leading-snug text-slate-200 sm:text-sm"
                >
                  <IconCheck className="h-4 w-4 shrink-0 text-[#00C896]" />
                  <span className="min-w-0">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ NAVEGACIÓN RÁPIDA ═══════════ */}
        <section className="border-b border-[#E2E8F0] bg-white px-4 py-7 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto w-full min-w-0 max-w-6xl">
            <h2 className="text-xl font-bold tracking-tight text-[#0B1F3A] sm:text-2xl">
              ¿Qué necesitas hoy?
            </h2>

            <div className="mt-4 grid max-w-[calc(100vw-2rem)] grid-cols-2 gap-3 sm:max-w-none sm:grid-cols-4 sm:gap-4">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex min-h-20 min-w-0 items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] px-4 py-4 text-left text-sm font-semibold text-[#0B1F3A] shadow-sm transition hover:border-[#00C896]/40 hover:bg-white hover:shadow-md sm:min-h-24 sm:flex-col sm:items-start sm:justify-center sm:text-base"
                >
                  <span className="text-2xl leading-none sm:text-3xl" aria-hidden>
                    {link.icon}
                  </span>
                  <span className="min-w-0 leading-tight">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ¿POR QUÉ ELEGIR GOTRAVEL? ═══════════ */}
        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <SectionTitle>¿Por qué elegir GoTravel?</SectionTitle>
              <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
                Gestionamos tu solicitud de visa con rigor, transparencia y acompañamiento real en cada etapa.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_CHOOSE.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:border-[#00C896]/30 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00C896]/10 text-sm font-bold text-[#00A87D]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-base font-semibold leading-snug text-[#0B1F3A]">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BtnPrimary href={IA_EVALUATION_URL} className="w-full sm:w-auto">
                Evalúa tu caso ahora
                <IconArrow />
              </BtnPrimary>
              <BtnWhatsApp href={WHATSAPP_URL} className="w-full sm:w-auto">
                Hablar por WhatsApp
              </BtnWhatsApp>
            </div>
          </div>
        </section>

        {/* ═══════════ SERVICIOS ═══════════ */}
        <section id="servicios" className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <SectionLabel>Nuestros servicios</SectionLabel>
              <SectionTitle className="mt-3 text-[#0B1F3A]">
                Asesoría especializada en visas de turismo
              </SectionTitle>
              <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
                No somos agencia de viajes. Nos enfocamos exclusivamente en la gestión y preparación de tu solicitud de visa.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className={`group flex flex-col rounded-2xl border p-6 shadow-sm transition hover:shadow-md ${
                    service.featured
                      ? "border-[#00C896]/40 bg-gradient-to-br from-[#0B1F3A] to-[#132D52] sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-8 lg:p-8"
                      : "border-[#E2E8F0] bg-white hover:border-[#00C896]/40"
                  }`}
                >
                  <div className={service.featured ? "flex-1" : ""}>
                    {service.featured && (
                      <span className="mb-3 inline-flex rounded-full bg-[#00C896] px-3 py-1 text-xs font-semibold text-[#0B1F3A]">
                        Servicio más solicitado
                      </span>
                    )}
                    <h3 className={`text-lg font-semibold sm:text-xl ${service.featured ? "text-white" : "text-[#0B1F3A]"}`}>
                      {service.title}
                    </h3>
                    <p className={`mt-2 flex-1 text-sm leading-relaxed sm:text-base ${service.featured ? "text-slate-300" : "text-slate-600"}`}>
                      {service.description}
                    </p>
                  </div>
                  <span className={`mt-4 inline-flex shrink-0 items-center gap-1 text-sm font-medium ${service.featured ? "text-[#00C896] lg:mt-0" : "text-[#00A87D]"}`}>
                    Ver detalle
                    <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ VISA USA ═══════════ */}
        <section id="visa-usa" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <SectionLabel>Estados Unidos</SectionLabel>
                <SectionTitle className="mt-3">Visa de turismo a USA</SectionTitle>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Somos especialistas en visa americana B1/B2. Desde la primera solicitud hasta la renovación, te acompañamos con un proceso riguroso de perfilado previo y preparación consular.
                </p>
                <FeatureList items={USA_FEATURES} />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <BtnPrimary href={IA_EVALUATION_URL} className="w-full sm:w-auto">
                    Conocer la evaluación con IA
                    <IconArrow />
                  </BtnPrimary>
                  <BtnWhatsApp href={WHATSAPP_USA_URL} className="w-full sm:w-auto">
                    Asesoría por WhatsApp
                  </BtnWhatsApp>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
                <h3 className="text-lg font-semibold text-[#0B1F3A]">¿Qué incluye la asesoría USA?</h3>
                <div className="mt-5 space-y-3">
                  {[
                    { label: "Evaluación de probabilidad", value: "IA predictiva" },
                    { label: "Formulario DS-160", value: "Revisión experta" },
                    { label: "Documentación", value: "Checklist personalizado" },
                    { label: "Entrevista consular", value: "Simulación y tips" },
                    { label: "Adelanto de cita", value: "VisaBot 24/7" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between rounded-xl bg-[#F1F5F9] px-4 py-3">
                      <span className="text-sm font-medium text-slate-700">{row.label}</span>
                      <span className="rounded-full bg-[#00C896]/10 px-2.5 py-0.5 text-xs font-semibold text-[#00A87D]">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs text-slate-500">
                  La aprobación depende exclusivamente del consulado. No garantizamos resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ VISA CANADÁ ═══════════ */}
        <section id="visa-canada" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#0B1F3A] to-[#132D52] p-6 text-white sm:p-8">
                  <p className="text-sm font-medium text-[#00C896]">Temporary Resident Visa</p>
                  <p className="mt-2 text-2xl font-bold">Visa de turismo Canadá</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    El proceso canadiense evalúa vínculos con tu país, propósito del viaje y capacidad económica. Te ayudamos a presentar un caso sólido y bien documentado.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {["IRCC", "Biometría", "Carta motivos", "Soportes"].map((tag) => (
                      <span key={tag} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <SectionLabel>Canadá</SectionLabel>
                <SectionTitle className="mt-3">Visa de turismo a Canadá</SectionTitle>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Asesoría completa para tu visa de turismo canadiense. Revisamos requisitos según tu nacionalidad y te guiamos en cada paso del proceso ante IRCC.
                </p>
                <FeatureList items={CANADA_FEATURES} />
                <div className="mt-8">
                  <BtnWhatsApp href={WHATSAPP_CANADA_URL} className="w-full sm:w-auto">
                    Consultar visa Canadá
                  </BtnWhatsApp>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ VISA MÉXICO ═══════════ */}
        <section id="visa-mexico" className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <SectionLabel>México</SectionLabel>
                <SectionTitle className="mt-3">Visa de turismo a México</SectionTitle>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Si necesitas visa para ingresar a México como turista, te orientamos según tu país de origen con un proceso claro, remoto y sin intermediación de viajes.
                </p>
                <FeatureList items={MEXICO_FEATURES} />
                <div className="mt-8">
                  <BtnWhatsApp href={WHATSAPP_MEXICO_URL} className="w-full sm:w-auto">
                    Consultar visa México
                  </BtnWhatsApp>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
                <h3 className="text-lg font-semibold text-[#0B1F3A]">Países que atendemos</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Principalmente viajeros de Latinoamérica que requieren visa para ingresar a México.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Perú", "Colombia", "Ecuador", "Otros LATAM"].map((country) => (
                    <span
                      key={country}
                      className="rounded-full border border-[#E2E8F0] bg-[#F1F5F9] px-4 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {country}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-[#F1F5F9] p-4">
                  <p className="text-sm font-medium text-[#0B1F3A]">Proceso 100% online</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Sin necesidad de visitar una agencia de viajes. Asesoría remota de principio a fin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ EVALUACIÓN IA ═══════════ */}
        <section id="analisis-perfil-ia" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 sm:p-10 lg:p-12">
                  <SectionLabel>Evaluación de Probabilidad con IA</SectionLabel>
                  <SectionTitle className="mt-3">
                    Conoce tus probabilidades antes de aplicar
                  </SectionTitle>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    Analizamos factores clave de tu perfil para identificar fortalezas, posibles riesgos y oportunidades antes de iniciar tu solicitud.
                  </p>
                  <div className="mt-6 rounded-2xl border border-[#00C896]/20 bg-[#00C896]/5 p-5">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {IA_EVALUATION_BENEFITS.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#0B1F3A]">
                          <IconCheck className="h-4 w-4 shrink-0 text-[#00C896]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={IA_EVALUATION_URL}
                    className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#132D52] sm:w-auto sm:text-base"
                  >
                    Conocer la evaluación con IA
                    <IconArrow />
                  </a>
                  <p className="mt-4 text-xs text-slate-500 sm:text-sm">
                    La evaluación no garantiza aprobación. La decisión final depende del oficial consular.
                  </p>
                </div>

                <div className="flex items-center justify-center bg-gradient-to-br from-[#0B1F3A] to-[#132D52] p-6 sm:p-10 lg:p-12">
                  <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white/80">Análisis de probabilidad</span>
                      <span className="rounded-full bg-[#00C896]/20 px-2.5 py-0.5 text-xs font-semibold text-[#00C896]">IA</span>
                    </div>
                    <div className="mt-6 space-y-3">
                      {[
                        { label: "Historial migratorio", pct: 72 },
                        { label: "Vínculos país origen", pct: 65 },
                        { label: "Propósito del viaje", pct: 80 },
                        { label: "Documentación", pct: 58 },
                      ].map((bar) => (
                        <div key={bar.label} className="flex items-center gap-3">
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-[#00C896]" style={{ width: `${bar.pct}%` }} />
                          </div>
                          <span className="w-28 text-xs text-white/70">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-center text-xs text-white/50">
                      Resultado orientativo · No es decisión consular
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ ADELANTO DE CITAS — VISABOT ═══════════ */}
        <section id="adelanto-citas" className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <SectionLabel>Agenda VisaBot</SectionLabel>
                <SectionTitle className="mt-3">
                  Monitoreo inteligente de citas consulares
                </SectionTitle>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Gracias a nuestra alianza tecnológica con <strong className="font-semibold text-[#0B1F3A]">Agenda VisaBot</strong>, podemos monitorear oportunidades de adelanto de cita cuando exista disponibilidad en el sistema consular.
                </p>
                <p className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900 sm:text-sm">
                  El adelanto depende exclusivamente de la disponibilidad de citas en el sistema oficial.
                </p>
                <BtnOutline href={WHATSAPP_CITA_URL} external className="mt-8 w-full sm:w-auto">
                  Consultar disponibilidad
                  <IconArrow />
                </BtnOutline>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8">
                <div className="space-y-3">
                  {[
                    { label: "Monitoreo 24/7 del sistema consular", status: "Activo" },
                    { label: "Alerta ante nueva disponibilidad", status: "Automático" },
                    { label: "Gestión de adelanto de cita", status: "Bajo demanda" },
                    { label: "Solo visa americana", status: "USA" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between rounded-xl bg-[#F1F5F9] px-4 py-3.5">
                      <span className="text-sm font-medium text-slate-700">{row.label}</span>
                      <span className="rounded-full bg-[#00C896]/10 px-2.5 py-0.5 text-xs font-semibold text-[#00A87D]">
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ PROCESO ═══════════ */}
        <section id="proceso" className="bg-[#0B1F3A] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <SectionLabel>Nuestro método</SectionLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Un proceso claro en 5 pasos
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300">
                Sabrás exactamente qué esperar en cada etapa, sin sorpresas ni promesas vacías.
              </p>
            </div>

            <div className="mt-10 space-y-3 sm:mt-12">
              {PROCESS_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:items-center sm:gap-6 sm:p-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00C896] text-sm font-bold text-[#0B1F3A]">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-semibold text-white sm:text-lg">{item.title}</p>
                    <p className="mt-0.5 text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:mt-12 sm:p-10">
              <h3 className="text-xl font-bold text-white sm:text-2xl">¿Listo para iniciar tu proceso?</h3>
              <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
                Recibe una evaluación profesional de tu caso y conoce los pasos a seguir.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BtnPrimary href={IA_EVALUATION_URL} className="w-full sm:w-auto">
                  Evalúa tu caso ahora
                  <IconArrow />
                </BtnPrimary>
                <BtnWhatsApp href={WHATSAPP_HERO_URL} className="w-full sm:w-auto">
                  Hablar por WhatsApp
                </BtnWhatsApp>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ BLOG / SEO ═══════════ */}
        <section id="blog" className="bg-[#F1F5F9] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <SectionLabel>Recursos</SectionLabel>
              <SectionTitle className="mt-3">Aprende antes de aplicar</SectionTitle>
              <p className="mt-3 text-base text-slate-600">
                Guías, requisitos, consejos y respuestas frecuentes sobre visas de turismo para que tomes mejores decisiones.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="h-36 bg-gradient-to-br from-[#0B1F3A] to-[#132D52] sm:h-40" />
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#00A87D]">{post.tag}</span>
                    <h3 className="mt-2 text-base font-semibold text-[#0B1F3A] sm:text-lg">{post.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#00A87D]">
                      Leer artículo
                      <IconArrow className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <SectionLabel>Preguntas frecuentes</SectionLabel>
              <SectionTitle className="mt-3">Resolvemos tus dudas</SectionTitle>
              <p className="mt-3 text-base text-slate-600">
                Respuestas claras y honestas sobre nuestro servicio.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-[#E2E8F0] bg-white shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[#0B1F3A] sm:px-6 sm:py-5 sm:text-base [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <svg
                      className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="border-t border-[#E2E8F0] px-5 pb-4 pt-2 sm:px-6 sm:pb-5">
                    <p className="text-sm leading-relaxed text-slate-600">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#F1F5F9] p-6 text-center sm:p-8">
              <h3 className="text-xl font-bold text-[#0B1F3A] sm:text-2xl">¿Todavía tienes dudas?</h3>
              <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
                Nuestro equipo puede orientarte sobre tu situación específica.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BtnWhatsApp href={WHATSAPP_HERO_URL} className="w-full sm:w-auto">
                  Hablar por WhatsApp
                </BtnWhatsApp>
                <BtnPrimary href={IA_EVALUATION_URL} className="w-full sm:w-auto">
                  Evaluar mi caso
                  <IconArrow />
                </BtnPrimary>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA FINAL — WHATSAPP ═══════════ */}
        <section id="cta" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1F3A] to-[#132D52] px-6 py-10 text-center shadow-xl sm:px-12 sm:py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Empieza hoy con una evaluación profesional de tu caso
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              Recibe orientación especializada para tu visa de turismo y conoce tus posibilidades antes de aplicar.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BtnPrimary href={IA_EVALUATION_URL} className="w-full sm:w-auto">
                Conocer la evaluación con IA
                <IconArrow />
              </BtnPrimary>
              <BtnWhatsApp href={WHATSAPP_URL} className="w-full sm:w-auto">
                Hablar por WhatsApp
              </BtnWhatsApp>
            </div>
            <p className="mt-5 text-xs text-slate-400">
              Respuesta rápida · Sin compromiso · No garantizamos aprobación
            </p>
          </div>
        </section>
      </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer id="contacto" className="border-t border-[#E2E8F0] bg-[#F1F5F9] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a href="#" className="text-xl font-bold tracking-tight text-[#0B1F3A]">
                Go<span className="text-[#00C896]">Travel</span>
              </a>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                Especialistas en gestión de visas de turismo. Asesoría profesional, honesta y 100% online para viajeros de Latinoamérica.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61580668796322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-slate-600 transition hover:border-[#00C896]/30 hover:text-[#0B1F3A]"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/gotravel2.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-slate-600 transition hover:border-[#00C896]/30 hover:text-[#0B1F3A]"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0B1F3A]">Servicios</h3>
              <ul className="mt-4 space-y-2.5">
                <li><a href="#visa-usa" className="text-sm text-slate-600 transition hover:text-[#0B1F3A]">Visa USA</a></li>
                <li><a href="#visa-canada" className="text-sm text-slate-600 transition hover:text-[#0B1F3A]">Visa Canadá</a></li>
                <li><a href="#visa-mexico" className="text-sm text-slate-600 transition hover:text-[#0B1F3A]">Visa México</a></li>
                <li><a href="#adelanto-citas" className="text-sm text-slate-600 transition hover:text-[#0B1F3A]">Adelanto de cita</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0B1F3A]">Enlaces</h3>
              <ul className="mt-4 space-y-2.5">
                <li><a href="#blog" className="text-sm text-slate-600 transition hover:text-[#0B1F3A]">Blog</a></li>
                <li><a href="#faq" className="text-sm text-slate-600 transition hover:text-[#0B1F3A]">FAQ</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 transition hover:text-[#0B1F3A]">Contacto</a></li>
                <li><a href={IA_EVALUATION_URL} className="text-sm text-slate-600 transition hover:text-[#0B1F3A]">Evaluación con IA</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-[#E2E8F0] pt-6 text-center text-xs text-slate-500 sm:text-left">
            © {new Date().getFullYear()} GoTravel. Todos los derechos reservados. No somos agencia de viajes.
          </div>
        </div>
      </footer>

      {/* ═══════════ STICKY WHATSAPP — MOBILE ═══════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E2E8F0] bg-white/95 p-3 backdrop-blur-lg sm:hidden">
        <div className="flex gap-2">
          <a
            href={IA_EVALUATION_URL}
            className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#00C896] px-3 py-3 text-xs font-semibold leading-tight text-[#0B1F3A] min-[375px]:text-sm"
          >
            Conocer IA
            <IconArrow className="h-3.5 w-3.5 shrink-0" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-3 text-sm font-semibold text-white"
          >
            <IconWhatsApp className="h-4 w-4" />
            <span className="truncate">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
