import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = ["general", "graphQL", "vuejs", "quasar"] as const

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
			"https://assets.fireside.fm/file/fireside-images/podcasts/images/4/4b532b8f-dc99-4b48-90f1-023bd6c0cd90/cover_medium.jpg?v=0",
		hosts: [
			"Lindsay Wardell",
			"Luke Diebold",
			"Solomon Eseme",
			"Steve Edwards",
			"Charles Wood",
		],
		description:
			"A weekly discussion among Vue developers about Vue and it's ecosystem.",
		rss: "",
		href: "https://viewsonvue.com/",
		tags: ["vuejs"],
	},
	{
		title: "The Official Vue News",
		image:
			"https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/9f/0f/44/9f0f44f5-2478-96a8-af41-91d0fd87c9f6/mza_8437862612976381859.jpg/313x0w.webp",
		hosts: ["Vue Mastery"],
		description:
			"We cover the latest Vue news and tutorials in about 5 minutes. Our goal is to give you the information you need to stay on top of your game as a Vue developer. Links to all the stories we talk about can be found in our weekly newsletter and on http://news.vuejs.org",
		rss: "",
		href: "https://podcasts.apple.com/us/podcast/the-official-vue-news/id1329151772",
		tags: ["vuejs"],
	},
	{
		title: "Enjoy the Vue",
		image: "https://enjoythevue.io/uploads/etv-cover-ep-47.png",
		hosts: ["Alex Riviere", "Ari Clarke", "Oscar Spencer", "Tessa"],
		description:
			"A new Vue.js podcast bringing you panel discussions, guest interviews, and much more to keep you up to date on what's happening in the Vue and tech communities.",
		rss: "https://pod.link/1498529055",
		href: "https://enjoythevue.io/",
		tags: ["vuejs"],
	},
	{
		title: "Request for Commits",
		image:
			"https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/1b/6c/94/1b6c9424-dcea-147a-6341-1638d59b6f90/mza_1968081058311845870.png/313x0w.webp",
		hosts: ["Nadia Eghbal", "Mikeal Rogers"],
		description:
			"Request For Commits explored different perspectives in open source sustainability (retired). Hosts Nadia Eghbal and Mikeal Rogers dive deep into the trials and tribulations of being an open source maintainer, building communities, and navigating the business side of software.",
		rss: "",
		href: "https://podcasts.apple.com/us/podcast/request-for-commits/id1141345001",
		tags: ["general"],
	},
	{
		title: "After Talk by Vue.js Berlin",
		image:
			"https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/3f/90/f5/3f90f5f9-e23d-73c1-403a-742279b040e5/mza_5117638571604012425.png/313x0w.webp",
		hosts: ["vuejsberlin"],
		description:
			"Vue.js // Berlin Podcast with interesting people from Vue.js and Programming Community.",
		rss: "",
		href: "https://podcasts.apple.com/us/podcast/after-talk-by-vue-js-berlin/id1514370430",
		tags: ["vuejs"],
	},
	{
		title: "Quasar Vue Life",
		image:
			"https://images.transistor.fm/file/transistor/images/show/20124/thumb_1617845833-artwork.jpg",
		hosts: ["Luke Diebold"],
		description: "",
		rss: "",
		href: "",
		tags: ["vuejs", "quasar"],
	},
]
