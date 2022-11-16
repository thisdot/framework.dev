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
		image: "https://nuxtnation.com/images/thumbnail2.jpg",
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
		image:
			"https://img2.storyblok.com/277x0/filters:format(png)/f/84560/2388x414/23d8eb4b8d/vue-amsterdam-with-name.png",
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
	        "data:image/jpeg;base64,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",   
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
			"https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/273000253_151084657283604_2423352492724338656_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dlJ3nuKw3VAAX_j226L&_nc_ht=scontent-frt3-2.xx&oh=00_AfAlsNauounZKMVahAqIMhbLsuPPd3-g-v_8iNs5Bq9xyw&oe=637A27FB",
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
