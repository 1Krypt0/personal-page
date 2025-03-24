import { STRAPI_URL } from "astro:env/server";
import qs from "qs";
import { z } from "zod";

const pageSchema = z.object({
  title: z.string(),
  publishedAt: z
    .string()
    .datetime()
    .transform((str) => new Date(str)),
  content: z.string(),
});

const categorySchema = z.object({
  name: z.string(),
  slug: z.string(),
});

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  content: z.string(),
  createdAt: z
    .string()
    .datetime()
    .transform((str) => new Date(str)),
  updatedAt: z
    .string()
    .datetime()
    .transform((str) => new Date(str)),
  publishedAt: z
    .string()
    .datetime()
    .transform((str) => new Date(str)),
  cover: z
    .object({
      url: z.string(),
      alternativeText: z.string(),
    })
    .nullable(),
  category: categorySchema,
});

const projectShowcaseSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  content: z.string(),
  projectLink: z.string().url(),
  createdAt: z
    .string()
    .datetime()
    .transform((str) => new Date(str)),
  updatedAt: z
    .string()
    .datetime()
    .transform((str) => new Date(str)),
  publishedAt: z
    .string()
    .datetime()
    .transform((str) => new Date(str)),
  cover: z
    .object({
      url: z.string(),
      alternativeText: z.string(),
    })
    .nullable(),
  category: categorySchema,
});

export type Category = z.infer<typeof categorySchema>;
export type Article = z.infer<typeof articleSchema>;
export type ProjectShowcase = z.infer<typeof projectShowcaseSchema>;

export const getAllProjects = async (): Promise<ProjectShowcase[]> => {
  const path = "/api/project-showcases";
  const url = new URL(path, STRAPI_URL);

  // Build query parameters using qs to populate cover image data
  url.search = qs.stringify({
    populate: {
      cover: {
        fields: ["url", "alternativeText"],
      },
      category: {
        fields: ["name", "slug"],
      },
    },
  });

  const articlesData = await fetch(url.href);

  const { data } = await articlesData.json();

  console.log("Data is");
  console.log(data);

  return data.map((item: any) => projectShowcaseSchema.parse(item));
};

export const getAllPosts = async (): Promise<Article[]> => {
  const path = "/api/articles";
  const url = new URL(path, STRAPI_URL);

  // Build query parameters using qs to populate cover image data
  url.search = qs.stringify({
    populate: {
      cover: {
        fields: ["url", "alternativeText"],
      },
      category: {
        fields: ["name", "slug"],
      },
    },
  });

  const articlesData = await fetch(url.href);

  const { data } = await articlesData.json();

  return data.map((item: any) => articleSchema.parse(item));
};

export const getAboutPage = async () => {
  const path = "/api/about";
  const url = new URL(path, STRAPI_URL);

  const about = await fetch(url.href);

  if (!about.ok) {
    throw new Error("Error fetching Strapi Article");
  }

  const { data } = await about.json();

  return pageSchema.parse(data);
};
