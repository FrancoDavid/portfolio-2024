import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Cambiar de 'static' a 'server'
  output: 'server',

  integrations: [react()]
});