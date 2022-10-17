import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [] as const

export const tools: Tool<typeof toolTags[number]>[] = [
	{
		name: "test",
		author: "ui.dev",
		description: "test test test.",
		image: "https://github.com/uidotdev.png",
		href: "https://usehooks.com/",
		tags: [],
	},
]
