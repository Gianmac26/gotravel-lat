import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const WHATSAPP_URL =
  "https://wa.me/51928672932?text=Hola%20Goviaje,%20quiero%20asesor%C3%ADa%20para%20mi%20visa";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export type ArticleSection = {
  heading: string;
  blocks: ArticleBlock[];
};

export type ArticleFaq = { q: string; a: string };

function IconArrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === "p") {
    return <p className="text-base leading-relaxed text-slate-600">{block.text}</p>;
  }
  if (block.type === "list") {
    return (
      <ul className="space-y-2.5">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-slate-600">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C896]" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="rounded-xl border border-[#00C896]/30 bg-[#00C896]/8 px-5 py-4 text-sm leading-relaxed text-[#0B1F3A]">
      {block.text}
    </div>
  );
}

/**
 * Layout compartido por los artículos del blog de Goviaje. Contenido educativo
 * (SEO + GEO) que enlaza internamente a la landing de venta correspondiente.
 */
export default function ArticleLayout({
  tag,
  title,
  dek,
  updated,
  sections,
  faqs,
  relatedHref,
  relatedLabel,
  ctaHeading = "¿Quieres que revisemos tu caso puntual?",
  ctaText = "Un asesor especializado puede orientarte según tu situación específica, antes de que apliques.",
  children,
}: {
  tag: string;
  title: string;
  dek: string;
  updated: string;
  sections: ArticleSection[];
  faqs?: ArticleFaq[];
  relatedHref: string;
  relatedLabel: string;
  ctaHeading?: string;
  ctaText?: string;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-[#0B1F3A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#00C896]">
              {tag}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{title}</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">{dek}</p>
            <p className="mt-4 text-xs text-slate-400">Actualizado: {updated} · No es asesoría legal, es contenido informativo.</p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-[#0B1F3A] sm:text-2xl">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </div>
            ))}

            {children}

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#0B1F3A] sm:text-xl">{ctaHeading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{ctaText}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={relatedHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C896] px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-lg shadow-[#00C896]/20 transition hover:bg-[#00A87D]"
                >
                  {relatedLabel}
                  <IconArrow />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0B1F3A]/15 bg-white px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#0B1F3A]/30"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            {faqs && faqs.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-[#0B1F3A] sm:text-2xl">Preguntas frecuentes</h2>
                <div className="mt-4 space-y-3">
                  {faqs.map((faq) => (
                    <details key={faq.q} className="group rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[#0B1F3A] [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <svg className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </summary>
                      <div className="border-t border-[#E2E8F0] px-5 pb-4 pt-2">
                        <p className="text-sm leading-relaxed text-slate-600">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
