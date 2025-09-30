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

      // ⬇⬇ Perbaikan utama di sini
      image: z
        .union([
          /**
           * Path lokal relatif ke file MD(X) (mis. "../../assets/img.jpg")
           * akan diproses oleh Astro image helper → keluaran _astro/hashed.jpg
           */
          image(),
          /**
           * Bentuk objek:
           *  - url: bisa lokal via image() ATAU URL http(s) eksternal
           *  - alt: opsional
           */
          z.object({
            url: z.union([image(), z.string().url()]),
            alt: z.string().optional(),
          }),
          /**
           * String murni hanya untuk URL http(s) eksternal.
           * (Tidak lagi mengizinkan path relatif sebagai string biasa)
           */
          z.string().url(),
        ])
        .optional(),
    }),
});

export const collections = { blogs };
