import { defineCollection, z } from "astro:content";

/** BLOGS (sesuaikan dengan frontmatter yang sekarang kamu pakai) */
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
          src: z.any().optional(), // Astro Image metadata
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

/** PRODUCTS (baru) */
const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // fallback: id/filename
    excerpt: z.string().optional(),
    price: z.number().nonnegative(),
    currency: z.string().default("IDR"),
    sku: z.string().optional(),
    brand: z.string().optional(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
        })
      )
      .min(1),
    url: z.string().url().optional(), // CTA (WA/Marketplace)
    availability: z
      .enum(["InStock", "OutOfStock", "PreOrder", "Discontinued"])
      .default("InStock"),
    tags: z.array(z.string()).optional(),
    // SEO opsional
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
