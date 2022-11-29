import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
	{
		title: "This Dot Blog",
		author: "This Dot Labs",
		description:
			"Variety of topics related to Svelte, written by the team at This Dot",
		image: "https://github.com/thisdot.png",
		href: "https://www.thisdot.co/blog/?filter=Svelte#result",
		tags: [],
	},
	{
		title: "Blog • Svelte",
		author: "Svelte.dev Contributors",
		description: "Official Svelte blog",
		image: "https://svelte.dev/favicon.png",
		href: "https://svelte.dev/blog",
		tags: [],
	},
	{
		title: "Joy of Code",
		author: "Matija",
		description:
			"Matija from 🇭🇷 Croatia and he's infinitely curious at how things work but he's mostly passionate about ☕ JavaScript and 🎨 UI/UX design.",
		image:
			"https://yt3.ggpht.com/f-nkXHIt4t8B7yFIOdkQBGEyTY0LVrS8DWkAnF6W7KazXPtcD2XHzWPSsOx_vAjVgs3RQu736cY=s176-c-k-c0x00ffffff-no-rj-mo",
		href: "https://joyofcode.xyz/categories/svelte",
		tags: [],
	},
	{
		title: "Svelte Society",
		author: "Global Network of svelte fans",
		description:
			"We are a volunteer global network of Svelte fans that strive to promote Svelte and its ecosystem. ",
		image: "https://sveltesociety.dev/images/logo.svg",
		href: "https://sveltesociety.dev/recipes",
		tags: [],
	},
	{
		title: "Svelte News",
		author: "Svelte Enthusiasts",
		description: "The latest news on the Svelte framework",
		image: "https://svelte.dev/favicon.png",
		href: "https://svelte.news/",
		tags: [],
	},
	{
		title: "Shivam Meena",
		author: "Shivam Meena",
		description:
			"I'm a web developer who likes to play and develop things with new technologies. I have a freelance company named EtherCorps which focuses on smooth , beautiful & secure Web & mobile apps.",
		image:
			"https://res.cloudinary.com/practicaldev/image/fetch/s--WLdAZBJD--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/534962/b02d97b6-b8a7-43d0-8678-56893620ee1d.jpg",
		href: "https://dev.to/theether0",
		tags: [],
	},
	{
		title: "Rodney Lab",
		author: "Rodney",
		description:
			"I build accessible, fast and secure sites, currently focussing on frontend using JAMStack.",
		image:
			"https://res.cloudinary.com/practicaldev/image/fetch/s--o3wSfmBB--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/664822/fd20117b-2cde-491a-9d71-8b3f8d4b5e10.png",
		href: "I build accessible, fast and secure sites, currently focussing on frontend using JAMStack.",
		tags: [],
	},
	{
		title: "jmagrippis",
		author: "Johnny",
		description: "I’m challenging the need to “have a niche”",
		image:
			"https://magrippis.com/_next/image?url=%2Fimages%2Fhero.jpg&w=256&q=75",
		href: "https://magrippis.com/blog",
		tags: [],
	},
	{
		title: "Rodney Lab",
		author: "Rodney",
		description:
			"Hello and welcome! I’m Rodney, a web developer based in the UK 🇬🇧 and am available for consultancy work.",
		image:
			"https://rodneylab.com/assets/rodney-johnson-about-rodneylab-1350x1350.208d1490.avif",
		href: "https://rodneylab.com/tags/sveltekit/",
		tags: [],
	},
	{
		title: "Ryan Filler",
		author: "Ryan Filler",
		description:
			"I am a designer, developer, illustrator, and maker living and working in Memphis, Tennessee.",
		image: "https://www.ryanfiller.com/headshot_2017.jpg?nf_resize=fit&w=100",
		href: "https://www.ryanfiller.com/",
		tags: [],
	},
	{
		title: "Deep Web Works",
		author: "Wahhab Baldwin",
		description:
			"I’m Wahhab Baldwin, retired founder of Deep Web Works. I’ve decided to repurpose my website to share tutorials based on my adventures with Svelte and SvelteKit.",
		image: "https://svelte.deepwebworks.com/Wahhab-Baldwin.jpg",
		href: "https://svelte.deepwebworks.com/",
		tags: [],
	},
	{
		title: "Dev.to #svelte",
		author: "dev.to authors",
		description:
			"Tag to discuss Svelte, a JavaScript component framework, which aims at being simple and efficient.",
		image:
			"https://res.cloudinary.com/practicaldev/image/fetch/s--R9qwOwpC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/78hs31fax49uwy6kbxyw.png",
		href: "https://dev.to/t/svelte",
		tags: [],
	},
	{
		title: "Dev.to #sveltekit",
		author: "dev.to authors",
		description:
			"Tag to discuss Sveltekit, the fastest way to build svelte apps.",
		image:
			"https://res.cloudinary.com/practicaldev/image/fetch/s--R9qwOwpC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/78hs31fax49uwy6kbxyw.png",
		href: "https://dev.to/t/sveltekit",
		tags: [],
	},
	{
		title: "Medium #svelte",
		author: "Medium authors",
		description:
			"Tag to discuss Svelte, a JavaScript component framework, which aims at being simple and efficient.",
		image:
			"https://cdn.icon-icons.com/icons2/2997/PNG/512/medium_logo_icon_187624.png",
		href: "https://medium.com/tag/svelte",
		tags: [],
	},
	{
		title: "Medium #sveltekit",
		author: "medium authors",
		description:
			"Tag to discuss Sveltekit, the fastest way to build svelte apps.",
		image:
			"https://cdn.icon-icons.com/icons2/2997/PNG/512/medium_logo_icon_187624.png",
		href: "https://medium.com/tag/sveltekit",
		tags: [],
	},
	{
		title: "Svelte School",
		author: "Kevin Åberg Kultalahti",
		description: "Svelte Training and Courses",
		image: "https://svelte.school/images/logo-primary.svg",
		href: "https://svelte.school/tutorials",
		tags: [],
	},
	{
		title: "Getting started with Svelte",
		author: "MDN contributors",
		description: "A new approach to building rich user interfaces",
		image:
			"data:image/png;base64,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",
		href: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started",
		tags: [],
	},
	{
		title: "Freecodecamp",
		author: "Freecodecamp contributors",
		description: "Svelte related blogs",
		image:
			"https://cdn.icon-icons.com/icons2/3206/PNG/512/free_code_camp_icon_195851.png",
		href: "https://www.freecodecamp.org/news/search?query=svelte",
		tags: [],
	},
	{
		title: "Awesome Svelte",
		author: "TheComputerM",
		description: " A curated list of awesome Svelte resources",
		image:
			"https://github.com/TheComputerM/awesome-svelte/raw/main/awesome-svelte.svg",
		href: "https://github.com/TheComputerM/awesome-svelte#official-resources",
		tags: [],
	},
]
