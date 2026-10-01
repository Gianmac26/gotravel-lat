import type { MetadataRoute } from "next";

const BASE_URL = "https://goviaje.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-09-15"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/visa-usa`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/visa-canada`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/visa-mexico`,
      lastModified: new Date("2026-09-15"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/requisitos-visa-americana-turismo`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/razones-rechazo-visa-americana`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/cuanto-cuesta-demora-visa-americana`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/carta-invitacion-arraigo-visa-canada`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/visa-mexico-peruanos-requisitos`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/como-llenar-ds160-paso-a-paso`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/cuanto-cuesta-demora-visa-canada`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/preguntas-entrevista-visa-americana`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/terminos-y-condiciones`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politica-de-privacidad`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/libro-de-reclamaciones`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
