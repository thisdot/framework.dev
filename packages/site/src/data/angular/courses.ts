import { Course } from "@framework/system/src/models/course"

export const courseTags = [
	"state management",
	"components",
	"data fetching",
	"routing",
	"testing",
	"services",
	"rxjs",
] as const

export const courses: Course<typeof courseTags[number]>[] = [
	{
		title: "Getting started with Angular",
		author: "Google",
		image: "https://github.com/angular.png",
		description:
			"Introduces you to the essentials of Angular by walking you through building an e-commerce site with a catalog, shopping cart, and check-out form.",
		paymentType: "free",
		level: "beginner",
		format: "interactive",
		href: "https://angular.io/start",
		tags: ["state management", "services", "routing", "testing"],
	},
	{
		title: "Tour of Heroes App and Tutorial",
		author: "Google",
		image: "https://github.com/angular.png",
		description:
			"In this official Angular tutorial, you build your own application from the ground up, providing experience with the typical development process, as well as an introduction to basic app-design concepts, tools, and terminology.",
		paymentType: "free",
		level: "intermediate",
		format: "interactive",
		href: "https://angular.io/tutorial",
		tags: [
			"state management",
			"components",
			"data fetching",
			"routing",
			"services",
		],
	},
	{
		title: "Rxjs fruits",
		author: "Gregor Biswanger",
		image: "https://www.rxjs-fruits.com/assets/Rx_Logo_S.png",
		description:
			"Learn the basics of how Reactive Extensions work by mixing your own fruit juice!",
		paymentType: "free",
		level: "beginner",
		format: "interactive",
		href: "https://www.rxjs-fruits.com/subscribe",
		tags: ["rxjs"],
	},
]
