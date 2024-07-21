import { defineConfig } from "astro/config";
import icon from "astro-icon";
import preact from "@astrojs/preact";
import auth from "auth-astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), preact(), auth()],
  server: {
    port: 9002,
  },
  output: "server",
  adapter: vercel(),
});
