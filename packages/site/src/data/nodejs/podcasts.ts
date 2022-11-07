import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = ["general, node, full stack"] as const

export const podcasts: Podcast<typeof podcastTags[number]>[] = [
	{
		title: "Modern Web",
		image:
			"https://pbcdn1.podbean.com/imglogo/image-logo/984467/modern_web_9bpnd.jpg",
		hosts: ["This Dot Media"],
		description:
			"Modern Web is a podcast that explores next generation frameworks, standards, and techniques.",
		rss: "https://feed.podbean.com/modernweb/feed.xml",
		href: "https://modernweb.podbean.com",
		tags: ["general, node, full stack"],
	},
	{
		title: "Node University",
		image:
			"https://image.simplecastcdn.com/images/22e03652-cb4c-4b80-920e-6a552342f860/3d943f85-29f1-4f33-ab5e-0d5f6c74edec/480x480/1515463707-artwork@2x.jpg",
		hosts: ["Azat Mardan"],
		description:
			"Short lectures on software development with Node.js, JavaScript, and React.",
		rss: "https://feeds.simplecast.com/GlwKW4VA",
		href: "https://nodeuniversity.simplecast.com/",
		tags: ["general, node, full stack"],
	},
	{
		title: "The Backend Engineering Show with Hussein Nasser",
		image:
			"https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/222061/222061-1626111272613-f0f2b82d98e3b.jpg",
		hosts: ["Hussein Nasser"],
		description:
			"Welcome to the Backend Engineering Show podcast with your host Hussein Nasser. If you like software engineering you’ve come to the right place. I discuss all sorts of software engineering technologies and news with specific focus on the backend.",
		rss: "https://anchor.fm/s/1eb6d14/podcast/rss",
		href: "https://anchor.fm/hnasr",
		tags: ["general, node, full stack"],
	},
	{
		title:
			"SELECT*: Your Resource for Innovative Tech & Developer Topics Hosted by HarperDB",
		image:
			"https://img.rss.com/harperdb-select-star/800/20220302_060355_9d3d6908e0d158b31a945a7606c05c09.jpg",
		hosts: ["Margo McCabe"],
		description:
			"Welcome to the Select* Podcast, hosted by HarperDB. Featuring guests across a wide range of backgrounds & topics, with the goal of being your resource for coding tips, best practices, edge computing, machine learning, diversity & inclusion, tech trends, career advice, & much, much more!",
		rss: "https://media.rss.com/harperdb-select-star/feed.xml",
		href: "https://rss.com/podcasts/harperdb-select-star/",
		tags: ["general, node, full stack"],
	},
	{
		title: "PodRocket",
		image:
			"https://assets.fireside.fm/file/fireside-images/podcasts/images/3/3911462c-bca2-48c2-9103-610ba304c673/cover_small.jpg?v=3",
		hosts: ["Various"],
		description:
			"PodRocket covers everything you need to know about frontend web development on a weekly basis. Join LogRocket cofounder Ben Edelstein, the LogRocket engineering team, and more, as they interview experienced developers about all the libraries, frameworks, and tech industry issues they deal with every day.",
		rss: "https://feeds.fireside.fm/podrocket/rss",
		href: "https://podrocket.logrocket.com/",
		tags: ["general, node, full stack"],
	},
	{
		title: "Syntax",
		image: "https://syntax.fm/static/logo.png",
		hosts: ["Wes Bos", "Scott Tolinski"],
		description: "A Tasty Treats Podcast for Web Developers.",
		rss: "https://feed.syntax.fm/rss",
		href: "https://syntax.fm/",
		tags: ["general, node, full stack"],
	},
	{
		title: "ShopTalk",
		image:
			"https://shoptalkshow.com/wp-content/themes/shoptalk6/images/logo.png",
		hosts: ["Dave Rupert", "Chris Coyier"],
		description:
			"A weekly podcast about just building websites from Dave Rupert and Chris Coyier.",
		rss: "https://shoptalkshow.com/feed/podcast/",
		href: "https://shoptalkshow.com/",
		tags: ["general, node, full stack"],
	},
	{
		title: "CodeNewbie",
		image:
			"https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/29/d5/e8/29d5e802-b5e7-9dc4-f300-e6472ac27d04/mza_440076239163041537.png/626x0w.webp",
		hosts: ["Saron Yitbarek", "Vaidehi Joshi"],
		description:
			"The most supportive community of programmers and people learning to code.",
		rss: "http://feeds.codenewbie.org/cnpodcast.xml",
		href: "https://www.codenewbie.org/podcast",
		tags: ["general, node, full stack"],
	},
	{
		title: "devMode.fm",
		image:
			"https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/94/e7/00/94e70009-5fe0-1dd9-e396-5801f8a829df/mza_1120594658220491974.jpg/626x0w.webp",
		hosts: ["Andrew Welch", "Ryan Irelan"],
		description:
			"devMode.fm is a bi-weekly podcast dedicated to the tools, techniques, and technologies used in modern web development.",
		rss: "https://devmode.fm/rss",
		href: "https://devmode.fm/",
		tags: ["general, node, full stack"],
	},
	{
		title: "Coding Blocks",
		image:
			"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f0/b6/68/f0b6682f-e8bc-181c-95a9-0756ddf63d6e/mza_3128980961332034780.jpg/626x0w.webp",
		hosts: ["Allen Underwood", "Michael Outlaw", "Joe Zack"],
		description:
			"Pragmatic talk about software design best practices: design patterns, software architecture, coding for performance, object oriented programming, database design and implementation, tips, tricks and a whole lot more.",
		rss: "https://www.codingblocks.net/podcast-feed.xml",
		href: "https://www.codingblocks.net/",
		tags: ["general, node, full stack"],
	},
	{
		title: "Code Chefs - Hungry Web Developer Podcast",
		image:
			"https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/5b/6e/57/5b6e57c6-b28c-e4e0-fb92-5fb52bb38d98/mza_920444958922405526.png/626x0w.webp",
		hosts: ["Vincent Tang", "German Gamboa"],
		description:
			"Looking to expand your skills as a Web Developer? Vincent Tang and German Gamboa break down topics in Javascript, NodeJS, CSS, DevOps, AWS, and career development!",
		rss: "https://www.codechefs.dev/rss.xml",
		href: "https://www.codechefs.dev/",
		tags: ["general, node, full stack"],
	},
	{
		title: "Full Stack Journey - Packet Pushers",
		image:
			"https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/ad/fe/2c/adfe2ca4-b0f0-47a0-e690-7f7d32983e7d/mza_18132213338788869921.png/626x0w.webp",
		hosts: ["Scott Lowe"],
		description:
			"Full Stack Journey tells personal stories about the ongoing quest to become a full stack engineer: an IT pro who can move among multiple silos and work across multiple layers of the modern data center.",
		rss: "https://feeds.packetpushers.net/fullstackjourney",
		href: "https://packetpushers.net/series/full-stack-journey/",
		tags: ["general, node, full stack"],
	},
	{
		title: "The Undefined Podcast",
		image:
			"https://cdn.player.fm/images/23289493/series/8PiftIcLoge4IZV5/512.jpg",
		hosts: [" Jared Palmer", "Ken Wheeler"],
		description:
			"The only engineering podcast with a 2 drink minimum! Full stack developers Jared Palmer and Ken Wheeler have peer-to-peer conversations with world-class engineers about software development.",
		rss: "https://feeds.simplecast.com/8lcA0Is7",
		href: "https://player.fm/series/the-undefined-podcast",
		tags: ["general, node, full stack"],
	},
	{
		title: "Clever Programmer",
		image:
			"https://cdn.player.fm/images/36163378/series/OynKpvBPAihmC4MB/512.jpg",
		hosts: ["Rafeh Qazi"],
		description:
			"How to become a full-stack developer in the next 6 months & change your life with code.",
		rss: "https://anchor.fm/s/555a834/podcast/rss",
		href: "https://player.fm/series/clever-programmer-3072276",
		tags: ["general, node, full stack"],
	},
	{
		title: "Full Stack Leader",
		image:
			"https://cdn.player.fm/images/35539548/series/KsMzUaxWsBfWyHJX/512.jpg",
		hosts: ["Ryan Williams"],
		description:
			"Full Stack Leader is a series of interviews with today's leading technology leaders. The show will cover how they work across some of the main concepts in organizational leadership and resourcing, with a slant toward the digital space. In each episode we sit down with a different leader to hear key stories about their leadership journey as well as run through their Top 5 Tips for inspiring a great team of creators, builders, and innovative thinkers.",
		rss: "https://feeds.buzzsprout.com/1815739.rss",
		href: "https://player.fm/series/full-stack-leader",
		tags: ["general, node, full stack"],
	},
]
