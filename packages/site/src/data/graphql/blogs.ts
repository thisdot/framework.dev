import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
	{
		title: "This Dot Blog",
		author: "This Dot Labs",
		description:
			"Variety of topics related to GraphQL, written by the team at This Dot",
		image: "https://github.com/thisdot.png",
		href: "https://www.thisdot.co/blog/?filter=GraphQL#result",
		tags: [],
	},
	{
		title: "A Beginner's Guide to GraphQL",
		author: "freeCodeCamp",
		description:
			"This is a beginner friendly guide to help developers start learning GraphQL",
		image: "https://github.com/freeCodeCamp.png",
		href: "https://www.freecodecamp.org/news/a-beginners-guide-to-graphql-86f849ce1bec/",
		tags: [],
	},
	{
		title: "A Complete Beginner's Guide to GraphQL",
		author: "Ali Spittel",
		description: "This is a beginner friendly guide for GraphQL",
		image:
			"https://pbs.twimg.com/profile_images/1499419445063655424/aBi7ZB7W_400x400.jpg",
		href: "https://welearncode.com/beginners-guide-graphql/",
		tags: [],
	},
	{
		title: "LogRocket Blog",
		author: "LogRocket",
		description: "This is a blog dedicated to all things web development",
		image:
			"https://pbs.twimg.com/profile_images/1326191211850440708/uQc_hHbU_400x400.jpg",
		href: "https://blog.logrocket.com/",
		tags: [],
	},
	{
		title: "Production Ready GraphQL { blog }",
		author: "Marc-André Giroux",
		description: "This is a blog dedicated to all things GraphQL",
		image:
			"https://pbs.twimg.com/profile_images/618131103509909504/VQLBJ0TR_400x400.png",
		href: "https://productionreadygraphql.com/",
		tags: [],
	},
	{
		title: "Hasura",
		author: "Hasura",
		description:
			"The top stories from Hasura: engineering, tutorials, product updates, GraphQL, frontend & backend frameworks & more!",
		image:
			"https://pbs.twimg.com/profile_images/1450802929527447554/kRyVEq8q_400x400.jpg",
		href: "https://hasura.io/blog/",
		tags: [],
	},
	{
		title: "Apollo blog",
		author: "Apollo",
		description:
			"The Apollo Blog helps software engineers learn about the latest developments in GraphQL",
		image:
			"https://pbs.twimg.com/profile_images/1498346889724317697/qzxJVuVR_400x400.png",
		href: "https://www.apollographql.com/blog/",
		tags: [],
	},
]
