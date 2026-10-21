import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "://cloudinary.com", // Remplacez par le nom de domaine de votre hébergeur d'images
      },
    ],
  },
};

export default nextConfig;
