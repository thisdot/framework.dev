import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = [
	"general",
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

export const podcasts: Podcast<typeof podcastTags[number]>[] = [
	{
		title: "React Podcast",
		image:
			"https://image.simplecastcdn.com/images/bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3/20f97d0b-6dab-4005-a995-0ab8fc2cf31c/640x640/1550288890-artwork.jpg",
		hosts: ["Michael Chan"],
		description: "Conversations about React with your favorite developers.",
		rss: "https://feeds.simplecast.com/JoR28o79",
		href: "https://reactpodcast.com/",
		tags: ["general", "state management", "data fetching", "routing"],
	},
	{
		title: "JavaScript Air",
		image: "https://javascriptair.com/favicon.ico",
		hosts: ["Kent C. Dodds"],
		description: "The live broadcast podcast all about JavaScript",
		rss: "https://feed.podbean.com/audio.javascriptair.com/feed.xml",
		href: "https://javascriptair.com/",
		tags: [
			"general",
			"state management",
			"data fetching",
			"testing",
			"graphQL",
		],
	},
	{
		title: "React Native Radio",
		image:
			"https://image.simplecastcdn.com/images/fd1212b1-7d08-4c5a-8506-00188a4c6528/3d1668b3-dc87-4f65-bac4-fad750892e95/640x640/rnr-cover-art.jpg",
		hosts: ["nfinite Red"],
		description: "Exploring React Native Together",
		rss: "https://feeds.simplecast.com/hEI_f9Dx",
		href: "https://reactnativeradio.com/",
		tags: ["native", "state management", "data fetching", "testing", "graphQL"],
	},
	{
		title: "React Wednesdays",
		image:
			"https://dtzbdy9anri2p.cloudfront.net/telerik/img/logo/progress-telerik-black.svg",
		hosts: ["KendoReact"],
		description:
			"React Wednesdays is a weekly chat show with the best and brightest from the React world, hosted by KendoReact Developer Advocate TJ VanToll. New episodes stream live every Wednesday at 1:00 PM Eastern US time.",
		rss: "",
		href: "https://www.telerik.com/react-wednesdays",
		tags: ["general", "state management", "data fetching", "testing"],
	},
	{
		title: "React Native Podcast",
		image:
			"https://uploads-ssl.webflow.com/5f58b425f8d1c77413f14703/602134a13b87901e72b9759b_RGB_Logo%201.svg",
		hosts: ["Mike Grabowski"],
		description:
			"Join our experts as they discuss everything React Native Latest Episode 9 React Native News",
		rss: "",
		href: "https://callstack.com/podcast-react-native-show",
		tags: ["general", "native", "state management", "data fetching", "testing"],
	},
	{
		title: "React Round Up",
		image:
			"https://assets.fireside.fm/file/fireside-images/podcasts/images/4/45ac7cd2-9fff-46c9-842c-2d7e0d34cd4b/cover_small.jpg?v=1",
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
		tags: ["general", "state management", "data fetching", "testing"],
	},
	{
		title: "Syntax",
		image: "https://syntax.fm/static/logo.png",
		hosts: ["Wes Bos", "Scott Tolinski"],
		description: "A Tasty Treats Podcast for Web Developers.",
		rss: "http://feed.syntax.fm/rss",
		href: "https://syntax.fm/",
		tags: ["general", "state management", "data fetching", "testing"],
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
		tags: ["general", "state management", "data fetching", "testing"],
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
		tags: ["native", "general", "state management", "data fetching", "testing"],
	},
	{
		title: "Epic React",
		image: "",
		hosts: ["Kent C. Dodds"],
		description: "Learn By Consuming, Building, And Teaching",
		rss: "",
		href: "https://epicreact.dev/podcast/learn-by-consuming-building-and-teaching",
		tags: ["general", "state management", "data fetching", "testing"],
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
		tags: ["general", "state management", "data fetching", "testing"],
	},
]
