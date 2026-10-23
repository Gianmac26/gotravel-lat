import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  redirects: async () => [
    {
      source: "/terminos",
      destination: "/terminos-y-condiciones",
      permanent: true,
    },
    {
      source: "/privacidad",
      destination: "/politica-de-privacidad",
      permanent: true,
    },
    // Evaluación de Perfil IA descontinuada: 301 a la home (sin destino externo).
    {
      source: "/analisis-perfil-ia",
      destination: "/",
      statusCode: 301,
    },
  ],
};

export default nextConfig;
