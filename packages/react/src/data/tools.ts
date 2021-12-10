import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [] as const

export const tools: Tool<typeof toolTags[number]>[] = [
  {
    name: "useHooks",
    author: "ui.dev",
    description: "Easy to understand React hook recipes.",
    image: "https://github.com/uidotdev.png",
    href: "https://usehooks.com/",
    tags: []
  }
]
