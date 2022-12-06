import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = [
	"general",
	"react",
	"GraphQL",
	"react native",
	"redux",
] as const

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
		title: "React Podcast",
		image:
			"https://image.simplecastcdn.com/images/bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3/20f97d0b-6dab-4005-a995-0ab8fc2cf31c/640x640/1550288890-artwork.jpg",
		hosts: ["Michael Chan"],
		description: "Conversations about React with your favorite developers.",
		rss: "https://feeds.simplecast.com/JoR28o79",
		href: "https://reactpodcast.com/",
		tags: ["react"],
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
		title: "React Native Radio",
		image:
			"https://image.simplecastcdn.com/images/fd1212b1-7d08-4c5a-8506-00188a4c6528/3d1668b3-dc87-4f65-bac4-fad750892e95/640x640/rnr-cover-art.jpg",
		hosts: ["nfinite Red"],
		description: "Exploring React Native Together",
		rss: "https://feeds.simplecast.com/hEI_f9Dx",
		href: "https://reactnativeradio.com/",
		tags: ["react native"],
	},
	{
		title: "React Native Podcast",
		image:
			"https://uploads-ssl.webflow.com/5f58b425f8d1c77413f14703/602134a13b87901e72b9759b_RGB_Logo%201.svg",
		hosts: ["Mike Grabowski"],
		description:
			"Join our experts as they discuss everything React Native Latest Episode 9 React Native News",
		rss: "https://feeds.soundcloud.com/users/soundcloud:users:859563619/sounds.rss",
		href: "https://callstack.com/podcast-react-native-show",
		tags: ["react native"],
	},
	{
		title: "React Round Up",
		image:
			"https://production.listennotes.com/podcasts/react-round-up-top-end-devs-uxyF8zV_NUA-2KadMTpoqxD.1400x1400.jpg",
		hosts: [
			"Carl Mungazi",
			"Charles Max Wood",
			"Jack Herrington",
			"Paige Niedringhaus",
			"TJ VanToll",
		],
		description: "A weekly discussion among React developers",
		rss: "https://reactroundup.com/rss",
		href: "https://reactroundup.com/",
		tags: ["react"],
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
		href: "https://changelog.com/jsparty",
		tags: ["general"],
	},
	{
		title: "React Native Nerds",
		image:
			"https://pbcdn1.podbean.com/imglogo/image-logo/8576092/react-native-nerds-1400.png",
		hosts: ["Spencer Carli", "Jonathan Wheat"],
		description:
			"Join Spencer Carli and Jonathan Wheat as they discuss React Native topics you need to know about to become a better developer.",
		rss: "https://www.podbean.com/site/podcatcher/index/blog/yOanVRcNMt7v",
		href: "https://www.reactnativenerds.com/",
		tags: ["react native"],
	},
	{
		title: "Epic React",
		image:
			"https://image.simplecastcdn.com/images/1105175e-7479-432b-910e-60e1e20f351f/84c729af-3bfb-4b6a-b80a-e0e0d0eb58d3/epic-react-podcast-show-artwork.jpg",
		hosts: ["Kent C. Dodds"],
		description: "Learn By Consuming, Building, And Teaching",
		rss: "https://feeds.simplecast.com/giYVu3vJ",
		href: "https://epicreact.dev/podcast/learn-by-consuming-building-and-teaching",
		tags: ["react"],
	},
	{
		title: "iteration",
		image:
			"https://image.simplecastcdn.com/images/d517663e-9c51-4b30-8f73-c285569796d8/e29644c2-e4a0-4945-851a-896132550553/300x300/1510888764artwork.jpg",
		hosts: ["John", "JP"],
		description:
			"A podcast about development and design. We do our best to be code-agnostic but we talk a lot about Rails, JavaScript, React, React Native, design, business and startups.",
		rss: "https://feeds.simplecast.com/YmvH1ayC",
		href: "https://iteration.simplecast.com",
		tags: ["general"],
	},
]
