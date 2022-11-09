import { Community } from "@framework/system/src/models/community"

export const communityTags = ["meetups", "conferences"] as const

export const communities: Community<typeof communityTags[number]>[] = [
	{
		name: "GraphQLfm",
		description: "Welcome to GraphQL.FM, a Twitch Channel all about GraphQL.",
		image: "https://i.scdn.co/image/b77065accb9282396ed06fd4f5424f4d94f1622b",
		type: "Twitch",
		href: "https://www.twitch.tv/graphqlfm",
		tags: [],
	},
	{
		name: "Graphql.wtf",
		description: "Learn something new with GraphQL, every week.",
		image: "https://cdn.worldvectorlogo.com/logos/graphql-wtf-1.svg",
		type: "Online Events",
		href: "https://graphql.wtf/",
		tags: [],
	},
	{
		name: "Graphile",
		description:
			"Extensible high-performance automatic GraphQL API for PostgreSQL",
		image:
			"https://pbs.twimg.com/profile_images/1400856803831910404/CEGohPSo_400x400.jpg",
		type: "Documentation",
		href: "https://www.graphile.org/",
		tags: [],
	},
	{
		name: "Apollo",
		description:
			"Welcome to the Apollo community forums! Here you can connect with other developers and share knowledge about every part of the Apollo GraphQL platform.",
		image: "https://avatars.githubusercontent.com/u/17189275?v=4&s=400",
		type: "Forms",
		href: "https://community.apollographql.com/",
		tags: [],
	},
	{
		name: "Grafbase",
		description:
			"Contribute your ideas, meet us at events, contribute code through Pull Requests, write articles, and get rewarded.",
		image:
			"https://pbs.twimg.com/profile_images/1281274301677621248/q-8usqMi_400x400.jpg",
		type: "Live Events",
		href: "https://grafbase.com/community",
		tags: ["meetups"],
	},
	{
		name: "Hasura",
		description:
			"Join the conversation with over 10k+ developers from literally everywhere.",
		image: "https://hasura.io/brand-assets/hasura-logo-primary-dark.svg",
		type: "Online events",
		href: "https://hasura.io/community/",
		tags: ["conferences"],
	},
]
