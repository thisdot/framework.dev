import { Community } from "@framework/system/src/models/community"

export const communityTags = ["meetups"] as const

export const communities: Community<(typeof communityTags)[number]>[] = [
	{
		name: "SolidJS Miami, FL",
		description:
			"To organize current and future members of the SolidJS Community. Members should join this group to stay up to date with upcoming in-person and live events. | 109 members.",
		image: "https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg",
		type: "discord",
		href: "https://www.meetup.com/solidjs",
		tags: ["meetups"],
	},
	{
		name: "Discord",
		description:
			"Solid is a declarative reactive Javascript library for creating user interfaces. | 5809 members.",
		image:
			"https://assets-global.website-files.com/6257adef93867e50d84d30e2/625e5fcef7ab80b8c1fe559e_Discord-Logo-Color.png",
		type: "discord",
		href: "https://discord.com/invite/solidjs",
		tags: [],
	},
	{
		name: "Twitter",
		description:
			"Simple and performant reactivity for building user interfaces.",
		image:
			"https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg",
		type: "twitter",
		href: "https://twitter.com/solid_js",
		tags: [],
	},
	{
		name: "r/SolidJS",
		description:
			"Reddit's community for learning and developing web applications using SolidJS.",
		image: "https://www.redditinc.com/assets/images/site/reddit-logo.png",
		type: "reddit",
		href: "https://www.reddit.com/r/solidjs/",
		tags: [],
	},
	{
		name: "Events",
		description: "SolidJS Official Events.",
		image:
			"https://assets.brandfolder.com/logo_images_v2/organizations/pjqost-dus1fs-bbjqqj/1549042902/Eventbrite_symbol_orange-400x400.png",
		type: "Live Events",
		href: "https://www.eventbrite.com/o/solidjs-official-events-47844139913",
		tags: [],
	},
]
