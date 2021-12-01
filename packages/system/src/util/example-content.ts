import logo1 from "./example-assets/logo-1.png"
import logo2 from "./example-assets/logo-2.png"
import logo3 from "./example-assets/logo-3.png"
import company1 from "./example-assets/company1.png"
import tool1 from "./example-assets/tool-1.png"
import logoRedux from "./example-assets/logo-redux.png"
import logoXstate from "./example-assets/logo-xstate.png"
import logoMobx from "./example-assets/logo-mobx.png"
import { Course, courseIndexMetadata } from "../models/course"
import { Library, libraryIndexMetadata } from "../models/library"
import book1 from "./example-assets/book-1.png"
import book2 from "./example-assets/book-2.png"
import book3 from "./example-assets/book-3.png"
import { Book, bookIndexMetadata } from "../models/book"
import { Podcast, podcastIndexMetadata } from "../models/podcast"
import { Community, communityIndexMetadata } from "../models/community"
import { Company, companyIndexMetadata } from "../models/company"
import { CodeExample, codeExampleIndexMetadata } from "../models/code-example"
import { Tool, toolIndexMetadata } from "../models/tool"
import { AllCategories } from "../models/all-categories"

export const exampleTags = [
	"accessibility",
	"state-management",
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
		tags: ["accessibility", "state-management"],
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
		tags: ["state-management"],
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
		tags: ["state-management", "redux"],
	},
	{
		name: "XState",
		author: "David Khourshid",
		description:
			"JavaScript and TypeScript finite state machines and statecharts for the modern web.",
		gitHubRepo: "statelyai/xstate",
		npmPackage: "xstate",
		image: logoXstate,
		href: "https://xstate.js.org/",
		tags: ["state-management"],
	},
	{
		name: "MobX",
		author: "Michel Weststrate",
		description:
			"MobX is a battle tested library that makes state management simple and scalable by transparently applying functional reactive programming (TFRP).",
		gitHubRepo: "mobxjs/mobx",
		npmPackage: "mobx",
		image: logoMobx,
		href: "https://redux.js.org/",
		tags: ["state-management", "redux"],
	},
]

export const exampleBooks: Book<string>[] = [
	{
		href: "/atomic-habits",
		title:
			"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
		image: book1,
		authors: ["James Clear"],
		yearOfPublication: 2018,
		numberOfPages: 320,
		level: "intermediate",
		tags: ["self-help"],
		description:
			"This breakthrough book from James Clear is the most comprehensive guide on how to change your habits and get 1% better every day.",
	},
	{
		href: "/harry-potter",
		title: "Harry Potter and the Sorcerer's Stone",
		image: book2,
		authors: ["J. K. Rowling", "Robert Galbraith"],
		yearOfPublication: 1997,
		numberOfPages: 223,
		level: "beginner",
		tags: ["fiction"],
		description:
			"After 11 years of disregard and neglect at the hands of his aunt, uncle and their swinish son Dudley, Harry suddenly receives a visit from a giant named Hagrid, who informs Harry that his mother and father were a witch and wizard.",
	},
	{
		href: "/cryptonomicon",
		title: "Cryptonomicon",
		image: book3,
		authors: ["Neal Stephenson"],
		yearOfPublication: 1999,
		numberOfPages: 918,
		level: "advanced",
		tags: ["fiction"],
		description:
			"Randy Waterhouse spearheads a movement to create a safe haven for data in a world where information equals power and big business and government seek to control the flow of knowledge.",
	},
]

export const examplePodcasts: Podcast<string>[] = [
	{
		title: "Syntax",
		image: "https://syntax.fm/static/logo.png",
		description: "A Tasty Treats Podcast for Web Developers.",
		rss: "http://feed.syntax.fm/rss",
		hosts: ["Wes Bos", "Scott Tolinksi"],
		tags: ["react", "front end"],
		href: "https://syntax.fm",
	},
	{
		title: "Syntax",
		image:
			"https://image.simplecastcdn.com/images/bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3/20f97d0b-6dab-4005-a995-0ab8fc2cf31c/480x480/1550288890-artwork@2x.jpg",
		description: "Conversations about React with your favorite developers.",
		rss: "https://feeds.simplecast.com/JoR28o79",
		hosts: ["Michael Chan"],
		tags: ["react", "front end"],
		href: "https://reactpodcast.simplecast.com/",
	},
	{
		title: "React Round Up",
		image:
			"https://devchat.tv/wp-content/uploads/2020/06/reactroundup-1-scaled-1024x1024.jpg",
		description:
			"Every week we get together to talk all things React, front-end, and developer careers. Whether you're working on a React web app, React Native app, or diving into development for the first time, we'll help you level up and achieve your React related goals.",
		rss: "http://feed.syntax.fm/rss",
		hosts: ["Paige Neidringhaus", "TJ VanToll"],
		tags: ["react"],
		href: "https://devchat.tv/podcasts/react-round-up/",
	},
]

export const exampleCommunities: Community<string>[] = [
	{
		name: "Community One",
		description: "Example community, full of people who, uh, commune.",
		image:
			"https://picsum.photos/seed/3aea63e0-3db5-517c-99e7-817a11b35b3e/250",
		type: "Discord Community",
		tags: ["accessibility"],
		href: "https://google.com",
	},
	{
		name: "Community Two",
		description: "This community isn't as nice if I'm being honest.",
		image:
			"https://picsum.photos/seed/ca6b8711-bda2-5f1b-8dc4-5cb48098265d/250",
		type: "Slack Community",
		tags: ["state-management"],
		href: "https://bing.com",
	},
	{
		name: "Community Three",
		description:
			"I can't tell you much about this community because they won't let me join.",
		image:
			"https://picsum.photos/seed/18702836-66b7-5bda-af53-24605bdeed0a/250",
		type: "Secret Society",
		tags: ["graphQL"],
		href: "https://duckduckgo.com",
	},
]

export const exampleCompanies: Company<"consultancy">[] = [
	{
		name: "This Dot",
		description:
			"Provides architectural guidance, staff augmentation, on demand Subject Matter Experts, temporary CTOs, one-on-one pairing, mentorship, and open source strategy support.",
		image: company1,
		numberOfEmployees: "10 to 50",
		href: "https://labs.thisdot.co",
		tags: ["consultancy"],
	},
]

export const exampleCodeExamples: CodeExample<ExampleTag>[] = [
	{
		title: "Redux Essentials: Counter",
		author: "reduxjs",
		description: "A basic counter implemented using Redux",
		href: "https://codesandbox.io/s/un8my",
		tags: ["redux", "state-management"],
	},
]

export const exampleTools: Tool<string>[] = [
	{
		name: "Doge Generator",
		author: "Jackson Palmer",
		description: "Wow. Doge meme generator. Very plugin.",
		image: tool1,
		tags: ["Data Visualization", "Web3", "Hooks"],
		href: "https://dogecoin.com/",
	},
]

export const exampleSearchData: AllCategories[] = [
	{
		data: exampleBooks,
		indexMetadata: bookIndexMetadata,
		name: bookIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleCodeExamples,
		indexMetadata: codeExampleIndexMetadata,
		name: codeExampleIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleCommunities,
		indexMetadata: communityIndexMetadata,
		name: communityIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleCompanies,
		indexMetadata: companyIndexMetadata,
		name: companyIndexMetadata.name,
		tags: [],
	},
	{
		data: exampleCourses,
		indexMetadata: courseIndexMetadata,
		name: courseIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleLibraries,
		indexMetadata: libraryIndexMetadata,
		name: libraryIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: examplePodcasts,
		indexMetadata: podcastIndexMetadata,
		name: podcastIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleTools,
		indexMetadata: toolIndexMetadata,
		name: toolIndexMetadata.name,
		tags: exampleTags,
	},
]
