const WA_URL =
  "https://wa.me/51928672932?text=Hola%20GoTravel,%20quiero%20asesor%C3%ADa%20para%20mi%20visa%20americana";

const IA_URL = "https://app." + "isa" + "visa.com/consulta/gotravel";

export default function VisaUSA() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="relative overflow-hidden bg-[#071B33] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#10b98133,transparent_35%),radial-gradient(circle_at_bottom_left,#3b82f633,transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-5 pb-0 md:pt-8">
          <header className="flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight text-white" aria-label="GoTravel">
              Go<span className="text-emerald-400">Travel</span>
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1fb855] sm:inline-flex"
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </header>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              Visa de Turismo B1/B2 • Estados Unidos
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Prepara tu visa americana con asesoría profesional e IA
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Más de 10 años ayudando a viajeros a aplicar con mayor claridad,
              mejor preparación y acompañamiento 100% online.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={IA_URL}
                target="_blank"
                className="rounded-2xl bg-emerald-400 px-6 py-4 text-center font-bold text-slate-950 shadow-lg shadow-emerald-500/20"
              >
                Evaluar mi perfil con IA
              </a>

              <a
                href={WA_URL}
                target="_blank"
                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center font-bold text-white backdrop-blur"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                +10 años
              </div>
              <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                Análisis del Perfil con IA
              </div>
              <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                100% online
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 -mt-8 relative z-10">
        <div className="grid gap-5 md:grid-cols-3">
          <ServiceCard
            title="Visa Nueva B1/B2"
            price="Desde S/250"
            text="Asesoría completa para preparar tu solicitud de visa de turismo."
            href="#planes"
            cta="Ver planes"
            featured
          />
          <ServiceCard
            title="Renovación de Visa"
            price="S/350"
            text="Acompañamiento para renovar tu visa americana de forma ordenada."
            href={WA_URL}
            cta="Solicitar renovación"
          />
          <ServiceCard
            title="Adelanto de Cita"
            price="USD 150"
            text="Monitoreo de oportunidades de adelanto con Agenda VisaBot."
            href={WA_URL}
            cta="Solicitar adelanto"
          />
        </div>
      </section>

      <section id="planes" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-10">
        <div className="mb-10 text-center">
          <p className="font-bold text-emerald-600">Planes disponibles</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            Planes para Visa Nueva B1/B2
          </h2>
          <p className="mt-4 text-slate-600">
            Elige el nivel de acompañamiento según tu necesidad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Plan
            name="Estándar"
            price="S/250"
            items={[
              "Perfilado del cliente",
              "Llenado DS-160",
              "Asesoría documental",
              "Creación de usuario IVR",
            ]}
          />

          <Plan
            name="Preferente"
            price="S/350"
            badge="Más solicitado"
            featured
            items={[
              "Todo lo del plan Estándar",
              "Análisis del Perfil con IA",
              "Programación de cita consular",
            ]}
          />

          <Plan
            name="Premium"
            price="S/450"
            items={[
              "Todo lo del plan Preferente",
              "Preparación para entrevista",
              "Preguntas frecuentes reales",
              "Descuento en adelanto de cita",
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <InfoBox
            title="Análisis del Perfil con IA"
            text="Analizamos tu perfil antes de iniciar el trámite para identificar fortalezas, posibles riesgos y oportunidades de mejora. Este análisis no garantiza aprobación. La decisión final depende exclusivamente del oficial consular."
            items={[
              "Evaluación previa",
              "Identificación de riesgos",
              "Mejor toma de decisiones",
              "Orientación profesional",
            ]}
            button="Evaluar mi perfil con IA"
            href={IA_URL}
          />

          <InfoBox
            title="Adelanto con Agenda VisaBot"
            text="Gracias a nuestra alianza tecnológica, monitoreamos oportunidades de adelanto de cita cuando exista disponibilidad consular."
            items={[
              "Monitoreo automatizado",
              "Búsqueda de fechas cercanas",
              "Proceso supervisado",
              "Sujeto a disponibilidad oficial",
            ]}
            button="Consultar adelanto"
            href={WA_URL}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-center text-3xl font-black">
          Preguntas frecuentes
        </h2>

        <div className="mt-10 space-y-4">
          {[
            [
              "¿Garantizan la aprobación?",
              "No. Ninguna empresa puede garantizar aprobación. Nuestro trabajo es ayudarte a preparar mejor tu solicitud.",
            ],
            [
              "¿Atienden 100% online?",
              "Sí. Podemos acompañarte de forma online desde Perú, Colombia, México, Ecuador u otros países.",
            ],
            [
              "¿Pueden adelantar mi cita?",
              "Sí, siempre que exista disponibilidad en el sistema consular.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold">{q}</h3>
              <p className="mt-2 text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#071B33] px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-black">Empieza con una evaluación profesional</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Conoce tu perfil, resuelve tus dudas y elige el servicio adecuado para tu visa americana.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={IA_URL}
            target="_blank"
            className="rounded-2xl bg-emerald-400 px-6 py-4 font-bold text-slate-950"
          >
            Evaluar mi perfil con IA
          </a>
          <a
            href={WA_URL}
            target="_blank"
            className="rounded-2xl border border-white/20 px-6 py-4 font-bold"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  title,
  price,
  text,
  href,
  cta,
  featured = false,
}: {
  title: string;
  price: string;
  text: string;
  href: string;
  cta: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl p-6 shadow-xl ${
        featured
          ? "bg-emerald-400 text-slate-950"
          : "bg-white text-slate-900"
      }`}
    >
      {featured && (
        <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
          Servicio principal
        </span>
      )}
      <h3 className="mt-4 text-2xl font-black">{title}</h3>
      <p className="mt-3 text-3xl font-black">{price}</p>
      <p className="mt-4 opacity-80">{text}</p>
      <a
        href={href}
        className="mt-6 inline-flex w-full justify-center rounded-2xl bg-slate-950 px-5 py-4 font-bold text-white"
      >
        {cta}
      </a>
    </div>
  );
}

function Plan({
  name,
  price,
  items,
  badge,
  featured = false,
}: {
  name: string;
  price: string;
  items: string[];
  badge?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-6 shadow-sm ${
        featured
          ? "border-2 border-emerald-400 bg-white shadow-xl"
          : "border border-slate-200 bg-white"
      }`}
    >
      {badge && (
        <span className="absolute -top-4 left-6 rounded-full bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-950">
          {badge}
        </span>
      )}
      <h3 className="text-2xl font-black">{name}</h3>
      <p className="mt-4 text-4xl font-black text-emerald-600">{price}</p>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-emerald-500">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={WA_URL}
        target="_blank"
        className="mt-8 inline-flex w-full justify-center rounded-2xl bg-[#071B33] px-5 py-4 font-bold text-white"
      >
        Solicitar por WhatsApp
      </a>
    </div>
  );
}

function InfoBox({
  title,
  text,
  items,
  button,
  href,
}: {
  title: string;
  text: string;
  items: string[];
  button: string;
  href: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
      <h3 className="text-3xl font-black">{title}</h3>
      <p className="mt-4 text-slate-600">{text}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-xl bg-white p-3 text-sm font-medium">
            ✓ {item}
          </div>
        ))}
      </div>

      <a
        href={href}
        target="_blank"
        className="mt-8 inline-flex w-full justify-center rounded-2xl bg-emerald-400 px-5 py-4 font-bold text-slate-950"
      >
        {button}
      </a>
    </div>
  );
}
