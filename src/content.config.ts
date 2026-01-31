import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const homeSectionSchema = z
  .object({
    sectionId: z.enum([
      'hero',
      'missionStatement',
      'intro',
      'valueProposition',
      'productHighlight',
      'useCase',
      'platformFuture',
      'companyCredibility',
      'newsMilestones',
      'contactNewsletter',
    ]),
    order: z.number(),
  })
  .passthrough();

const homeSections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/homepage' }),
  schema: homeSectionSchema,
});

const newsSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  excerpt: z.string().optional(),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: newsSchema,
});

const careersSchema = z.object({
  title: z.string(),
  role: z.string().optional(),
  location: z.string().optional(),
});

const careers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/careers' }),
  schema: careersSchema,
});

export const collections = {
  homeSections,
  news,
  careers,
};
