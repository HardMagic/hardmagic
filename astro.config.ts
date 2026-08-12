import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hardmagic.com',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: 'jsx',
  image: {
    responsiveStyles: true,
  },
  integrations: [sitemap()],
});
