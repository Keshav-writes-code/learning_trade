import { defineConfig, envField } from "astro/config";
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
  env: {
    schema: {
      GOOGLE_DRIVE_API_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
  site: "https://Keshav-writes-code.github.io",
  base: "learning_trade",
});
