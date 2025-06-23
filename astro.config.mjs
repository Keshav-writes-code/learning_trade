import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";

import db from "@astrojs/db";

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    svelte(),
    db(),
  ],
  site: "https://Keshav-writes-code.github.io",
  base: "learning_trade",
});

