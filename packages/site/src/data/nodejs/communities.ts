import { Community } from "@framework/system/src/models/community"

export const communityTags = ["meetups", "conferences"] as const

export const communities: Community<(typeof communityTags)[number]>[] = [
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
		name: "NodeConf",
		description:
			"NodeConf EU has rightly earned its reputation as the leading key Node.js event in Europe. As we celebrate NodeConf’s 10th anniversary this year, it is our aim to deliver the highest quality talks, the most relevant workshops and to continue to provide a relaxed and friendly atmosphere for people to meet and share ideas.",
		image:
			"https://www.nodeconf.eu/_next/image?url=%2Fimgs%2Flogo%2Fnc-logo-square.png&w=384&q=75",
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
	{
		name: "State of Node.js / State of the Web",
		description:
			"This Dot hosted events with Node.js maintainers, technical steering committee members and collaborators. Live chats about the current state of Node, LTS releases, and mentoring.",
		image: "https://github.com/thisdot.png",
		type: "Live Events",
		href: "https://www.thisdotmedia.com/state-of-the-web/",
		tags: ["meetups"],
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
		name: "TypeScript Congress",
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
		name: "JSDay IE Ireland",
		description:
			"A tech conference dedicated to the JavaScript community in Ireland.",
		image: "https://www.jsday.ie//media/jslogo.png?imwidth=64",
		type: "Live Events",
		href: "https://www.jsday.ie/",
		tags: ["conferences"],
	},
	{
		name: "Angular Community",
		description: "A community-ran Discord for all things Angular.",
		image: "https://github.com/angular-community.png",
		type: "Discord Community",
		href: "discord.gg/angular",
		tags: [],
	},
	{
		name: "Angular Community Meetup",
		description:
			"Angular Community is a virtual meetup that is held twice a month: once for European and African time zones, and once for American timezones.",
		image:
			"https://angularcommunity.net/assets/images/ACM_logo_main%20copy.png",
		type: "Live Events",
		href: "https://angularcommunity.net/home",
		tags: ["meetups"],
	},
	{
		name: "Angular @ Reddit",
		description: "Very active Angular community on Reddit.",
		image:
			"https://styles.redditmedia.com/t5_36qrt/styles/communityIcon_essg5v68ccu01.png?width=256&s=9ddf3239f71edb50bb9da77b371f43812d6b223f",
		type: "Reddit",
		href: "https://www.reddit.com/r/Angular2/",
		tags: [],
	},
	{
		name: "NgPoland",
		description: "One of the largest Angular conferences in Europe.",
		image: "https://ng-poland.pl/images/logos/logo-small.png",
		type: "Live and online events",
		href: "http://ng-poland.pl/",
		tags: ["conferences"],
	},
	{
		name: "NgRome",
		description: "The largest Italian Angular conference.",
		image: "https://ngrome.io/assets/logo/logo-horizontal.svg",
		type: "Live Events",
		href: "https://ngrome.io/home",
		tags: ["conferences"],
	},
	{
		name: "ng-India",
		description: "India's largest Angular conference.",
		image: "https://www.ng-ind.com/assets/images/ng-ind-logo.jpeg",
		type: "Live Events",
		href: "https://www.ng-ind.com/",
		tags: ["conferences"],
	},
	{
		name: "NG-BE 2023",
		description: "Belgium's Angular conference.",
		image:
			"https://images.squarespace-cdn.com/content/v1/5b7b64d52714e503eebf914c/1534819802976-CJNVLSR6NCPX4XODKL0N/ng-be-logo.png?format=1500w",
		type: "Live Events",
		href: "https://ng-be.org/",
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
		image: "https://devternity.com/assets/img/logo-7c1dd9e4.png",
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
		name: "PASS Data Community Summit",
		description:
			"Reconnect with old friends, build new relationships, gain new skills, and get the world-class training you need to take that next step in your data career.",
		image:
			"https://passdatacommunitysummit.com/assets/images/pass-2022-logo-microsoft--dark.svg",
		type: "Live Events",
		href: "https://passdatacommunitysummit.com/",
		tags: ["conferences"],
	},
]
