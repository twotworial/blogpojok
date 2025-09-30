import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

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
      image: z
        .union([
          image(), // gunakan path relatif ke file MD(X) bila gambarnya di src/assets
          z.object({ url: z.string(), alt: z.string().optional() }),
          z.string(),
        ])
        .optional(),
    }),
});

export const collections = { blogs };
