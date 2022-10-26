import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = ["general", "solidjs"] as const

export const podcasts: Podcast<typeof podcastTags[number]>[] = [
	{
		title: "A Solid option for building UIs",
		image: "https://public.overcast-cdn.com/art/554901?v198",
		hosts: ["JS Party", "Ryan Carniato"],
		description: "Discussion on the origin story of SolidJS, how it came to be and what the author hopes to accomplish with it",
		rss: "https://changelog.com/jsparty/feed",
		href: "https://overcast.fm/+Id5U6EB5M",
		tags: ["solidjs"],
	},
	{
		title: "React vs Svelte vs Solid & MicroFrontends | Ryan Carniato",
		image: "https://github.com/ryansolid.png",
		hosts: ["Ryan Carniato"],
		description: "On the hard choices all companies are facing right now with their websites, especially with the performance.",
		rss: "",
		href: "https://show.nikoskatsikanis.com/episodes/ryan-carniato",
		tags: ["solidjs"],
	},
	{
		title: "The Deep Dive Episode 4: Reactive frontend frameworks",
		image: "https://github.com/layZeeDK.png",
		hosts: ["Lars Gyrup Brink Nielsen.", "Kos Palchyk", "Ryan Carniato"],
		description: "Listen to the creator of Solidjs talk about Reactivity and application frameworks.",
		rss: "",
		href: "https://www.youtube.com/watch?v=iyY1lT8-ZDA",
		tags: ["general"],
	},
]
