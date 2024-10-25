import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://minahil-malik.pages.dev/",
  output: "hybrid",

  adapter: netlify({
    imageCDN: false,
  }),
  adapter: cloudflare({
    imageService: "compile",
  }),
  // compatibility requirements for Cloudflare Pages
  vite: {
    ssr: {
      external: ["stream", "util", "os", "fs", "svgo"],
    },
  },
  redirects: {
    "/admin": "/keystatic",
  },
  integrations: [react(), keystatic(), tailwind(), sitemap(), compress()],
});
