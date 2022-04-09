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
]
