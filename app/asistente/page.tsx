import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

// Link de marca hacia la tarjeta del asistente de voz en HeyGen.
// IMPORTANTE: no usar redirect() ni redirects en next.config: WhatsApp/Facebook seguirían el
// redirect y mostrarían la vista previa de HeyGen. Esta página responde 200 con sus propias meta
// tags (imagen en opengraph-image.png / twitter-image.png de esta carpeta) y redirige en el navegador.
const ASISTENTE_URL = "https://app.heygen.com/card/giancarlo-martinez";

const TITLE = "Habla con el asistente de GoViaje";
const DESCRIPTION =
  "Resuelve tus dudas sobre la visa de turismo a EE. UU., Canadá o México al instante, por voz, 24/7.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/asistente" },
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/asistente",
    type: "website",
    locale: "es_PE",
    siteName: "GoViaje",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AsistentePage() {
  return (
    <>
      {/* React 19 sube <meta> al <head> */}
      <meta httpEquiv="refresh" content={`0;url=${ASISTENTE_URL}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(ASISTENTE_URL)});`,
        }}
      />
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-[#0B1F3A] px-4 text-center">
        <p className="text-xl font-bold text-white md:text-2xl">
          Conectando con el asistente de GoViaje…
        </p>
        <a
          href={ASISTENTE_URL}
          className="mt-6 inline-flex items-center rounded-full bg-[#00C896] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#00A87D]"
        >
          Abrir el asistente
        </a>
        <p className="mt-4 text-sm text-slate-300">
          Si no se abre solo, toca el botón.
        </p>
      </main>
    </>
  );
}
