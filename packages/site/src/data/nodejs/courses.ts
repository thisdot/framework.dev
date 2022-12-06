import { Course } from "@framework/system/src/models/course"

export const courseTags = [
	"data fetching",
	"testing",
	"services",
	"typescript",
	"backend",
	"events",
	"javascript marathon",
] as const

export const courses: Course<typeof courseTags[number]>[] = [
	{
		title: "Node.js 12: Getting Started",
		author: "Samer Buna",
		image:
			"https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/favicons/favicon-96x96.png",
		description:
			"This course will teach you the fundamentals of this very popular runtime and get you comfortable writing code for Node.",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://www.pluralsight.com/courses/nodejs-getting-started",
		tags: ["backend"],
	},
	{
		title: "Node.js 12: The Big Picture",
		author: "Paul O'Fallon",
		image:
			"https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/favicons/favicon-96x96.png",
		description:
			"In this course, we look at how Node is commonly used, examine its asynchronous development model, explore leveraging the npm module ecosystem, and assemble a set of tools to help get you started on your journey!",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://www.pluralsight.com/courses/nodejs-big-picture",
		tags: ["backend"],
	},
	{
		title: "Getting Started with Express.js",
		author: "Ben Clinkinbeard",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F432%2F563%2Fsquare_480%2Fcourse_image.png&w=1080&q=100",
		description:
			"Express is a minimal web server built on Node.js that provides essential functionality for delivering web applications to the browser and mobile devices. This series will guide you through the first steps of using Express for building your own applications.",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://egghead.io/courses/getting-started-with-express-js",
		tags: ["backend"],
	},
	{
		title: "Learn the Fundamentals of Node.js for Beginners",
		author: "Will Button",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Fsquare_480%2Fnodejslogo.png&w=640&q=100",
		description:
			"Understanding Node.js can have a significant positive impact on your career as a Javascript developer. Knowing how it works, how it scales, and how to interact with it can save you time, headaches and delays going to production which can put you well ahead of your competition. Understanding node.js can help you architect applications that are built to work with node's features and capabilities.",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://egghead.io/courses/learn-the-fundamentals-of-node-js-for-beginners-7b6f4282",
		tags: ["backend"],
	},
	{
		title: "Introduction to MongoDB",
		author: "Scott Moss",
		image: "https://frontendmasters.com/static-assets/core/m-transparent.webp",
		description:
			"In this course you'll build schemas, structure models and learn to query MongoDB to get the right data. Learn the core concepts to build production-ready applications with MongoDB!",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://frontendmasters.com/courses/mongodb/",
		tags: ["backend"],
	},
	{
		title: "Node.js and Express.js - Full Course",
		author: "John Smilga",
		image: "https://github.com/freeCodeCamp.png",
		description:
			"Learn how to use Node and Express in this comprehensive course. First, you will learn the fundamentals of Node and Express. Then, you will learn to build a complex Rest API. Finally, you will build a MERN app and other Node projects.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=Oe421EPjeBE",
		tags: ["backend"],
	},
	{
		title: "Node.js Tutorial for Beginners: Learn Node in 1 Hour",
		author: "Mosh Hamedani",
		image:
			"https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s88-c-k-c0x00ffffff-no-rj",
		description:
			"Learn the basics of the Node.js with this Programming with Mosh course.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
		tags: ["backend"],
	},
	{
		title:
			"Node.js Full Course for Beginners | Complete All-in-One Tutorial | 7 Hours",
		author: "Dave Gray",
		image:
			"https://yt3.ggpht.com/ytc/AMLnZu-hi-TxVHQwPnZh3h9-F0OAQyqoETBJQWXjDzILGg=s88-c-k-c0x00ffffff-no-rj",
		description:
			"This Node.js Full Course for Beginners is an all-in-one beginner tutorial and complete course full of nearly 7 hours of Node JS code and instruction to level up your programming skills. This course teaches NodeJS, the Express JS framework, and MongoDB. Think of this Node.js full course tutorial as a Node JS video textbook with 15 clearly defined chapters.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=f2EqECiTBL8",
		tags: ["backend"],
	},
	{
		title: "Build a Node.js API - tutorial",
		author: "Beau Carnes",
		image: "https://github.com/freeCodeCamp.png",
		description:
			"Learn how to create basic CRUD routes with Node.js, Express, and MongoDB.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=fsCjFHuMXj0",
		tags: ["backend"],
	},
	{
		title:
			"Node.js Tutorial for Beginners - Getting Started with NodeJS Basics",
		author: "Academind",
		image:
			"https://yt3.ggpht.com/ytc/AMLnZu_Uksjq0hZKO8HU1hqf8LTFE91m1CeiSOe__5L8BA=s88-c-k-c0x00ffffff-no-rj",
		description: "Learn the basics of Node.js with this free 2 hour video.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=C7TFgfY7JdE",
		tags: ["backend"],
	},
	{
		title: "Learn and Understand NodeJS",
		author: "Anthony Alicea",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Fsquare_480%2Fnodejslogo.png&w=640&q=100",
		description:
			"Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more.",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://www.udemy.com/course/understand-nodejs/",
		tags: ["backend"],
	},
	{
		title: "Learn Node.js: The Complete Course for Beginners",
		author: "Educative",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Fsquare_480%2Fnodejslogo.png&w=640&q=100",
		description:
			"Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. This course is your guide for learning the fundamentals of Node.js.",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://www.educative.io/courses/learn-nodejs-complete-course-for-beginners",
		tags: ["backend"],
	},
	{
		title: "Building Modern Node.js Applications on AWS",
		author: "Coursera",
		image:
			"https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/android-chrome-v2-192x192.png",
		description:
			"Building Modern Node.js Applications on AWS will explore how to build an API driven application using Amazon API Gateway for serverless API hosting, AWS Lambda for serverless computing, and Amazon Cognito for serverless authentication. ",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://www.coursera.org/learn/building-modern-node-applications-on-aws?specialization=aws-nodejs-serverless-development",
		tags: ["backend"],
	},
	{
		title: "Server-side Development with NodeJS, Express and MongoDB",
		author: "Coursera",
		image:
			"https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/android-chrome-v2-192x192.png",
		description:
			"The courses starts with a brief overview of HTTP, HTTPS, NodeJS and Express. On the database side, we review basic CRUD operations, NoSQL databases, in particular MongoDB and Mongoose for accessing MongoDB from NodeJS. We examine the REST concepts and building a RESTful API. We touch upon authentication and security.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://www.coursera.org/learn/server-side-nodejs",
		tags: ["backend"],
	},
	{
		title: "JSON Web Token (JWT) Authentication with Node.js and Auth0",
		author: "Joel Lord",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F432%2F537%2Fsquare_480%2FEGH_JSONTokensNode_Final.png&w=1080&q=100",
		description:
			"In this course, we will build a simple authentication server that will act as a token issuer, and we will use those tokens to access resources on an API. Starting from scratch, you will learn how easy token based authentication can be and will understand how to use them on your APIs as well as on the front end of your web applications.",
		paymentType: "paid",
		level: "intermediate",
		format: "video",
		href: "https://egghead.io/courses/json-web-token-jwt-authentication-with-node-js-and-auth0",
		tags: ["backend"],
	},
	{
		title: "Learn Node.js",
		author: "Codecademy",
		image: "https://www.codecademy.com/apple-touch-icon.png",
		description:
			"This course is a great introduction to the concepts of server-side web development. You will learn the different parts that make up the back-end of a website or web application, and you’ll gain familiarity with the Node.js runtime environment. After this course, you’ll be set up to explore popular Node frameworks like Express.js to build powerful applications.",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://www.codecademy.com/learn/learn-node-js",
		tags: ["backend"],
	},
	{
		title: "Connecting Front-End to Back-End",
		author: "Codecademy",
		image: "https://www.codecademy.com/apple-touch-icon.png",
		description:
			"Learn how to connect the two to gain a powerful skill, become a better web developer, and improve your understanding of how web apps work. In this course, you’ll learn about the various methods for rendering a website, how to structure a REST API, and how to design apps using the Model, View, Controller (MVC) pattern.",
		paymentType: "paid",
		level: "intermediate",
		format: "video",
		href: "https://www.codecademy.com/learn/connecting-front-end-to-back-end",
		tags: ["backend"],
	},
	{
		title:
			"Defending Node Applications from SQL Injection, XSS, & CSRF Attacks",
		author: "Codecademy",
		image: "https://www.codecademy.com/apple-touch-icon.png",
		description:
			"By completing this course, you will have learned how to start protecting your Node.js web application from SQL Injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF) Attacks. You will also learn safer JavaScript coding practices as well as the basics of Remediation and Incident Response. After completing this course, you will know how to make your Node.js and Express applications safer from malicious actors.",
		paymentType: "paid",
		level: "intermediate",
		format: "video",
		href: "https://www.codecademy.com/learn/defending-express-applications-from-sql-injection-xss-csrf-attacks",
		tags: ["backend"],
	},
	{
		title: "DynamoDB: The Node.js DocumentClient",
		author: "Chris Biscardi",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Fsquare_480%2Fnodejslogo.png&w=640&q=100",
		description:
			"This course covers all of the ways to use the Node.js DocumentClient to interact with one or more DynamoDB tables.",
		paymentType: "paid",
		level: "intermediate",
		format: "video",
		href: "https://egghead.io/courses/dynamodb-the-node-js-documentclient-1396",
		tags: ["backend"],
	},
	{
		title: "Build a Backend with Prisma in a TypeScript Node Project",
		author: "Ryan Chenkie",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F487%2F059%2Fsquare_480%2FPrisma_TS.png&w=1080&q=100",
		description:
			"In this course, we will learn how to use the power of Prisma in a TypeScript backend application using SQLite. Through the course, you'll be building an application to display the details of products that have been saved in the project's database. You will learn how to initialize Prisma, use Prisma Client to create and find records, use Express to create data dynamically, and much more🔥",
		paymentType: "paid",
		level: "intermediate",
		format: "video",
		href: "https://egghead.io/courses/build-a-backend-with-prisma-in-a-typescript-node-project-ca6628d3",
		tags: ["backend"],
	},
	{
		title: "How to Build Microservices with Node.js",
		author: "Ashley Davis",
		image:
			"https://cdn.oreillystatic.com/images/sitewide-headers/oreilly_logo_mark_red.svg",
		description:
			"Explore how to build microservices with Node.js, and learn when and why to use them.",
		paymentType: "paid",
		level: "intermediate",
		format: "video",
		href: "https://www.oreilly.com/videos/how-to-build/10000MNHV202232/",
		tags: ["backend"],
	},
	{
		title: "JavaScript Marathon: Serverless Training 101 with Dustin Goodman",
		author: "Dustin Goodman",
		image: "https://github.com/thisdot.png",
		description:
			"Serverless architectures have become increasingly popular in recent years. It enables developers to focus on building applications instead of orchestrating and managing servers. In this Javascript Marathon, Dustin Goodman shows us how we can utilize the Serverless Framework to develop and ship serverless applications to AWS. You'll learn how to configure serverless architectures, how to create functions and set up their triggers, and how to run the infrastructure locally and deploy it to production. After this session, you'll have a better understanding of how to leverage serverless to enhance your development experience.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://www.youtube.com/watch?v=NAnulpCT5yQ",
		tags: ["javascript marathon"],
	},
	{
		title: "Building an Issue Tracker API with NestJs - JavaScript Marathon",
		author: "Chris Whited",
		image: "https://github.com/thisdot.png",
		description:
			"We are going to learn how to create a new API using the NestJS NodeJS framework, and then use this API to connect to a database and build a REST API for creating, updating, and tracking issues. We will learn why NestJs is becoming one of the most popular NodeJs frameworks.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://www.youtube.com/watch?v=DgoH4_n59Qg",
		tags: ["javascript marathon"],
	},
	{
		title: "Digging Into Node.js",
		author: "Kyle Simpson",
		image:
			"https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.webp",
		description:
			"Node.js has taken the JavaScript world by storm, but where do you start when all you see are tens of thousands of packages/frameworks on npm? The best place to start is always at the foundation, and that's what this course focuses on. In this course, you’ll get to know the fundamental concepts in Node.js: CLI programming, file system access, streams, HTTP servers & routing, database persistence, and child processes.",
		paymentType: "paid",
		level: "intermediate",
		format: "video",
		href: "https://frontendmasters.com/courses/digging-into-node/",
		tags: ["backend"],
	},
	{
		title: "User Authentication in Node.js with Passport.js and JWT",
		author: "Zach Gollwitzer",
		image: "https://github.com/freeCodeCamp.png",
		description:
			"In this full course for beginners, you will learn how to implement user authentication from scratch in your web apps. You will learn how to use Passport.js in a Node / Express app.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://www.youtube.com/watch?v=F-sFp_AvHc8",
		tags: ["backend"],
	},
	{
		title: "Node.js Essential Training",
		author: "Eve Porcello",
		image:
			"https://media.licdn.com/dms/image/C560DAQHctDFCWfBf5Q/learning-public-crop_675_1200/0/1654187660358?e=2147483647&v=beta&t=C7sbLH53b6xtLr2T5PbBcFPgBQOG5zIVPcPXFwFnN-w",
		description:
			"Node.js is a powerful tool for controlling servers, building web applications, and creating event-driven programs. And it takes JavaScript—a language familiar to all web developers—out of the browser. With Node.js, you can build applications that run on your laptop or even the cloud. In this course, learn the essentials of Node.js and start creating your own JavaScript applications. ",
		paymentType: "paid",
		level: "intermediate",
		format: "video",
		href: "https://www.linkedin.com/learning/node-js-essential-training-14888164?replacementOf=node-js-essential-training-2019",
		tags: ["backend"],
	},
	{
		title: "The Complete Node.js Developer Course",
		author: "Andrew Mead",
		image: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
		description:
			"Learn Node.js by building real-world applications with Node JS, Express, MongoDB, Jest, and more!",
		paymentType: "paid",
		level: "intermediate",
		format: "video",
		href: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
		tags: ["backend"],
	},
	{
		title: "Become a Node.js Developer",
		author: "Educative",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Fsquare_480%2Fnodejslogo.png&w=640&q=100",
		description:
			"Node.js is a server-side JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js is commonly used by developers and is often used for enterprise applications. This path will take you from the basics of Node.js to its advanced concepts.",
		paymentType: "paid",
		level: "intermediate",
		format: "video",
		href: "https://www.educative.io/path/become-a-node-js-developer",
		tags: ["backend"],
	},
	{
		title: "Advanced Node.js 12",
		author: "Samer Buna",
		image:
			"https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/favicons/favicon-96x96.png",
		description:
			"This course will teach you the core Node.js concepts and API modules from simple utility modules all the way to streams and clusters.",
		paymentType: "paid",
		level: "advanced",
		format: "video",
		href: "https://www.pluralsight.com/courses/nodejs-advanced",
		tags: ["backend"],
	},
	{
		title: "Build a Twelve-Factor Node.js App with Docker",
		author: "Mark Shust",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F432%2F681%2Fsquare_480%2FEGH_NodeDocker_1000.png&w=1080&q=100",
		description:
			"In this course we will take a simple Node.js app that connects to a MongoDB database and uses an Express web server, and learn how to setup a full software development deployment process as well as how to properly “Dockerize” the app.",
		paymentType: "paid",
		level: "advanced",
		format: "video",
		href: "https://egghead.io/courses/build-a-twelve-factor-node-js-app-with-docker",
		tags: ["backend"],
	},
	{
		title: "Web Security Esentials: MITM, CSRF, and XSS",
		author: "Mike Sherov",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Finstructors%2Favatars%2F000%2F000%2F260%2Fmedium%2FA2F27AFF-EA20-4DC9-827E-1D5A676BD50B.jpeg&w=3840&q=100",
		description:
			"In this course, you will learn about Session hijacking, how to use Charles proxy to simulate various attacks, securely configuring cookies and more.",
		paymentType: "paid",
		level: "advanced",
		format: "video",
		href: "https://egghead.io/courses/web-security-essentials-mitm-csrf-and-xss",
		tags: ["backend"],
	},
	{
		title: "Build a Node.js REST API with LoopBack",
		author: "Bram Borggreve",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Finstructors%2Favatars%2F000%2F000%2F118%2Fmedium%2Ffoto-bram-square-500.png&w=3840&q=100",
		description:
			"In this course the developer will learn how to create a LoopBack API and build it out to an API that can be used as a backend for apps. We will start by creating a basic LoopBack API project and gradually enhance it to a production ready API. The API we create defines a few models to persist the data and has custom functionality, validation and hooks added to those models.",
		paymentType: "paid",
		level: "advanced",
		format: "video",
		href: "https://egghead.io/courses/build-a-node-js-rest-api-with-loopback",
		tags: ["backend"],
	},
	{
		title: "Advanced Node Training - JS Marathon",
		author: "James Snell",
		image: "https://github.com/thisdot.png",
		description:
			"As developers it is sometimes ignored how the underlying tools that we use work. NodeJS is one of the most used engines in the world and it is unique in the approach the it follows to make our code work. In this training with James Snell, we will dive deep into the NodeJS internal by learning the Event Loop and the asynchronous model of NodeJS. We will understand Event Emitters and how they power almost everything inside Node, and then we will build on that knowledge to understand what Streams are. Finally, we will move to Promises: the loved and feared NodeJS feature that developers use every day.",
		paymentType: "free",
		level: "advanced",
		format: "video",
		href: "https://www.youtube.com/watch?v=rUFUTdQALrk",
		tags: ["javascript marathon"],
	},
	{
		title: "The Hard Parts of Servers & Node.js",
		author: "Will Sentence",
		image:
			"https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.webp",
		description:
			"In this course you'll go under the hood of Node.js in two contrasting ways - by understanding how to develop servers from intuitive first-principles (HTTP, TCP/IP, Ports, Loopback, SSH) and by understanding the JavaScript features that make up Node (the event loop, streams, buffers, asynchronicity, prototypes). ",
		paymentType: "paid",
		level: "advanced",
		format: "video",
		href: "https://frontendmasters.com/courses/servers-node-js/",
		tags: ["backend"],
	},
	{
		title: "Node JS: Advanced Concepts",
		author: "Stephen Grider",
		image: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
		description:
			"Get advanced with Node.Js! Learn caching with Redis, speed up through clustering, and add image upload with S3 and Node!",
		paymentType: "paid",
		level: "advanced",
		format: "video",
		href: "https://www.udemy.com/course/advanced-node-for-developers/",
		tags: ["backend"],
	},
	{
		title: "Node.js API Masterclass With Express & MongoDB",
		author: "Brad Traversy",
		image: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
		description: "Create a real world backend for a bootcamp directory app",
		paymentType: "paid",
		level: "advanced",
		format: "video",
		href: "https://www.udemy.com/course/nodejs-api-masterclass/",
		tags: ["backend"],
	},
	{
		title: "Node.js / Express Course - Build 4 Projects",
		author: "John Smilga",
		image: "https://github.com/freeCodeCamp.png",
		description:
			"Node.js and Express.js are popular technologies used for JavaScript backend web development. In this course, you will improve your skills by building four projects using Node and Express.",
		paymentType: "free",
		level: "advanced",
		format: "video",
		href: "https://www.youtube.com/watch?v=qwfE7fSVaZM&list=RDCMUC8butISFwT-Wl7EV0hUK0BQ&index=4",
		tags: ["backend"],
	},
]
