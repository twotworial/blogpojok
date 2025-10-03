// src/content/config.ts
import { defineCollection, z } from "astro:content";

/** BLOGS */
const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    image: z
      .union([
        z.string(),
        z.object({
          src: z.any().optional(),
          width: z.number().optional(),
          height: z.number().optional(),
          format: z.string().optional(),
          alt: z.string().optional(),
          url: z
            .union([z.string(), z.object({ src: z.any(), width: z.number().optional() })])
            .optional(),
        }),
      ])
      .optional(),
  }),
});

/** PRODUCTS */
const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),      // fallback: id filename
    excerpt: z.string().optional(),
    price: z.number().nonnegative(),  // TULIS tanpa tanda kutip di frontmatter
    currency: z.string().default("IDR"),
    sku: z.string().optional(),
    brand: z.string().optional(),
    availability: z
      .enum(["InStock", "OutOfStock", "PreOrder", "Discontinued"])
      .default("InStock"),
    url: z.string().url().optional(), // CTA beli/WA/marketplace
    images: z
      .array(z.object({ src: z.string(), alt: z.string().optional() }))
      .min(1),                        // wajib ada minimal 1 gambar
    tags: z.array(z.string()).default([]),

    // SEO opsional
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),

    // Tanggal — dukung dua nama (compat)
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),     // alias legacy
    updated: z.coerce.date().optional(),  // alias legacy
  }),
});

export const collections = { blogs, products };
