import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [
	"Jetbrains",
	"extension",
	"Firefox",
	"VSCode",
	"Chrome",
	"UI Design",
	"development",
] as const

export const tools: Tool<typeof toolTags[number]>[] = [
	{
		name: "Svelte",
		author: "JetBrains s.r.o.",
		description: "Support for Svelte in your JetBrains IDE of choice.",
		image:
			"https://plugins.jetbrains.com/files/12375/241423/icon/pluginIcon.svg",
		href: "https://plugins.jetbrains.com/plugin/12375-svelte",
		tags: ["Jetbrains"],
	},
	{
		name: "Svelte Reactive Debugger",
		author: "unlocomqx",
		description:
			"A tool that allows to monitor the reactive statements easily by showing the statements as they are executed and also by showing the state snapshots before and after the statement has been invoked.",
		image:
			"https://addons.mozilla.org/user-media/addon_icons/2682/2682079-64.png?modified=985bf941",
		href: "https://addons.mozilla.org/en-US/firefox/addon/svelte-reactive-debugger/",
		tags: ["Firefox", "extension"],
	},
	{
		name: "Svelte Devtools",
		author: "RedHatter271",
		description:
			"A tool that allows you to inspect the Svelte state and component hierarchies in the Firefox or Chrome Developer Tools.",
		image:
			"https://addons.mozilla.org/user-media/addon_icons/2250/2250921-64.png?modified=0d831fc5",
		href: "https://github.com/sveltejs/svelte-devtools",
		tags: ["Firefox", "Chrome", "extension"],
	},
	{
		name: "Svelte for VS Code",
		author: "Svelte",
		description:
			"A tool that provides syntax highlighting and rich intellisense for Svelte components in VS Code, using the svelte language server.",
		image:
			"https://svelte.gallerycdn.vsassets.io/extensions/svelte/svelte-vscode/106.2.0/1665421195352/Microsoft.VisualStudio.Services.Icons.Default",
		href: "https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode",
		tags: ["VSCode"],
	},
	{
		name: "Svelte Reactive Debugger",
		author: "unloco",
		description:
			"A tool that allows to monitor the reactive statements easily by showing the statements as they are executed and also by showing the state snapshots before and after the statement has been invoked.",
		image:
			"https://addons.mozilla.org/user-media/addon_icons/2682/2682079-64.png?modified=985bf941",
		href: "https://chrome.google.com/webstore/detail/svelte-reactive-debugger/mieppkcamgfhpjedhnfdlbndijhohmjf",
		tags: ["Chrome", "extension"],
	},
	{
		name: "Storybook",
		author: "Storybook",
		href: "https://storybook.js.org/docs/svelte/get-started/introduction",
		description:
			"Storybook runs alongside your app in development mode. It helps you build UI components isolated from the business logic and context of your app.",
		image: "https://github.com/storybookjs.png",
		tags: ["UI Design", "development"],
	},
	{
		name: "TanStack Router",
		author: "Tanner Linsley",
		description: "A fully typesafe router with first-class search-param APIs and built-in caching, built for JS/TS",
		image:
			"https://pbs.twimg.com/profile_images/1474105199757180928/lsqWAJKv_400x400.jpg",
		href: "https://tanstack.com/router/v1/",
		tags: ["development"],
	},
]
