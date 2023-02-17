import { Tool } from '@framework/system/src/models/tool'

export const toolTags = [
	'VSCode',
	'chrome',
	'firefox',
	'edge',
	'safari',
	'UI Design',
	'development',
] as const

export const tools: Tool<(typeof toolTags)[number]>[] = [
	{
		name: 'Vue CLI',
		author: 'Yuxi (Evan) You',
		description: 'Standard Tooling for Vue.js Development',
		image: 'https://github.com/vuejs.png',
		href: 'https://cli.vuejs.org/',
		tags: ['development'],
	},
	{
		name: 'Vue.js devtools',
		author: 'Vue.js',
		description:
			'Browser DevTools extension for debugging Vue.js applications.',
		image: 'https://github.com/vuejs.png',
		href: 'https://devtools.vuejs.org/guide/installation.html',
		tags: ['chrome', 'firefox', 'edge'],
	},
	{
		name: 'Volar',
		author: 'Johnson Chu',
		description:
			"Volar is a Language Support plugin built specifically for Vue 3. It's based on @vue/reactivity to calculate TypeScript on-demand to optimize performance similar to the native TypeScript language service.",
		image: 'https://github.com/vuejs.png',
		href: 'https://marketplace.visualstudio.com/items?itemName=Vue.volar',
		tags: ['VSCode'],
	},
	{
		name: 'Vetur',
		author: 'Pine Wu',
		description: 'Vue tooling for VS Code.',
		image: 'https://github.com/vuejs.png',
		href: 'https://marketplace.visualstudio.com/items?itemName=octref.vetur',
		tags: ['VSCode'],
	},
	{
		name: 'VueUse',
		author: 'Anthony Fu and VueUse contributors',
		description: 'Collection of Essential Vue Composition Utilities',
		image:
			'https://d33wubrfki0l68.cloudfront.net/2f6479d73bc25170dc532dd42e059166573bf478/61057/favicon.svg',
		href: 'https://vueuse.org/',
		tags: ['development'],
	},
	{
		name: 'GraphQL Playground for Chrome',
		author: 'Dustin R. Callaway',
		description: 'Chrome extension for GraphQL Playground',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg',
		href: 'https://chrome.google.com/webstore/detail/graphql-playground-for-ch/kjhjcgclphafojaeeickcokfbhlegecd?hl=en',
		tags: ['chrome'],
	},
	{
		name: 'GraphQL Playground for Firefox',
		author: 'Francesco De Stefano',
		description: 'Firefox extension for GraphQL Playground',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg',
		href: 'https://addons.mozilla.org/en-US/firefox/addon/graphql-developer-tools/',
		tags: ['firefox'],
	},
	{
		name: 'Apollo Client Devtools for Chrome',
		author: 'Apollo GraphQL',
		description: 'GraphQL debugging tools for Apollo Client.',
		image: 'https://github.com/apollographql.png',
		href: 'https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en',
		tags: ['chrome'],
	},
	{
		name: 'Apollo Client Devtools for Firefox',
		author: 'Apollo GraphQL',
		description: 'GraphQL debugging tools for Apollo Client.',
		image: 'https://github.com/apollographql.png',
		href: 'https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools',
		tags: ['firefox'],
	},
]
