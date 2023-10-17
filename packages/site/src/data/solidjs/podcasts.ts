import { Podcast } from '@framework/system/src/models/podcast'

export const podcastTags = ['general', 'SolidJS'] as const

export const podcasts: Podcast<(typeof podcastTags)[number]>[] = [
	{
		title: 'JS Party',
		image:
			'https://cdn.changelog.com/uploads/covers/js-party-original.png?v=63725770332',
		hosts: [
			'Jerod Santo',
			'Feross Aboukhadijeh',
			'Amelia Wattenberger',
			'Kevin Ball',
			'Nick Nisi',
			'Divya',
			'Mikeal Rogers',
			'Christopher Hiller',
			'Amal Hussein',
		],
		description: 'A weekly celebration of JavaScript and the web',
		rss: 'https://jsparty.fm/rss',
		href: 'https://changelog.com/jsparty',
		tags: ['general'],
	},
	{
		title: 'React vs Svelte vs Solid & MicroFrontends | Ryan Carniato',
		image: 'https://github.com/ryansolid.png',
		hosts: ['Ryan Carniato'],
		description:
			'On the hard choices all companies are facing right now with their websites, especially with the performance.',
		rss: '',
		href: 'https://show.nikoskatsikanis.com/episodes/ryan-carniato',
		tags: ['SolidJS'],
	},
	{
		title: 'The Deep Dive',
		image: 'https://github.com/layZeeDK.png',
		hosts: ['Lars Gyrup Brink Nielsen'],
		description:
			'The Deep Dive is an advanced web development podcast brought to you by inDepth.dev.',
		rss: 'https://www.listennotes.com/podcasts/the-deep-dive-dev-indepthdev-rc_SkJZFRyW/#',
		href: 'https://www.listennotes.com/podcasts/the-deep-dive-dev-indepthdev-rc_SkJZFRyW/#',
		tags: ['general'],
	},
	{
		title: 'Modern Web',
		image:
			'https://pbcdn1.podbean.com/imglogo/image-logo/984467/modern_web_9bpnd.jpg',
		hosts: ['ThisDot Labs'],
		description:
			'Modern Web is a podcast that explores next generation frameworks, standards, and techniques.',
		rss: 'https://www.podbean.com/site/podcatcher/index/blog/7YqKYcoGcvP',
		href: 'https://modernweb.podbean.com/',
		tags: ['general'],
	},
	{
		title: 'Build IT Better',
		image:
			'https://deow9bq0xqvbj.cloudfront.net/image-logo/15574924/Logo_49ei9w.jpg',
		hosts: ['This Dot Media'],
		description:
			'Build it Better is a podcast that focuses on advanced architecture and web development. In each episode, experts in these fields share their insights and knowledge on the latest technologies, techniques, and trends in the industry.',
		rss: 'https://feed.podbean.com/builditbetter/feed.xml',
		href: 'https://builditbetter.podbean.com',
		tags: ['general'],
	},
]
