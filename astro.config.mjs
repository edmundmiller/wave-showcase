// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Showcase",
          items: [
            { slug: "showcase/example1" },
            { slug: "showcase/example2" },
            { slug: "showcase/example3" },
            { slug: "showcase/example4" },
            { slug: "showcase/example5" },
          ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
