import { Community } from "@framework/system/src/models/community"

export const communityTags = [] as const

export const communities: Community<typeof communityTags[number]>[] = [
	{
		name: "Angular Community",
		description: "A community-ran Discord for all things Angular.",
		image: "https://github.com/angular-community.png",
		type: "Discord Community",
		href: "discord.gg/angular",
		tags: [],
	},
	{
		name: "Angular Meetup / State of Angular",
		description:
			"This Dot hosted events with members of the Angular community. Live chats about the current state of Angular, upcoming features, and mentoring.",
		image: "https://github.com/thisdot.png",
		type: "Live Events",
		href: "https://www.angularmeetup.com/",
		tags: [],
	},
	{
		name: "Angular Community Meetup",
		description:
			"Angular Community is a virtual meetup that is held twice a month: once for European and African time zones, and once for American timezones.",
		image: "https://angularcommunity.net/assets/images/favicon/ACM_globe_logo.png",
		type: "Live Events",
		href: "https://angularcommunity.net/home",
		tags: [],
	},
	{
		name: "Angular @ Reddit",
		description:
			"Very active Angular community on Reddit.",
		image: "https://styles.redditmedia.com/t5_36qrt/styles/communityIcon_essg5v68ccu01.png?width=256&s=9ddf3239f71edb50bb9da77b371f43812d6b223f",
		type: "Reddit",
		href: "https://www.reddit.com/r/Angular2/",
		tags: [],
	},
]
