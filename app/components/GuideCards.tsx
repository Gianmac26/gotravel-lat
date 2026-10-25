import Link from "next/link";

export type GuidePost = {
  href: string;
  title: string;
  excerpt: string;
};

// Grilla de 24 columnas: cada fila se reparte de forma equilibrada (sin tarjeta
// sola en la última fila) y las filas incompletas quedan centradas.
// Las clases van completas en estos mapas para que Tailwind las detecte.
const SM_SPAN: Record<number, string> = {
  6: "sm:col-span-6",
  8: "sm:col-span-8",
  12: "sm:col-span-12",
  24: "sm:col-span-24",
};
const LG_SPAN: Record<number, string> = {
  6: "lg:col-span-6",
  8: "lg:col-span-8",
  12: "lg:col-span-12",
  24: "lg:col-span-24",
};
const SM_START: Record<number, string> = {
  4: "sm:col-start-4",
  5: "sm:col-start-5",
  7: "sm:col-start-7",
  9: "sm:col-start-9",
  10: "sm:col-start-10",
};
const LG_START: Record<number, string> = {
  4: "lg:col-start-4",
  5: "lg:col-start-5",
  7: "lg:col-start-7",
  9: "lg:col-start-9",
  10: "lg:col-start-10",
};

function rowSizes(count: number, maxCols: number): number[] {
  const rows = Math.ceil(count / maxCols);
  const base = Math.floor(count / rows);
  const extra = count % rows;
  return Array.from({ length: rows }, (_, i) => (i < extra ? base + 1 : base));
}

/** Columna de inicio (1-24) y ancho de cada tarjeta para un máximo de columnas por fila. */
function placement(count: number, maxCols: number) {
  const sizes = rowSizes(count, maxCols);
  const span = 24 / Math.max(...sizes);
  const cards: { span: number; start: number | null }[] = [];
  for (const size of sizes) {
    const offset = (24 - size * span) / 2;
    for (let i = 0; i < size; i++) {
      cards.push({ span, start: i === 0 && offset > 0 ? offset + 1 : null });
    }
  }
  return cards;
}

function cardClasses(count: number) {
  const sm = placement(count, count <= 3 ? count : count === 4 ? 2 : 3);
  const lg = placement(count, count <= 3 ? count : 4);
  return sm.map((s, i) => {
    const l = lg[i];
    const classes = [SM_SPAN[s.span], LG_SPAN[l.span]];
    if (s.start) classes.push(SM_START[s.start]);
    if (l.start) classes.push(LG_START[l.start]);
    else if (s.start) classes.push("lg:col-start-auto");
    return classes.join(" ");
  });
}

export default function GuideCards({
  heading,
  posts,
}: {
  heading: string;
  posts: GuidePost[];
}) {
  const placements = cardClasses(posts.length);

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

        <div className="mt-8 grid gap-4 sm:grid-cols-24">
          {posts.map((post, i) => (
            <Link
              key={post.href}
              href={post.href}
              className={`group rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition hover:shadow-md ${placements[i]}`}
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
