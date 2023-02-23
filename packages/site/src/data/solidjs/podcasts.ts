import { Podcast } from '@framework/system/src/models/podcast'

export const podcastTags = ['general', 'solidjs'] as const

export const podcasts: Podcast<(typeof podcastTags)[number]>[] = [
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
	{
		title: 'A Solid option for building UIs',
		image: 'https://public.overcast-cdn.com/art/554901?v198',
		hosts: ['JS Party', 'Ryan Carniato'],
		description:
			'Discussion on the origin story of SolidJS, how it came to be and what the author hopes to accomplish with it',
		rss: 'https://changelog.com/jsparty/feed',
		href: 'https://overcast.fm/+Id5U6EB5M',
		tags: ['solidjs'],
	},
	{
		title: 'React vs Svelte vs Solid & MicroFrontends | Ryan Carniato',
		image: 'https://github.com/ryansolid.png',
		hosts: ['Ryan Carniato'],
		description:
			'On the hard choices all companies are facing right now with their websites, especially with the performance.',
		rss: '',
		href: 'https://show.nikoskatsikanis.com/episodes/ryan-carniato',
		tags: ['solidjs'],
	},
	{
		title: 'The Deep Dive Episode 4: Reactive frontend frameworks',
		image: 'https://github.com/layZeeDK.png',
		hosts: ['Lars Gyrup Brink Nielsen.', 'Kos Palchyk', 'Ryan Carniato'],
		description:
			'Listen to the creator of Solidjs talk about Reactivity and application frameworks.',
		rss: '',
		href: 'https://www.youtube.com/watch?v=iyY1lT8-ZDA',
		tags: ['general'],
	},
	{
		title:
			'S09E12 Modern Web Podcast- Introduction to SolidJS with Ryan Carniato',
		image:
			'https://pbcdn1.podbean.com/imglogo/image-logo/984467/modern_web_9bpnd.jpg',
		hosts: ['Ryan Carniato', 'Rob Ocel', 'Nacho Vazquez'],
		description:
			'In this episode of the Modern Web podcast, hosts Rob Ocel and Nacho Vazquez sit down with Ryan Carniato to talk about SolidJS. They talk about how the frontend JavaScript framework came to be, and what sets SolidJS apart from other technologies in the JavaScript ecosystem. ',
		rss: '',
		href: 'https://modernweb.podbean.com/e/s09e12-modern-web-podcast-introduction-to-solidjs-with-ryan-carniato/',
		tags: ['solidjs'],
	},
]
