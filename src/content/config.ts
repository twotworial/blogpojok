import { defineCollection, z } from "astro:content";

const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),            // fallback ke nama file
    excerpt: z.string().optional(),
    price: z.number().nonnegative(),
    currency: z.string().default("IDR"),
    sku: z.string().optional(),
    brand: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),                      // /assets/… atau URL penuh
      alt: z.string().optional()
    })).min(1),
    url: z.string().url().optional(),       // tombol beli / WA / marketplace
    availability: z.enum([
      "InStock","OutOfStock","PreOrder","Discontinued"
    ]).default("InStock"),
    tags: z.array(z.string()).optional(),
    // SEO (opsional)
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    // tanggal
    date: z.date().optional(),
    updated: z.date().optional()
  })
});

export const collections = {
  blogs: /* kamu sudah punya */,
  products,
};
