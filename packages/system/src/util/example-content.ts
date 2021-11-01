import logo1 from "./example-assets/logo-1.png"
import logo2 from "./example-assets/logo-2.png"
import logo3 from "./example-assets/logo-3.png"
import logoRedux from "./example-assets/logo-redux.png"
import { Course } from "../models/course"
import { Library } from "../models/library"

export const exampleCategories = [
	"Libraries",
	"Tools & Plugins",
	"Code Snippets",
	"Courses",
	"Communities",
	"Podcasts",
	"Books",
	"Events",
	"Companies",
]

export const exampleTags = [
	"accessibility",
	"state management",
	"redux",
] as const

export type ExampleTag = typeof exampleTags[number]

export const exampleCourses: Course<ExampleTag>[] = [
	{
		title: "Code 15 React Projects - Complete Course",
		author: "freeCodeCamp.org",
		image: logo1,
		description:
			"Improve your skills with the React JavaScript library by building 15 projects using React.",
		paymentType: "free",
		level: "advanced",
		format: "video",
		href: "https://www.freecodecamp.org/news/solidify-your-react-skills-by-building-15-projects/",
		tags: ["accessibility", "state management"],
	},
	{
		title: "Fullstack React",
		author: "newline",
		image: logo3,
		description:
			"The up-to-date, in-depth, complete guide to React and friends.",
		paymentType: "paid",
		level: "beginner",
		format: "text",
		href: "https://www.newline.co/fullstack-react/",
		tags: [],
	},
	{
		title: "Mastering React",
		author: "Mosh",
		image: logo2,
		description:
			"If you're on React 15, take your components to new levels with these advanced patterns, lectures, exercises, and more.",
		paymentType: "paid",
		level: "intermediate",
		format: "interactive",
		href: "https://codewithmosh.com/p/mastering-react",
		tags: ["state management"],
	},
]

export const exampleLibraries: Library<ExampleTag>[] = [
	{
		name: "Redux",
		author: "Redux",
		description:
			"Predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.",
		gitHubRepo: "reduxjs/redux",
		npmPackage: "redux",
		image: logoRedux,
		href: "https://redux.js.org/",
		tags: ["state management", "redux"],
	},
]
