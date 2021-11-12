import { Course } from "@framework/system/src/models/course"
import codingAddict from "./assets/coding-addict.jpeg"
import moshHamedani from "./assets/mosh-hamedani.jpeg"
import newline from "./assets/newline.png"
import freeCodeCamp from "./assets/free-code-camp.png"
import webdevSimplified from "./assets/webdev-simplified.png"
import benAwad from "./assets/ben-awad.jpeg"
import javascriptMastery from "./assets/javascript-mastery.jpeg"
import theNetNinja from "./assets/the-net-ninja.png"
import traversyMedia from "./assets/traversy-media.jpeg"
import brunoAntunes from "./assets/bruno-antunes.jpeg"
import adrianTwarog from "./assets/adrian-twarog.jpeg"

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
	"scss",
	"css",
	"bootstrap",
	"react context",
	"hooks",
	"typescript",
	"tailwind",
	"material ui",
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
	{
		title: "React.js tutorial for beginners",
		author: "Mosh Hamedani",
		image: moshHamedani,
		description:
			"Get up & running with React JS: the most popular JavaScript library in the world!",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://codewithmosh.com/p/mastering-react",
		tags: ["state management", "forms", "routing", "data fetching"],
	},
	{
		title: "Front End Development - React course",
		author: "FreeCodeCamp",
		image: freeCodeCamp,
		description:
			"In the Front End Development Libraries Certification, you'll learn how to style your site quickly with Bootstrap. You'll also learn how add logic to your CSS styles and extend them with Sass.",
		paymentType: "free",
		level: "beginner",
		format: "interactive",
		href: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
		tags: [
			"state management",
			"data fetching",
			"routing",
			"forms",
			"redux",
			"scss",
			"bootstrap",
		],
	},
	{
		title: "React crash course",
		author: "FreeCodeCamp",
		image: freeCodeCamp,
		description:
			"This is a full premium course. Learn React.js from the ground up with fundamentals to more intermediate and advanced topics. You will learn by building a real app!",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
		tags: [
			"state management",
			"data fetching",
			"routing",
			"forms",
			"react context",
			"css",
			"bootstrap",
		],
	},
	{
		title: "Learn React Today",
		author: "Web Dev Simplified",
		image: webdevSimplified,
		description:
			"Learn React and all its modern features such as hooks and context in less than a day with this highly focused React course",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://courses.webdevsimplified.com/learn-react-today",
		tags: ["data fetching", "routing", "forms", "react context"],
	},
	{
		title: "React Hooks Tutorial",
		author: "Ben Awad",
		image: benAwad,
		description: "React hooks playlist for beginners on YouTube",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtube.com/playlist?list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM",
		tags: ["data fetching", "hooks", "forms", "react context"],
	},
	{
		title:
			"Build and Deploy a Fully Responsive Modern UI/UX Website in React JS",
		author: "JavaScript Mastery",
		image: javascriptMastery,
		description:
			"This video is perfect for you if you want to learn how to transform a Figma design into a fully functioning website, improve your CSS skills, and create modern and responsive ReactJS websites.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtu.be/LMagNcngvcU",
		tags: ["hooks", "forms", "css"],
	},
	{
		title: "Full Modern React Tutorial",
		author: "The Net Ninja",
		image: theNetNinja,
		description:
			"This is full React tutorial series, It will take you from novice to ninja. It covers all the basics - what React is, setting up, components & routing - before diving into state management, async code, built-in hooks & custom hooks too.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
		tags: ["hooks", "forms", "data fetching", "routing"],
	},
	{
		title: "React JS Crash Course 2021",
		author: "Traversy Media",
		image: traversyMedia,
		description:
			"Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtu.be/w7ejDZ8SWv8",
		tags: ["hooks", "forms", "data fetching", "state management"],
	},
	{
		title: "34 React Project Tutorials step by step",
		author: "Traversy Media",
		image: traversyMedia,
		description: "A playlist with 34 walkthrough projects for beginners",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtube.com/playlist?list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb",
		tags: [
			"hooks",
			"forms",
			"data fetching",
			"state management",
			"css",
			"routing",
			"redux",
			"react context",
		],
	},
	{
		title: "React Typescript Tutorial",
		author: "Ben Awad",
		image: benAwad,
		description:
			"Learn how to start using Typescript in your React code. I go over props, hooks, and render props.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/Z5iWr6Srsj8",
		tags: ["hooks", "forms", "state management", "typescript"],
	},
	{
		title: "React Typescript Tutorial - Build a Quiz App",
		author: "FreeCodeCamp",
		image: freeCodeCamp,
		description:
			"Learn how to use React and TypeScript to create a quiz app project. You will also learn how to use Styled-Components with React.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtu.be/F2JCjVSZlG0",
		tags: [
			"hooks",
			"forms",
			"state management",
			"css",
			"data fetching",
			"typescript",
		],
	},
	{
		title: "React.js Tutorial with Hooks and TypeScript",
		author: "Bruno Antunes",
		image: brunoAntunes,
		description:
			"This playlist contains all the videos from the React.js Tutorial. We are using Function Components with Hooks and Typescript.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtube.com/playlist?list=PLYSZyzpwBEWSe71-aLlq71B2LPZzTNO8a",
		tags: ["hooks", "forms", "state management", "data fetching", "typescript"],
	},
	{
		title: "Tailwind CSS React Tutorial",
		author: "Adrian Twarog",
		image: adrianTwarog,
		description:
			"If you're looking to learn tailwindcss with react, this tutorial should cover the basics of getting it up and running. It's based on the official documentation",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/L2KHCWJ3gjs",
		tags: ["tailwind", "css"],
	},
	{
		title: "React.js Tutorial with Hooks and TypeScript",
		author: "Traversy Media",
		image: traversyMedia,
		description:
			"This react material ui tutorial will cover all aspects of material ui and react to get you up and running to use them for your next website development project or application.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/vyJU9efvUtQ",
		tags: ["material ui", "css"],
	},
]
