import { Community } from '@framework/system/src/models/community'

export const communityTags = ['meetups', 'conferences'] as const

export const communities: Community<(typeof communityTags)[number]>[] = [
	{
		name: 'GraphQLfm',
		description: 'Welcome to GraphQL.FM, a Twitch Channel all about GraphQL.',
		image: 'https://i.scdn.co/image/b77065accb9282396ed06fd4f5424f4d94f1622b',
		type: 'Twitch',
		href: 'https://www.twitch.tv/graphqlfm',
		tags: [],
	},
	{
		name: 'Graphql.wtf',
		description: 'Learn something new with GraphQL, every week.',
		image: 'https://cdn.worldvectorlogo.com/logos/graphql-wtf-1.svg',
		type: 'Online Events',
		href: 'https://graphql.wtf/',
		tags: [],
	},
	{
		name: 'Graphile',
		description:
			'Extensible high-performance automatic GraphQL API for PostgreSQL',
		image:
			'https://pbs.twimg.com/profile_images/1400856803831910404/CEGohPSo_400x400.jpg',
		type: 'Documentation',
		href: 'https://www.graphile.org/',
		tags: [],
	},
	{
		name: 'Apollo',
		description:
			'Welcome to the Apollo community forums! Here you can connect with other developers and share knowledge about every part of the Apollo GraphQL platform.',
		image: 'https://avatars.githubusercontent.com/u/17189275?v=4&s=400',
		type: 'Forms',
		href: 'https://community.apollographql.com/',
		tags: [],
	},
	{
		name: 'Grafbase',
		description:
			'Contribute your ideas, meet us at events, contribute code through Pull Requests, write articles, and get rewarded.',
		image:
			'https://pbs.twimg.com/profile_images/1281274301677621248/q-8usqMi_400x400.jpg',
		type: 'Live Events',
		href: 'https://grafbase.com/community',
		tags: ['meetups'],
	},
	{
		name: 'Hasura',
		description:
			'Join the conversation with over 10k+ developers from literally everywhere.',
		image: 'https://hasura.io/brand-assets/hasura-logo-primary-dark.svg',
		type: 'Online events',
		href: 'https://hasura.io/community/',
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
			'https://pbs.twimg.com/profile_images/841217931455401984/uzU4VfwA_400x400.jpg',
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
		name: 'Global Summit for Node.js',
		description: 'This conference is dedicated to all things Node.js.',
		image:
			'https://events.geekle.us/nodejs2/static/media/creative.7cd9e67b.png',
		type: 'Live Events',
		href: 'https://events.geekle.us/nodejs2/',
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
		name: 'CSS Day Conf',
		description:
			'CSS Day Conf features a mix of CSS designers, developers, spec writers and browser vendors, who take pride in what they know and do.',
		image:
			'https://pbs.twimg.com/profile_images/3086361545/375adf0a29fbd0e21eb6315f3fd681c6_400x400.png',
		type: 'Live Events',
		href: 'https://cssday.nl/2022',
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
	{
		name: 'GraphQL Contributor Day',
		description:
			'In partnership with Hasura, we present GraphQL Contributor Day!',
		image: 'https://www.graphql-meetup.com/img/logos/graphql.svg',
		href: 'https://www.graphql-meetup.com/archive/graphql-contributor-day-or-may-2022',
		type: 'Online events',
		tags: ['meetups'],
	},
	{
		name: 'State of GraphQL',
		description:
			'Hear from core contributors & more about upcoming releases, recent milestones, community initiatives, API best practice and optimization techniques!',
		image: 'https://www.graphql-meetup.com/img/logos/graphql.svg',
		href: 'https://www.graphql-meetup.com/archive/state-of-graphql-february-2022',
		type: 'Online events',
		tags: ['meetups'],
	},
]
