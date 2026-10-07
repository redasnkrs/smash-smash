import type { NextConfig } from "next";

// Preview GitHub Pages: site servi sous https://redasnkrs.github.io/smash-smash/
// "" en dev, et à adapter si le site passe sous un domaine perso (Odoo / smash-smash.be)
const BASE_PATH = process.env.NODE_ENV === "production" ? "/smash-smash" : "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  basePath: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
