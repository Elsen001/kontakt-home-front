import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["az", "ru"], // Dəstəklənən dillər
    defaultLocale: "az" // Standart dil
  },
  async redirects() {
    return [
      {
        source: '/ru',
        destination: '/',  // ana sayfa
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
