import { Course } from '@framework/system/src/models/course'

export const courseTags = [
	'routing',
	'state management',
	'data fetching',
	'forms',
	'animations',
	'SSR',
	'tailwind',
	'Supabase',
	'daisyUI',
	'Arduino',
	'accessibility',
	'reactivity',
] as const

export const courses: Course<(typeof courseTags)[number]>[] = [
	{
		title: 'Svelte Crash Course through Projects with Backend Connections',
		author: 'Dr. Mohammad Nauman',
		image: 'https://img-c.udemycdn.com/user/200_H/38022828_bc07_5.jpg',
		description:
			'Learn Svelte through 2 Projects (includes Reactivity, Components, Backend Connectivity and Best Practices)',
		paymentType: 'paid',
		level: 'beginner',
		format: 'video',
		href: 'https://www.udemy.com/course/svelte-crash-course-through-projects-w-backend-connections/',
		tags: ['state management', 'data fetching', 'routing'],
	},
	{
		title: 'Svelte Crash Course',
		author: 'Traversy Media',
		image: 'https://github.com/bradtraversy.png',
		description: 'Learn the fundamentals of Svelte by building a feedback app',
		paymentType: 'free',
		level: 'beginner',
		format: 'video',
		href: 'https://www.youtube.com/watch?v=3TVy6GdtNuQ',
		tags: ['animations', 'forms'],
	},
	{
		title:
			'SvelteKit Crash Course - SSR, API Routes, Stores, Tailwind CSS, and More!',
		author: 'James Q Quick',
		image: 'https://avatars.githubusercontent.com/u/5391915?v=4',
		description:
			'SvelteKit is one of the most exciting frameworks in Web Development. With the success and growth of Next.js (framework built on top of React), SvelteKit is a promising competitor. With SvelteKit, you can create Server Side Rendered pages (SSR), API routes, and a lot more while leveraging the natural and concise syntax of Svelte.',
		paymentType: 'free',
		level: 'beginner',
		format: 'video',
		href: 'https://www.youtube.com/watch?v=UU7MgYIbtAk',
		tags: [
			'SSR',
			'state management',
			'tailwind',
			'routing',
			'forms',
			'data fetching',
			'animations',
		],
	},
	{
		title: 'Supabase & Sveltekit - Build Twitter in 75 minutes',
		author: 'Svelte Mastery',
		image: 'https://avatars.githubusercontent.com/u/56200325?v=4',
		description:
			"Let's build Qwitter!. You're gonna learn about magic links, databases, row level security, storage and.. svelte cubed!",
		paymentType: 'free',
		level: 'intermediate',
		format: 'video',
		href: 'https://www.youtube.com/watch?v=mPQyckogDYc',
		tags: [
			'Supabase',
			'state management',
			'tailwind',
			'routing',
			'forms',
			'data fetching',
			'daisyUI',
		],
	},
	{
		title:
			'How to build a website using svelte that controls an Arduino & Led Matrix with navigator.serial',
		author: 'Noah Glaser',
		image: 'https://avatars.githubusercontent.com/u/9620015?v=4',
		description: `In this video, we code a website and an Arduino that can communicate with each other directly.  It uses a new API called navigator serial. In the video, I use an Arduino UNO and Max led matrix.  Let me know if you have any questions. `,
		paymentType: 'free',
		level: 'intermediate',
		format: 'video',
		href: 'https://www.youtube.com/watch?v=XsAFvrEJv7U&list=PLT9tklUafCrKINVnRGFiqMU-b0zFyR6TG&index=8',
		tags: ['Arduino', 'data fetching'],
	},
	{
		title: 'Svelte: A Shortcut to A11y',
		author: 'Josefine Schaefer',
		image: 'https://avatars.githubusercontent.com/u/53796513?v=4',
		description:
			'How Sveltes powerful features can help you promote accessibility in your web technologies',
		paymentType: 'free',
		level: 'intermediate',
		format: 'video',
		href: 'https://www.youtube.com/watch?v=cWMAmEjrF7Y',
		tags: ['accessibility'],
	},
	{
		title: 'Intro to Svelte Kit',
		author: 'Nacho Falk',
		image: 'https://avatars.githubusercontent.com/u/11986564?v=4',
		description:
			'Understanding Svelte, the syntax, routing with Svelte, its reactivity model, and the component building blocks, You will also walk you through building a todo application',
		paymentType: 'free',
		level: 'beginner',
		format: 'video',
		href: 'https://www.thisdot.co/resources/Intro-to-Svelte-Kit',
		tags: ['reactivity', 'routing'],
	},
]
