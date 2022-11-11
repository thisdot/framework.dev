import { Library } from "@framework/system/src/models/library"

export const libraryTags = [
	"framework",
	"documentation",
	"logging",
	"performance tools",
	"data fetching",
	"testing",
	"ORM",
	"API",
] as const

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: "Express.js",
		author: "OpenJS Foundation",
		gitHubRepo: "expressjs/expressjs.com",
		npmPackage: "express",
		href: "https://www.npmjs.com/package/express",
		description:
			"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.",
		image: "",
		tags: ["framework", "data fetching"],
	},
	{
		name: "NestJS",
		author: "Kamil Mysliwiec",
		gitHubRepo: "nestjs/nest",
		npmPackage: "@nestjs/cli",
		href: "https://nestjs.com/",
		description:
			"A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
		image:
			"https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
		tags: ["framework", "API"],
	},
	{
		name: "Serverless",
		author: "Serverless, Inc",
		gitHubRepo: "serverless/serverless",
		npmPackage: "serverless",
		href: "https://www.serverless.com/",
		description:
			"All-in-one development solution for auto-scaling apps on AWS Lambda.",
		image:
			"https://assets-global.website-files.com/60acbb950c4d6606963e1fed/60acbb950c4d66854e3e2013_logo%20serverless%20dark.svg",
		tags: ["framework", "API"],
	},
	{
		name: "Remix",
		author: "Remix",
		gitHubRepo: "remix-run/remix",
		npmPackage: "remix",
		href: "https://github.com/remix-run/remix",
		description:
			"Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.",
		image: "",
		tags: ["framework"],
	},
	{
		name: "Next.js",
		author: "Vercel",
		gitHubRepo: "vercel/next.js",
		npmPackage: "next",
		href: "https://nextjs.org/",
		description:
			"Production grade React applications that scale. The world’s leading companies use Next.js by Vercel to build static and dynamic websites and web applications.",
		image:
			"https://camo.githubusercontent.com/e1e113df83e7731fdb90f6f0ab2eeb155fd1b48c27d99814dcf1c23c0acdc6a2/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6461726b5f6261636b67726f756e642e706e67",
		tags: ["framework"],
	},
	{
		name: "",
		author: "",
		gitHubRepo: "balderdashy/sails",
		npmPackage: "sails",
		href: "https://sailsjs.com/",
		description:
			"Sails.js is a web framework that makes it easy to build custom, enterprise-grade Node.js apps. It is designed to resemble the MVC architecture from frameworks like Ruby on Rails, but with support for the more modern, data-oriented style of web app & API development. It's especially good for building realtime features like chat.",
		image:
			"https://camo.githubusercontent.com/7809ea02014a21791f76317fa04c16d460d14b9ad4db2f6166e48aa4e329d628/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67",
		tags: ["framework", "API"],
	},
	{
		name: "AdonisJS",
		author: "Harminder Virk",
		gitHubRepo: "adonisjs/core",
		npmPackage: "@adonisjs/core",
		href: "https://adonisjs.com/",
		description:
			"AdonisJS includes everything you need to create a fully functional web app or an API server. So stop wasting hours downloading and assembling hundreds of packages — Use AdonisJS and be productive from day one.",
		image: "",
		tags: ["framework", "API"],
	},
	{
		name: "Meteor",
		author: "Harminder Virk",
		gitHubRepo: "meteor/meteor",
		npmPackage: "meteor",
		href: "https://www.meteor.com/",
		description:
			"Meteor is an open source platform for seamlessly building and deploying Web, Mobile, and Desktop applications in Javascript.",
		image:
			"https://assets.website-files.com/5dd3f8176674eb0829f184d5/5dd41eb9049df81f8773946e_meteor-logo.svg",
		tags: ["framework"],
	},
	{
		name: "LoopBack",
		author: "OpenJS Foundation",
		gitHubRepo: "loopbackio/loopback-next",
		npmPackage: "@loopback/cli",
		href: "https://loopback.io/",
		description:
			"A highly extensible Node.js and TypeScript framework for building APIs and microservices.",
		image: "https://loopback.io/images/global/loopback-full-logo-blue.svg",
		tags: ["framework", "API"],
	},
	{
		name: "Feathers",
		author: "David Luecke",
		gitHubRepo: "feathersjs/feathers",
		npmPackage: "@feathersjs/feathers",
		href: "https://feathersjs.com/",
		description:
			"A highly extensible Node.js and TypeScript framework for building APIs and microservices.",
		image:
			"https://camo.githubusercontent.com/fef6ec9e94a2d3c907aa0d4dffa0d726727d5e88b8223d0ac26dc64cffb4a674/687474703a2f2f66656174686572736a732e636f6d2f696d672f66656174686572732d6c6f676f2d776964652e706e67",
		tags: ["framework", "API"],
	},
	{
		name: "Koa",
		author: "OpenJS Foundation",
		gitHubRepo: "koajs/koa",
		npmPackage: "koa",
		href: "https://koajs.com/",
		description:
			"Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. By leveraging async functions, Koa allows you to ditch callbacks and greatly increase error-handling. Koa does not bundle any middleware within its core, and it provides an elegant suite of methods that make writing servers fast and enjoyable.",
		image:
			"https://raw.githubusercontent.com/koajs/koa/55f4c33589c1ce6edbdc37f23ed1f78746869cfc/docs/logo.png",
		tags: ["framework", "API"],
	},
	{
		name: "RedwoodJS",
		author: "Tom Preston-Werner",
		gitHubRepo: "redwoodjs/redwood",
		npmPackage: "@redwoodjs/core",
		href: "https://redwoodjs.com/",
		description:
			"Redwood is the full-stack web framework designed to help you grow from side project to startup.",
		image:
			"https://d33wubrfki0l68.cloudfront.net/72b0d56596a981835c18946d6c4f8a968b08e694/82254/images/logo.svg",
		tags: ["framework", "API"],
	},
	{
		name: "Blitz.js",
		author: "Brandon Bayer",
		gitHubRepo: "blitz-js/blitz",
		npmPackage: "@blitzjs/core",
		href: "https://blitzjs.com/",
		description:
			"Blitz picks up where Next.js leaves off, providing battle-tested libraries and conventions for shipping and scaling world wide applications.",
		image: "",
		tags: ["framework"],
	},
]
