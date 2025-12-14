import { defineConfig, envField } from 'astro/config';
import UnoCSS from 'unocss/astro';
import svelte from '@astrojs/svelte';

import db from '@astrojs/db';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [
    UnoCSS(),
    svelte(),
    db(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
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

