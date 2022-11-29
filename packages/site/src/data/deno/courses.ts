import { Course } from "@framework/system/src/models/course"

export const courseTags = [
	"deno",
	"typescript",
	"mongodb",
	"backend",
	"docker",
	"aws",
	"data fetching",
	"oak framework",
	"data validation",
	"fresh framework",
	"testing",
	"debugging",
] as const

export const courses: Course<typeof courseTags[number]>[] = [
	{
		title: "Mastering Deno.js: Beginner to Expert [2022]",
		author: "Ilkin Guluzada",
		description:
			"The ultimate Deno Masterclass: Build REST API with Deno & MongoDB and learn TypeScript",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		image: "https://img-c.udemycdn.com/user/200_H/23757898_e87f_4.jpg",
		href: "https://www.udemy.com/course/mastering-denojs-beginner-to-expert/",
		tags: ["deno", "typescript", "mongodb", "backend"],
	},
	{
		title: "Master Deno, React, Mongo, NGINX running with Docker-Compose",
		author: "Icaro Lavrador",
		description:
			"Deno the new kid in town - How to use with Mongodb and React hooks running dev/prod in dockerized containers with NGINX.",
		paymentType: "paid",
		level: "advanced",
		format: "video",
		image: "https://img-c.udemycdn.com/user/200_H/12531206_c058_5.jpg",
		href: "https://www.udemy.com/course/deno-and-react/",
		tags: [
			"mongodb",
			"docker",
			"oak framework",
			"data validation",
			"backend",
			"deno",
		],
	},
	{
		title: "Deno - The Complete Introduction",
		author: "Maximilian Schwarzmüller",
		description:
			"Learn everything you need to work with Deno, the brand-new JavaScript runtime created by Node.js founder Ryan Dahl.",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		image: "https://www.filepicker.io/api/file/TBHtUzkDTCykklB8apdG",
		href: "https://pro.academind.com/p/deno-the-complete-introduction",
		tags: ["deno", "backend", "oak framework", "mongodb"],
	},
	{
		title: "Deno 1: Getting Started",
		author: "Brice Wilson",
		description:
			"Deno is a modern and secure runtime for JavaScript and TypeScript. This course will teach you the fundamentals of working with Deno, how it compares to similar runtimes, and how to build applications that take advantage of its many built-in features.",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		image: "https://pluralsight.imgix.net/author/lg/brice-wilson-v2.jpg?w=200",
		href: "https://www.pluralsight.com/courses/deno-getting-started",
		tags: [
			"deno",
			"backend",
			"oak framework",
			"typescript",
			"testing",
			"debugging",
		],
	},
	{
		title: "Fresh - A Deno Framework full course",
		author: "Bitfumes",
		description:
			"Fresh is a next generation web framework, built for speed, reliability, and simplicity.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		image:
			"https://yt3.ggpht.com/XnZIeUhhkHTU1iY_veQpGnWqTwLKWLM7r44sMRmQxZ7Xg3RUdmZYik3oBI5rYCj78TG1MeD5BLY=s88-c-k-c0x00ffffff-no-rj",
		href: "https://www.youtube.com/watch?v=rvTkn1fffQ8",
		tags: ["deno", "backend", "fresh framework", "typescript", "data fetching"],
	},
	{
		title: "Deno Course - Better than Node.js?",
		author: "freeCodeCamp.org",
		description:
			"Learn how to use Deno in this complete course. Deno is a Node.js alternative created by the same person who created Node.js. In this tutorial course, you will learn how to build real apps with Deno. You will also learn the basics of the Typescript. You will see how to use Deno to build a survey app with a REST API using MongoDB.",
		paymentType: "free",
		level: "advanced",
		format: "video",
		image:
			"https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s88-c-k-c0x00ffffff-no-rj",
		href: "https://www.youtube.com/watch?v=TQUy8ENesGY",
		tags: [
			"deno",
			"backend",
			"oak framework",
			"typescript",
			"data fetching",
			"mongodb",
		],
	},
	{
		title: "Fresh: a new full stack web framework for Deno with Luca Casonato",
		author: "Nick Taylor",
		description:
			"Fresh is a new full stack web framework for Deno. Nick Taylor is joined by Fresh creator Luca Casonato, a Software Engineer at Deno Land Inc. Luca discusses Deno and how it works, and then gives a deep dive into the Fresh web framework.",
		paymentType: "free",
		level: "advanced",
		format: "video",
		image:
			"https://yt3.ggpht.com/ytc/AMLnZu_7gy6Bvbaws1-hAz7h9mNLCtiIpzxYqq7bcg-SVg=s88-c-k-c0x00ffffff-no-rj",
		href: "https://www.youtube.com/watch?v=nBrcmlrekV4",
		tags: ["deno", "backend", "fresh framework", "typescript"],
	},
	{
		title: "Deno: The Complete Guide",
		author: " Adam Odziemkowski & Andrei Neagoie",
		description:
			"Learn Deno from scratch (+ why Deno vs Node) by building professional scale real-world Deno apps like a NASA launch system. You'll be learning from an industry expert who is also an official Deno contributor. This is the must learn technology of 2023 for JavaScript developers.",
		paymentType: "paid",
		level: "intermediate",
		format: "interactive",
		image:
			"https://images.ctfassets.net/aq13lwl6616q/719IZvU4LVWt9rECcR0oG3/a0da40259fde3f116d7e419d5536e86d/bdIvNmsR_400x400.jpg?w=30&fm=webp",
		href: "https://zerotomastery.io/courses/learn-deno/",
		tags: ["deno", "backend", "debugging", "typescript", "aws", "docker"],
	},
]
