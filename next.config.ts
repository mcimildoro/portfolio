import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["mcimildoro.com"], // Agrega si estás usando imágenes externas
    unoptimized: true, // Para evitar optimización de imágenes en local
  },
};

export default nextConfig;
