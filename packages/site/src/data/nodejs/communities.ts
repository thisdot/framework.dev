import { Community } from "@framework/system/src/models/community"

export const communityTags = ["meetups", "conferences"] as const

export const communities: Community<typeof communityTags[number]>[] = [
	{
		name: "Node.js Foundation Calendar",
		description:
			"Node.js Foundation calendar provides all of the public team meetings",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Fsquare_480%2Fnodejslogo.png&w=640&q=100",
		type: "Live and Online Events",
		href: "https://calendar.google.com/calendar/u/0/embed?src=nodejs.org_nr77ama8p7d7f9ajrpnu506c98@group.calendar.google.com",
		tags: ["meetups"],
	},
	{
		name: "Discord - Nodeiflux",
		description:
			"This is a Discord community to meet and discuss all things NodeJS.",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Fsquare_480%2Fnodejslogo.png&w=640&q=100",
		type: "Discord Community",
		href: "https://discord.com/invite/vUsrbjd",
		tags: ["meetups"],
	},
	{
		name: "Node Slackers",
		description:
			"Anyone with any amount of interest in Node.js is welcome to join. This is meant to be a very open and collaborative community. ",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Fsquare_480%2Fnodejslogo.png&w=640&q=100",
		type: "Online Events",
		href: "https://www.nodeslackers.com/",
		tags: ["meetups"],
	},
	{
		name: "OpenJSF Slack",
		description:
			"This is a Slack community to meet and discuss all things NodeJS.",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Fsquare_480%2Fnodejslogo.png&w=640&q=100",
		type: "Online Events",
		href: "https://openjs-foundation.slack.com/join/shared_invite/zt-1hp190kw2-9R5r7UMspGrk86~wc5ZGlw#/shared-invite/email",
		tags: ["meetups"],
	},
	{
		name: "Twitter - Node.js",
		description:
			"This is the official Twitter account for NodeJS where you can receive the latest updates on the technology.",
		image:
			"https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_400x400.jpg",
		type: "Online",
		href: "https://twitter.com/nodejs",
		tags: [],
	},
	{
		name: "Reddit - r/node",
		description: "This an a Reddit group dedicated to all thins NodeJS.",
		image:
			"https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_400x400.jpg",
		type: "Reddit",
		href: "https://www.reddit.com/r/node/",
		tags: [],
	},
	{
		name: "Ng-Conf",
		description:
			"Join us for this 3-day immersion into everything Angular. You'll meet members of the Angular Team, learn cutting-edge developments firsthand, and meet all kinds of interesting people who understand your syntax.",
		image:
			"https://2022.ng-conf.org/wp-content/uploads/2021/10/cropped-ng-conf-logo-grey_002-192x192.png",
		type: "Live Events",
		href: "https://2022.ng-conf.org/",
		tags: ["conferences"],
	},
	{
		name: "Conf42",
		description: "This conference is dedicated to all things JavaScript.",
		image: "https://www.jsday.ie//media/jslogo.png?imwidth=64",
		type: "Live Events",
		href: "https://www.conf42.com/js2022",
		tags: ["conferences"],
	},
	{
		name: "International Javascript Conference",
		description: "Conference dedicated to full stack JavaScript development",
		image:
			"https://javascript-conference.com/wp-content/uploads/2019/10/IJS_London20_Website_Logo_Header_53632_v1.png",
		type: "Live Events",
		href: "https://javascript-conference.com/",
		tags: ["conferences"],
	},
	{
		name: "NodeConf",
		description:
			"NodeConf EU has rightly earned its reputation as the leading key Node.js event in Europe. As we celebrate NodeConf’s 10th anniversary this year, it is our aim to deliver the highest quality talks, the most relevant workshops and to continue to provide a relaxed and friendly atmosphere for people to meet and share ideas.",
		image:
			"https://www.nodeconf.eu/_next/image?url=%2Fimgs%2Flogo%2Fnc-logo-notagline.png&w=750&q=75",
		type: "Live Events",
		href: "https://www.nodeconf.eu/",
		tags: ["conferences"],
	},
	{
		name: "Node Congress",
		description:
			"A two-day conference on all things Node.js, Edge-native workers (Cloudflare & others), Serverless, Deno & other JavaScript backend runtimes, gathering Back-end and Full-stack engineers across the globe in the cloud.",
		image:
			"https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Ftags%2Fimages%2F000%2F000%2F256%2Fsquare_480%2Fnodejslogo.png&w=640&q=100",
		type: "Live Events",
		href: "https://nodecongress.com/",
		tags: ["conferences"],
	},
]
