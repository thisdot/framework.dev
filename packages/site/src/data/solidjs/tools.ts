import { Tool } from '@framework/system/src/models/tool'

export const toolTags = [
	'UI Design',
	'development',
	'generator',
	'Editor',
	'Command palette',
	'primitives',
	'markdown',
	'dragndrop',
] as const

export const tools: Tool<(typeof toolTags)[number]>[] = [
	{
		name: 'CodeImage',
		author: 'ui.dev',
		description:
			'Create elegant screenshots of your source code. Built with SolidJS.',
		image:
			'https://raw.githubusercontent.com/riccardoperra/codeimage/main/apps/website/public/favicon.svg',
		href: 'https://github.com/riccardoperra/codeimage',
		tags: ['generator'],
	},
	{
		name: 'Bloki.app',
		author: 'MrFoxPro',
		description: 'Blocks-based collaborative editor more coming soon...',
		image:
			'https://raw.githubusercontent.com/MrFoxPro/bloki/master/web/assets/img/logo-bricks.svg',
		href: 'https://github.com/MrFoxPro/bloki',
		tags: ['Editor'],
	},
	{
		name: 'Ambient Color Generation Tool',
		author: 'Kevin Jin',
		description:
			'This tool is designed to generate contrast ready color pallets built specifically for UIUX design.',
		image:
			'https://raw.githubusercontent.com/kevintyj/ambient/master/public/safari-pinned-tab.svg',
		href: 'https://ambient-rvx.web.app',
		tags: ['generator'],
	},
	{
		name: 'Solid Markdown',
		author: 'Andi Rosca',
		description: 'Render Markdown as Solid components',
		image: 'https://github.com/solidjs-community.png',
		href: 'https://github.com/andi23rosca/solid-markdown',
		tags: ['markdown'],
	},
	{
		name: 'Solid DnD',
		author: 'thisbeyond',
		description:
			'A lightweight, performant, extensible drag and drop toolkit for Solid JS.',
		image: 'https://github.com/solidjs-community.png',
		href: 'https://solid-dnd.com',
		tags: ['dragndrop'],
	},
	{
		name: 'Solid Primitives',
		author: 'SolidJS Community',
		description:
			'A project that strives to develop high-quality, community contributed Solid primitives.',
		image: 'https://github.com/solidjs-community.png',
		href: 'https://github.com/solidjs-community/solid-primitives',
		tags: ['primitives'],
	},
	{
		name: 'LocatorJS',
		author: 'infi-pc',
		description:
			'Click on UI Component in the browser to open its code in your IDE.',
		image:
			'https://raw.githubusercontent.com/infi-pc/locatorjs/master/apps/web/public/icon.svg',
		href: 'https://github.com/infi-pc/locatorjs',
		tags: ['development'],
	},
	{
		name: 'Solid Command Palette',
		author: 'Aditya Agarwal',
		description: 'UI Library for Command Palette in SolidJS webapps.',
		image:
			'https://solid-command-palette.vercel.app/images/branding/logo-light-stamp.svg',
		href: 'https://github.com/itaditya/solid-command-palette',
		tags: ['Command palette'],
	},
	{
		name: 'Solid Developer Tools',
		author: 'Damian Tarnawski',
		description:
			'Library of developer tools, reactivity debugger & Devtools Chrome extension for visualizing SolidJS reactivity graph',
		image: 'https://github.com/solidjs-community.png',
		href: 'https://github.com/thetarnav/solid-devtools',
		tags: ['development'],
	},
]
