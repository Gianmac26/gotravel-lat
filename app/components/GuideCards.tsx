import Link from "next/link";

export type GuidePost = {
  href: string;
  title: string;
  excerpt: string;
};

export default function GuideCards({
  heading,
  posts,
}: {
  heading: string;
  posts: GuidePost[];
}) {
  const cols =
    posts.length <= 3
      ? "sm:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="bg-[#F1F5F9] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#00A87D]">
              Recursos
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#0B1F3A]">{heading}</h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#00A87D] hover:underline"
          >
            Ver todas →
          </Link>
        </div>

        <div className={`mt-8 grid gap-4 ${cols}`}>
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-sm font-semibold leading-snug text-[#0B1F3A] group-hover:text-[#008F6B]">
                {post.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {post.excerpt}
              </p>
              <span className="mt-3 inline-block text-xs font-medium text-[#00A87D]">
                Leer →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
