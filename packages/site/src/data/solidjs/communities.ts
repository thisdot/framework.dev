import { Community } from "@framework/system/src/models/community"

export const communityTags = [] as const

export const communities: Community<typeof communityTags[number]>[] = [
	{
		name: "Discord",
		description:
			"Solid is a declarative reactive Javascript library for creating user interfaces. | 5809 members.",
		image:
			"https://assets-global.website-files.com/6257adef93867e50d84d30e2/625e5fcef7ab80b8c1fe559e_Discord-Logo-Color.png",
		type: "discord",
		href: "https://discord.com/invite/solidjs",
		tags: [],
	},
	{
		name: "Twitter",
		description:
			"Simple and performant reactivity for building user interfaces.",
		image:
			"https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg",
		type: "twitter",
		href: "https://twitter.com/solid_js",
		tags: [],
	},
	{
		name: "r/SolidJS",
		description:
			"Reddit's community for learning and developing web applications using SolidJS.",
		image: "https://www.redditinc.com/assets/images/site/reddit-logo.png",
		type: "reddit",
		href: "https://www.reddit.com/r/solidjs/",
		tags: [],
	},
	{
		name: "Events",
		description: "SolidJS Official Events.",
		image:
			"https://assets.brandfolder.com/logo_images_v2/organizations/pjqost-dus1fs-bbjqqj/1549042902/Eventbrite_symbol_orange-400x400.png",
		type: "Live Events",
		href: "https://www.eventbrite.com/o/solidjs-official-events-47844139913",
		tags: [],
	},
	{
		name: "Front Stage",
		description:
			"Online conference dedicated to all things frontend web development.",
		image: "https://frontdevstage.com/wp-content/uploads/2021/11/logo.png",
		type: "Online Events",
		href: "https://frontdevstage.com/",
		tags: [],
	},
	{
		name: "Connect.Tech",
		description: "The largest Frontend framework conference in the USA.",
		image: "https://2022.connect.tech/_nuxt/img/ctlogo.fb612ee.png",
		type: "Live Events",
		href: "http://connect.tech",
		tags: [],
	},
	{
		name: "Jamstack",
		description:
			"Jamstack Conf is for engineers, technology leaders, and digital agencies who are embracing the next evolution of modern web development architecture.",
		image: "https://jamstack.org/conf/assets/logo-jamstack-mark.56918026.svg",
		type: "Live and Online Events",
		href: "https://jamstack.org/conf/",
		tags: [],
	},
	{
		name: "WORLDWIDE SOFTWARE ARCHITECTURE SUMMIT",
		description:
			"This is a conference dedicated to architects, CTOs and founders.",
		image: "https://events.geekle.us/vuejs/static/media/logo.579e43d2.svg",
		type: "Live Events",
		href: "https://events.geekle.us/wsas4/",
		tags: [],
	},
	{
		name: "PASS Data Community Summit",
		description:
			"Reconnect with old friends, build new relationships, gain new skills, and get the world-class training you need to take that next step in your data career.",
		image:
			"https://passdatacommunitysummit.com/assets/images/pass-2022-logo-microsoft--dark.svg",
		type: "Live Events",
		href: "https://passdatacommunitysummit.com/",
		tags: [],
	},
	{
		name: "Xtremejs",
		description:
			"Professional development conference dedicated to all things JavaScript.",
		image:
			"https://pbs.twimg.com/profile_images/1355572943552655362/QpnPItbv_400x400.jpg",
		type: "Online Events",
		href: "https://xtremejs.dev/",
		tags: [],
	},
	{
		name: "DevTernity",
		description:
			"Turning developers into architects and engineering leaders since 2015.",
		image: "https://devternity.com/images/favicon.png",
		type: "Live Events",
		href: "https://devternity.com/",
		tags: [],
	},
	{
		name: "World Of No Code Conf",
		description: "This is a conference dedicated to all things no code.",
		image: "https://events.geekle.us/vuejs/static/media/logo.579e43d2.svg",
		type: "Online Events",
		href: "https://events.geekle.us/nocode/",
		tags: [],
	},
	{
		name: "QConfSF",
		description:
			"QCon San Francisco brings together the world's most innovative senior software engineers, architects and team leads across multiple domains to share their real-world implementation of emerging trends and practices.",
		image:
			"https://pbs.twimg.com/profile_images/1410535228645548036/9wadAp_L_400x400.png",
		type: "Live Events",
		href: "https://qconsf.com/",
		tags: [],
	},
	{
		name: "International Javascript Conference",
		description: "Conference dedicated to full stack JavaScript development",
		image:
			"https://pbs.twimg.com/profile_images/841217931455401984/uzU4VfwA_400x400.jpg",
		type: "Live Events",
		href: "https://javascript-conference.com/",
		tags: [],
	},
	{
		name: "All Things Open",
		description:
			"A technology conference focusing on the tools, processes and the people making open source responsible.",
		image:
			"https://pbs.twimg.com/profile_images/1414585849862397956/PJmkGMLk_400x400.jpg",
		type: "Live Events",
		href: "https://allthingsopen.org/",
		tags: [],
	},
	{
		name: "Global Summit for Node.js",
		description: "Node.js 18 is the new LTS and is here to stay till 2025!",
		image:
			"https://events.geekle.us/nodejs2/static/media/creative.7cd9e67b.png",
		type: "Live Events",
		href: "https://events.geekle.us/nodejs2/",
		tags: [],
	},
	{
		name: "JSWORLD Conference USA",
		description:
			"Global conference connecting JavaScript leaders from around the world.",
		image:
			"https://a.storyblok.com/f/84560/x/628ee206a3/logo-frontendlove-whitebg.svg/m/",
		type: "Live Events",
		href: "https://usa.jsworldconference.com/",
		tags: [],
	},
	{
		name: "Node Congress",
		description:
			"A two-day conference on all things Node.js, Edge-native workers (Cloudflare & others), Serverless, Deno & other JavaScript backend run times.",
		image: "https://nodecongress.com/img/ogImage.png",
		type: "Live Events",
		href: "https://nodecongress.com/",
		tags: [],
	},
	{
		name: "Typescript Congress",
		description:
			"TS Congress is an online event for web developers on all things TypeScript",
		image: "https://typescriptcongress.com/img/logo.svg",
		type: "Live Events",
		href: "https://typescriptcongress.com/",
		tags: [],
	},
	{
		name: "JS Conf Chile",
		description:
			"2 days of international speakers, community, learning and connections.",
		image:
			"https://pbs.twimg.com/profile_images/1548041354806059008/CfEL7qut_400x400.jpg",
		type: "Live Events",
		href: "https://jsconf.cl/",
		tags: [],
	},
	{
		name: "ConFoo",
		description:
			"ConFoo Montreal is a multi-technology conference for developers.",
		image:
			"https://pbs.twimg.com/profile_images/1135229757031964672/sLiCXiCn_400x400.png",
		type: "Live Events",
		href: "https://confoo.ca",
		tags: [],
	},
	{
		name: "JS Game Dev Summit",
		description:
			"JavaScript GameDev Summit is a 2-day online event for engineers, technical artists, and creative developers who develop games and graphics-heavy applications with Web technology. ",
		image: "https://jsgamedev.com/img/logo.svg",
		type: "Live Events",
		href: "https://jsgamedev.com/",
		darkImageBackground: true,
		tags: [],
	},
]
