import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function walk(path) {
  const entries = await readdir(path, { withFileTypes: true });
  return (await Promise.all(entries.map(async (entry) => entry.isDirectory() ? walk(join(path, entry.name)) : join(path, entry.name)))).flat();
}
const files = await walk(fileURLToPath(new URL('../dist', import.meta.url)));
const images = files.filter((file) => /\.(avif|webp|png|jpe?g|svg)$/i.test(file));
const oversized = [];
for (const file of images) if ((await stat(file)).size > 650_000) oversized.push(file);
if (!images.some((file) => /\.avif$/i.test(file))) throw new Error('Responsive AVIF hero output was not produced.');
if (oversized.length) throw new Error(`Oversized media: ${oversized.join(', ')}`);
console.log(`Media audit passed: ${images.length} assets, no file over 650 KB.`);
