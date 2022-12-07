import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = ["general", "GraphQL", "vue", "quasar"] as const

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
		title: "Views on Vue",
		image:
			"https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/e1/ee/cd/e1eecd5c-7c90-05e7-19d2-9a2476d82c54/mza_2587166457306830649.jpg/626x0w.webp",
		hosts: [
			"Lindsay Wardell",
			"Luke Diebold",
			"Solomon Eseme",
			"Steve Edwards",
			"Charles Wood",
		],
		description:
			"A weekly discussion among Vue developers about Vue and it's ecosystem.",
		rss: "https://viewsonvue.com/rss",
		href: "https://viewsonvue.com/",
		tags: ["vue"],
	},
	{
		title: "The Official Vue News",
		image:
			"https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/9f/0f/44/9f0f44f5-2478-96a8-af41-91d0fd87c9f6/mza_8437862612976381859.jpg/313x0w.webp",
		hosts: ["Vue Mastery"],
		description:
			"This podcast covers the latest Vue news and tutorials in about 5 minutes. Our goal is to give you the information you need to stay on top of your game as a Vue developer. Links to all the stories we talk about can be found in our weekly newsletter and on http://news.vuejs.org",
		rss: "https://news.vuejs.org/feed.xml",
		href: "http://news.vuejs.org",
		tags: ["vue"],
	},
	{
		title: "Enjoy the Vue",
		image: "https://enjoythevue.io/uploads/etv-cover-ep-47.png",
		hosts: ["Alex Riviere", "Ari Clarke", "Oscar Spencer", "Tessa"],
		description:
			"A new Vue.js podcast bringing you panel discussions, guest interviews, and much more to keep you up to date on what's happening in the Vue and tech communities.",
		rss: "https://pod.link/1498529055",
		href: "https://enjoythevue.io/",
		tags: ["vue"],
	},
	{
		title: "After Talk by Vue.js Berlin",
		image:
			"https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/3f/90/f5/3f90f5f9-e23d-73c1-403a-742279b040e5/mza_5117638571604012425.png/313x0w.webp",
		hosts: ["vuejsberlin"],
		description:
			"Vue.js // Berlin Podcast with interesting people from Vue.js and Programming Community.",
		rss: "https://anchor.fm/s/2f6e7074/podcast/rss",
		href: "https://vuejs.berlin/",
		tags: ["vue"],
	},
	{
		title: "Quasar Vue Life",
		image:
			"https://images.transistor.fm/file/transistor/images/show/20124/thumb_1617845833-artwork.jpg",
		hosts: ["Luke Diebold"],
		description:
			"This show is for coders who want to learn the mindset, and life skills behind being a Web Developer. Learn from Luke Diebold. Core Quasar Team member, and creator of QuasarCast.Com",
		rss: "https://feeds.transistor.fm/quasar-vue-life",
		href: "https://quasarcast.com/podcasts/quasar-life",
		tags: ["vue", "quasar"],
	},
]
