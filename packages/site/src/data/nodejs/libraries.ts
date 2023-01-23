import { Library } from "@framework/system/src/models/library"
import { LibraryTag } from "@framework/system/src/models/library-tag"

// The default image here for use
// on libraries that don't have an image
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultImage =
	"https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-512.png"

export const libraries: Library[] = [
	{
		name: "Express.js",
		author: "OpenJS Foundation",
		repo: "https://www.github.com/expressjs/expressjs.com",
		package: "https://www.npmjs.com/package/express",
		href: "https://www.npmjs.com/package/express",
		description:
			"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.",
		image: defaultImage,
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "NestJS",
		author: "Kamil Mysliwiec",
		repo: "https://www.github.com/nestjs/nest",
		package: "https://www.npmjs.com/package/@nestjs/cli",
		href: "https://nestjs.com/",
		description:
			"A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
		image:
			"https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "Serverless Framework",
		author: "Serverless, Inc",
		repo: "https://www.github.com/serverless/serverless",
		package: "https://www.npmjs.com/package/serverless",
		href: "https://www.serverless.com/",
		description:
			"All-in-one development solution for auto-scaling apps on AWS Lambda.",
		image:
			"https://assets-global.website-files.com/60acbb950c4d6606963e1fed/60acbb950c4d66854e3e2013_logo%20serverless%20dark.svg",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "Remix",
		author: "Remix",
		repo: "https://www.github.com/remix-run/remix",
		package: "https://www.npmjs.com/package/remix",
		href: "https://github.com/remix-run/remix",
		description:
			"Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.",
		image: defaultImage,
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "Next.js",
		author: "Vercel",
		repo: "https://www.github.com/vercel/next.js",
		package: "https://www.npmjs.com/package/next",
		href: "https://nextjs.org/",
		description:
			"Production grade React applications that scale. The world’s leading companies use Next.js by Vercel to build static and dynamic websites and web applications.",
		image:
			"https://camo.githubusercontent.com/e1e113df83e7731fdb90f6f0ab2eeb155fd1b48c27d99814dcf1c23c0acdc6a2/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6461726b5f6261636b67726f756e642e706e67",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "Sails",
		author: "Sails",
		repo: "https://www.github.com/balderdashy/sails",
		package: "https://www.npmjs.com/package/sails",
		href: "https://sailsjs.com/",
		description:
			"Sails.js is a web framework that makes it easy to build custom, enterprise-grade Node.js apps. It is designed to resemble the MVC architecture from frameworks like Ruby on Rails, but with support for the more modern, data-oriented style of web app & API development. It's especially good for building realtime features like chat.",
		image:
			"https://camo.githubusercontent.com/7809ea02014a21791f76317fa04c16d460d14b9ad4db2f6166e48aa4e329d628/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "AdonisJS",
		author: "Harminder Virk",
		repo: "https://www.github.com/adonisjs/core",
		package: "https://www.npmjs.com/package/@adonisjs/core",
		href: "https://adonisjs.com/",
		description:
			"AdonisJS includes everything you need to create a fully functional web app or an API server. So stop wasting hours downloading and assembling hundreds of packages — Use AdonisJS and be productive from day one.",
		image: defaultImage,
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "Meteor",
		author: "Harminder Virk",
		repo: "https://www.github.com/meteor/meteor",
		package: "https://www.npmjs.com/package/meteor",
		href: "https://www.meteor.com/",
		description:
			"Meteor is an open source platform for seamlessly building and deploying Web, Mobile, and Desktop applications in Javascript.",
		image:
			"https://assets.website-files.com/5dd3f8176674eb0829f184d5/5dd41eb9049df81f8773946e_meteor-logo.svg",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "LoopBack",
		author: "OpenJS Foundation",
		repo: "https://www.github.com/loopbackio/loopback-next",
		package: "https://www.npmjs.com/package/@loopback/cli",
		href: "https://loopback.io/",
		description:
			"A highly extensible Node.js and TypeScript framework for building APIs and microservices.",
		image: "https://loopback.io/images/global/loopback-full-logo-blue.svg",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "Feathers",
		author: "David Luecke",
		repo: "https://www.github.com/feathersjs/feathers",
		package: "https://www.npmjs.com/package/@feathersjs/feathers",
		href: "https://feathersjs.com/",
		description:
			"A highly extensible Node.js and TypeScript framework for building APIs and microservices.",
		image: defaultImage,
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "Koa",
		author: "OpenJS Foundation",
		repo: "https://www.github.com/koajs/koa",
		package: "https://www.npmjs.com/package/koa",
		href: "https://koajs.com/",
		description:
			"Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. By leveraging async functions, Koa allows you to ditch callbacks and greatly increase error-handling. Koa does not bundle any middleware within its core, and it provides an elegant suite of methods that make writing servers fast and enjoyable.",
		image:
			"https://raw.githubusercontent.com/koajs/koa/55f4c33589c1ce6edbdc37f23ed1f78746869cfc/docs/logo.png",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "RedwoodJS",
		author: "Tom Preston-Werner",
		repo: "https://www.github.com/redwoodjs/redwood",
		package: "https://www.npmjs.com/package/@redwoodjs/core",
		href: "https://redwoodjs.com/",
		description:
			"Redwood is the full-stack web framework designed to help you grow from side project to startup.",
		image:
			"https://d33wubrfki0l68.cloudfront.net/72b0d56596a981835c18946d6c4f8a968b08e694/82254/images/logo.svg",
		tags: [LibraryTag.FRAMEWORKS, LibraryTag.UTILITIES],
		language: "TypeScript",
	},
	{
		name: "Blitz.js",
		author: "Brandon Bayer",
		repo: "https://www.github.com/blitz-js/blitz",
		package: "https://www.npmjs.com/package/@blitzjs/core",
		href: "https://blitzjs.com/",
		description:
			"Blitz picks up where Next.js leaves off, providing battle-tested libraries and conventions for shipping and scaling world wide applications.",
		image: defaultImage,
		tags: [LibraryTag.UTILITIES],
		language: "NodeJS",
	},
	{
		name: "date-fns",
		author: "Sasha Koss and Lesha Koss",
		repo: "https://github.com/date-fns/date-fns",
		package: "https://www.npmjs.com/package/date-fns",
		href: "https://date-fns.org/",
		description:
			"date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.",
		image:
			"https://pbs.twimg.com/profile_images/680459696088551424/jwEH4RiN_400x400.png",
		tags: [LibraryTag.UTILITIES],
		language: "NodeJS",
	},
	{
		name: "async.js",
		author: "Caolan McMahon",
		repo: "https://github.com/caolan/async",
		package: "https://www.npmjs.com/package/async",
		href: "https://caolan.github.io/async/v3/",
		description:
			"Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript.",
		image: "https://caolan.github.io/async/v3/img/async-logo.svg",
		tags: [LibraryTag.UTILITIES],
		language: "NodeJS",
	},
	{
		name: "browserify",
		author: "James Halliday",
		repo: "https://github.com/browserify/browserify",
		package: "https://www.npmjs.com/package/browserify",
		href: "https://browserify.org/",
		description:
			"Browserify lets you require('modules') in the browser by bundling up all of your dependencies.",
		image: "https://browserify.org/images/wizard_hat_blue.png",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "pm2",
		author: "Alexandre Strzelewicz",
		repo: "https://github.com/Unitech/pm2",
		package: "https://www.npmjs.com/package/pm2",
		href: "http://pm2.keymetrics.io/",
		description:
			"PM2 is a production process manager for Node.js applications with a built-in load balancer.",
		image:
			"https://raw.githubusercontent.com/Unitech/pm2/master/pres/pm2-v4.png",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "body-parser",
		author: "Douglas Wilson",
		repo: "https://github.com/expressjs/body-parser",
		package: "https://www.npmjs.com/package/body-parser",
		href: "https://github.com/expressjs/body-parser",
		description:
			"Parse incoming request bodies in a middleware before your handlers, available under the req.body property.",
		image: defaultImage,
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "cors",
		author: "Douglas Wilson, Troy Goode",
		repo: "https://github.com/expressjs/cors",
		package: "https://www.npmjs.com/package/cors",
		href: "https://github.com/expressjs/cors",
		description:
			"CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.",
		image: defaultImage,
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "passport",
		author: "Jared Hanson",
		repo: "https://github.com/jaredhanson/passport",
		package: "https://www.npmjs.com/package/passport",
		href: "https://www.passportjs.org/",
		description:
			"Passport is Express-compatible authentication middleware for Node.js.",
		image: "https://www.passportjs.org/images/logo.svg",
		tags: [LibraryTag.AUTH, LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "multer",
		author: "Jared Hanson",
		repo: "https://github.com/expressjs/multer",
		package: "https://www.npmjs.com/package/multer",
		href: "https://github.com/expressjs/multer",
		description:
			"Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.",
		image: defaultImage,
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "axios",
		author: "Matt Zabriskie",
		repo: "https://github.com/axios/axios",
		package: "https://www.npmjs.com/package/axios",
		href: "https://axios-http.com/",
		description:
			"Axios is a promise-based HTTP Client for node.js and the browser. On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.",
		image: defaultImage,
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "morgan",
		author: "Matt Zabriskie",
		repo: "https://github.com/expressjs/morgan",
		package: "https://www.npmjs.com/package/morgan",
		href: "https://github.com/expressjs/morgan",
		description: "HTTP request logger middleware for node.js.",
		image: defaultImage,
		tags: [LibraryTag.UTILITIES, LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "dotenv",
		author: "Scott Motte",
		repo: "https://github.com/motdotla/dotenv",
		package: "https://www.npmjs.com/package/dotenv",
		href: "https://github.com/motdotla/dotenv",
		description:
			"Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.",
		image:
			"https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.svg",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "faker.js",
		author: "",
		repo: "https://github.com/faker-js/faker",
		package: "https://www.npmjs.com/package/@faker-js/faker",
		href: "https://github.com/faker-js/faker",
		description:
			"Generate massive amounts of fake (but realistic) data for testing and development. Faker tries to generate realistic data and not obvious fake data.",
		image:
			"https://raw.githubusercontent.com/faker-js/faker/HEAD/docs/public/logo.svg",
		tags: [LibraryTag.TESTING, LibraryTag.UTILITIES],
		language: "NodeJS",
	},
	{
		name: "nodemailer",
		author: "Andris Reinman",
		repo: "https://github.com/nodemailer/nodemailer",
		package: "https://www.npmjs.com/package/nodemailer",
		href: "https://nodemailer.com/",
		description: "Send emails from Node.js – easy as cake!",
		image: "https://nodemailer.com/nm_logo_200x136.png",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
	{
		name: "socket.io",
		author: "Guillermo Rauch, Damien Arrachequesne",
		repo: "https://github.com/socketio/socket.io",
		package: "https://www.npmjs.com/package/socket.io",
		href: "https://socket.io/",
		description:
			"Socket.IO enables real-time bidirectional event-based communication.",
		image: "https://socket.io/images/logo.svg",
		tags: [LibraryTag.FRAMEWORKS],
		language: "NodeJS",
	},
]
