import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Goviaje",
  description:
    "Política de privacidad de Goviaje: cómo recopilamos, usamos y protegemos tus datos personales al solicitar asesoría para visas de turismo.",
};

const SECTIONS = [
  {
    title: "1. Quiénes somos",
    body: [
      "Goviaje (GOVIAJES) es una empresa especializada en asesoría migratoria y gestión de visas de turismo. No somos una agencia de viajes: no vendemos vuelos, hoteles, tours ni paquetes turísticos.",
      "Esta política aplica a los datos que recopilamos a través de goviaje.uk y de nuestros canales de contacto (WhatsApp, formularios de evaluación de perfil).",
    ],
  },
  {
    title: "2. Qué datos recopilamos",
    body: [
      "Datos de contacto: nombre, número de teléfono/WhatsApp y correo electrónico, cuando nos escribes o completas una evaluación de perfil.",
      "Datos del caso migratorio: información que nos compartes voluntariamente para evaluar tu perfil (situación laboral, historial de viajes, vínculos familiares, documentación), únicamente con fines de asesoría.",
      "Datos técnicos: información de navegación (páginas visitadas, dispositivo, origen del tráfico) recopilada mediante Google Analytics y, si aplica, píxeles de Google Ads y Meta, con fines de medición y mejora del sitio.",
    ],
  },
  {
    title: "3. Para qué usamos tus datos",
    body: [
      "Brindarte la asesoría y evaluación de perfil que solicitas.",
      "Responder tus consultas por WhatsApp o correo electrónico.",
      "Medir el rendimiento de nuestras campañas de publicidad (Google Ads, Meta Ads) y mejorar la experiencia del sitio.",
      "No vendemos ni compartimos tus datos personales con terceros con fines comerciales ajenos a la asesoría migratoria.",
    ],
  },
  {
    title: "4. Con quién compartimos información",
    body: [
      "Podemos compartir datos técnicos agregados y anónimos con proveedores de medición como Google (Analytics, Ads) y Meta, conforme a sus propias políticas de privacidad.",
      "No compartimos tu información personal ni la de tu caso migratorio con consulados, embajadas ni terceros no autorizados por ti.",
    ],
  },
  {
    title: "5. Tus derechos",
    body: [
      "Puedes solicitar acceso, rectificación o eliminación de tus datos personales escribiéndonos por WhatsApp o correo electrónico.",
      "Puedes dejar de recibir comunicaciones nuestras en cualquier momento.",
    ],
  },
  {
    title: "6. Cookies y tecnologías similares",
    body: [
      "Usamos cookies y tecnologías similares para analizar el tráfico del sitio y medir el rendimiento de nuestras campañas publicitarias. Puedes gestionar las cookies desde la configuración de tu navegador.",
    ],
  },
  {
    title: "7. Cambios a esta política",
    body: [
      "Podemos actualizar esta política ocasionalmente. La fecha de la última actualización se indica al inicio de esta página.",
    ],
  },
];

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#0B1F3A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-xl font-bold tracking-tight text-white" aria-label="Goviaje">
            Go<span className="text-[#00C896]">viaje</span>
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Política de Privacidad</h1>
          <p className="mt-3 text-sm text-slate-300">Última actualización: julio de 2026</p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-[#0B1F3A]">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl bg-[#F1F5F9] p-6 text-sm text-slate-600">
            ¿Tienes dudas sobre el manejo de tus datos? Escríbenos por{" "}
            <a
              href="https://wa.me/51928672932?text=Hola%20Goviaje,%20tengo%20una%20consulta%20sobre%20mi%20privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0B1F3A] underline"
            >
              WhatsApp
            </a>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
