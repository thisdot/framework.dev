import { Community } from "@framework/system/src/models/community"

export const communityTags = ["meetups", "conferences"] as const

export const communities: Community<typeof communityTags[number]>[] = [
	{
		name: "Reactiflux",
		description:
			"A chat community of 147,000+ React JS, React Native, Redux, Jest, Relay and GraphQL developers. They hold Q&A’s with Facebook Engineers and other developers in the community, both on Discord and Twitter.",
		image: "https://github.com/reactiflux.png",
		type: "discord",
		href: "https://usehooks.com/",
		tags: [],
	},
	{
		name: "r/ReactJS",
		description:
			"Reddit's largest community for learning and developing web applications using React.",
		image:
			"https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png",
		type: "reddit",
		href: "https://www.reddit.com/r/reactjs/",
		tags: [],
	},
	{
		name: "React Global Summit",
		description:
			"This is an online conference dedicated to discussing the latest React builds and improving web performance.",
		image: "https://events.geekle.us/react3/static/media/creative.eb8c45ae.png",
		type: "Online Events",
		href: "https://events.geekle.us/react3/",
		tags: ["conferences"],
	},
	{
		name: "Remix Conf EU",
		description: "The biggest Remix conference in the cloud",
		image: "https://remixconf.eu/img/logo.svg",
		type: "Live Events",
		href: "https://remixconf.eu/",
		tags: ["conferences"],
	},
	{
		name: "React Day Berlin",
		description: "Conference dedicated to all things React",
		image: "https://reactday.berlin/img/favicon.png",
		type: "Live Events",
		href: "https://reactday.berlin/",
		tags: ["conferences"],
	},
	{
		name: "React New York",
		description: "Level up your React chops at this New York conference",
		image: "https://www.reactnewyork.com/favicon/apple-touch-icon.png",
		type: "Live Events",
		href: "https://www.reactnewyork.com/",
		tags: ["conferences"],
	},
	{
		name: "Remix Conf",
		description: "Conference dedicated to all things Remix",
		image: "https://remix.run/conf-images/2023/og_image.jpg",
		type: "Live Events",
		href: "https://remix.run/conf",
		tags: ["conferences"],
	},
	{
		name: "React Summit",
		description: "The biggest React conference in the world",
		image: "https://reactsummit.com/img/favicon.png",
		type: "Live Events",
		href: "https://reactsummit.com/",
		tags: ["conferences"],
	},
	{
		name: "React Advanced London",
		description:
			"React Advanced is a London-based annual conference for advanced React.js engineers.",
		image: "https://reactadvanced.com/img/logo-alt.svg",
		type: "Live Events",
		href: "https://reactadvanced.com/",
		tags: ["conferences"],
	},
]
