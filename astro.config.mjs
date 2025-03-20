// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: 'https://edmundmiller.github.io',
  base: '/wave-showcase',
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
            { slug: "showcase/example6" },
            { slug: "showcase/example7" },
            { slug: "showcase/example8" },
            {
              label: "Bonus",
              items: [
                { slug: "showcase/example-bonus" },
                { slug: "showcase/example-googlebatch" },
                { slug: "showcase/example-gke" },
                { slug: "showcase/example-spack" },
              ],
            },
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
