import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
   
    unoptimized: true, // Para evitar optimización de imágenes en local
  },
};

export default nextConfig;
