import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		author: z.string(),
		description: z.string(),
		href: z.string().url(),
		image: z.string().url(),
	}),
})

const booksCollection = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		authors: z.array(z.string()),
		description: z.string(),
		yearOfPublication: z.number(), // filter to 4 characters
		numberOfPages: z.number(),
		level: z.enum(['beginner', 'intermediate', 'advanced']),
		href: z.string().url(),
		image: z.string().url(),
		tags: z.array(z.enum(getBookTagsType())),
	}),
})

export const collections = {
	blogs: blogCollection,
	books: booksCollection,
}

function getBookTagsType(): [string, ...string[]] {
	switch (import.meta.env.VITE_FRAMEWORK) {
		case 'angular':
			return [
				'nx',
				'recipes',
				'monorepo',
				'state management',
				'NgRx',
				'testing',
				'PWA',
				'routing',
				'components',
				'data binding',
			]
		default:
			return ['']
	}
}
