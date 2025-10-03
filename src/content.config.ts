/// content.config.ts
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

/* ========= BLOGS ========= */
const blogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      author: z.string().default("Twotworial"),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),

      // Gambar boleh: file lokal (image()), object {url,alt}, atau URL https
      image: z
        .union([
          image(), // file lokal relatif dari MD(X)
          z.object({
            url: z.union([image(), z.string().url()]),
            alt: z.string().optional(),
          }),
          z.string().url(), // URL eksternal
        ])
        .optional(),
    }),
});

/* ========= PRODUCTS ========= */
const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string().optional(),             // fallback: id/filename
      excerpt: z.string().optional(),
      price: z.coerce.number().nonnegative(),  // aman jika diketik sebagai string di frontmatter
      currency: z.string().default("IDR"),
      sku: z.string().optional(),
      brand: z.string().optional(),

      images: z
        .array(
          z.union([
            image(), // file lokal
            z.object({
              src: z.union([image(), z.string().url()]),
              alt: z.string().optional(),
            }),
            z.string().url(), // URL eksternal langsung
          ])
        )
        .min(1),

      url: z.string().url().optional(), // CTA (WA/marketplace)
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

/* ========= EXPORT ========= */
export const collections = { blogs, products };
