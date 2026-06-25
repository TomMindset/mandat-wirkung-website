import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.mandat-wirkung.de",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
