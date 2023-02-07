import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = [
	"general",
	"how-to",
	"technology",
	"open source",
	"career",
] as const

export const podcasts: Podcast<(typeof podcastTags)[number]>[] = [
	{
		title: "Modern Web",
		image:
			"https://pbcdn1.podbean.com/imglogo/image-logo/984467/modern_web_9bpnd.jpg",
		hosts: ["This Dot Media"],
		description:
			"Modern Web is a podcast that explores next generation frameworks, standards, and techniques.",
		rss: "https://feed.podbean.com/modernweb/feed.xml",
		href: "https://modernweb.podbean.com",
		tags: ["general"],
	},
	{
		title: "The Changelog",
		description:
			"Conversations with the hackers, leaders, and innovators of the software world.",
		hosts: ["Adam Stacoviak", "Jerod Santo"],
		href: "https://changelog.com/podcast",
		rss: "https://changelog.fm/rss",
		image:
			"https://cdn.changelog.com/uploads/covers/the-changelog-original.png?v=63725770322",
		tags: ["how-to", "open source", "technology"],
	},
	{
		title: "Syntax.fm",
		description: "A Tasty Treats Podcast for Web Developers.",
		hosts: ["Wes Bos", "Scott Tolinski"],
		href: "https://syntax.fm/",
		rss: "http://feed.syntax.fm/rss",
		image: "https://syntax.fm/static/logo.png",
		tags: ["how-to", "open source", "technology", "career"],
	},
	{
		title: "The Web Podcast Platform",
		description:
			"A weekly show that dives deep into all things web from the developers building the platform today.",
		hosts: ["Justin Ribeiro", "Danny Blue", "Amal Hussein", "Leon Revill"],
		href: "https://thewebplatformpodcast.com/",
		rss: "https://thewebplatformpodcast.com/rss",
		image: "https://i.scdn.co/image/79e44158769aaa756916b5ee9accf796227c5115",
		tags: ["how-to", "technology"],
	},
	{
		title: "Deno Developer Show",
		description:
			"This show talks about utilizing your Javascript or TypeScript skills so you can do backend development in Deno, a robust and secure runtime for Javascript and TypeScript.",
		hosts: ["Authvow, LLC"],
		href: "https://denodeveloper.buzzsprout.com/",
		rss: "https://feeds.buzzsprout.com/1951607.rss",
		image:
			"https://denodeveloper.buzzsprout.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCSWJSMndNPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2fa37dace7e149b96e9f27431e7355109f633c65/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpzR1ZEb01aM0poZG1sMGVVa2lDMk5sYm5SbGNnWTdCbFE2QzJWNGRHVnVkRWtpRERZd01IZzJNREFHT3daVU9neHhkV0ZzYVhSNWFWVTZEMk52Ykc5eWMzQmhZMlZKSWdselVrZENCanNHVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--8a9b4b1bc245a46b538f72d4d9b2ab0a7fbe8ac1/denoDeveloperShowLarge_noSeason.jpg",
		tags: ["how-to", "technology"],
	},
	{
		title: "JS Party",
		description:
			"Welcome to JS Party, a weekly celebration of JavaScript and the web",
		hosts: [
			"Jerod",
			"Nick",
			"Amelia",
			"Kevin",
			"Divya",
			"Feross",
			"Amal",
			"Christopher",
			"Ali",
		],
		href: "https://changelog.com/jsparty",
		rss: "https://jsparty.fm/rss",
		image:
			"https://cdn.changelog.com/uploads/covers/js-party-original.png?v=63725770332",
		tags: ["how-to", "technology"],
	},
	{
		title: "The Stack Overflow Podcast",
		description:
			"The Stack Overflow podcast is a frank and funny conversation about what it means to work in software and how code is reshaping our world. As it celebrates its 12th anniversary, it’s a must listen for any programmer, as necessary as Stack Overflow itself.",
		hosts: [
			"Ben Popper",
			"Matt Kander",
			"Cassidy Williams",
			"Utkarsh Srivastava",
		],
		href: "https://stackoverflow.blog/podcast/",
		rss: "https://feeds.simplecast.com/XA_851k3",
		image:
			"https://149351115.v2.pressablecdn.com/wp-content/uploads/2022/03/blog-podcast-relaunch-1.png",
		tags: ["how-to", "technology"],
	},
]
