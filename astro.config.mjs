import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tokencss from "@tokencss/astro";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tokencss(), image()],
  vite: {
    ssr: {
      noExternal: ['@preact/signals', 'preact', 'preact-render-to-string']
    }
  }
});
