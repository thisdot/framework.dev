import { z, defineCollection } from 'astro:content'
import { type Frameworks } from '@framework/site/src/types'
import { getTagsByType } from '@framework/site/src/utils/tags'

export const collections = {
	// angular
	'angular-books': generateBookSchema('angular'),
	'angular-blogs': generateBlogSchema('angular'),
	'angular-communities': generateCommunitySchema('angular'),
	'angular-courses': generateCourseSchema('angular'),
	'angular-libraries': generateLibrarySchema('angular'),
	'angular-podcasts': generatePodcastSchema('angular'),
	'angular-tools': generateToolSchema('angular'),
	// deno
	'deno-books': generateBookSchema('deno'),
	'deno-blogs': generateBlogSchema('deno'),
	'deno-communities': generateCommunitySchema('deno'),
	'deno-courses': generateCourseSchema('deno'),
	'deno-libraries': generateLibrarySchema('deno'),
	'deno-podcasts': generatePodcastSchema('deno'),
	'deno-tools': generateToolSchema('deno'),
	// graphql
	'graphql-books': generateBookSchema('graphql'),
	'graphql-blogs': generateBlogSchema('graphql'),
	'graphql-communities': generateCommunitySchema('graphql'),
	'graphql-courses': generateCourseSchema('graphql'),
	'graphql-libraries': generateLibrarySchema('graphql'),
	'graphql-podcasts': generatePodcastSchema('graphql'),
	'graphql-tools': generateToolSchema('graphql'),
	// nodejs
	'nodejs-books': generateBookSchema('nodejs'),
	'nodejs-blogs': generateBlogSchema('nodejs'),
	'nodejs-communities': generateCommunitySchema('nodejs'),
	'nodejs-courses': generateCourseSchema('nodejs'),
	'nodejs-libraries': generateLibrarySchema('nodejs'),
	'nodejs-podcasts': generatePodcastSchema('nodejs'),
	'nodejs-tools': generateToolSchema('nodejs'),
	// qwik
	'qwik-books': generateBookSchema('qwik'),
	'qwik-blogs': generateBlogSchema('qwik'),
	'qwik-communities': generateCommunitySchema('qwik'),
	'qwik-courses': generateCourseSchema('qwik'),
	'qwik-libraries': generateLibrarySchema('qwik'),
	'qwik-podcasts': generatePodcastSchema('qwik'),
	'qwik-tools': generateToolSchema('qwik'),
	// react
	'react-books': generateBookSchema('react'),
	'react-blogs': generateBlogSchema('react'),
	'react-communities': generateCommunitySchema('react'),
	'react-courses': generateCourseSchema('react'),
	'react-libraries': generateLibrarySchema('react'),
	'react-podcasts': generatePodcastSchema('react'),
	'react-tools': generateToolSchema('react'),
	// solidjs
	'solidjs-books': generateBookSchema('solidjs'),
	'solidjs-blogs': generateBlogSchema('solidjs'),
	'solidjs-communities': generateCommunitySchema('solidjs'),
	'solidjs-courses': generateCourseSchema('solidjs'),
	'solidjs-libraries': generateLibrarySchema('solidjs'),
	'solidjs-podcasts': generatePodcastSchema('solidjs'),
	'solidjs-tools': generateToolSchema('solidjs'),
	// svelte
	'svelte-books': generateBookSchema('svelte'),
	'svelte-blogs': generateBlogSchema('svelte'),
	'svelte-communities': generateCommunitySchema('svelte'),
	'svelte-courses': generateCourseSchema('svelte'),
	'svelte-libraries': generateLibrarySchema('svelte'),
	'svelte-podcasts': generatePodcastSchema('svelte'),
	'svelte-tools': generateToolSchema('svelte'),
	// vue
	'vue-books': generateBookSchema('vue'),
	'vue-blogs': generateBlogSchema('vue'),
	'vue-communities': generateCommunitySchema('vue'),
	'vue-courses': generateCourseSchema('vue'),
	'vue-libraries': generateLibrarySchema('vue'),
	'vue-podcasts': generatePodcastSchema('vue'),
	'vue-tools': generateToolSchema('vue'),
}

function generateBookSchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				authors: z.array(z.string()),
				description: z.string(),
				yearOfPublication: z.number(), // filter to 4 characters
				numberOfPages: z.number(),
				level: z.enum(['beginner', 'intermediate', 'advanced']),
				href: z.string().url(),
				image: image(),
				tags: z.array(z.enum(getTagsByType('books', framework))),
			}),
	})
}

function generateBlogSchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				author: z.string(),
				description: z.string(),
				href: z.string().url(),
				image: image(),
				tags: z.array(z.enum(getTagsByType('blogs', framework))),
			}),
	})
}

function generateCommunitySchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				name: z.string(),
				description: z.string(),
				type: z.string(),
				href: z.string().url(),
				image: image(),
				darkImageBackground: z.boolean().optional(),
				tags: z.array(z.enum(getTagsByType('communities', framework))),
			}),
	})
}

function generateCourseSchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				author: z.string(),
				description: z.string(),
				href: z.string().url(),
				image: image(),
				level: z.enum(['beginner', 'intermediate', 'advanced']),
				paymentType: z.enum(['free', 'paid']),
				format: z.enum(['text', 'interactive', 'video']),
				tags: z.array(z.enum(getTagsByType('courses', framework))),
			}),
	})
}

function generateLibrarySchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				name: z.string(),
				href: z.string().url(),
				author: z.string(),
				description: z.string(),
				repo: z.string(),
				package: z.string(),
				image: image(),
				darkImageBackground: z.boolean().optional(),
				language: z.enum([
					'C#',
					'CSS',
					'Elixir',
					'Go',
					'Haskell',
					'Java',
					'JavaScript',
					'NodeJS',
					'Python',
					'Scala',
					'Swift',
					'TypeScript',
					'unknown',
				]),
				tags: z.array(z.enum(getTagsByType('libraries', framework))),
			}),
	})
}

function generatePodcastSchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				href: z.string().url(),
				hosts: z.array(z.string()),
				description: z.string(),
				rss: z.string().url().optional(),
				image: image(),
				tags: z.array(z.enum(getTagsByType('podcasts', framework))),
			}),
	})
}

function generateToolSchema(framework: Frameworks) {
	return defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				name: z.string(),
				href: z.string().url(),
				author: z.string(),
				description: z.string(),
				image: image(),
				tags: z.array(z.enum(getTagsByType('tools', framework))),
			}),
	})
}
