import { Community } from '@framework/system/src/models/community'

export const communityTags = ['meetups', 'conferences'] as const

export const communities: Community<(typeof communityTags)[number]>[] = [
	{
		description: 'A community-ran Discord for all things Deno',
		href: 'https://discord.com/invite/deno',
		image:
			'https://ik.imagekit.io/serenity/ByteofDev/Blog_Heading_Images/State_of_the_Web_Deno',
		name: 'Deno Discord',
		tags: [],
		type: 'discord',
	},
	{
		description:
			'Deno is a successor to Node.js, with the same creator, Ryan Dahl. This is a subreddit for discussing Deno and sharing projects built around it.',
		href: 'https://www.reddit.com/r/Deno/',
		image:
			'https://styles.redditmedia.com/t5_2rbun/styles/communityIcon_72jqwdrpyvw31.jpg?width=256&format=pjpg&s=d316572a7d4b59e9383a1b3589ae8f8cc2c0f764',
		name: 'Deno Subreddit',
		tags: [],
		type: 'reddit',
	},
	{
		description: 'A community-ran Github Discussions for all things Deno',
		href: 'https://github.com/denoland/deno/discussions',
		image: 'https://avatars.githubusercontent.com/u/9919?v=4',
		name: 'Deno Github Discussions',
		tags: [],
		type: 'github',
	},
	{
		name: 'State of the Web',
		description:
			'This Dot hosted event where various web technologies are discussed, including Deno.',
		image: 'https://github.com/thisdot.png',
		type: 'Live Events',
		href: 'https://www.thisdotmedia.com/state-of-the-web/',
		tags: ['meetups'],
	},
	{
		name: 'Front Stage',
		description:
			'Online conference dedicated to all things frontend web development.',
		image: 'https://frontdevstage.com/wp-content/uploads/2021/11/logo.png',
		type: 'Online Events',
		href: 'https://frontdevstage.com/',
		tags: ['conferences'],
	},
	{
		name: 'Connect.Tech',
		description: 'The largest Frontend framework conference in the USA.',
		image: 'https://2022.connect.tech/_nuxt/img/ctlogo.fb612ee.png',
		type: 'Live Events',
		href: 'http://connect.tech',
		tags: ['conferences'],
	},
	{
		name: 'Jamstack',
		description:
			'Jamstack Conf is for engineers, technology leaders, and digital agencies who are embracing the next evolution of modern web development architecture.',
		image: 'https://jamstack.org/conf/assets/logo-jamstack-mark.56918026.svg',
		type: 'Live and Online Events',
		href: 'https://jamstack.org/conf/',
		tags: ['conferences'],
	},
	{
		name: 'WORLDWIDE SOFTWARE ARCHITECTURE SUMMIT',
		description:
			'This is a conference dedicated to architects, CTOs and founders.',
		image: 'https://events.geekle.us/vuejs/static/media/logo.579e43d2.svg',
		type: 'Live Events',
		href: 'https://events.geekle.us/wsas4/',
		tags: ['conferences'],
	},
	{
		name: 'PASS Data Community Summit',
		description:
			'Reconnect with old friends, build new relationships, gain new skills, and get the world-class training you need to take that next step in your data career.',
		image:
			'https://passdatacommunitysummit.com/assets/images/pass-2022-logo-microsoft--dark.svg',
		type: 'Live Events',
		href: 'https://passdatacommunitysummit.com/',
		tags: ['conferences'],
	},
	{
		name: 'Xtremejs',
		description:
			'Professional development conference dedicated to all things JavaScript.',
		image:
			'https://pbs.twimg.com/profile_images/1355572943552655362/QpnPItbv_400x400.jpg',
		type: 'Online Events',
		href: 'https://xtremejs.dev/',
		tags: ['conferences'],
	},
	{
		name: 'DevTernity',
		description:
			'Turning developers into architects and engineering leaders since 2015.',
		image:
			'https://raw.githubusercontent.com/devternity/graphics/master/logos/devternity_2017_square_black_bg.png',
		type: 'Live Events',
		href: 'https://devternity.com/',
		tags: ['conferences'],
	},
	{
		name: 'World Of No Code Conf',
		description: 'This is a conference dedicated to all things no code.',
		image: 'https://events.geekle.us/vuejs/static/media/logo.579e43d2.svg',
		type: 'Online Events',
		href: 'https://events.geekle.us/nocode/',
		tags: ['conferences'],
	},
	{
		name: 'QConfSF',
		description:
			"QCon San Francisco brings together the world's most innovative senior software engineers, architects and team leads across multiple domains to share their real-world implementation of emerging trends and practices.",
		image:
			'https://pbs.twimg.com/profile_images/1410535228645548036/9wadAp_L_400x400.png',
		type: 'Live Events',
		href: 'https://qconsf.com/',
		tags: ['conferences'],
	},
	{
		name: 'International Javascript Conference',
		description: 'Conference dedicated to full stack JavaScript development',
		image:
			'https://javascript-conference.com/wp-content/uploads/2019/12/Konferenzlogos_Website_Navi_68979_v1_iJS.png',
		type: 'Live Events',
		href: 'https://javascript-conference.com/',
		tags: ['conferences'],
	},
	{
		name: 'All Things Open',
		description:
			'A technology conference focusing on the tools, processes and the people making open source responsible.',
		image:
			'https://pbs.twimg.com/profile_images/1414585849862397956/PJmkGMLk_400x400.jpg',
		type: 'Live Events',
		href: 'https://allthingsopen.org/',
		tags: ['conferences'],
	},
	{
		name: 'JSWORLD Conference USA',
		description:
			'Global conference connecting JavaScript leaders from around the world.',
		image:
			'https://a.storyblok.com/f/84560/x/628ee206a3/logo-frontendlove-whitebg.svg/m/',
		type: 'Live Events',
		href: 'https://usa.jsworldconference.com/',
		tags: ['conferences'],
	},
	{
		name: 'Node Congress',
		description:
			'A two-day conference on all things Node.js, Edge-native workers (Cloudflare & others), Serverless, Deno & other JavaScript backend run times.',
		image: 'https://nodecongress.com/img/ogImage.png',
		type: 'Live Events',
		href: 'https://nodecongress.com/',
		tags: ['conferences'],
	},
	{
		name: 'TypeScript Congress',
		description:
			'TS Congress is an online event for web developers on all things TypeScript',
		image: 'https://typescriptcongress.com/img/logo.svg',
		type: 'Live Events',
		href: 'https://typescriptcongress.com/',
		tags: ['conferences'],
	},
	{
		name: 'JS Conf Chile',
		description:
			'2 days of international speakers, community, learning and connections.',
		image: 'https://jsconf.com/images/jsconf_cl.png',
		type: 'Live Events',
		href: 'https://jsconf.cl/',
		tags: ['conferences'],
	},
	{
		name: 'ConFoo',
		description:
			'ConFoo Montreal is a multi-technology conference for developers.',
		image:
			'https://pbs.twimg.com/profile_images/1135229757031964672/sLiCXiCn_400x400.png',
		type: 'Live Events',
		href: 'https://confoo.ca',
		tags: ['conferences'],
	},
	{
		name: 'JS Game Dev Summit',
		description:
			'JavaScript GameDev Summit is a 2-day online event for engineers, technical artists, and creative developers who develop games and graphics-heavy applications with Web technology. ',
		image: 'https://jsgamedev.com/img/logo.svg',
		type: 'Live Events',
		href: 'https://jsgamedev.com/',
		darkImageBackground: true,
		tags: ['conferences'],
	},
	{
		name: 'Web3 Tech Summit',
		description: 'A tech summit dedicated to all things Web3.',
		image:
			'https://events.geekle.us/data-science2/static/media/creative.c008843b.png',
		type: 'Live Events',
		href: 'https://events.geekle.us/web3/',
		tags: ['conferences'],
	},
	{
		name: 'Tech Unite Africa',
		description:
			'Tech Unite Africa is a conference, exhibition and a networking platform for the African Tech industry.',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/440px-Africa_%28orthographic_projection%29.svg.png',
		type: 'Live Events',
		href: 'https://techuniteafrica.com/',
		tags: ['conferences'],
	},
	{
		name: 'Render ATL',
		description:
			'An Atlanta conference covering all things Design/CSS, Leadership & Entrepreneurship, Product & Project Management, Web/Mobile Software Engineering, and so much more.',
		image:
			'https://pbs.twimg.com/profile_images/1541542075598077954/Lsvki9i6_400x400.jpg',
		type: 'Live Events',
		href: 'https://www.renderatl.com/',
		tags: ['conferences'],
	},
	{
		name: 'Front Conference',
		description: 'Conference where design meets technology.',
		image: 'https://frontconference.com/static/neon.svg',
		type: 'Live Events',
		href: 'https://frontconference.com/',
		tags: ['conferences'],
	},
	{
		name: 'JSNation Conference',
		description:
			'A conference dedicated to the latest trends in JavaScript development.',
		image:
			'https://d33wubrfki0l68.cloudfront.net/9e3b2b2e7d375ad7003010a688bf021e994fc591/1b06b/img/logo.svg',
		type: 'Live Events',
		href: 'https://jsnation.com/',
		tags: ['conferences'],
	},
	{
		name: 'JSDayIE',
		description:
			'A tech conference dedicated to the JavaScript community in Ireland.',
		image: 'https://www.jsday.ie//media/jslogo.png?imwidth=64',
		type: 'Live Events',
		href: 'https://www.jsday.ie/',
		tags: ['conferences'],
	},
]
