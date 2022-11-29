import { Book } from "@framework/system/src/models/book"

export const bookTags = ["foundational", "intro", "oak", "graphql"] as const

export const books: Book<typeof bookTags[number]>[] = [
	{
		title: "Deno Web Development",
		href: "http://oreilly.com/library/view/deno-web-development/9781800205666/",
		image: "https://learning.oreilly.com/library/cover/9781800205666/250w/",
		authors: ["Alexandre Portela dos Santos", "Miguel Loureiro"],
		description:
			"A curious JavaScript developer's practical guide to deep dive into Deno and get the most out of it for building secure web applications",
		level: "beginner",
		numberOfPages: 310,
		tags: ["foundational"],
		yearOfPublication: 2021,
	},
	{
		title: "Introducing Deno: A First Look at the Newest JavaScript Runtime",
		href: "https://www.oreilly.com/library/view/introducing-deno-a/9781484261972/",
		image: "https://learning.oreilly.com/library/cover/9781484261972/250w/",
		description:
			"Learn everything there is to know about the new secure runtime for JavaScript: Deno. A proposed replacement for Node.js envisioned and created by the same developer who wrote the first version of Node, Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust. This book will cover everything from its inception to the currently available version.",
		level: "beginner",
		numberOfPages: 156,
		tags: ["foundational", "intro"],
		yearOfPublication: 2020,
		authors: ["Fernando Doglio"],
	},
	{
		title: "Beginning Deno Development",
		href: "https://www.amazon.ca/Beginning-Deno-Development-Greg-Lim/dp/9811474648",
		image: "https://m.media-amazon.com/images/I/41b8dBODVxL.jpg",
		authors: ["Greg Lim"],
		description:
			"In this book, we take you on a fun, hands-on and pragmatic journey to learning Deno development. You'll start building your first Deno app within minutes. Every chapter is written in a bite-sized manner and straight to the point as I don't want to waste your time (and most certainly mine) on the content you don't need. In the end, you will have the skills to create a Deno web app and a Deno REST API.",
		level: "beginner",
		numberOfPages: 106,
		tags: ["foundational", "oak"],
		yearOfPublication: 2020,
	},
	{
		title: "Modern Web Development with Deno",
		description:
			"This book will teach all you need to know about Deno's primitives, its ideas, and how you can use them to build applications that work in the real world.",
		href: "https://www.amazon.com/Modern-Web-Development-Deno-JavaScript/dp/9355510969",
		image:
			"https://m.media-amazon.com/images/P/B0BHKWYVMG.01._SCLZZZZZZZ_SX500_.jpg",
		authors: ["Mayur Borse"],
		level: "intermediate",
		numberOfPages: 200,
		tags: ["graphql"],
		yearOfPublication: 2022,
	},
	{
		title: "Deno Succinctly",
		href: "https://www.syncfusion.com/succinctly-free-ebooks/deno-succinctly",
		description:
			"Deno is a JavaScript runtime by the creator of Node, built upon the lessons learned from Node becoming an integral part of so many apps since 2009, plus the ever-changing web app landscape. In Deno Succinctly, author Mark Lewin illuminates the improvements that Deno brings to server-side web development, and guides readers through three quick projects that demonstrate significant features of the runtime.",
		image: "https://www.syncfusion.com/succinctly-free-ebooks/deno-succinctly",
		authors: ["Mark Lewin"],
		numberOfPages: 108,
		level: "beginner",
		tags: ["foundational", "intro"],
		yearOfPublication: 2021,
	},
]
