import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.union([
      z.string(),
      z.object({
        src: z.any().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        format: z.string().optional(),
        alt: z.string().optional(),
        url: z.union([z.string(), z.object({ src: z.any(), width: z.number().optional() })]).optional(),
      }),
    ]).optional(),
    description: z.string().optional(),
  }),
});

const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    price: z.coerce.number(),
    currency: z.string().default("IDR"),
    sku: z.string().optional(),
    brand: z.string().optional(),
    images: z.array(
      z.union([
        z.string(),
        z.object({ src: z.string(), alt: z.string().optional() }),
      ])
    ).min(1),
    url: z.string().url().optional(),
    availability: z.enum(["InStock", "OutOfStock", "PreOrder", "Discontinued"]).default("InStock"),
    tags: z.array(z.string()).optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { blogs, products };
