import { Community } from "@framework/system/src/models/community"

export const communityTags = ["meetups", "conferences"] as const

export const communities: Community<typeof communityTags[number]>[] = [
	{
		name: "Forum Vuejs",
		description:
			"The best place to ask questions and get answers about Vue and its ecosystem.",
		image:
			"https://forum.vuejs.org/uploads/default/original/2X/5/555257b8c5e7ecf34ce4f9b952eeaf006adfa339.png",
		type: "forum",
		href: "https://forum.vuejs.org/",
		tags: [],
	},
	{
		name: "Vue Meetup / State of Vue",
		description:
			"This Dot Media presents Vue Contributor Day! The goal of this event is to not only give important updates to the community, but also as a forum to provide a voice for anyone using Vue.js to have direct access to core contributors and authors of various libraries and frameworks through live chat and an online broadcast.",
		image: "https://github.com/thisdot.png",
		type: "Live Events",
		href: "https://www.vuemeetup.com/",
		tags: ["meetups"],
	},
	{
		name: "DigitalOcean Community",
		description:
			"DigitalOcean Community is a blog related to general Web development, with categories spanning across CSS, general JavaScript, and frameworks like Vue",
		image: "https://www.digitalocean.com/_next/static/media/logo.87a8f3b8.svg",
		type: "forum",
		href: "https://www.digitalocean.com/community/tags/vue-js",
		tags: [],
	},
	{
		name: "VueConf Toronto",
		description:
			"VueConf Toronto is a Canadian conference with talks and workshops from Vue.js core team members and industry experts.",
		image:
			"https://forum.vuejs.org/uploads/default/original/2X/5/555257b8c5e7ecf34ce4f9b952eeaf006adfa339.png",
		type: "Live Events",
		href: "https://www.vuetoronto.com/",
		tags: ["conferences"],
	},
	{
		name: "Nuxt Nation",
		description: "One of the largest Nuxt conferences in the world.",
		image:
			"data:image/png;base64,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",
		type: "Online Events",
		href: "https://nuxtnation.com/",
		tags: ["conferences"],
	},
	{
		name: "Vue Day",
		description:
			"This is an online and in person conference dedicated to all things Vue",
		image: "https://2022.vueday.it/assets/favicons/apple-touch-icon.png",
		type: "Online and Live Events",
		href: "https://2022.vueday.it/",
		tags: ["conferences"],
	},
	{
		name: "Vuejs Amsterdam",
		description: "One of the largest Vue conferences in the world",
		image: "https://tinyurl.com/ufuj2rv4",
		type: "Live Events",
		href: "https://vuejs.amsterdam/",
		tags: ["conferences"],
	},
	{
		name: "Vuejs Global Summit",
		description: "Online global summit to discuss all things Vue.",
		image: "https://events.geekle.us/vuejs/static/media/logo.579e43d2.svg",
		type: "Online Events",
		href: "https://events.geekle.us/vuejs/",
		tags: ["conferences"],
	},
	{
		name: "Vuejs Live",
		description: "Online and in person conference to discuss all things Vue.",
		image: "https://media.graphassets.com/PPiw9QmiRNOPj7mTQFTq",
		type: "Online and Live Events",
		href: "https://vuejslive.com/",
		tags: ["conferences"],
	},
	{
		name: "Front Stage",
		description:
			"Online conference dedicated to all things frontend web development.",
		image: "https://frontdevstage.com/wp-content/uploads/2021/11/logo.png",
		type: "Online Events",
		href: "https://frontdevstage.com/",
		tags: ["conferences"],
	},
	{
		name: "Connect.Tech",
		description: "The largest Frontend framework conference in the USA.",
		image: "https://2022.connect.tech/_nuxt/img/ctlogo.fb612ee.png",
		type: "Live Events",
		href: "http://connect.tech",
		tags: ["conferences"],
	},
	{
		name: "Jamstack",
		description:
			"Jamstack Conf is for engineers, technology leaders, and digital agencies who are embracing the next evolution of modern web development architecture.",
		image: "https://jamstack.org/conf/assets/logo-jamstack-mark.56918026.svg",
		type: "Live and Online Events",
		href: "https://jamstack.org/conf/",
		tags: ["conferences"],
	},
	{
		name: "WORLDWIDE SOFTWARE ARCHITECTURE SUMMIT",
		description:
			"This is a conference dedicated to architects, CTOs and founders.",
		image: "https://events.geekle.us/vuejs/static/media/logo.579e43d2.svg",
		type: "Live Events",
		href: "https://events.geekle.us/wsas4/",
		tags: ["conferences"],
	},
	{
		name: "PASS Data Community Summit",
		description:
			"Reconnect with old friends, build new relationships, gain new skills, and get the world-class training you need to take that next step in your data career.",
		image:
			"https://passdatacommunitysummit.com/assets/images/pass-2022-logo-microsoft--dark.svg",
		type: "Live Events",
		href: "https://passdatacommunitysummit.com/",
		tags: ["conferences"],
	},
	{
		name: "Xtremejs",
		description:
			"Professional development conference dedicated to all things JavaScript.",
		image:
			"https://pbs.twimg.com/profile_images/1355572943552655362/QpnPItbv_400x400.jpg",
		type: "Online Events",
		href: "https://xtremejs.dev/",
		tags: ["conferences"],
	},
	{
		name: "DevTernity",
		description:
			"Turning developers into architects and engineering leaders since 2015.",
		image: "https://devternity.com/images/favicon.png",
		type: "Live Events",
		href: "https://devternity.com/",
		tags: ["conferences"],
	},
	{
		name: "World Of No Code Conf",
		description: "This is a conference dedicated to all things no code.",
		image: "https://events.geekle.us/vuejs/static/media/logo.579e43d2.svg",
		type: "Online Events",
		href: "https://events.geekle.us/nocode/",
		tags: ["conferences"],
	},
	{
		name: "QConfSF",
		description:
			"QCon San Francisco brings together the world's most innovative senior software engineers, architects and team leads across multiple domains to share their real-world implementation of emerging trends and practices.",
		image:
			"https://pbs.twimg.com/profile_images/1410535228645548036/9wadAp_L_400x400.png",
		type: "Live Events",
		href: "https://qconsf.com/",
		tags: ["conferences"],
	},
	{
		name: "International Javascript Conference",
		description: "Conference dedicated to full stack JavaScript development",
		image:
			"https://pbs.twimg.com/profile_images/841217931455401984/uzU4VfwA_400x400.jpg",
		type: "Live Events",
		href: "https://javascript-conference.com/",
		tags: ["conferences"],
	},
	{
		name: "All Things Open",
		description:
			"A technology conference focusing on the tools, processes and the people making open source responsible.",
		image:
			"https://pbs.twimg.com/profile_images/1414585849862397956/PJmkGMLk_400x400.jpg",
		type: "Live Events",
		href: "https://allthingsopen.org/",
		tags: ["conferences"],
	},
	{
		name: "Global Summit for Node.js",
		description: "This conference is dedicated to all things Node.js.",
		image:
			"https://events.geekle.us/nodejs2/static/media/creative.7cd9e67b.png",
		type: "Live Events",
		href: "https://events.geekle.us/nodejs2/",
		tags: ["conferences"],
	},
	{
		name: "JSWORLD Conference USA",
		description:
			"Global conference connecting JavaScript leaders from around the world.",
		image:
			"https://a.storyblok.com/f/84560/x/628ee206a3/logo-frontendlove-whitebg.svg/m/",
		type: "Live Events",
		href: "https://usa.jsworldconference.com/",
		tags: ["conferences"],
	},
	{
		name: "Node Congress",
		description:
			"A two-day conference on all things Node.js, Edge-native workers (Cloudflare & others), Serverless, Deno & other JavaScript backend run times.",
		image: "https://nodecongress.com/img/ogImage.png",
		type: "Live Events",
		href: "https://nodecongress.com/",
		tags: ["conferences"],
	},
	{
		name: "Typescript Congress",
		description:
			"TS Congress is an online event for web developers on all things TypeScript",
		image: "https://typescriptcongress.com/img/logo.svg",
		type: "Live Events",
		href: "https://typescriptcongress.com/",
		tags: ["conferences"],
	},
	{
		name: "JS Conf Chile",
		description:
			"2 days of international speakers, community, learning and connections.",
		image:
			"https://pbs.twimg.com/profile_images/1355572943552655362/QpnPItbv_400x400.jpg",
		type: "Live Events",
		href: "https://jsconf.cl/",
		tags: ["conferences"],
	},
	{
		name: "ConFoo",
		description:
			"ConFoo Montreal is a multi-technology conference for developers.",
		image:
			"https://pbs.twimg.com/profile_images/1135229757031964672/sLiCXiCn_400x400.png",
		type: "Live Events",
		href: "https://confoo.ca",
		tags: ["conferences"],
	},
	{
		name: "JS Game Dev Summit",
		description:
			"JavaScript GameDev Summit is a 2-day online event for engineers, technical artists, and creative developers who develop games and graphics-heavy applications with Web technology. ",
		image: "https://jsgamedev.com/img/logo.svg",
		type: "Live Events",
		href: "https://jsgamedev.com/",
		darkImageBackground: true,
		tags: ["conferences"],
	},
	{
		name: "Web3 Tech Summit",
		description: "A tech summit dedicated to all things Web3.",
		image:
			"https://events.geekle.us/data-science2/static/media/creative.c008843b.png",
		type: "Live Events",
		href: "https://events.geekle.us/web3/",
		tags: ["conferences"],
	},
	{
		name: "Tech Unite Africa",
		description:
			"Tech Unite Africa is a conference, exhibition and a networking platform for the African Tech industry.",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/440px-Africa_%28orthographic_projection%29.svg.png",
		type: "Live Events",
		href: "https://techuniteafrica.com/",
		tags: ["conferences"],
	},
	{
		name: "Render ATL",
		description:
			"An Atlanta conference covering all things Design/CSS, Leadership & Entrepreneurship, Product & Project Management, Web/Mobile Software Engineering, and so much more.",
		image:
			"https://pbs.twimg.com/profile_images/1541542075598077954/Lsvki9i6_400x400.jpg",
		type: "Live Events",
		href: "https://www.renderatl.com/",
		tags: ["conferences"],
	},
	{
		name: "CSS Day Conf",
		description:
			"CSS Day Conf features a mix of CSS designers, developers, spec writers and browser vendors, who take pride in what they know and do.",
		image:
			"https://pbs.twimg.com/profile_images/3086361545/375adf0a29fbd0e21eb6315f3fd681c6_400x400.png",
		type: "Live Events",
		href: "https://cssday.nl/2022",
		tags: ["conferences"],
	},
	{
		name: "Front Conference",
		description: "Conference where design meets technology.",
		image: "https://frontconference.com/static/neon.svg",
		type: "Live Events",
		href: "https://frontconference.com/",
		tags: ["conferences"],
	},
	{
		name: "JSNation Conference",
		description:
			"A conference dedicated to the latest trends in JavaScript development.",
		image:
			"https://d33wubrfki0l68.cloudfront.net/9e3b2b2e7d375ad7003010a688bf021e994fc591/1b06b/img/logo.svg",
		type: "Live Events",
		href: "https://jsnation.com/",
		tags: ["conferences"],
	},
	{
		name: "JSDayIE",
		description:
			"A tech conference dedicated to the JavaScript community in Ireland.",
		image: "https://www.jsday.ie//media/jslogo.png?imwidth=64",
		type: "Live Events",
		href: "https://www.jsday.ie/",
		tags: ["conferences"],
	},
]
