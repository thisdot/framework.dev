import { Book } from "@framework/system/src/models/book"

export const bookTags = [
	"projects",
	"vuex",
	"routing",
	"testing",
	"authentication",
	"best practices",
	"patterns",
	"state management",
	"forms",
	"vue 2",
	"vue 3",
	"vite",
	"TypeScript",
	"GraphQL",
] as const

export const books: Book<typeof bookTags[number]>[] = [
	{
		title: "Vue.js: Up and Running",
		authors: ["Callum Macrae"],
		image: "https://learning.oreilly.com/library/cover/9781491997239/250w/",
		description:
			"Get a brisk introduction to building fast, interactive single-page web applications with Vue.js, the popular JavaScript framework that organizes and simplifies web development. With this practical guide, you'll quickly move from basics to custom components and advanced features—including JSX, the JavaScript syntax extension.",
		yearOfPublication: 2018,
		numberOfPages: 174,
		level: "beginner",
		href: "https://www.oreilly.com/library/view/vuejs-up-and/9781491997239/",
		tags: ["projects", "vuex", "routing", "testing", "vue 2"],
	},
	{
		title: "Vue The Road To Enterprise",
		authors: ["Thomas Findlay"],
		image: "https://theroadtoenterprise.com/_nuxt/img/fdc3f54.png",
		description:
			"Take your skills to the next level and become a Vue pro by mastering advanced patterns, best practices, and cutting-edge techniques for the development of Vue 2 & 3 applications.",
		yearOfPublication: 2021,
		numberOfPages: 300,
		level: "advanced",
		href: "https://theroadtoenterprise.com/books/vue-the-road-to-enterprise",
		tags: [
			"state management",
			"best practices",
			"patterns",
			"testing",
			"authentication",
			"vue 2",
			"vue 3",
		],
	},
	{
		title: "Building Forms with Vue.js",
		authors: ["Marina Mosti"],
		image:
			"https://images-na.ssl-images-amazon.com/images/I/41vzI7SkEIL._SX403_BO1,204,203,200_.jpg",
		description:
			"Almost every web application and site out there handles user input in one way or another, from registration forms and log-in handling to registration and landing pages. Building Forms with Vue.js follows a step-by-step approach to help you create an efficient user interface (UI) and seamless user experience (UX) by building quick and easy-to-use forms.",
		yearOfPublication: 2019,
		numberOfPages: 110,
		level: "beginner",
		href: "https://www.amazon.com/Building-Forms-Vue-js-Patterns-building-ebook/dp/B07YY7MGDD",
		tags: ["vuex", "forms", "patterns", "vue 2"],
	},
	{
		title: "Fullstack Vue",
		authors: ["Hassan Djirdeh, Nate Murray, Ari Lerner"],
		image:
			"https://dzxbosgk90qga.cloudfront.net/x800/n/20210201233729182_book-cover-quarter.jpg",
		description:
			"The Fullstack Vue book is the complete guide to Vue.js. With dozens of code examples showing every step, you will master this delightful framework.",
		yearOfPublication: 2021,
		numberOfPages: 620,
		level: "beginner",
		href: "https://www.newline.co/vue/",
		tags: [
			"vuex",
			"forms",
			"testing",
			"vue 2",
			"vue 3",
			"routing",
			"TypeScript",
			"GraphQL",
		],
	},
	{
		title: "Become a ninja with Vue 3",
		authors: ["Cédric Exbrayat"],
		image:
			"https://books.ninja-squad.com/public/images/vue/xebook-cover.png.pagespeed.ic.Fn4QnmoYfd.webp",
		description:
			"This ebook helps you get the philosophy of Vue 3 (currently 3.2.33), the new tools (like TypeScript, Vite, esbuild...), the essential libraries (vue-router, @vue/test-utils, axios...), and each part of the framework in a pragmatic way. You will be able to kickstart your project by the end of the reading, and build your amazing apps!",
		yearOfPublication: 2021,
		numberOfPages: 236,
		level: "beginner",
		href: "https://books.ninja-squad.com/vue",
		tags: [
			"best practices",
			"vue 3",
			"TypeScript",
			"vite",
			"routing",
			"testing",
			"state management",
		],
	},
	{
		title: "Vue.js design and implementation",
		authors: ["Huo Chunyang (HcySunYang)"],
		image: "https://file.ituring.com.cn/LargeCover/220221aede71623dcf92",
		description:
			"This book is based on Vue.js 3. It includes a large number of illustrations and explains step by step the realization of each functional module in Vue.js. This book also analyzes the framework design principles in detail.  By reading this book, developers with hands-on experience with Vue.js 2/3 can further understand the implementation details of the Vue.js framework. Front-end developers who have no experience in using Vue.js but are interested in framework design can quickly master Vue.js design principles.",
		yearOfPublication: 2022,
		numberOfPages: 501,
		level: "intermediate",
		href: "https://www.ituring.com.cn/book/2953",
		tags: ["vue 3"],
	},
]
