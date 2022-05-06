import { Course } from "@framework/system/src/models/course"

export const courseTags = [
    "state management",
	"data fetching",
	"routing",
	"testing",
	"forms",
	"graphQL",
	"vuex",
	"authentication",
	"scss",
	"css",
	"bootstrap",
	"typescript",
	"tailwind",
	"material ui",
    "Vue.js 2",
    "Vue.js 3",
] as const

export const courses: Course<typeof courseTags[number]>[] = [
    {
        title: "Vue - The Complete Guide (incl. Router & Composition API)",
		author: "Maximilian Schwarzmüller",
		image: "https://github.com/maxschwarzmueller.png",
		description:
			"Join this bestselling Vue course to learn how to use the latest version of VueJS to build amazing, modern web apps!",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://www.udemy.com/course/vuejs-2-the-complete-guide/",
		tags: ["state management", "data fetching", "routing", "Vue.js 2", "Vue.js 3", "vuex", "authentication", "forms"],
    }
]
