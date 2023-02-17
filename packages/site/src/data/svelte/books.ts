import { Book } from '@framework/system/src/models/book'

export const bookTags = [
	'projects',
	'CI/CD',
	'testing',
	'state management',
	'sapper',
	'routing',
	'animations',
	'debugging',
	'accessibility',
	'Netlify',
	'forms',
	'caching',
	'data fetching',
] as const

export const books: Book<(typeof bookTags)[number]>[] = [
	{
		title: 'Svelte 3 Up and Running',
		authors: ['Alessandro Segala'],
		image: 'https://static.packt-cdn.com/products/9781839213625/cover/smaller',
		description:
			'Svelte is a modern JavaScript framework used to build static web apps that are fast and lean, as well as being fun for developers to use. This book is a concise and practical introduction for those who are new to the Svelte framework which will have you up to speed with building apps quickly, and teach you how to use Svelte 3 to build apps that offer a great app user experience (UX)',
		yearOfPublication: 2020,
		numberOfPages: 168,
		level: 'beginner',
		href: 'https://www.packtpub.com/product/svelte-3-up-and-running/9781839213625?_ga=2.241838663.41819582.1666278278-289651615.1666278278',
		tags: ['projects', 'CI/CD', 'testing'],
	},
	{
		title: "Svelte: A Beginner's Guide",
		authors: ['Simon Holthausen'],
		image: 'https://learning.oreilly.com/library/cover/9781098129576/250w/',
		description:
			"Svelte appeals to developers with its combination of a small bundle size, very good performance, and ease of use. At the same time, it comes packed with a lot of goodies. A simple state management solution to build upon is already provided, as well as ready-to-use transitions and animations. This book will start by shedding light on how Svelte achieves this, and then we'll look at how to implement applications with Svelte using the various possibilities Svelte provides.",
		yearOfPublication: 2022,
		numberOfPages: 59,
		level: 'beginner',
		href: 'https://www.oreilly.com/library/view/svelte-a-beginners/9781098129576/',
		tags: ['projects', 'state management', 'testing'],
	},
	{
		title:
			'Practical Svelte: Create Performant Applications with the Svelte Component Framework',
		authors: ['Alex Libby'],
		image: 'https://learning.oreilly.com/library/cover/9781484273746/250w/',
		description:
			'Learn to leverage the power of Svelte to produce web applications that are efficient and fast. This project-oriented book simplifies creating sites using Svelte from start to finish, with little more than a text editor and familiar languages such as HTML, CSS, and JavaScript. It equips you with a starting toolset that you can use to develop future projects, incorporate into your existing workflow, and allow you to take your websites to the next level.',
		yearOfPublication: 2021,
		numberOfPages: 340,
		level: 'beginner',
		href: 'https://www.oreilly.com/library/view/practical-svelte-create/9781484273746/',
		tags: ['projects', 'sapper', 'testing', 'state management'],
	},
	{
		title: 'Svelte and Sapper in Action',
		authors: ['Mark Volkmann'],
		image: 'https://learning.oreilly.com/library/cover/9781617297946/250w/',
		description:
			"Svelte and Sapper in Action teaches you to design and build fast, elegant web applications. You'll start immediately by creating an engaging Travel Packing app as you learn to create Svelte components and develop great UX. You'll master Svelte's unique state management model, use Sapper for simplified page routing, and take on modern best practices like code splitting, offline support, and server-rendered views.",
		yearOfPublication: 2020,
		numberOfPages: 427,
		level: 'intermediate',
		href: 'https://www.oreilly.com/library/view/svelte-and-sapper/9781617297946/',
		tags: [
			'projects',
			'sapper',
			'testing',
			'state management',
			'routing',
			'animations',
			'debugging',
			'accessibility',
			'Netlify',
			'forms',
			'caching',
		],
	},
	{
		title:
			'Beginning Svelte Development: Develop web applications with SvelteJS - a lightweight JavaScript compiler',
		authors: ['Greg Lim', 'Daniel Correa'],
		image:
			'https://m.media-amazon.com/images/I/41fUTeMOZSL._SX404_BO1,204,203,200_.jpg',
		description:
			"In this book, we take you on a fun, hands-on and pragmatic journey to quickly learn Svelte and get familiar with how it works. You'll start building Svelte apps within minutes. Every section is written in a bite-sized manner and straight to the point as I don’t want to waste your time (and most certainly mine) on the content you don't need. In the end, you will have what it takes to develop a real-life app.",
		yearOfPublication: 2022,
		numberOfPages: 121,
		level: 'beginner',
		href: 'https://www.amazon.com/Beginning-Svelte-Development-applications-lightweight/dp/B0B67292T4/ref=sr_1_1?crid=2MVZL5D0X9N89&keywords=svelte&qid=1666285611&qu=eyJxc2MiOiI0LjM2IiwicXNhIjoiMy45MCIsInFzcCI6IjMuNTEifQ%3D%3D&s=books&sprefix=svelte%2Cstripbooks-intl-ship%2C216&sr=1-1',
		tags: ['projects', 'state management', 'forms', 'data fetching'],
	},
]
