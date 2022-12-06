import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [
	"UI Design",
	"development",
	"generator",
	"Editor",
	"Command palette",
	"primitives",
	"markdown",
	"dragndrop",
] as const

export const tools: Tool<typeof toolTags[number]>[] = [
	{
		name: "CodeImage",
		author: "ui.dev",
		description:
			"Create elegant screenshots of your source code. Built with SolidJS.",
		image:
			"https://github.com/riccardoperra/codeimage/raw/main/banner.png?raw=true",
		href: "https://github.com/riccardoperra/codeimage",
		tags: ["generator"],
	},
	{
		name: "Bloki.app",
		author: "MrFoxPro",
		description: "Blocks-based collaborative editor more coming soon...",
		image:
			"https://user-images.githubusercontent.com/17229619/167316774-9ed7ffa6-32a6-4c82-8a76-f79e0d2f9a17.png",
		href: "https://github.com/MrFoxPro/bloki",
		tags: ["Editor"],
	},
	{
		name: "Ambient Color Generation Tool",
		author: "Kevin Jin",
		description:
			"This tool is designed to generate contrast ready color pallets built specifically for UIUX design.",
		image: "https://github.com/kevintyj/ambient/raw/master/public/ambient.png",
		href: "https://ambient-rvx.web.app",
		tags: ["generator"],
	},
	{
		name: "Solid Markdown",
		author: "Andi Rosca",
		description: "Render Markdown as Solid components",
		image: "https://github.com/andi23rosca.png",
		href: "https://github.com/andi23rosca/solid-markdown",
		tags: ["markdown"],
	},
	{
		name: "Solid DnD",
		author: "thisbeyond",
		description:
			"A lightweight, performant, extensible drag and drop toolkit for Solid JS.",
		image:
			"https://github.com/thisbeyond/solid-dnd/raw/main/resources/solid-dnd-website-preview.png",
		href: "https://solid-dnd.com",
		tags: ["dragndrop"],
	},
	{
		name: "Solid Primitives",
		author: "SolidJS Community",
		description:
			"A project that strives to develop high-quality, community contributed Solid primitives.",
		image: "https://github.com/solidjs-community.png",
		href: "https://github.com/solidjs-community/solid-primitives",
		tags: ["primitives"],
	},
	{
		name: "LocatorJS",
		author: "infi-pc",
		description:
			"Click on UI Component in the browser to open its code in your IDE.",
		image:
			"https://github.com/infi-pc/locatorjs/raw/master/docs/logo-noborders.png",
		href: "https://github.com/infi-pc/locatorjs",
		tags: ["development"],
	},
	{
		name: "Solid Command Palette",
		author: "Aditya Agarwal",
		description: "UI Library for Command Palette in SolidJS webapps.",
		image:
			"https://github.com/itaditya/solid-command-palette/raw/main/public/images/branding/logo-dark-horizontal-large.png#gh-dark-mode-only",
		href: "https://github.com/itaditya/solid-command-palette",
		tags: ["Command palette"],
	},
	{
		name: "Solid Developer Tools",
		author: "Damian Tarnawski",
		description:
			"Library of developer tools, reactivity debugger & Devtools Chrome extension for visualizing SolidJS reactivity graph",
		image:
			"https://camo.githubusercontent.com/a27d2ac8b884980c310307e9f3052388051e1ebf8dd2cc39d4e3f4883eca937f/68747470733a2f2f6173736574732e736f6c69646a732e636f6d2f62616e6e65723f747970653d446576656c6f706572253230546f6f6c73266261636b67726f756e643d74696c65732670726f6a6563743d253230",
		href: "https://github.com/thetarnav/solid-devtools",
		tags: ["development"],
	},
	{
		name: "Storybook",
		author: "Storybook",
		href: "https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/",
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
