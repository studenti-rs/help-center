import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

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
      sidebar: [
        {
          label: "Start",
          autogenerate: {
            directory: "start",
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
          autogenerate: {
            directory: "copyright",
          },
        },
        {
          label: "Support",
          items: [
            {
              label: "Help",
              link: "/support/help",
            },
            {
              label: "Copyright Infringement",
              link: "/support/copyright-infringement",
            },
            {
              label: "Take down request",
              link: "/support/take-down",
            },
            {
              label: "Contact",
              link: "https://...tallyforms somewhere",
              badge: "↗",
            },
          ],
        },
      ],
    }),
  ],
  output: "static",
});
