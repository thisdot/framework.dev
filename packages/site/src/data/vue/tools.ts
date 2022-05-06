import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [
    "VSCode",
	"Chrome",
	"Firefox",
	"Safari",
	"UI Design",
] as const

export const tools: Tool<typeof toolTags[number]>[] = [
    {
		name: "Vue.js devtools for Chrome",
		author: "Vue.js",
		description: "Browser DevTools extension for debugging Vue.js applications.",
		image: "https://github.com/vuejs.png",
		href: "https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en",
		tags: ["Chrome"],
	},
]
