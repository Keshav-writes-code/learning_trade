import { defineConfig, envField } from 'astro/config';
import UnoCSS from 'unocss/astro';
import svelte from '@astrojs/svelte';

import db from '@astrojs/db';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [UnoCSS(), svelte(), db(), sitemap()],
  env: {
    schema: {
      GOOGLE_DRIVE_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
  },
  site: 'https://keshav.is-a.dev',
  base: 'learning_trade',
});
