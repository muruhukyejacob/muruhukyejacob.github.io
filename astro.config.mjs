// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site on GitHub Pages: https://muruhukyejacob.github.io (base path "/").
// If you later add a custom domain, change `site` and add public/CNAME.
export default defineConfig({
  site: 'https://muruhukyejacob.github.io',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
