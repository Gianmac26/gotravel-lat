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
  ],
};

export default nextConfig;
