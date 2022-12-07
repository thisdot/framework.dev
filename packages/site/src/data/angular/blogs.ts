import { Blog } from "@framework/system/src/models/blog"
export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
	{
		title: "This Dot Blog",
		author: "This Dot Labs",
		description:
			"Variety of topics related to Angular, written by the team at This Dot",
		image: "https://github.com/thisdot.png",
		href: "https://www.thisdot.co/blog/?filter=Angular#result",
		tags: [],
	},
	{
		title: "This is Angular",
		author: "Dev.to Contributors",
		description: "Free, open and honest Angular education.",
		image:
			"https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/3316/b77c881d-527b-4295-9e3c-3aa9072a4671.png",
		href: "https://dev.to/this-is-angular",
		tags: [],
	},
	{
		title: "InDepthDev",
		author: "InDepthDev",
		description:
			"inDepthDev is a community of experienced software engineers with a common goal of constant professional growth and inclination to help others.",
		image: "https://github.com/indepth-dev.png",
		href: "https://indepth.dev/angular",
		tags: [],
	},
	{
		title: "Angular University",
		author: "Vasco Cavalheiro",
		description: "Premium Quality Tutorials on Angular and its Ecosystem.",
		image:
			"https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png",
		href: "https://blog.angular-university.io/",
		tags: [],
	},
	{
		title: "Blog @ Ultimate Courses",
		author: "Todd Motto",
		description:
			"Todd Motto wrote hundreds of blog posts revolving around Angular and covering various topics explained in a concise, beginner-friendly way.",
		image:
			"https://ultimatecourses.com/assets/logo-ef24a2d3b6a0febba9ff80a1b01d632db750feb083442d0071dff7426762e0c2.svg",
		href: "https://ultimatecourses.com/blog/",
		tags: [],
	},
	{
		title: "Blog @ ng-journal",
		author: "Stefan Haas",
		description:
			"The Journal for Angular - covering the entire Angular stack and best practices.",
		image: "https://ng-journal.com/assets/ng-journal.png",
		href: "https://ng-journal.com/blog/",
		tags: [],
	},
]
