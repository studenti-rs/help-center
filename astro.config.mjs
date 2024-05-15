import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "studenti.rs",
      social: {
        instagram: "https://www.instagram.com/studenti_rs/",
        facebook: "https://facebook.com/studenti.rs",
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: {
            directory: "getting-started",
          },
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Example Guide", link: "/guides/example/" },
          // ],
        },
        {
          label: "Copyright",
          autogenerate: {
            directory: "copyright",
          },
        },
        {
          label: "Uploading",
          autogenerate: {
            directory: "uploading",
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
  adapter: cloudflare(),
});
