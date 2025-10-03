import { defineCollection, z } from "astro:content";

/** BLOGS (aman & sederhana) */
const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

/** PRODUCTS (schema dilonggarkan supaya entry tidak ke-skip) */
const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),              // fallback: id file
    excerpt: z.string().optional(),
    price: z.coerce.number().nonnegative(),   // string "1850000" akan otomatis jadi number
    currency: z.string().default("IDR"),
    sku: z.string().optional(),
    brand: z.string().optional(),

    // opsional supaya nggak mudah gagal validasi
    images: z
      .array(z.object({ src: z.string(), alt: z.string().optional() }))
      .optional(),

    url: z.string().url().optional(),         // CTA (WhatsApp/Marketplace)
    availability: z
      .enum(["InStock", "OutOfStock", "PreOrder", "Discontinued"])
      .default("InStock"),
    tags: z.array(z.string()).optional(),

    // SEO/metadata opsional
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { blogs, products };
