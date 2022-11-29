import { Community } from "@framework/system/src/models/community"

export const communityTags = [] as const

export const communities: Community<typeof communityTags[number]>[] = [
	{
		description: "A community-ran Discord for all things Deno",
		href: "https://discord.com/invite/deno",
		image:
			"https://ik.imagekit.io/serenity/ByteofDev/Blog_Heading_Images/State_of_the_Web_Deno",
		name: "Deno Discord",
		tags: [],
		type: "discord",
	},
	{
		description:
			"Deno is a successor to Node.js, with the same creator, Ryan Dahl. This is a subreddit for discussing Deno and sharing projects built around it.",
		href: "https://www.reddit.com/r/Deno/",
		image:
			"https://styles.redditmedia.com/t5_2rbun/styles/communityIcon_72jqwdrpyvw31.jpg?width=256&format=pjpg&s=d316572a7d4b59e9383a1b3589ae8f8cc2c0f764",
		name: "Deno Subreddit",
		tags: [],
		type: "reddit",
	},
	{
		description: "A community-ran Github Discussions for all things Deno",
		href: "https://github.com/denoland/deno/discussions",
		image: "https://avatars.githubusercontent.com/u/9919?v=4",
		name: "Deno Github Discussions",
		tags: [],
		type: "github",
	},
]
