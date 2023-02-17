import { Tool } from '@framework/system/src/models/tool'

export const toolTags = ['vscode', 'webstorm'] as const

export const tools: Tool<(typeof toolTags)[number]>[] = [
	{
		name: 'Deno VSCode',
		description:
			'This extension adds support for using Deno with Visual Studio Code, powered by the Deno language server',
		author: 'DenoLand',
		href: 'https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno',
		image:
			'https://denoland.gallerycdn.vsassets.io/extensions/denoland/vscode-deno/3.14.1/1668177865958/Microsoft.VisualStudio.Services.Icons.Default',
		tags: ['vscode'],
	},
	{
		name: 'WebStorm Plugin for Deno',
		description:
			'This plugin adds support for using Deno with JetBrains WebStorm.',
		author: 'JetBrains',
		href: 'https://plugins.jetbrains.com/plugin/14382-deno',
		image:
			'https://plugins.jetbrains.com/static/versions/24971/jetbrains-simple.svg',
		tags: ['webstorm'],
	},
]
