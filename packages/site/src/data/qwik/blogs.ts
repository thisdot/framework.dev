import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
	{
		title: "Introducing Qwik starters - get up and running with Qwik now",
		author: "Miško Hevery",
    	description: "CTO at builderio creator of QwikDev, @angula, @angularjs, co-creator of karmajs, shares an intro to Qwik framework.",
		image: "https://pbs.twimg.com/profile_images/1389683812968194049/MhsEUijj_400x400.jpg",
		href: "https://www.builder.io/blog/introducing-qwik-starters",
		tags: [],
	},
	{
		title: "Qwik and Qwik City have reached beta! 🎉",
		author: "Miško Hevery",
    	description: "CTO at builderio creator of QwikDev, @angula, @angularjs, co-creator of karmajs, shares an update on Qwik framework.",
		image: "https://pbs.twimg.com/profile_images/1389683812968194049/MhsEUijj_400x400.jpg",
		href: "https://www.builder.io/blog/qwik-and-qwik-city-have-reached-beta",
		tags: [],
	},
	{
		title: "How to Deploy the Qwik JavaScript Framework (Netlify Blog)",
		author: "Brittney Postma",
    	description: "Brittney Postma a Developer Experience Engineer at Netlify, shares how to deploy the Qwik JavaScript framework.",
		image: "https://cdn.sanity.io/images/o0o2tn5x/production/a958aa065e057438555113ba30fadf4d1e6e5b9e-1594x1588.png?w=64&h=64&fit=crop&crop=entropy&auto=format",
		href: "https://www.netlify.com/blog/how-to-deploy-the-qwik-javascript-framework/",
		tags: [],
	},
	{
		title: "Deploy a Qwik site (Cloudflare Pages)",
		author: "Cloudflare Teams",
    	description: "Cloudflare teams shares how to deploy a Qwik site.",
		image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png",
		href: "https://developers.cloudflare.com/pages/framework-guides/deploy-a-qwik-site/",
		tags: [],
	},
]
