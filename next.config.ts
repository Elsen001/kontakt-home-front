import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["az", "ru"], // Dəstəklənən dillər
    defaultLocale: "az" // Standart dil
  }
};

export default nextConfig;
