import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Wave Containers Showcase',
      description: 'Examples showing how to configure Nextflow to run with the Wave container provisioning service',
      logo: {
        src: './src/assets/wave-logo.svg',
      },
      social: {
        github: 'https://github.com/seqera/wave-showcase',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/' },
          ]
        },
        {
          label: 'Examples',
          items: [
            { label: '1. Private Container Repositories', link: '/examples/example1/' },
            { label: '2. Nextflow Module Containers', link: '/examples/example2/' },
            { label: '3. Module Containers to Private Repo', link: '/examples/example3/' },
            { label: '4. Conda-based Containers', link: '/examples/example4/' },
            { label: '5. Augment Containers with Process Resources', link: '/examples/example5/' },
            { label: '6. S3 with Wave and Fusion', link: '/examples/example6/' },
            { label: '7. nf-core/RNAseq with Conda Containers', link: '/examples/example7/' },
            { label: '8. Remote Kubernetes with Wave and Fusion', link: '/examples/example8/' },
            { label: 'Google Batch with Fusion', link: '/examples/googlebatch/' },
            { label: 'GKE with Fusion', link: '/examples/gke/' },
            { label: 'Bonus: Interactive Debugging', link: '/examples/bonus/' }
          ]
        }
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
}); 