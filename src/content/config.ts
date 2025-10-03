// src/content/config.ts
import { defineCollection, z } from "astro:content";

/** BLOGS (disederhanakan biar aman) */
const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),     // pakai string path publik
    description: z.string().optional(),
  }),
});

/** PRODUCTS */
const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),        // fallback ke entry.id
    excerpt: z.string().optional(),
    price: z.number().nonnegative(),
    currency: z.string().default("IDR"),
    sku: z.string().optional(),
    brand: z.string().optional(),
    images: z.array(
      z.object({
        src: z.string(),                 // path PUBLIC (mis. /images/products/xxx.webp)
        alt: z.string().optional(),
      })
    ).min(1),
    url: z.string().url().optional(),   // CTA (WA/Marketplace)
    availability: z.enum(["InStock","OutOfStock","PreOrder","Discontinued"]).default("InStock"),
    tags: z.array(z.string()).optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { blogs, products };
