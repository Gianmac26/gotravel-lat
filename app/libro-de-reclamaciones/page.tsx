import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import FormReclamacion from "./FormReclamacion";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones | Goviaje",
  description:
    "Libro de Reclamaciones virtual de GoViajes, conforme al Código de Protección y Defensa del Consumidor (Ley N° 29571). Registra tu reclamo o queja de forma online.",
  robots: { index: true, follow: true },
};

export default function LibroDeReclamaciones() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#F1F5F9] text-slate-900">
        <section className="bg-[#0B1F3A] px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Libro de Reclamaciones</h1>
              <p className="mt-1 text-sm text-slate-300">Hoja de Reclamación Virtual</p>
            </div>
            <div className="text-right text-sm text-slate-300">
              <p>Conforme a la Ley N° 29571</p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <FormReclamacion />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
