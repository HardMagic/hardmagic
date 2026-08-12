import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    kicker: z.string(),
    category: z.string(),
    status: z.enum(['Available', 'Active development', 'Research']),
    summary: z.string(),
    thesis: z.string(),
    capabilities: z.array(z.string()).min(3),
    workflow: z.array(z.string()).min(3),
    proof: z.array(z.string()).min(2),
    limitation: z.string(),
    order: z.number().int(),
    featured: z.boolean(),
    accent: z.enum(['wine', 'coral', 'gold', 'cyan', 'violet', 'green']),
  }),
});

export const collections = { products };
