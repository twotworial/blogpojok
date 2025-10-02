// astro.config.mjs
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Domain kanonik project (penting untuk SEO & canonical tag)
  site: "https://twotworial.com",

  // Integrations (Astro official + optional)
  integrations: [
    preact(),   // Preact renderer
    sitemap(),  // Auto generate sitemap.xml
  ],

  // Image handling (Astro v4+)
  image: {
    responsive: true,        // aktifkan responsive images
    service: {
      entrypoint: "astro/assets/services/sharp" // default (sharp) aman untuk prod
    }
  },

  // Vite config (plugin Tailwind via official adapter)
  vite: {
    plugins: [tailwindcss()],
  },
});
