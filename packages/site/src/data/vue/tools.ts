import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [] as const

export const tools: Tool<typeof toolTags[number]>[] = []
