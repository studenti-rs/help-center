import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://help.studenti.rs",
  integrations: [
    starlight({
      title: "studenti.rs",
      social: {
        instagram: "https://www.instagram.com/studenti_rs/",
        facebook: "https://facebook.com/studenti.rs",
      },
      plugins: [starlightLinksValidator()],
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: {
            directory: "getting-started",
          },
        },
        {
          label: "Uploading",
          autogenerate: {
            directory: "uploading",
          },
        },
        {
          label: "Copyright",
          collapsed: true,
          autogenerate: {
            directory: "copyright",
          },
        },
        {
          label: "Support",
          autogenerate: {
            directory: "support",
          },
        },
      ],
    }),
  ],
  output: "static",
});
