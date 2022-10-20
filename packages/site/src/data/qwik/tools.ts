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
		image: "https://qwik.builder.io/logos/social-card.png?v=3",
		href: "https://qwik.builder.io/playground/",
		tags: ["development"],
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
]
