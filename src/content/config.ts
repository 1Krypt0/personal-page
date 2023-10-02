import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: image().optional(),
		category: z.string()
	}),
});

const projects = defineCollection({
	type: 'content',
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z
		.string()
		.or(z.date())
		.transform((val) => new Date(val)),
		category: z.string(),
		heroImage: image().optional(),
		ghLink: z.string(),
	}),
});

export const collections = { blog, projects };
