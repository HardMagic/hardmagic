import { access } from 'node:fs/promises';
import { editorialRoutes } from '../src/data/editorial.ts';
import { briefs } from '../src/data/briefs.ts';

const editorial = editorialRoutes.map(({ path }) => path === '/' ? 'index.html' : `${path.replace(/^\//, '')}index.html`);
const privateBriefs = briefs.flatMap(({ slug }) => [`briefs/${slug}/index.html`, `briefs/${slug}/thanks/index.html`]);
const routes = [...new Set([...editorial, ...privateBriefs, '404.html', 'sitemap-index.xml'])];
if (routes.length < 100) throw new Error(`Route ledger requires at least 100 outputs; received ${routes.length}.`);
const knownPaths = new Set(editorialRoutes.map(({ path }) => path));
const brokenRelations = editorialRoutes.flatMap((route) => route.relatedPaths.filter((path) => !knownPaths.has(path)).map((path) => `${route.path} -> ${path}`));
if (brokenRelations.length) throw new Error(`Broken editorial relationships: ${brokenRelations.join(', ')}`);
const missing = [];
for (const route of routes) {
  try { await access(new URL(`../dist/${route}`, import.meta.url)); }
  catch { missing.push(route); }
}
if (missing.length) throw new Error(`Missing built routes: ${missing.join(', ')}`);
console.log(`Route audit passed: ${routes.length} expected outputs.`);
