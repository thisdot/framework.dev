import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [
	"VSCode",
	"Chrome",
	"Firefox",
	"Edge",
	"Safari",
	"UI Design",
	"development"
] as const

export const tools: Tool<typeof toolTags[number]>[] = [
	{
		name: "Vue CLI",
		author: "Yuxi (Evan) You",
		description:
			"Standard Tooling for Vue.js Development",
		image: "https://github.com/vuejs.png",
		href: "https://cli.vuejs.org/",
		tags: ["development"],
	},
	{
		name: "Vite",
		author: "Yuxi (Evan) You and Vite contributors",
		description:
			"Next Generation Frontend Tooling",
		image: "https://vitejs.dev/logo.svg",
		href: "https://github.com/vitejs/vite",
		tags: ["development"],
	},
	{
		name: "Vue.js devtools",
		author: "Vue.js",
		description:
			"Browser DevTools extension for debugging Vue.js applications.",
		image: "https://github.com/vuejs.png",
		href: "https://devtools.vuejs.org/guide/installation.html",
		tags: ["Chrome", "Firefox", "Edge"],
	},
	{
		name: "Volar",
		author: "Johnson Chu",
		description:
			"Volar is a Language Support plugin built specifically for Vue 3. It's based on @vue/reactivity to calculate TypeScript on-demand to optimize performance similar to the native TypeScript language service.",
		image: "https://github.com/vuejs.png",
		href: "https://marketplace.visualstudio.com/items?itemName=Vue.volar",
		tags: ["VSCode"],
	},
	{
		name: "Vetur",
		author: "Pine Wu",
		description:
			"Vue tooling for VS Code.",
		image: "https://github.com/vuejs.png",
		href: "https://marketplace.visualstudio.com/items?itemName=octref.vetur",
		tags: ["VSCode"],
	},
	{
		name: "GraphQL Playground for Chrome",
		author: "Dustin R. Callaway",
		description: "Chrome extension for GraphQL Playground",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
		href: "https://chrome.google.com/webstore/detail/graphql-playground-for-ch/kjhjcgclphafojaeeickcokfbhlegecd?hl=en",
		tags: ["Chrome"],
	},
	{
		name: "GraphQL Playground for Firefox",
		author: "Francesco De Stefano",
		description: "Firefox extension for GraphQL Playground",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
		href: "https://addons.mozilla.org/en-US/firefox/addon/graphql-developer-tools/",
		tags: ["Firefox"],
	},
	{
		name: "Apollo Client Devtools for Chrome",
		author: "Apollo GraphQL",
		description: "GraphQL debugging tools for Apollo Client.",
		image: "https://github.com/apollographql.png",
		href: "https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en",
		tags: ["Chrome"],
	},
	{
		name: "Apollo Client Devtools for Firefox",
		author: "Apollo GraphQL",
		description: "GraphQL debugging tools for Apollo Client.",
		image: "https://github.com/apollographql.png",
		href: "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools",
		tags: ["Firefox"],
	},
	{
		name: "Storybook",
		author: "Storybook",
		href: "https://storybook.js.org/tutorials/intro-to-storybook/vue/en/get-started/",
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
