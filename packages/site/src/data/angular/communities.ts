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
]
