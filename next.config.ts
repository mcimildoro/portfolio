import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Para evitar optimización de imágenes en local
  },
  experimental: {
    optimizeCss: false,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Evita que la página se cargue en un iframe
          },
        ],
      },
    ];
  },
};

export default nextConfig;
