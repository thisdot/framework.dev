import { Tool } from "@framework/system/src/models/tool"

export const toolTags = ["VSCode", "development", "testing"] as const

export const tools: Tool<typeof toolTags[number]>[] = [
	{
		name: "",
		author: "",
		description: "",
		image: "",
		href: "",
		tags: [],
	},
]
