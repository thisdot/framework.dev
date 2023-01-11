import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [
	"VSCode",
	"Chrome",
	"Firefox",
	"Safari",
	"development",
	"UI Design"
] as const

export const tools: Tool<typeof toolTags[number]>[] = [
	{
		name: "Qwik Playground",
		author: "Qwik",
		description: "Qwik Playground",
		image: "/qwik-icon.png",
		href: "https://qwik.builder.io/playground/",
		tags: ["development"],
	},
	{
		name: "Vite",
		author: "Yuxi (Evan) You and Vite contributors",
		description: "Next Generation Frontend Tooling",
		image: "https://vitejs.dev/logo.svg",
		href: "https://github.com/vitejs/vite",
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
		name: "Qwik Snippets",
		author: "johnreemar",
		href: "https://marketplace.visualstudio.com/items?itemName=johnreemar.vscode-qwik-snippets",
		description:
			"This extension for Visual Studio Code adds snippets for Qwik for TypeScript and MDX.",
		image: "https://github.com/qwikverse/vscode-qwik-snippets/raw/main/assets/qwik-snippets.png",
		tags: ["VSCode", "development"],
	},
	{
		name: "TanStack Router",
		author: "Tanner Linsley",
		description: "A fully typesafe router with first-class search-param APIs and built-in caching, built for JS/TS",
		image:
			"https://avatars.githubusercontent.com/u/72518640?s=200&v=4",
		href: "https://tanstack.com/router/v1/",
		tags: ["development"],
	},
]
