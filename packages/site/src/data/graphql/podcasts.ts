import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = ["general", "graphQL", "ruby", "rails"] as const

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
		title: "Syntax",
		image: "https://syntax.fm/static/logo.png",
		hosts: ["Wes Bos", "Scott Tolinski"],
		description: "A Tasty Treats Podcast for Web Developers.",
		rss: "https://feed.syntax.fm/rss",
		href: "https://syntax.fm/",
		tags: ["general"],
	},
	{
		title: "GraphQLfm",
		image: "https://i.scdn.co/image/b77065accb9282396ed06fd4f5424f4d94f1622b",
		hosts: ["Marc-Andre Giroux", "Tony Ghita"],
		description: "Welcome to GraphQL.FM, a Twitch Channel all about GraphQL.",
		rss: "https://twitchrss.appspot.com/vod/graphqlfm",
		href: "https://www.twitch.tv/graphqlfm",
		tags: ["graphQL"],
	},
	{
		title: "GraphQL Radio",
		image:
			"https://images.transistor.fm/file/transistor/images/logos/site/10181/medium_darkblue.png",
		hosts: ["Max Stoiber", "Abhi Aiyer"],
		description:
			"Listen in for practical tips from production power users, discussions about the evolution of the language and the tooling, the work of the GraphQL Foundation, and so much more.",
		rss: "https://feeds.transistor.fm/graphql-radio",
		href: "https://graphqlradio.com/",
		tags: ["general", "graphQL"],
	},
	{
		title: "The Changelog",
		image:
			"https://cdn.changelog.com/uploads/covers/the-changelog-original.png?v=63725770322",
		hosts: ["Adam Stacoviak", "Jerod Santo"],
		description:
			"Conversations with the hackers, leaders, and innovators of the software world.",
		rss: "https://changelog.com/podcast/feed",
		href: "https://changelog.com/",
		tags: ["general"],
	},
	{
		title: "Software Engineering Daily",
		image:
			"https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/272759018_1675033572828553_5594405914840993192_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XjCKm-Hd8V0AX8YjMH3&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAQ2zydkAy9gH92BIod9CTKaB0Avc-d5zGxAfZtkyaEFQ&oe=637120B2",
		hosts: ["SE Daily"],
		description: "The world through the lens of software.",
		rss: "https://softwareengineeringdaily.com/feed/podcast/",
		href: "https://softwareengineeringdaily.com/",
		tags: ["general"],
	},
	{
		title: "JavaScript Jabber",
		image:
			"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSq5OFUB2C1otCwDgmsaktFo38QpGmBFkLyzQG3jfTdjyt4OSp5",
		hosts: [
			"AJ ONeal",
			"Charles Max Wood",
			"Aimee Knight",
			"Dan Shappir",
			"Steve Edwards",
		],
		description:
			"A weekly discussion by top-end JavaScript developers on the technology and skills needed to level up on your JavaScript journey.",
		rss: "https://topenddevs.com/podcasts/javascript-jabber/rss.rss",
		href: "https://topenddevs.com/podcasts/javascript-jabber",
		tags: ["general"],
	},
	{
		title: "PodRocket",
		image:
			"https://assets.fireside.fm/file/fireside-images/podcasts/images/3/3911462c-bca2-48c2-9103-610ba304c673/cover_small.jpg?v=3",
		hosts: [
			"Ben Edelstein",
			"Kate Trahan",
			"Brendan Downing",
			"Noel Minchow",
			"Paul Mikulskis",
			"Kaelan Cooter",
			"Chris Botaish",
			"Sean Rayment",
			"Emily Kochanek Ketner",
			"Matthew Arbesfeld",
		],
		description:
			"PodRocket covers everything you need to know about frontend web development on a weekly basis.",
		rss: "https://feeds.fireside.fm/podrocket/rss",
		href: "https://podrocket.logrocket.com/",
		tags: ["general"],
	},
	{
		title: "Elm Radio",
		image:
			"https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/02/39/47/023947f9-9ff7-33cb-7403-a165b4672253/mza_4858302214988168629.jpg/313x0w.webp",
		hosts: ["Dillon Kearns", "Jeroen Engels"],
		description: "Tune in to the tools and techniques in the Elm ecosystem.",
		rss: "https://elm-radio.com/feed.xml",
		href: "https://elm-radio.com/",
		tags: ["general"],
	},
	{
		title: "Front End Happy Hour",
		image:
			"https://www.frontendhappyhour.com/public/img/front-end-happy-hour.svg?v2",
		hosts: [
			"Ryan Burgess",
			"Jem Young",
			"Stacy London",
			"Augustus Yuan",
			"Mars Jullian",
			"Shirley Wu",
		],
		description:
			"A software engineering podcast featuring a panel of Software Engineers from Netflix, Twitch, & Atlassian talking over drinks about Frontend, JavaScript, and career development.",
		rss: "https://feeds.soundcloud.com/users/soundcloud:users:206137365/sounds.rss",
		href: "https://www.frontendhappyhour.com/",
		tags: ["general"],
	},
	{
		title: "The Undefined Podcast",
		image:
			"https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/b9/1e/7c/b91e7c1a-4c07-73df-4917-8a49aff5cfcc/mza_6445843419933436972.jpg/313x0w.webp",
		hosts: ["Jared Palmer", "Ken Wheeler"],
		description:
			"Full stack developers Jared Palmer and Ken Wheeler have peer-to-peer conversations with world-class engineers about software development.",
		rss: "https://rss.simplecast.com/podcasts/8781/rss.xml",
		href: "https://undefined.fm/",
		tags: ["general"],
	},
	{
		title: "The Bike Shed",
		image:
			"https://assets.fireside.fm/file/fireside-images/podcasts/images/1/167c01a1-0eb9-4640-b488-c2f6d6866650/cover_small.jpg?v=6",
		hosts: ["Joël Quenneville", "Stephanie Minn"],
		description:
			"On The Bike Shed, hosts Joël Quenneville and Stephanie Minn discuss development experiences and challenges at thoughtbot with Ruby, Rails, JavaScript, and whatever else is drawing their attention, admiration, or ire this week.",
		rss: "https://www.bikeshed.fm/rss",
		href: "https://www.bikeshed.fm/",
		tags: ["general", "ruby", "rails"],
	},
]
