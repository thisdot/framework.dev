import { Community } from "@framework/system/src/models/community"

export const communityTags = ["meetups", "conferences"] as const

export const communities: Community<typeof communityTags[number]>[] = [
	{
		name: "Forum Vuejs",
		description:
			"The best place to ask questions and get answers about Vue and its ecosystem.",
		image:
			"https://forum.vuejs.org/uploads/default/original/2X/5/555257b8c5e7ecf34ce4f9b952eeaf006adfa339.png",
		type: "forum",
		href: "https://forum.vuejs.org/",
		tags: [],
	},
	{
		name: "Vue Meetup / State of Vue",
		description:
			"This Dot Media presents Vue Contributor Day! The goal of this event is to not only give important updates to the community, but also as a forum to provide a voice for anyone using Vue.js to have direct access to core contributors and authors of various libraries and frameworks through live chat and an online broadcast.",
		image: "https://github.com/thisdot.png",
		type: "Live Events",
		href: "https://www.vuemeetup.com/",
		tags: ["meetups"],
	},
	{
		name: "DigitalOcean Community",
		description:
			"DigitalOcean Community is a blog related to general Web development, with categories spanning across CSS, general JavaScript, and frameworks like Vue",
		image: "https://www.digitalocean.com/_next/static/media/logo.87a8f3b8.svg",
		type: "forum",
		href: "https://www.digitalocean.com/community/tags/vue-js",
		tags: [],
	},
	{
		name: "VueConf Toronto",
		description:
			"VueConf Toronto is a Canadian conference with talks and workshops from Vue.js core team members and industry experts.",
		image:
			"https://forum.vuejs.org/uploads/default/original/2X/5/555257b8c5e7ecf34ce4f9b952eeaf006adfa339.png",
		type: "Live Events",
		href: "https://www.vuetoronto.com/",
		tags: ["conferences"],
	},
	{
		name: "Nuxt Nation",
		description: "One of the largest Nuxt conferences in the world.",
		image:
			"https://forum.vuejs.org/uploads/default/original/2X/5/555257b8c5e7ecf34ce4f9b952eeaf006adfa339.png",
		type: "Online Events",
		href: "https://nuxtnation.com/",
		tags: ["conferences"],
	},
	{
		name: "Vue Day",
		description:
			"This is an online and in person conference dedicated to all things Vue",
		image:
			"https://forum.vuejs.org/uploads/default/original/2X/5/555257b8c5e7ecf34ce4f9b952eeaf006adfa339.png",
		type: "Online and Live Events",
		href: "https://2022.vueday.it/",
		tags: ["conferences"],
	},
	{
		name: "Vuejs Amsterdam",
		description: "One of the largest Vue conferences in the world",
		image:
			"https://img2.storyblok.com/277x0/filters:format(png)/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png",
		type: "Live Events",
		href: "https://vuejs.amsterdam/",
		tags: ["conferences"],
	},
	{
		name: "Vuejs Global Summit",
		description: "Online global summit to discuss all things Vue.",
		image: "https://events.geekle.us/vuejs/static/media/logo.579e43d2.svg",
		type: "Online Events",
		href: "https://events.geekle.us/vuejs/",
		tags: ["conferences"],
	},
	{
		name: "Vuejs Live",
		description: "Online and in person conference to discuss all things Vue.",
		image:
			"https://forum.vuejs.org/uploads/default/original/2X/5/555257b8c5e7ecf34ce4f9b952eeaf006adfa339.png",
		type: "Online and Live Events",
		href: "https://vuejslive.com/",
		tags: ["conferences"],
	},
]
