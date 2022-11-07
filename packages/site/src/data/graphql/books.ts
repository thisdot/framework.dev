import { Book } from "@framework/system/src/models/book"

export const bookTags = [
	"nx",
	"recipes",
	"monorepo",
	"state management",
	"NgRx",
	"testing",
	"PWA",
	"routing",
	"components",
	"data binding",
	"graphQL",
	"reactJS",
	"nodeJS",
	"apollo",
	"sql",
	"testing",
	"docker",
	"authentication",
] as const

export const books: Book<typeof bookTags[number]>[] = [
	{
		title: "Learning GraphQL - 1st Edition",
		authors: ["Eve Porcello, Alex Banks"],
		image:
			"https://m.media-amazon.com/images/I/51gkl1qtM2L._SX379_BO1,204,203,200_.jpg",
		description:
			"Why is GraphQL the most innovative technology for fetching data since Ajax?",
		yearOfPublication: 2018,
		numberOfPages: 196,
		level: "beginner",
		href: "https://www.amazon.com/Learning-GraphQL-Declarative-Fetching-Modern/dp/1492030716/ref=asc_df_1492030716/?tag=hyprod-20&linkCode=df0&hvadid=312140868236&hvpos=&hvnetw=g&hvrand=8926488608331483187&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010373&hvtargid=pla-714106763512&psc=1",
		tags: ["graphQL"],
	},
	{
		title: "The Road to GraphQL",
		authors: ["Robin Wieruch"],
		image:
			"https://m.media-amazon.com/images/I/31MMS6yrIbS._SX384_BO1,204,203,200_.jpg",
		description:
			"The Road to GraphQL is your personal journey to master pragmatic GraphQL in JavaScript.",
		yearOfPublication: 2018,
		numberOfPages: 352,
		level: "beginner",
		href: "https://www.amazon.com/Road-GraphQL-pragmatic-JavaScript-React-js/dp/1730853935/ref=asc_df_1730853935/?tag=hyprod-20&linkCode=df0&hvadid=312114711253&hvpos=&hvnetw=g&hvrand=8926488608331483187&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010373&hvtargid=pla-570403080883&psc=1",
		tags: ["graphQL", "reactJS", "nodeJS"],
	},
	{
		title: "GraphQL in Action",
		authors: ["Samer Buna"],
		image:
			"https://m.media-amazon.com/images/I/41mws+LwCgL._SX406_BO1,204,203,200_.jpg",
		description:
			"Practical and example-driven, GraphQL in Action gives you the tools to get comfortable with the GraphQL language, build and optimize a data API service, and use it in a front-end client application.",
		yearOfPublication: 2021,
		numberOfPages: 384,
		level: "beginner",
		href: "https://www.amazon.com/gp/product/161729568X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=161729568X&linkCode=as2&tag=booksoncode-20&linkId=b1d94438193452c9abd18fcbe8385e6e",
		tags: ["graphQL"],
	},
	{
		title: "Full-Stack Web Development with GraphQL and React",
		authors: ["Sebastian Grebe"],
		image:
			"https://m.media-amazon.com/images/I/51Upgne6t9L._SX404_BO1,204,203,200_.jpg",
		description:
			"React, one of the most widely used JavaScript frameworks, allows developers to build fast and scalable front end applications for any use case. GraphQL is the modern way of querying an API.",
		yearOfPublication: 2019,
		numberOfPages: 460,
		level: "intermediate",
		href: "https://www.amazon.com/gp/product/1789134528/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1789134528&linkCode=as2&tag=booksoncode-20&linkId=483a1e2be1d2d67df7a600d255aefdf3",
		tags: [
			"graphQL",
			"reactJS",
			"apollo",
			"sql",
			"testing",
			"components",
			"docker",
		],
	},
	{
		title: "Full Stack Serverless",
		authors: ["Nader Dabit"],
		image: "https://m.media-amazon.com/images/I/51sispcUPXL.jpg",
		description:
			"Nader Dabit, developer advocate at Amazon Web Services, guides you through the process of building full stack applications using React, AWS, GraphQL, and AWS Amplify",
		yearOfPublication: 2020,
		numberOfPages: 224,
		level: "intermediate",
		href: "https://www.amazon.com/gp/product/B08CXNRPZC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08CXNRPZC&linkCode=as2&tag=booksoncode-20&linkId=2aefc05ac0c6a6fa538303366af37b83",
		tags: ["graphQL", "authentication"],
	},
	{
		title: "Production Ready GraphQL",
		authors: ["Marc-Andre Giroux"],
		image: "https://book.productionreadygraphql.com/static/book.png",
		description:
			"Learn how to design and build predictable, performant, and secure GraphQL APIs at scale.",
		yearOfPublication: 2020,
		numberOfPages: 180,
		level: "advanced",
		href: "https://book.productionreadygraphql.com/",
		tags: ["graphQL"],
	},
]
