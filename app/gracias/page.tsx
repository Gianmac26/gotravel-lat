import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { EMPRESA } from "../lib/empresa";
import GraciasTracker from "./GraciasTracker";

export const metadata: Metadata = {
  title: "Pago recibido | GoViajes",
  robots: { index: false, follow: false },
};

const WA_MSG = encodeURIComponent(
  "Hola, acabo de realizar mi pago por Izipay. Adjunto mi comprobante para iniciar mi trámite."
);
const WA_URL = `${EMPRESA.whatsappHref}?text=${WA_MSG}`;

export default function GraciasPage() {
  return (
    <>
      <GraciasTracker />
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mx-auto max-w-lg">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#00C896]/10">
            <svg className="h-10 w-10 text-[#00C896]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <h1 className="text-3xl font-black text-[#0B1F3A] md:text-4xl">
            ¡Pago recibido!
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Gracias por confiar en GoViajes. Para iniciar tu trámite,{" "}
            <strong>envíanos tu comprobante de pago por WhatsApp</strong> y un asesor te contactará en
            breve.
          </p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#1fb855]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar comprobante por WhatsApp
          </a>

          <p className="mt-6 text-sm text-slate-500">
            También puedes escribirnos a{" "}
            <a href={`mailto:${EMPRESA.emailAtencion}`} className="text-[#00A87D] hover:underline">
              {EMPRESA.emailAtencion}
            </a>
            , aunque WhatsApp es más rápido.
          </p>

          <div className="mt-10 border-t border-slate-100 pt-6">
            <Link href="/" className="text-sm text-slate-400 hover:text-[#0B1F3A]">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
