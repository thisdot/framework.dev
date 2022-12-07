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
] as const

export const books: Book<typeof bookTags[number]>[] = [
	{
		title: "Angular Projects - Second Edition",
		authors: ["Aristeidis Bampakos"],
		image: "https://static.packt-cdn.com/products/9781800205260/cover/smaller",
		description:
			"This updated second edition of Angular Projects will teach you how to build efficient and optimized web applications using Angular.",
		yearOfPublication: 2021,
		numberOfPages: 344,
		level: "beginner",
		href: "https://www.packtpub.com/product/angular-projects-second-edition/9781800205260",
		tags: [],
	},
	{
		title: "Enteprise Angular Monorepo Patterns",
		authors: ["Victor Savkin", "Nitin Vericherla", "Thomas Burleson"],
		image:
			"https://go.nrwl.io/hs-fs/hubfs/Book_EnterpriseAngularMonorepo_V3.jpg?width=632&name=Book_EnterpriseAngularMonorepo_V3.jpg",
		description:
			"This book focuses on common Angular development problems, especially in the enterprise, and shows how to utilize nx and its plugins to solve them. Learn strategies to organize your code into small single-purpose libraries that can be composed to make large applications, and learn how to use nx to enforce quality and consistency across your codebase.",
		yearOfPublication: 2018,
		numberOfPages: 70,
		level: "intermediate",
		href: "https://go.nrwl.io/angular-enterprise-monorepo-patterns-new-book",
		tags: ["nx", "monorepo"],
	},
	{
		title: "Enteprise Angular Monorepo Patterns",
		authors: ["Muhammad Ahsan Ayaz"],
		image:
			"https://images-na.ssl-images-amazon.com/images/I/411QTHyJ12L._SX404_BO1,204,203,200_.jpg",
		description:
			"The Angular Cookbook provides many recipes that help you learn Angular concepts in depth using a step-by-step approach. You'll develop web components with Angular and go on to cover advanced concepts such as dynamic components, state management using NgRx, effectively testing your Angular apps, and building PWAs.",
		yearOfPublication: 2021,
		numberOfPages: 652,
		level: "beginner",
		href: "https://www.amazon.com/Angular-Cookbook-actionable-recipes-developer/dp/1838989439",
		tags: [
			"recipes",
			"state management",
			"NgRx",
			"testing",
			"PWA",
			"components",
		],
	},
	{
		title: "A Journey to Angular Development",
		authors: ["Sukesh Marla"],
		image: "https://m.media-amazon.com/images/I/51QMjI34jLS.jpg",
		description:
			"This book gives you a step-by-step approach to building web apps using Angular, by starting with the essentials such as ES6, Webpack, and TypeScript, following with core Angular concepts such as modules, directives, components, data binding, routing, and more. It really is a journey through all the essential concepts you'll need to know as an Angular developer.",
		yearOfPublication: 2021,
		numberOfPages: 674,
		level: "beginner",
		href: "https://www.amazon.com/Journey-Angular-Development-Fundamentals-TypeScript-ebook/dp/B09996CSY9",
		tags: ["components", "routing", "data binding"],
	},
]
