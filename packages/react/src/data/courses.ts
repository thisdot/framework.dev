import { Course } from "@framework/system/src/models/course"
import codingAddict from "./assets/coding-addict.jpeg"
import moshHamedani from "./assets/mosh-hamedani.jpeg"
import newline from "./assets/newline.png"

export const courseTags = [
	"state management",
	"data fetching",
	"routing",
	"testing",
	"forms",
	"graphQL",
	"native",
	"redux",
	"authentication",
] as const

export const courses: Course<typeof courseTags[number]>[] = [
	{
		title: "Code 15 React Projects - Complete Course",
		author: "John Smilga",
		image: codingAddict,
		description:
			"Improve your skills with the React JavaScript library by building 15 projects using React.",
		paymentType: "free",
		level: "advanced",
		format: "video",
		href: "https://www.youtube.com/watch?v=a_7Z7C_JCyo",
		tags: ["state management", "data fetching", "routing"],
	},
	{
		title: "Fullstack React",
		author: "newline",
		image: newline,
		description:
			"The up-to-date, in-depth, complete guide to React and friends.",
		paymentType: "paid",
		level: "beginner",
		format: "text",
		href: "https://www.newline.co/fullstack-react/",
		tags: [
			"routing",
			"testing",
			"graphQL",
			"native",
			"forms",
			"state management",
			"redux",
		],
	},
	{
		title: "Mastering React",
		author: "Mosh Hamedani",
		image: moshHamedani,
		description:
			"If you're on React 15, take your components to new levels with these advanced patterns, lectures, exercises, and more.",
		paymentType: "paid",
		level: "intermediate",
		format: "interactive",
		href: "https://codewithmosh.com/p/mastering-react",
		tags: [
			"state management",
			"forms",
			"routing",
			"data fetching",
			"authentication",
		],
	},
]
