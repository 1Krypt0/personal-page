import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://tiagopbrodrigues.com",
  integrations: [sitemap(), tailwind()],
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});