import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<(typeof blogTags)[number]>[] = [
	{
		title: "Deno Blog",
		author: "Deno",
		description: "The official blog of the Deno Company.",
		image:
			"https://camo.githubusercontent.com/7a37608c39244ad994b53f25944b2718658e6d6558c8309bee7696530cf82bdc/68747470733a2f2f64656e6f2e6c616e642f6c6f676f2e737667",
		href: "https://deno.com/blog",
		tags: [],
	},
	{
		title: "Dev.to - Deno",
		author: "Dev.to",
		description:
			"Developer hub featuring a wide variety of resources, the latest in developer ecosystem, and tutorials.",
		image:
			"https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
		href: "https://dev.to/t/deno",
		tags: [],
	},
	{
		title: "The Deno handbook",
		author: "freeCodeCamp",
		description: "A TypeScript Runtime Tutorial with Code Examples",
		image: "https://github.com/freeCodeCamp.png",
		href: "https://www.freecodecamp.org/news/the-deno-handbook/",
		tags: [],
	},
	{
		title: "Deno.js - A first look",
		author: "Academind",
		description:
			"Deno.js is the better Node.js. Or, at least, that's the goal. Here's what sets Deno apart from Node and my opinion on whether you should make the switch.",
		image: "https://github.com/Academind.png",
		href: "https://academind.com/tutorials/denojs-first-look",
		tags: [],
	},
	{
		title: "Ultimate Courses - Deno blogs",
		author: "Ultimate Courses",
		description: "All about Deno, the new JavaScript and TypeScript runtime.",
		image:
			"https://ultimatecourses.com/assets/logo-ef24a2d3b6a0febba9ff80a1b01d632db750feb083442d0071dff7426762e0c2.svg",
		href: "https://ultimatecourses.com/blog/category/deno/",
		tags: [],
	},
	{
		title: "This Dot Blog",
		author: "This Dot Labs",
		description:
			"Variety of topics related to JavaScript, written by the team at This Dot",
		image: "https://github.com/thisdot.png",
		href: "https://www.thisdot.co/blog/",
		tags: [],
	},
	{
		title: "LogRocket Blog",
		author: "LogRocket",
		description: "This is a blog dedicated to all things web development",
		image:
			"https://pbs.twimg.com/profile_images/1326191211850440708/uQc_hHbU_400x400.jpg",
		href: "https://blog.logrocket.com/tag/deno/",
		tags: [],
	},
]
