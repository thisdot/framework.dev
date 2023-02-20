import { Tool } from '@framework/system/src/models/tool'

export const toolTags = [
	'VSCode',
	'Chrome',
	'Firefox',
	'Safari',
	'development',
	'UI Design',
] as const

export const tools: Tool<(typeof toolTags)[number]>[] = [
	{
		name: 'Qwik Playground',
		author: 'Qwik',
		description:
			'An online playground service where you can write, compile (or run) a Qwik application, and share it with others.',
		image: '/qwik-icon.png',
		href: 'https://qwik.builder.io/playground/',
		tags: ['development'],
	},
	{
		name: 'Qwik Snippets',
		author: 'johnreemar',
		href: 'https://marketplace.visualstudio.com/items?itemName=johnreemar.vscode-qwik-snippets',
		description:
			'This extension for Visual Studio Code adds snippets for Qwik for TypeScript and MDX.',
		image:
			'https://github.com/qwikverse/vscode-qwik-snippets/raw/main/assets/qwik-snippets.png',
		tags: ['VSCode', 'development'],
	},
]
