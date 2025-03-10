"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";

const DynamicTitle = () => {
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    if (path === "/") return "Kontakt Home";
    const formattedPath = path
      .replace(/\//g, " ") 
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase()); 

    return `Kontakt Home | ${formattedPath}`;
  };

  return (
    <Head>
      <title>{getPageTitle(pathname)}</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

export default DynamicTitle;
