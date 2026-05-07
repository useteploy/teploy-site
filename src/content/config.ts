import { defineCollection, z } from "@neutron-build/core/content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      author: z.object({
        name: z.string(),
        avatar: z.string().optional(),
        twitter: z.string().optional(),
      }),
      category: z.enum([
        "Announcements",
        "Engineering",
        "Tutorials",
        "Guides",
        "Comparisons",
        "Business",
        "AI",
        "Security",
      ]),
      tags: z.array(z.string()).default([]),
      image: z
        .object({
          src: z.string(),
          alt: z.string(),
        })
        .optional(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
  }),
  docs: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      sidebar_label: z.string().optional(),
      order: z.number().optional(),
      draft: z.boolean().default(false),
    }),
  }),
};
