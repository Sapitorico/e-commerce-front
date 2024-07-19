import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), preact()],
  server: {
    port: 9002
  },
  output: 'hybrid'
});