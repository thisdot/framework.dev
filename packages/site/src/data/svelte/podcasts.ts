import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = ["general", "svelte"] as const

export const podcasts: Podcast<typeof podcastTags[number]>[] = [
	{
		title: "Modern Web",
		image:
			"https://pbcdn1.podbean.com/imglogo/image-logo/984467/modern_web_9bpnd.jpg",
		hosts: ["ThisDot Labs"],
		description:
			"Modern Web is a podcast that explores next generation frameworks, standards, and techniques.",
		rss: "https://www.podbean.com/site/podcatcher/index/blog/7YqKYcoGcvP",
		href: "https://modernweb.podbean.com/",
		tags: ["general"],
	},
	{
		title: "Svelte Radio",
		image:
			"https://images.transistor.fm/file/transistor/images/logos/site/4912/medium_logo-transistor.png",
		hosts: ["Antony", "Shawn", "Kevin"],
		description:
			"Svelte Radio is a podcast about Svelte. We (Antony, Shawn and Kevin) meet up once every two weeks or so and discuss the latest in Svelte. Sometimes we also have interesting guests on.",
		rss: "https://feeds.transistor.fm/svelte-radio",
		href: "https://www.svelteradio.com/",
		tags: ["svelte"],
	},
	{
		title: "JavaScript Air",
		image: "https://javascriptair.com/favicon.ico",
		hosts: ["Kent C. Dodds"],
		description: "The live broadcast podcast all about JavaScript",
		rss: "https://feed.podbean.com/audio.javascriptair.com/feed.xml",
		href: "https://javascriptair.com/",
		tags: ["general"],
	},
	{
		title: "Syntax",
		image: "https://syntax.fm/static/logo.png",
		hosts: ["Wes Bos", "Scott Tolinski"],
		description: "A Tasty Treats Podcast for Web Developers.",
		rss: "http://feed.syntax.fm/rss",
		href: "https://syntax.fm/",
		tags: ["general"],
	},
	{
		title: "JS Party",
		image:
			"https://cdn.changelog.com/uploads/covers/js-party-original.png?v=63725770332",
		hosts: [
			"Jerod Santo",
			"Feross Aboukhadijeh",
			"Amelia Wattenberger",
			"Kevin Ball",
			"Nick Nisi",
			"Divya",
			"Mikeal Rogers",
			"Christopher Hiller",
			"Amal Hussein",
		],
		description: "a weekly celebration of JavaScript and the web",
		rss: "https://jsparty.fm/rss",
		href: "https://changelog.com/topic/svelte/podcasts",
		tags: ["general", "svelte"],
	},
]
