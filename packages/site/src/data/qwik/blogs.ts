import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
	{
		title: "Introducing Qwik starters - get up and running with Qwik now",
		author: "Miško Hevery",
    	description: "CTO at builderio creator of QwikDev, @angular, @angularjs, co-creator of karmajs, shares an intro to Qwik framework.",
		image: "https://pbs.twimg.com/profile_images/1389683812968194049/MhsEUijj_400x400.jpg",
		href: "https://www.builder.io/blog/introducing-qwik-starters",
		tags: [],
	},
	{
		title: "A first look at Qwik - the HTML first framework (8 part Series)",
		author: "Miško Hevery",
    	description: "CTO at builderio creator of QwikDev, @angular, @angularjs, co-creator of karmajs, shares an 8 series on Qwik.",
		image: "https://pbs.twimg.com/profile_images/1389683812968194049/MhsEUijj_400x400.jpg",
		href: "https://dev.to/builderio/a-first-look-at-qwik-the-html-first-framework-af",
		tags: [],
	},
	{
		title: "Qwik and Qwik City have reached beta! 🎉",
		author: "Miško Hevery",
    	description: "CTO at builderio creator of QwikDev, @angular, @angularjs, co-creator of karmajs, shares an update on Qwik framework.",
		image: "https://pbs.twimg.com/profile_images/1389683812968194049/MhsEUijj_400x400.jpg",
		href: "https://www.builder.io/blog/qwik-and-qwik-city-have-reached-beta",
		tags: [],
	},
	{
		title: "Hydration is Pure Overhead",
		author: "Miško Hevery",
    	description: "CTO at builderio creator of QwikDev, @angular, @angularjs, co-creator of karmajs, talks about hydration.",
		image: "https://pbs.twimg.com/profile_images/1389683812968194049/MhsEUijj_400x400.jpg",
		href: "https://www.builder.io/blog/hydration-is-pure-overhead",
		tags: [],
	},
	{
		title: "Why Progressive Hydration is Harder than You Think",
		author: "Miško Hevery",
    	description: "CTO at builderio creator of QwikDev, @angular, @angularjs, co-creator of karmajs, talks about progressive hydration.",
		image: "https://pbs.twimg.com/profile_images/1389683812968194049/MhsEUijj_400x400.jpg",
		href: "https://www.builder.io/blog/why-progressive-hydration-is-harder-than-you-think",
		tags: [],
	},
	{
		title: "Our current frameworks are O(n); we need O(1)",
		author: "Miško Hevery",
    	description: "CTO at builderio creator of QwikDev, @angular, @angularjs, co-creator of karmajs, compares Qwik to other framework in terms of BigO notation.",
		image: "https://pbs.twimg.com/profile_images/1389683812968194049/MhsEUijj_400x400.jpg",
		href: "https://www.builder.io/blog/why-progressive-hydration-is-harder-than-you-think",
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
