import { getCollection, type CollectionEntry } from 'astro:content'
import { type AllCategories } from '@framework/system/src/models/all-categories'
import { blogIndexMetadata } from '@framework/system/src/models/blog'
import { bookIndexMetadata } from '@framework/system/src/models/book'
import { communityIndexMetadata } from '@framework/system/src/models/community'
import { courseIndexMetadata } from '@framework/system/src/models/course'
import {
	type Library,
	libraryIndexMetadata,
} from '@framework/system/src/models/library'
import { podcastIndexMetadata } from '@framework/system/src/models/podcast'
import { toolIndexMetadata } from '@framework/system/src/models/tool'
import { getTagsByType } from '@framework/site/src/utils/tags'
import {
	type CollectionTypes,
	type Frameworks,
} from '@framework/site/src/types'

async function getCollectionData(collectionName: CollectionTypes) {
	const collectionData = await getCollection(
		`${import.meta.env.VITE_FRAMEWORK}-${collectionName}`,
	)
	return (collectionData ?? []).map(
		(entry: CollectionEntry<typeof collectionName>) => ({
			id: entry.id,
			...entry.data,
		}),
	)
}

export async function getSearchData(
	framework: Frameworks,
): Promise<AllCategories[]> {
	const [books, blogs, communities, courses, libraries, podcasts, tools] =
		await Promise.all([
			getCollectionData('books'),
			getCollectionData('blogs'),
			getCollectionData('communities'),
			getCollectionData('courses'),
			getCollectionData('libraries'),
			getCollectionData('podcasts'),
			getCollectionData('tools'),
		])

	return [
		{
			data: libraries,
			indexMetadata: libraryIndexMetadata,
			name: libraryIndexMetadata.name,
			tags: getTagsByType('libraries', framework),
			subCategories: Array.from(
				new Set(libraries.flatMap((lib: Library) => lib.tags)),
			),
		},
		{
			data: tools,
			indexMetadata: toolIndexMetadata,
			name: toolIndexMetadata.name,
			tags: getTagsByType('tools', framework),
		},
		{
			data: courses,
			indexMetadata: courseIndexMetadata,
			name: courseIndexMetadata.name,
			tags: getTagsByType('courses', framework),
		},
		{
			data: communities,
			indexMetadata: communityIndexMetadata,
			name: communityIndexMetadata.name,
			tags: getTagsByType('communities', framework),
			subCategories: getTagsByType('communities', framework),
		},
		{
			data: podcasts,
			indexMetadata: podcastIndexMetadata,
			name: podcastIndexMetadata.name,
			tags: getTagsByType('podcasts', framework),
		},
		{
			data: books,
			indexMetadata: bookIndexMetadata,
			name: bookIndexMetadata.name,
			tags: getTagsByType('books', framework),
		},
		{
			data: blogs,
			indexMetadata: blogIndexMetadata,
			name: blogIndexMetadata.name,
			tags: getTagsByType('blogs', framework),
		},
	]
}
