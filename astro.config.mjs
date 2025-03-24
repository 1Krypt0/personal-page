// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://tiagopbrodrigues.com",
  env: {
    schema: {
      STRAPI_URL: envField.string({ context: "server", access: "public" }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    svg: true,
  },
});
