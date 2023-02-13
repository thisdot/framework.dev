import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<(typeof blogTags)[number]>[] = [
	{
		title: "Ryan Carniato on dev.to",
		author: "Ryan Carniato",
		description:
			"Frontend performance enthusiast and Fine-Grained Reactivity super fan. Author of the SolidJS UI library and MarkoJS Core Team Member.",
		image: "https://github.com/ryansolid.png",
		href: "https://dev.to/ryansolid",
		tags: [],
	},
	{
		title: "Ryan Carniatos' blog",
		author: "Ryan Carniato",
		description:
			"FrontEnd JS Performance Enthusiast and Long Time Super Fan of Fine Grained Reactive Programming. Author of SolidJS UI Library.",
		image: "https://github.com/ryansolid.png",
		href: "https://admin.indepth.dev/author/ryan-carniato/",
		tags: [],
	},
	{
		title: "Solid.js feels like what I always wanted React to be",
		author: "Nick Scialli",
		description:
			"I'm Nick Scialli, a software engineer with 14+ years of experience currently working as a senior UI engineer at Microsoft. I am a full stack developer with a focus on front-end technologies like JavaScript, TypeScript, and React.",
		image: "https://github.com/nas5w.png",
		href: "https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/",
		tags: [],
	},
	{
		title: "This Dot Blog",
		author: "This Dot Labs",
		description:
			"Variety of topics related to SolidJS, written by the team at This Dot",
		image: "https://github.com/thisdot.png",
		href: "https://www.thisdot.co/blog/?filter=SolidJS#result",
		tags: [],
	},
]
