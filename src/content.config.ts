// src/content.config.ts — versi kompatibel “gaya lama” (tanpa image())
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// BLOGS: skema longgar — image bisa string apa pun atau object { url, alt }
const blogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default("Twotworial"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),

    // Tidak pakai image() → tidak mencoba import. Terima:
    // - string apa pun ("/TwotworialSQ.webp", "https://..."), atau
    // - object { url: string, alt?: string }
    image: z
      .union([
        z.string(), // /public path, http(s) URL, dll.
        z.object({
          url: z.string(),
          alt: z.string().optional(),
        }),
      ])
      .optional(),
  }),
});

// PRODUCTS: sama-sama longgar agar MD lama tetap valid
const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    price: z.number().nonnegative(),
    currency: z.string().default("IDR"),
    sku: z.string().optional(),
    brand: z.string().optional(),
    // images: bisa berupa array string (/public path atau URL), atau object { src/url, alt }
    images: z
      .array(
        z.union([
          z.string(), // "/images/products/lemari.webp" atau "https://..."
          z.object({
            src: z.string().optional(),
            url: z.string().optional(), // dukung keduanya biar fleksibel
            alt: z.string().optional(),
          }),
        ])
      )
      .min(1)
      .optional(),
    url: z.string().url().optional(),
    availability: z
      .enum(["InStock", "OutOfStock", "PreOrder", "Discontinued"])
      .default("InStock"),
    tags: z.array(z.string()).optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { blogs, products };
