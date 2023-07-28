import { Podcast } from '@framework/system/src/models/podcast'

export const podcastTags = ['general'] as const

export const podcasts: Podcast<(typeof podcastTags)[number]>[] = [
	{
		title: 'Angular Air',
		image: 'https://angularair.com/assets/angularairlogo.png',
		hosts: ['Justin Schwartzenberger'],
		description:
			'This is an Angular videocast hosted by Justin Schwartzenberger, discussing almost exclusively Angular topics and sometimes even walking you through building real projects with Angular.',
		rss: 'https://anchor.fm/s/166001ec/podcast/rss',
		href: 'https://angularair.com/',
		tags: ['general'],
	},
	{
		title: 'The Angular Plus Show',
		image:
			'https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_720/images.spreaker.com/original/0271956aa05833cb43519105dd2a9266.jpg',
		hosts: ['ng-conf'],
		description:
			"The Angular Plus Show is the home of ng-conf's official all-Angular podcast. It covers a wide variety of non-Angular topics as well.",
		rss: 'https://www.spreaker.com/show/4175221/episodes/feed',
		href: 'https://www.spreaker.com/show/angular-show',
		tags: ['general'],
	},
	{
		title: 'Modern Web',
		image:
			'https://pbcdn1.podbean.com/imglogo/image-logo/984467/modern_web_9bpnd.jpg',
		hosts: ['This Dot Media'],
		description:
			'Modern Web is a podcast that explores next generation frameworks, standards, and techniques.',
		rss: 'https://feed.podbean.com/modernweb/feed.xml',
		href: 'https://modernweb.podbean.com',
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
