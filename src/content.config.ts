import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

// Type-check frontmatter using a schema
// creations
const creations = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/creations",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			cardImage: image(),
			heroImage: image(),
			technique: z.string(),
			date: z.string(),
			images: z.array(
				z.array(image()).refine((arr) => [1, 2, 3].includes(arr.length), {
					message: "Each sub-array must contain 1, 2, or 3 items",
				}),
			),
			// Transform string to Date object
			// date: z.coerce.date(),
			order: z.number(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// testimonials
const testimonials = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/testimonials",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			testimonial: z.string(),
			image: image(),
			order: z.number(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// other pages
const otherPages = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/otherPages",
	}),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	creations,
	testimonials,
	otherPages,
};
