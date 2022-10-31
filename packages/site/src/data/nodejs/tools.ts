import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [
	"Chrome",
	"VSCode",
	"RxJS",
	"development",
	"testing",
	"UI Design",
] as const

export const tools: Tool<typeof toolTags[number]>[] = []
