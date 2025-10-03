import { defineCollection, z } from "astro:content";

/** BLOGS (unchanged) */
const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z
      .union([
        z.string(),
        z.object({
          src: z.any().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
          format: z.string().optional(),
          alt: z.string().optional(),
          url: z.union([z.string(), z.object({ src: z.any(), width: z.number().optional() })]).optional(),
        }),
      ])
      .optional(),
    description: z.string().optional(),
  }),
});

/** PRODUCTS — relaxed schema + safe defaults */
const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    /** If not provided, we’ll fall back to the file name (entry.id) */
    slug: z.string().optional(),
    excerpt: z.string().optional(),

    /** Accept “250000”, 250000, or “250.000” */
    price: z.coerce.number(),
    currency: z.string().default("IDR"),

    sku: z.string().optional(),
    brand: z.string().optional(),

    /** At least 1 image, keep it super simple: public path string is fine */
    images: z
      .array(
        z.union([
          z.string(),
          z.object({
            src: z.string(),
            alt: z.string().optional(),
          }),
        ])
      )
      .min(1),

    /** Optional CTA link (WA/marketplace) */
    url: z.string().url().optional(),

    availability: z
      .enum(["InStock", "OutOfStock", "PreOrder", "Discontinued"])
      .default("InStock"),

    tags: z.array(z.string()).optional(),

    /** Optional SEO */
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),

    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = {
  blogs,
  products,
};
