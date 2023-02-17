import { Podcast } from '@framework/system/src/models/podcast'

export const podcastTags = [
	'general',
	'react',
	'GraphQL',
	'react native',
	'redux',
] as const

export const podcasts: Podcast<(typeof podcastTags)[number]>[] = [
	{
		title: 'React Podcast',
		image:
			'https://image.simplecastcdn.com/images/bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3/20f97d0b-6dab-4005-a995-0ab8fc2cf31c/640x640/1550288890-artwork.jpg',
		hosts: ['Michael Chan'],
		description: 'Conversations about React with your favorite developers.',
		rss: 'https://feeds.simplecast.com/JoR28o79',
		href: 'https://reactpodcast.com/',
		tags: ['react'],
	},
	{
		title: 'React Native Radio',
		image:
			'https://image.simplecastcdn.com/images/fd1212b1-7d08-4c5a-8506-00188a4c6528/3d1668b3-dc87-4f65-bac4-fad750892e95/640x640/rnr-cover-art.jpg',
		hosts: ['nfinite Red'],
		description: 'Exploring React Native Together',
		rss: 'https://feeds.simplecast.com/hEI_f9Dx',
		href: 'https://reactnativeradio.com/',
		tags: ['react native'],
	},
	{
		title: 'React Native Podcast',
		image:
			'https://global-uploads.webflow.com/5f58b425f8d1c77413f14703/605b71a5676cee7fcc8daca3_oopen_graph_podcast.png',
		hosts: ['Mike Grabowski'],
		description:
			'Join our experts as they discuss everything React Native Latest Episode 9 React Native News',
		rss: 'https://feeds.soundcloud.com/users/soundcloud:users:859563619/sounds.rss',
		href: 'https://callstack.com/podcast-react-native-show',
		tags: ['react native'],
	},
	{
		title: 'React Round Up',
		image:
			'https://production.listennotes.com/podcasts/react-round-up-top-end-devs-uxyF8zV_NUA-2KadMTpoqxD.1400x1400.jpg',
		hosts: [
			'Carl Mungazi',
			'Charles Max Wood',
			'Jack Herrington',
			'Paige Niedringhaus',
			'TJ VanToll',
		],
		description: 'A weekly discussion among React developers',
		rss: 'https://reactroundup.com/rss',
		href: 'https://reactroundup.com/',
		tags: ['react'],
	},
	{
		title: 'Epic React',
		image:
			'https://image.simplecastcdn.com/images/1105175e-7479-432b-910e-60e1e20f351f/84c729af-3bfb-4b6a-b80a-e0e0d0eb58d3/epic-react-podcast-show-artwork.jpg',
		hosts: ['Kent C. Dodds'],
		description: 'Learn By Consuming, Building, And Teaching',
		rss: 'https://feeds.simplecast.com/giYVu3vJ',
		href: 'https://epicreact.dev/podcast/learn-by-consuming-building-and-teaching',
		tags: ['react'],
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
		title: 'JavaScript Air',
		image:
			'data:image/png;base64,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',
		hosts: ['Kent C. Dodds'],
		description: 'The live broadcast podcast all about JavaScript',
		rss: 'https://feed.podbean.com/audio.javascriptair.com/feed.xml',
		href: 'https://javascriptair.com/',
		tags: ['general'],
	},
	{
		title: 'Syntax',
		image: 'https://syntax.fm/static/logo.png',
		hosts: ['Wes Bos', 'Scott Tolinski'],
		description: 'A Tasty Treats Podcast for Web Developers.',
		rss: 'http://feed.syntax.fm/rss',
		href: 'https://syntax.fm/',
		tags: ['general'],
	},
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
		description: 'a weekly celebration of JavaScript and the web',
		rss: 'https://jsparty.fm/rss',
		href: 'https://changelog.com/jsparty',
		tags: ['general'],
	},
	{
		title: 'React Native Nerds',
		image:
			'https://pbcdn1.podbean.com/imglogo/image-logo/8576092/react-native-nerds-1400.png',
		hosts: ['Spencer Carli', 'Jonathan Wheat'],
		description:
			'Join Spencer Carli and Jonathan Wheat as they discuss React Native topics you need to know about to become a better developer.',
		rss: 'https://www.podbean.com/site/podcatcher/index/blog/yOanVRcNMt7v',
		href: 'https://www.reactnativenerds.com/',
		tags: ['react native'],
	},
	{
		title: 'iteration',
		image:
			'https://image.simplecastcdn.com/images/d517663e-9c51-4b30-8f73-c285569796d8/e29644c2-e4a0-4945-851a-896132550553/300x300/1510888764artwork.jpg',
		hosts: ['John', 'JP'],
		description:
			'A podcast about development and design. We do our best to be code-agnostic but we talk a lot about Rails, JavaScript, React, React Native, design, business and startups.',
		rss: 'https://feeds.simplecast.com/YmvH1ayC',
		href: 'https://iteration.simplecast.com',
		tags: ['general'],
	},
]
