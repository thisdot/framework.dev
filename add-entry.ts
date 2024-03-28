import prompts from 'prompts'
import { getTagsByType } from '@framework/site/src/utils/tags'
;(async () => {
	const metadata = await prompts([
		{
			type: 'multiselect',
			name: 'framework',
			message: 'Which framework(s) should we add this entry to?',
			choices: [
				{ title: 'Angular', value: 'angular' },
				{ title: 'Deno', value: 'deno' },
				{ title: 'GraphQL', value: 'graphql' },
				{ title: 'NodeJS', value: 'nodejs' },
				{ title: 'Qwik', value: 'qwik' },
				{ title: 'React', value: 'react' },
				{ title: 'SolidJS', value: 'solidjs' },
				{ title: 'Svelte', value: 'svelte' },
				{ title: 'Vue', value: 'vue' },
			],
			hint: '- Space to select. Return to submit',
			min: 1,
		},
		{
			type: 'autocomplete',
			name: 'collection',
			message: 'Which collection should we add this entry to?',
			choices: [
				{ title: 'Blogs', value: 'blogs' },
				{ title: 'Books', value: 'books' },
				{ title: 'Communities', value: 'communities' },
				{ title: 'Courses', value: 'courses' },
				{ title: 'Libraries', value: 'libraries' },
				{ title: 'Podcasts', value: 'podcasts' },
				{ title: 'Tools', value: 'tools' },
			],
		},
	])

	const entryData = await prompts([
		{
			type: (prev, values) => {
				if (
					['books', 'blogs', 'courses', 'podcast'].includes(values.collection)
				) {
					return 'text'
				}
				return null
			},
			name: 'title',
			message: 'What is the title of the entry?',
		},
		{
			type: (prev, values) => {
				if (
					['communities', 'libraries', 'podcasts'].includes(values.collection)
				) {
					return 'text'
				}
				return null
			},
			name: 'name',
			message: 'What is the name of the entry?',
		},
		{
			type: 'text',
			name: 'href',
			message: `What is the URL for this resource?`,
		},
		{
			type: 'text',
			name: 'description',
			message: 'What is the description for this resource?',
		},
		{
			type: 'text',
			name: 'image',
			message: 'What is the URL for the image for this resource?',
		},
		{
			type: 'multiselect',
			name: 'framework',
			message: 'How should this resource be tagged?',
			choices: getTagsByType(metadata.collection, metadata.framework).map(
				(tag) => ({
					title: tag
						.toLowerCase()
						.replaceAll(/(?:^|\s|-)\S/g, (x) => x.toUpperCase()),
					value: tag,
				}),
			),
			hint: '- Space to select. Return to submit',
		},
	])
	console.log(metadata, entryData)

	// const response = await prompts({
	// 	type: 'number',
	// 	name: 'value',
	// 	message: 'How old are you?',
	// 	validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
	// })

	// console.log(response) // => { value: 24 }
})()
