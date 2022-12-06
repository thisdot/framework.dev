import { Community } from "@framework/system/src/models/community"

export const communityTags = [] as const

export const communities: Community<typeof communityTags[number]>[] = [
	{
		name: "Svelte",
		description: "A chat community of 45,000+ Svelte Developers.",
		image:
			"https://cdn.discordapp.com/icons/457912077277855764/ea3d74c9d4e51d12cd2daa3ea1b44bb6.webp?size=128",
		type: "discord",
		href: "https://discord.com/invite/svelte",
		tags: [],
	},
	{
		name: "r/Svelte",
		description:
			"A Reddit community for learning and developing web applications using Svelte.",
		image:
			"https://styles.redditmedia.com/t5_3htkz/styles/communityIcon_5gn47dhdp4o31.png?width=256&s=72a4fd816972674e5edc77660d8ad5abe2b82eb6",
		type: "reddit",
		href: "https://www.reddit.com/r/sveltejs/",
		tags: [],
	},
	{
		name: "Svelte Society",
		description:
			"A list of Svelte societies around the world for summits and meetups.",
		image: "https://sveltesociety.dev/images/logo.svg",
		type: "Live Events",
		href: "https://sveltesociety.dev/events",
		tags: [],
	},
	{
		name: "Svelte Summit",
		description:
			"Svelte Summit is an event dedicated to Svelte and everything that is happening in the community.",
		image: "https://www.sveltesummit.com/_app/assets/logo-3e24e7c2.svg",
		type: "Live Events",
		href: "https://www.sveltesummit.com/",
		tags: [],
	},
]
