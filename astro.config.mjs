import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: point at the real subdomain once it is live. It is what the
  // canonical URLs and any future sitemap are built from.
  site: 'https://ayuda.bipsy.es',
  // Two pages of text and a CSS animation: nothing here needs a framework at
  // runtime, so the build ships no JavaScript beyond the two small inline
  // scripts (the search filter and the accordion).
  output: 'static',
  // One canonical URL per topic. `/` is not a copy of the business landing,
  // it points at it.
  redirects: { '/': '/negocios' },
  build: { inlineStylesheets: 'auto' },
  server: { port: 4321 },
});
