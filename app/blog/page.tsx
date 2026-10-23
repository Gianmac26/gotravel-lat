import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { BLOG_POSTS as POSTS } from "../lib/blog-posts";

export const metadata: Metadata = {
  title: "Guías para tu visa americana, canadiense y mexicana",
  description:
    "Artículos especializados sobre requisitos, costos, errores comunes y consejos para la visa de turismo a Estados Unidos, Canadá y México. Actualizado 2026.",
  alternates: { canonical: "https://goviaje.uk/blog" },
};

const TAG_COLORS: Record<typeof POSTS[number]["tag"], string> = {
  "Estados Unidos": "text-[#0057A0]",
  Canadá: "text-[#C8102E]",
  México: "text-[#006847]",
};

const GROUPS: { label: typeof POSTS[number]["tag"]; emoji: string }[] = [
  { label: "Estados Unidos", emoji: "🇺🇸" },
  { label: "Canadá", emoji: "🇨🇦" },
  { label: "México", emoji: "🇲🇽" },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-[#0B1F3A] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#00C896]/30 bg-[#00C896]/10 px-4 py-1.5 text-sm text-[#00C896]">
            Recursos
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Guías de visas de turismo
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Artículos escritos por nuestro equipo para ayudarte a entender los requisitos,
            evitar errores comunes y llegar mejor preparado a tu cita consular.
          </p>
        </div>
      </section>

      {/* Articles by group */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 space-y-16">
        {GROUPS.map(({ label, emoji }) => {
          const group = POSTS.filter((p) => p.tag === label);
          return (
            <div key={label}>
              <h2 className="flex items-center gap-2 text-xl font-black text-[#0B1F3A]">
                <span>{emoji}</span>
                {label}
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="h-28 bg-gradient-to-br from-[#0B1F3A] to-[#132D52]" />
                    <div className="flex flex-1 flex-col p-5">
                      <span className={`text-xs font-semibold uppercase tracking-wide ${TAG_COLORS[post.tag]}`}>
                        {post.tag}
                      </span>
                      <h3 className="mt-2 text-base font-semibold leading-snug text-[#0B1F3A] group-hover:text-[#008F6B]">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#00A87D]">
                        Leer artículo →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <SiteFooter />
    </main>
  );
}
