import { Course } from "@framework/system/src/models/course"

export const courseTags = [
	"state management",
	"components",
	"data fetching",
	"routing",
	"testing",
	"services",
	"javascript marathon",
	"typescript",
	"graphQL",
	"JS drops",
] as const

export const courses: Course<typeof courseTags[number]>[] = [
	{
		title: "GraphQL for beginners with JavaScript",
		author: "James Moore",
		image: "https://img-c.udemycdn.com/user/200_H/19961124_820f_2.jpg",
		description:
			"A practical guide that teaches you GraphQL with JavaScript. Optimally paced, No-nonsense. Learn quickly!",
		paymentType: "paid",
		level: "beginner",
		format: "interactive",
		href: "https://www.udemy.com/course/graphql-for-beginners-with-javascript/",
		tags: ["data fetching", "graphQL"],
	},
	{
		title: "Modern GraphQL with Node - Complete Developers Guide",
		author: "Laith Harb",
		image: "https://img-c.udemycdn.com/user/200_H/72111958_3971_2.jpg",
		description:
			"Learn and master GraphQL with Node and React by building real production ready applications.",
		paymentType: "paid",
		level: "beginner",
		format: "interactive",
		href: "https://www.udemy.com/course/modern-graphql-complete-guide/",
		tags: [
			"components",
			"data fetching",
			"graphQL",
			"routing",
			"state management",
			"typescript",
		],
	},
	{
		title: "Beginning GraphQL",
		author: "Packt Publishing",
		image: "https://img-c.udemycdn.com/user/200_H/5058914_a218_6.jpg",
		description:
			"Learn faster data fetching using this query language and improve the performance of your application.",
		paymentType: "paid",
		level: "beginner",
		format: "interactive",
		href: "https://www.udemy.com/course/beginning-graphql/",
		tags: [
			"components",
			"data fetching",
			"graphQL",
			"routing",
			"state management",
		],
	},
	{
		title: "Using GraphQL with React",
		author: "This Dot Media",
		image:
			"https://pbs.twimg.com/profile_images/1249804296469778433/uRRNm6-n_400x400.png",
		description:
			"GraphQL provides a strong-typing system to better understand and utilize our API to retrieve and interact with our data. ",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=JmVdgtjGo5Q",
		tags: [
			"components",
			"data fetching",
			"graphQL",
			"javascript marathon",
			"routing",
			"typescript",
		],
	},
	{
		title: "A Complete Beginner's Guide to GraphQL",
		author: "Ali Spittel",
		image:
			"https://pbs.twimg.com/profile_images/1499419445063655424/aBi7ZB7W_400x400.jpg",
		description:
			"What is GraphQL? Why would you use it? Why wouldn't you use it? How do you create an API and query with it in GraphQL? Learn all that and much more in this tutorial.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=c2fJ7T0N1Sk&t=20s",
		tags: ["components", "data fetching", "graphQL"],
	},
	{
		title: "Introduction to Gatsby v2 ",
		author: "Jason Lengstorf",
		image:
			"https://pbs.twimg.com/profile_images/1524064394157576193/tB5HL_ES_400x400.jpg",
		description:
			"Learn to build blazing-fast apps and websites with React using Gatsby!",
		paymentType: "paid",
		level: "beginner",
		format: "interactive",
		href: "https://frontendmasters.com/courses/gatsby-v2/",
		tags: ["components", "data fetching", "graphQL", "routing"],
	},
	{
		title: "Setting Up A GraphQL API with Apollo Server",
		author: "Eve Porcello",
		image:
			"https://pbs.twimg.com/profile_images/1470581497249734657/LDfCopdL_400x400.jpg",
		description:
			"In this JS Drop, Eve Porcello from Moon Highway will show you how to set up a GraphQL API using Apollo Server, a Node JS implementation of GraphQL server, using a schema and resolver functions, in just 33 lines of code!",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=GcjalL9iVlQ",
		tags: ["data fetching", "graphQL", "JS drops"],
	},
	{
		title: "Getting Started With GraphQL ",
		author: "Eve Porcello",
		image:
			"https://pbs.twimg.com/profile_images/1470581497249734657/LDfCopdL_400x400.jpg",
		description:
			"In this hands-on workshop, we'll get acquainted with the fundamentals of GraphQL.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=Ijy7XU1rJow",
		tags: ["data fetching", "graphQL"],
	},
	{
		title: "Server-Side GraphQL ",
		author: "Scott Moss",
		image:
			"https://pbs.twimg.com/profile_images/1563402109764022274/GYLY9j6g_400x400.jpg",
		description:
			"Learn everything you need to create a GraphQL API on the server in Node.js with Apollo Server.",
		paymentType: "paid",
		level: "intermediate",
		format: "interactive",
		href: "https://frontendmasters.com/courses/server-graphql-nodejs/",
		tags: ["data fetching", "graphQL"],
	},
	{
		title: "Client-Side GraphQL ",
		author: "Scott Moss",
		image:
			"https://pbs.twimg.com/profile_images/1563402109764022274/GYLY9j6g_400x400.jpg",
		description:
			"Learn to use GraphQL on the client-side using React with Apollo Client.",
		paymentType: "paid",
		level: "intermediate",
		format: "interactive",
		href: "https://frontendmasters.com/courses/client-graphql-react/",
		tags: ["components", "data fetching", "graphQL", "state management"],
	},
	{
		title: "Intermediate Gatsby v2",
		author: "Jason Lengstorf",
		image:
			"https://pbs.twimg.com/profile_images/1524064394157576193/tB5HL_ES_400x400.jpg",
		description:
			"The baseline setup in Gatsby will take you far, but in any complex web app, you’ll end up needing to go beyond the defaults.",
		paymentType: "paid",
		level: "intermediate",
		format: "interactive",
		href: "https://frontendmasters.com/courses/intermediate-gatsby-v2/",
		tags: [
			"components",
			"data fetching",
			"graphQL",
			"routing",
			"state management",
		],
	},
	{
		title: "Migrating from REST to GraphQL",
		author: "This Dot Media",
		image:
			"https://pbs.twimg.com/profile_images/1249804296469778433/uRRNm6-n_400x400.png",
		description:
			"Are you ready to start using GraphQL but don't have time to rewrite your legacy REST API? In this session, we'll show you some strategies for incrementally porting your APIs to start using GraphQL that allows you to leverage your existing REST APIs.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://www.youtube.com/watch?v=L7y3zQGtpIo",
		tags: [
			"components",
			"data fetching",
			"graphQL",
			"javascript marathon",
			"routing",
			"state management",
		],
	},
	{
		title: "Scaling GraphQL APIs with Apollo Federation ",
		author: "This Dot Media",
		image:
			"https://pbs.twimg.com/profile_images/1249804296469778433/uRRNm6-n_400x400.png",
		description:
			"In this workshop, you'll go beyond the basics of GraphQL to learn about some of the commonly used tools and techniques that will help you build powerful applications at scale.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://www.youtube.com/watch?v=Pc8fON5p13Q",
		tags: ["data fetching", "graphQL", "services"],
	},
	{
		title: "Understanding GraphQL Microservices",
		author: "Eve Porcello",
		image:
			"https://pbs.twimg.com/profile_images/1470581497249734657/LDfCopdL_400x400.jpg",
		description:
			"In this episode, Eve explains the concept of GraphQL Microservices and how we can think about architecting our applications this way.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://www.youtube.com/watch?v=qrbxwSgsLFA",
		tags: ["graphQL", "services"],
	},
	{
		title: "Resolving GraphQL Entities",
		author: "This Dot Media",
		image:
			"https://pbs.twimg.com/profile_images/1249804296469778433/uRRNm6-n_400x400.png",
		description:
			"Learn how to connect different data types so you can connect data across services. In this training, we create a user entity with the @key to connect across services and connect back to our users through our service. We'll also look at our index file, and make some adjustments to our color.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://www.youtube.com/watch?v=tS-UO6MlYeQ",
		tags: ["graphQL"],
	},
	{
		title: "Manage State in React Apps with Apollo Client and GraphQL",
		author: "Rares Matei",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Finstructors%2Favatars%2F000%2F000%2F193%2Fmedium%2F20171119_144415.jpg&w=3840&q=100",
		description:
			"At the core of a good client-side GraphQL library is a cache. The cache is very important for improving the efficiency of your data retrieval and providing your users with a clean user experience.",
		paymentType: "paid",
		level: "intermediate",
		format: "interactive",
		href: "https://egghead.io/courses/manage-state-in-react-apps-with-apollo-client-and-graphql-a45b3b89",
		tags: ["components", "data fetching", "graphQL", "state management"],
	},
	{
		title: "Advanced GraphQL ",
		author: "Scott Moss",
		image:
			"https://pbs.twimg.com/profile_images/1563402109764022274/GYLY9j6g_400x400.jpg",
		description:
			"Become a GraphQL master by learning to build production-ready GraphQL APIs in Node.js and Apollo Server.",
		paymentType: "paid",
		level: "advanced",
		format: "interactive",
		href: "https://frontendmasters.com/courses/advanced-graphql-v2/",
		tags: ["components", "data fetching", "graphQL", "testing"],
	},
	{
		title: "Build a GraphQL API with AWS CDK and AppSync",
		author: "Tomasz Łakomy",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Finstructors%2Favatars%2F000%2F000%2F244%2Fmedium%2FTomasz_%25C5%2581akomy.jpg&w=3840&q=100",
		description:
			"Build a fully managed, serverless GraphQL API powered by TypeScript and AWS CDK in a matter of hours, not days.",
		paymentType: "paid",
		level: "advanced",
		format: "interactive",
		href: "https://egghead.io/courses/build-a-graphql-api-with-aws-cdk-and-appsync-7d2a5fbc",
		tags: ["data fetching", "graphQL", "services", "typescript"],
	},
	{
		title: "Designing GraphQL Schemas",
		author: "Nik Graf",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Finstructors%2Favatars%2F000%2F000%2F111%2Fmedium%2Fnikgraf3.jpg&w=3840&q=100",
		description:
			"GraphQL brings joy to using APIs. Even though it's based on a type system, GraphQL in many ways is more flexible than REST.",
		paymentType: "paid",
		level: "advanced",
		format: "interactive",
		href: "https://egghead.io/courses/designing-graphql-schemas-99db",
		tags: ["data fetching", "graphQL"],
	},
]
