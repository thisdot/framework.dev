import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [
	"VSCode",
	"Chrome",
	"Firefox",
	"Safari",
	"development"
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
		name: "TanStack Router",
		author: "Tanner Linsley",
		description: "A fully typesafe router with first-class search-param APIs and built-in caching, built for JS/TS",
		image:
			"https://pbs.twimg.com/profile_images/1474105199757180928/lsqWAJKv_400x400.jpg",
		href: "https://tanstack.com/router/v1/",
		tags: ["development"],
	},
]
