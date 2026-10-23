import type { ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WALink, { type WAService } from "./WALink";
import { BLOG_POSTS, ARTICLE_TAG_MAP } from "../lib/blog-posts";

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

const MID_CTA_WHATSAPP =
  "https://wa.me/51928672932?text=Hola%20Goviaje%2C%20quisiera%20que%20revisen%20mi%20caso%20antes%20de%20mi%20cita.";

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
  service = "auto" as WAService | "auto",
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
  service?: WAService | "auto";
  children?: ReactNode;
}) {
  const blogTag = ARTICLE_TAG_MAP[tag];
  const relatedPosts = blogTag
    ? BLOG_POSTS.filter((p) => p.tag === blogTag && p.title !== title).slice(0, 3)
    : [];

  const MID_CTA_INDEX = 2;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main>
        <section className="bg-[#0B1F3A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                <li>
                  <Link href="/" className="hover:text-[#00C896] transition">Inicio</Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/blog" className="hover:text-[#00C896] transition">Blog</Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-slate-300 line-clamp-1">{title}</li>
              </ol>
            </nav>

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
            {sections.map((section, idx) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-[#0B1F3A] sm:text-2xl">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>

                {/* CTA a mitad del artículo */}
                {idx === MID_CTA_INDEX && (
                  <div className="mt-6 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-5">
                    <p className="text-sm font-semibold text-[#0B1F3A]">
                      ¿Quieres que revisemos tu caso antes de tu cita?
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Escríbenos por WhatsApp y un asesor especializado evalúa tu perfil sin compromiso.
                    </p>
                    <WALink
                      href={MID_CTA_WHATSAPP}
                      cta_position="middle"
                      service={service}
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fb855]"
                    >
                      Consultar mi caso por WhatsApp
                    </WALink>
                  </div>
                )}
              </div>
            ))}

            {children}

            {/* CTA al final */}
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
                <WALink
                  href={WHATSAPP_URL}
                  cta_position="bottom"
                  service={service}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0B1F3A]/15 bg-white px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#0B1F3A]/30"
                >
                  Hablar por WhatsApp
                </WALink>
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

            {/* Artículos relacionados */}
            {relatedPosts.length > 0 && (
              <nav aria-label="Artículos relacionados">
                <h2 className="text-xl font-bold text-[#0B1F3A] sm:text-2xl">Artículos relacionados</h2>
                <ul className="mt-4 space-y-3">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm transition hover:border-[#00C896]/40 hover:shadow-md"
                      >
                        <span className="text-sm font-semibold text-[#0B1F3A] hover:text-[#008F6B]">
                          {post.title}
                        </span>
                        <span className="mt-1 text-xs leading-relaxed text-slate-500">{post.excerpt}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
