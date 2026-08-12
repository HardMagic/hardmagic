import { access } from 'node:fs/promises';

const routes = ['index.html','products/index.html','products/wiremark/index.html','products/studio/index.html','products/cli/index.html','products/web-magic/index.html','products/photo-curator/index.html','products/gpu-router/index.html','company/index.html','contact/index.html','privacy/index.html','404.html','sitemap-index.xml'];
const missing = [];
for (const route of routes) {
  try { await access(new URL(`../dist/${route}`, import.meta.url)); }
  catch { missing.push(route); }
}
if (missing.length) throw new Error(`Missing built routes: ${missing.join(', ')}`);
console.log(`Route audit passed: ${routes.length} expected outputs.`);
