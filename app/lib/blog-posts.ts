export type BlogTag = "Estados Unidos" | "Canadá" | "México";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tag: BlogTag;
};

export const BLOG_POSTS: BlogPost[] = [
  // ── Estados Unidos ──────────────────────────────────────────────────────
  {
    slug: "requisitos-visa-americana-turismo",
    title: "Requisitos para la visa americana de turismo (2026)",
    excerpt:
      "Documentos, costos y tiempos de espera para la visa B1/B2 desde Perú, Colombia, México y Ecuador.",
    tag: "Estados Unidos",
  },
  {
    slug: "cuanto-cuesta-demora-visa-americana",
    title: "¿Cuánto cuesta y cuánto demora la visa americana?",
    excerpt:
      "Tasas oficiales vigentes en 2026 y plazos recomendados para tramitar tu visa a tiempo.",
    tag: "Estados Unidos",
  },
  {
    slug: "como-llenar-ds160-paso-a-paso",
    title: "Cómo llenar el DS-160 paso a paso (2026)",
    excerpt:
      "Guía práctica para completar el formulario sin errores: los campos más críticos y las preguntas difíciles.",
    tag: "Estados Unidos",
  },
  {
    slug: "preguntas-entrevista-visa-americana",
    title: "Preguntas en la entrevista de visa americana B1/B2 (2026)",
    excerpt:
      "Las preguntas más comunes en la entrevista consular y cómo prepararte para responder con naturalidad.",
    tag: "Estados Unidos",
  },
  {
    slug: "razones-rechazo-visa-americana",
    title: "Por qué niegan la visa americana: 5 razones comunes",
    excerpt:
      "Las causas más frecuentes de rechazo y cómo preparar mejor tu solicitud para evitarlas.",
    tag: "Estados Unidos",
  },
  {
    slug: "me-negaron-la-visa-americana",
    title: "Me negaron la visa americana: qué hacer y cómo volver a aplicar (2026)",
    excerpt:
      "Qué significa el rechazo bajo el artículo 214(b), cuándo puedes volver a aplicar y cómo preparar mejor tu caso.",
    tag: "Estados Unidos",
  },
  {
    slug: "renovacion-visa-americana-sin-entrevista",
    title: "Renovación de visa americana sin entrevista en Perú (2026)",
    excerpt:
      "Requisitos vigentes para renovar tu visa sin entrevista. La ventana cambió en 2025: ahora son 12 meses, no 48.",
    tag: "Estados Unidos",
  },
  {
    slug: "adelantar-cita-visa-americana-peru",
    title: "Cómo adelantar tu cita de visa americana en Perú (2026)",
    excerpt:
      "Opciones disponibles para conseguir una cita consular más pronto y qué debes saber antes de intentarlo.",
    tag: "Estados Unidos",
  },
  {
    slug: "solvencia-economica-visa-americana",
    title: "Solvencia económica para la visa americana (2026)",
    excerpt:
      "No hay un monto mínimo oficial. Qué evalúa realmente el oficial consular y qué documentos ayudan.",
    tag: "Estados Unidos",
  },
  {
    slug: "tramitar-visa-americana-sola-o-con-asesoria",
    title: "Tramitar la visa americana solo o con asesoría (2026)",
    excerpt:
      "Comparativa honesta: qué puedes hacer tú mismo, dónde se equivoca la gente y cuándo conviene una asesoría.",
    tag: "Estados Unidos",
  },
  // ── Canadá ───────────────────────────────────────────────────────────────
  {
    slug: "cuanto-dinero-necesito-visa-canadiense",
    title: "¿Cuánto dinero necesito para la visa canadiense? Guía para peruanos (2026)",
    excerpt:
      "IRCC no fija un monto mínimo. Qué evalúa sobre tu solvencia, cómo estimar lo que necesita tu viaje y qué documentos presentar.",
    tag: "Canadá",
  },
  {
    slug: "visa-canada-sin-viajes-previos",
    title: "Visa Canadá sin viajes previos: cómo aplicar por primera vez (2026)",
    excerpt:
      "No haber viajado antes no es un requisito de IRCC, pero cambia lo que debes reforzar. Cómo preparar una primera solicitud.",
    tag: "Canadá",
  },
  {
    slug: "carta-invitacion-arraigo-visa-canada",
    title: "Carta de invitación y arraigo: qué evalúa Canadá en tu visa",
    excerpt:
      "Cómo funciona la carta de invitación, qué es el arraigo y qué solvencia económica pide el IRCC.",
    tag: "Canadá",
  },
  {
    slug: "cuanto-cuesta-demora-visa-canada",
    title: "Visa Canadá: costo y tiempo de espera (2026)",
    excerpt:
      "Costos reales de la visa canadiense de turismo (TRV): tasa IRCC, biométricos y tiempos de procesamiento.",
    tag: "Canadá",
  },
  {
    slug: "visa-canadiense-rechazada-que-hacer",
    title: "Visa canadiense rechazada: qué hacer y cómo volver a aplicar (2026)",
    excerpt:
      "Cómo leer las notas del oficial, cuándo conviene volver a aplicar y qué documentación mejora tu caso.",
    tag: "Canadá",
  },
  // ── México ───────────────────────────────────────────────────────────────
  {
    slug: "visa-mexico-peruanos-requisitos",
    title: "Visa mexicana para peruanos: guía completa 2026",
    excerpt:
      "Desde 2024 los peruanos necesitan visa para México. Requisitos, costo, excepciones y cómo tramitarla.",
    tag: "México",
  },
];

/** Tag del ArticleLayout ("Visa USA" etc.) → BlogTag para filtrar artículos relacionados */
export const ARTICLE_TAG_MAP: Record<string, BlogTag> = {
  "Visa USA": "Estados Unidos",
  "Visa Canadá": "Canadá",
  "Visa México": "México",
};
