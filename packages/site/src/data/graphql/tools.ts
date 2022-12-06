import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [
	"Chrome",
	"VSCode",
	"development",
	"testing",
	"schemas",
	"frontend",
	"backend",
] as const

export const tools: Tool<typeof toolTags[number]>[] = [
	{
		name: "GraphQL Editor",
		author: "GraphQL editor",
		description:
			"Build a complex GraphQL API in no time using only your browser. The power of GraphQL is now at your fingertips!",
		image: "https://avatars.githubusercontent.com/u/39584554?s=200&v=4",
		href: "https://graphqleditor.com/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "GraphQL Mesh",
		author: "Uri Goldshtein",
		description:
			"The Graph of Everything Federated architecture for any API service",
		image:
			"https://pbs.twimg.com/profile_images/1471121634606161920/ao7qMZBJ_400x400.jpg",
		href: "https://www.the-guild.dev/graphql/mesh",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "Dgraph",
		author: "dgraph-io",
		description: "The GraphQL Cloud Platform",
		image:
			"https://pbs.twimg.com/profile_images/1276311843594579968/wZ3gUTix_400x400.jpg",
		href: "https://dgraph.io/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "Sanity",
		author: "Sanity.io",
		description:
			"Sanity.io has powerful APIs for querying, patching, and mutating data in the real-time content backend. In addition to our GROQ API, we also support deploying GraphQL APIs to query your content.",
		image:
			"https://pbs.twimg.com/profile_images/1135907399582199809/7uZ5d2to_400x400.jpg",
		href: "https://www.sanity.io/docs/graphql",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "Hygraph",
		author: "Hygraph",
		description:
			"Unify, structure, enrich and distribute content from anywhere to anywhere.",
		image:
			"https://pbs.twimg.com/profile_images/1240607161639632896/65lOOz86_400x400.jpg",
		href: "https://hygraph.com/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "PostGraphile",
		author: "Graphile",
		description:
			"Instantly spin-up a GraphQL API server by pointing PostGraphile at your existing PostgreSQL database",
		image:
			"https://pbs.twimg.com/profile_images/1400856803831910404/CEGohPSo_400x400.jpg",
		href: "https://www.graphile.org/postgraphile/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "Hasura",
		author: "Hasura",
		description:
			"The top stories from Hasura: engineering, tutorials, product updates, GraphQL, frontend & backend frameworks & more!",
		image:
			"https://pbs.twimg.com/profile_images/1450802929527447554/kRyVEq8q_400x400.jpg",
		href: "https://hasura.io/blog/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "WPGraphQL",
		author: "wp-graphql",
		description:
			"WPGraphQL allows you to separate your CMS from your presentation layer. Content creators can use the CMS they know, while developers can use the frameworks and tools they love.",
		image:
			"https://pbs.twimg.com/profile_images/1313701545452601345/cWC3a4Ux_400x400.jpg",
		href: "https://www.wpgraphql.com/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "Contentful",
		author: "Contentful",
		description:
			"The GraphQL Content API provides a GraphQL API interface to the content from Contentful. Each Contentful space comes with a GraphQL schema based on its content model",
		image:
			"https://pbs.twimg.com/profile_images/1554093693501689856/TlwZfp7r_400x400.jpg",
		href: "https://www.contentful.com/developers/docs/references/graphql/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "DatoCMS",
		author: "DatoCMS",
		description:
			"It's the headless CMS for the modern web. More than 25,000 businesses use DatoCMS to create online content at scale from a central hub and distribute it via API.",
		image:
			"https://pbs.twimg.com/profile_images/981943986549030915/O7YbftpC_400x400.jpg",
		href: "https://www.datocms.com/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "Strapi",
		author: "Strapi",
		description:
			"By default Strapi create REST endpoints for each of your content-types. With the GraphQL plugin, you will be able to add a GraphQL endpoint to fetch and mutate your content.",
		image:
			"https://pbs.twimg.com/profile_images/1513776955186978816/NLZcECc0_400x400.jpg",
		href: "https://docs.strapi.io/developer-docs/latest/plugins/graphql.html",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "WunderGraph",
		author: "WunderGraph",
		description:
			"Declaratively turn your services, databases and 3rd party APIs into a secure, unified, and extensible API. Compose, integrate, ship.",
		image:
			"https://pbs.twimg.com/profile_images/1588538504971272192/MGxcr3cH_400x400.jpg",
		href: "https://wundergraph.com/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "Fauna",
		author: "Fauna",
		description: "Instantly execute GraphQL queries on your data",
		image: "https://avatars.githubusercontent.com/u/1477000?s=200&v=4",
		href: "https://fauna.com/graphql",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "Graphene-Python",
		author: "graphene-Python",
		description: "GraphQL in Python Made Easy",
		image: "https://avatars.githubusercontent.com/u/15002022?s=200&v=4",
		href: "https://graphene-python.org/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "AWS AppSync",
		author: "AWS",
		description:
			"Accelerate application development with serverless GraphQL and Pub/Sub APIs",
		image: "https://appirio.com/images/partners/aws_logo-1.png",
		href: "https://aws.amazon.com/appsync/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "Apollo Client Devtools",
		author: "Apollo",
		description:
			"Apollo Client Devtools is a Chrome extension for the open-source GraphQL client, Apollo Client.",
		image:
			"https://pbs.twimg.com/profile_images/1498346889724317697/qzxJVuVR_400x400.png",
		href: "https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en-US",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "GraphQL Voyager",
		author: "Ivan Goncharov",
		description: "Represent any GraphQL API as an interactive graph",
		image:
			"https://pbs.twimg.com/profile_images/780770136701669376/zdsTOcpK_400x400.jpg",
		href: "https://ivangoncharov.github.io/graphql-voyager/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "GraphQL Config",
		author: "The Guild",
		description:
			"One configuration for all your GraphQL tools. The easiest way to configure your development environment with your GraphQL Schema.",
		image:
			"https://pbs.twimg.com/profile_images/1471121634606161920/ao7qMZBJ_400x400.jpg",
		href: "https://www.the-guild.dev/graphql/config",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "GraphQL Inspector",
		author: "The Guild",
		description:
			"Validate schemas and detect changes. Receive schema change notifications. Keep Operations and Fragments consistent.",
		image:
			"https://pbs.twimg.com/profile_images/1471121634606161920/ao7qMZBJ_400x400.jpg",
		href: "https://www.the-guild.dev/graphql/inspector",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "Apollo Workbench",
		author: "Apollo",
		description:
			"Apollo Workbench is a VS Code extension that helps you design and reason about your organization's graph without writing any server code.",
		image:
			"https://pbs.twimg.com/profile_images/1498346889724317697/qzxJVuVR_400x400.png",
		href: "https://www.apollographql.com/docs/federation/v1/workbench/overview/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "Stellate",
		author: "Stellate",
		description:
			"Users rightfully expect fast and reliable services. Protect your business with GraphQL Edge Caching. Reduce your serverload by up to 99% and never worry about downtime again.",
		image:
			"https://pbs.twimg.com/profile_images/1533456954340917250/sstxH3pW_400x400.jpg",
		href: "https://stellate.co/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "graphqurl",
		author: "Hasura",
		description:
			"curl for GraphQL with autocomplete, subscriptions and GraphiQL. Also a dead-simple universal javascript GraphQL client.",
		image: "https://avatars.githubusercontent.com/u/13966722?s=200&v=4",
		href: "https://github.com/hasura/graphqurl",
		tags: ["schemas", "frontend", "backend", "development"],
	},
	{
		name: "GraphQL Hive",
		author: "The Guild",
		description:
			"Prevent breaking changes, monitor performance of your GraphQL API, and manage your API gateway",
		image:
			"https://pbs.twimg.com/profile_images/1471121634606161920/ao7qMZBJ_400x400.jpg",
		href: "https://graphql-hive.com/",
		tags: ["schemas", "frontend", "backend", "development"],
	},
]
