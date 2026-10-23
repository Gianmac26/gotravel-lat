import type { Metadata } from "next";
import ArticleLayout from "../../components/ArticleLayout";

export const metadata: Metadata = {
  title: "Visa Americana: costo y tiempo de espera (2026)",
  description:
    "Costos oficiales, tiempos de espera para la cita y plazos recomendados para tramitar tu visa de turismo a Estados Unidos en 2026.",
  alternates: { canonical: "https://goviaje.uk/blog/cuanto-cuesta-demora-visa-americana" },
};

const SECTIONS = [
  {
    heading: "Costo total de la visa americana en 2026",
    blocks: [
      { type: "list" as const, items: [
        "Tasa consular (MRV): USD 185 — se paga antes de la entrevista, no reembolsable si la visa es negada.",
        "Visa Integrity Fee: USD 250 — vigente desde octubre de 2025, se paga solo si tu visa es aprobada.",
      ] },
      { type: "callout" as const, text: "Estas tasas se pagan directamente al gobierno de EE.UU., son independientes del costo de una asesoría profesional para preparar tu expediente." },
    ],
  },
  {
    heading: "Cuánto tarda conseguir una cita",
    blocks: [
      { type: "p" as const, text: "El tiempo de espera entre completar el formulario DS-160 y la fecha de tu entrevista varía según la demanda del consulado en tu país y la época del año: puede ir de 2 semanas hasta 3 meses." },
      { type: "p" as const, text: "La demanda sube considerablemente entre julio y enero, coincidiendo con vacaciones de medio y fin de año. Si planeas viajar en esas fechas, es clave iniciar el trámite con más anticipación." },
    ],
  },
  {
    heading: "Tiempo de espera para la cita de visa americana en Lima",
    blocks: [
      { type: "p" as const, text: "El Departamento de Estado de EE.UU. publica los tiempos de espera actualizados para cada consulado en su herramienta oficial 'Global Visa Wait Times'. Para la Embajada de Lima, consulta ese portal directamente: el dato cambia cada semana y cualquier número que veas en blogs o foros puede estar desactualizado." },
      { type: "p" as const, text: "Puedes ver la disponibilidad real de fechas en el portal de citas ais.usvisa-info.com (selecciona Perú). La disponibilidad varía día a día — si no hay fechas cercanas, no significa que no haya: nuevas fechas se liberan con frecuencia, especialmente cuando otros solicitantes reprograman." },
      { type: "callout" as const, text: "Para saber exactamente cuántos días hay de espera en Lima hoy, revisa travel.state.gov/global-visa-wait-times (fuente oficial, Embajada Lima). El portal actualiza los datos semanalmente." },
      { type: "p" as const, text: "Si tu viaje tiene una fecha fija y la cita disponible más cercana no te conviene, hay opciones para intentar adelantarla: cita de emergencia (si calificas), reprogramación o monitoreo de disponibilidad. Las explicamos en detalle en el artículo sobre cómo adelantar la cita." },
    ],
  },
  {
    heading: "Cuánto tarda la visa después de la entrevista",
    blocks: [
      { type: "p" as const, text: "Si tu entrevista es aprobada, la visa suele estar lista para recoger (o te la envían) entre 3 y 5 días hábiles después. En algunos casos el consulado puede pedir un trámite administrativo adicional (\"221(g)\") que extiende este plazo." },
    ],
  },
  {
    heading: "¿Con cuánta anticipación debo empezar?",
    blocks: [
      { type: "p" as const, text: "La recomendación general es iniciar el proceso con 3 a 4 meses de anticipación a la fecha en que necesitas viajar. Esto te da margen para conseguir la cita, prepararte para la entrevista y absorber cualquier imprevisto sin poner en riesgo tu viaje." },
    ],
  },
];

const FAQS = [
  { q: "¿El costo de la visa cambia si me la niegan?", a: "No. La tasa consular de USD 185 no es reembolsable, se te niegue o se te apruebe la visa. Por eso conviene llegar bien preparado a la entrevista." },
  { q: "¿Hay forma de acelerar la cita para la entrevista?", a: "En casos justificados (emergencia médica, viaje de negocios urgente) algunos consulados permiten solicitar una cita expedita, pero no es automático ni garantizado." },
  { q: "¿El pago de la asesoría de GoViaje incluye las tasas del consulado?", a: "No. Nuestro servicio es la preparación de tu expediente y acompañamiento; las tasas oficiales (MRV y Visa Integrity Fee) las pagas tú directamente al gobierno de EE.UU." },
];

export default function CuantoCuestaDemoraVisa() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Cuánto Cuesta y Cuánto Demora la Visa Americana?",
    author: { "@type": "Organization", name: "GoViaje" },
    publisher: { "@type": "Organization", name: "GoViaje" },
    datePublished: "2026-07-30",
    dateModified: "2026-10-01",
    about: "Costos y tiempos de la visa de turismo B1/B2 para Estados Unidos",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <ArticleLayout
        tag="Visa USA"
        title="¿Cuánto Cuesta y Cuánto Demora la Visa Americana?"
        dek="Costos oficiales, tiempos de cita y plazos recomendados para tramitar tu visa de turismo a Estados Unidos."
        updated="octubre de 2026"
        sections={SECTIONS}
        faqs={FAQS}
        relatedHref="/visa-usa"
        relatedLabel="Ver planes de asesoría Visa USA"
      >
        <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Fuentes oficiales</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html" target="_blank" rel="noopener noreferrer" className="text-sm text-[#008F6B] hover:underline">
                → Tiempos de espera por consulado — travel.state.gov (actualizado semanalmente)
              </a>
            </li>
            <li>
              <a href="https://ais.usvisa-info.com/es-pe/niv" target="_blank" rel="noopener noreferrer" className="text-sm text-[#008F6B] hover:underline">
                → Portal oficial de citas — ais.usvisa-info.com (Perú)
              </a>
            </li>
          </ul>
        </div>
        <nav className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-sm font-semibold text-[#0B1F3A]">Artículos relacionados</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/blog/renovacion-visa-americana-sin-entrevista" className="text-sm text-[#008F6B] hover:underline">
                → Renovación de visa americana sin entrevista en Perú: requisitos vigentes
              </a>
            </li>
            <li>
              <a href="/blog/adelantar-cita-visa-americana-peru" className="text-sm text-[#008F6B] hover:underline">
                → Cómo adelantar tu cita de visa americana en Perú
              </a>
            </li>
          </ul>
        </nav>
      </ArticleLayout>
    </>
  );
}
