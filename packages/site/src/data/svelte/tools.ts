import { Tool } from '@framework/system/src/models/tool'

export const toolTags = [
	'Jetbrains',
	'extension',
	'Firefox',
	'VSCode',
	'Chrome',
	'UI Design',
	'development',
] as const

export const tools: Tool<(typeof toolTags)[number]>[] = [
	{
		name: 'Svelte REPL',
		author: 'Svelte',
		description: 'Interactive Svelte playground',
		image:
			'https://svelte.gallerycdn.vsassets.io/extensions/svelte/svelte-vscode/106.2.0/1665421195352/Microsoft.VisualStudio.Services.Icons.Default',
		href: 'https://svelte.dev/repl/32f4d35f41eb4914aa3be5e4a0eacbfa?version=3.55.1',
		tags: ['development'],
	},
	{
		name: 'Svelte',
		author: 'JetBrains s.r.o.',
		description: 'Support for Svelte in your JetBrains IDE of choice.',
		image:
			'https://svelte.gallerycdn.vsassets.io/extensions/svelte/svelte-vscode/106.2.0/1665421195352/Microsoft.VisualStudio.Services.Icons.Default',
		href: 'https://plugins.jetbrains.com/plugin/12375-svelte',
		tags: ['Jetbrains'],
	},
	{
		name: 'Svelte Reactive Debugger',
		author: 'unlocomqx',
		description:
			'A tool that allows to monitor the reactive statements easily by showing the statements as they are executed and also by showing the state snapshots before and after the statement has been invoked.',
		image:
			'https://addons.mozilla.org/user-media/addon_icons/2682/2682079-64.png?modified=985bf941',
		href: 'https://addons.mozilla.org/en-US/firefox/addon/svelte-reactive-debugger/',
		tags: ['Firefox', 'extension'],
	},
	{
		name: 'Svelte Devtools',
		author: 'RedHatter271',
		description:
			'A tool that allows you to inspect the Svelte state and component hierarchies in the Firefox or Chrome Developer Tools.',
		image:
			'https://addons.mozilla.org/user-media/addon_icons/2250/2250921-64.png?modified=0d831fc5',
		href: 'https://github.com/sveltejs/svelte-devtools',
		tags: ['Firefox', 'Chrome', 'extension'],
	},
	{
		name: 'Svelte for VS Code',
		author: 'Svelte',
		description:
			'A tool that provides syntax highlighting and rich intellisense for Svelte components in VS Code, using the svelte language server.',
		image:
			'https://svelte.gallerycdn.vsassets.io/extensions/svelte/svelte-vscode/106.2.0/1665421195352/Microsoft.VisualStudio.Services.Icons.Default',
		href: 'https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode',
		tags: ['VSCode'],
	},
	{
		name: 'Svelte Reactive Debugger',
		author: 'unloco',
		description:
			'A tool that allows to monitor the reactive statements easily by showing the statements as they are executed and also by showing the state snapshots before and after the statement has been invoked.',
		image:
			'https://addons.mozilla.org/user-media/addon_icons/2682/2682079-64.png?modified=985bf941',
		href: 'https://chrome.google.com/webstore/detail/svelte-reactive-debugger/mieppkcamgfhpjedhnfdlbndijhohmjf',
		tags: ['Chrome', 'extension'],
	},
]
