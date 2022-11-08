import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
	{
		title: "This Dot Blog",
		author: "This Dot Labs",
		description:
			"Variety of topics related to Node.js, written by the team at This Dot",
		image: "https://github.com/thisdot.png",
		href: "https://www.thisdot.co/blog",
		tags: [],
	},
	{
		title: "Nodejs.dev",
		author: "Node.js",
		description:
			"The latest Node.js news, case studies, tutorials, and resources.",
		image:
			"https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_400x400.jpg",
		href: "https://nodejs.dev/en/blog/",
		tags: [],
	},
	{
		title: "Dev.to - Node",
		author: "Dev.to",
		description:
			"Developer hub featuring a wide variety of resources, the latest in developer ecosystem, and tutorials.",
		image:
			"https://res.cloudinary.com/practicaldev/image/fetch/s--FBYpUdfR--/c_limit,f_auto,fl_progressive,q_80,w_64/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/23/node-sticker.png",
		href: "https://dev.to/t/node",
		tags: [],
	},
	{
		title: "Kent C. Dodds' Blog",
		author: "Kent C. Dodds",
		description:
			"Renowned JavaScript and React educator, Kent C. Dodds, shares his React knowledge through his blog.",
		image: "https://github.com/kentcdodds.png",
		href: "https://kentcdodds.com/blog?q=node",
		tags: [],
	},
	{
		title: "UpGrad",
		author: "UpGrad",
		description:
			"Career development hub for a variety of topics including full stack development, tools, and best practices.",
		image:
			"https://www.upgrad.com/blog/wp-content/uploads/2021/09/upgrad_logo-1.png",
		href: "https://www.upgrad.com/blog/full-stack-development/",
		tags: [],
	},
	{
		title: "Wes Bos",
		author: "Wes Bos",
		description:
			"Personal developer blog of online courses creator and Syntax podcast host, Wes Bos",
		image:
			"https://wesbos.com/static/46c8f12c015f9bdd7cccd17d294da646/497c6/logo.png",
		href: "https://wesbos.com/blog",
		tags: [],
	},
]
