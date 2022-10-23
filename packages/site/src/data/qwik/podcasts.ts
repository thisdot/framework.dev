import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = ["general", "qwik"] as const

export const podcasts: Podcast<typeof podcastTags[number]>[] = [
	{
		title: "Modern Web",
		image:
			"https://pbcdn1.podbean.com/imglogo/image-logo/984467/modern_web_9bpnd.jpg",
		hosts: ["ThisDot Labs"],
		description:
			"Modern Web is a podcast that explores next generation frameworks, standards, and techniques.",
		rss: "https://www.podbean.com/site/podcatcher/index/blog/7YqKYcoGcvP",
		href: "https://modernweb.podbean.com/",
		tags: ["general"],
	},
	{
		title: "Learn with Jason",
		image: "https://i3.ytimg.com/vi/_PDpoJUacuc/hqdefault.jpg",
		hosts: ["Jason Learns - Misko Hevery"],
		description:
			"Qwik lets us build resumable apps by requiring nearly zero JavaScript for pages to become interactive + fine-grained lazy loading to only load what's used. Miško Hevery will teach us how to get started..",
		rss: "https://www.youtube.com/watch?v=_PDpoJUacuc",
		href: "https://www.youtube.com/watch?v=_PDpoJUacuc",
		tags: ["qwik"],
	},
	{
		title: "Angular Nation",
		image: "https://i3.ytimg.com/vi/iJZaT-AvJ-o/hqdefault.jpg",
		hosts: ["Shai Reznik - Misko Hevery"],
		description:
			"Have you seen Qwik in action yet? If not, here's your chance! We've invited the Father of Qwik, aka the Father of Angular, Misko Hevery himself to show us what he built. As a HUGE bonus, we also invited one of our favorite teachers, Shai Reznik of HiRez.io fame. Sit back, buckle up, and prepare for a wild ride into the future of VERY FAST web pages!.",
		rss: "https://www.youtube.com/watch?v=iJZaT-AvJ-o",
		href: "https://www.youtube.com/watch?v=iJZaT-AvJ-o",
		tags: ["qwik"],
	},
	{
		title: "JS Poland",
		image: "	https://i3.ytimg.com/vi/7MgNMIPISY4/hqdefault.jpg",
		hosts: ["Misko Hevery"],
		description:
			"QWIK - Set of great demos by Misko Hevery.",
		rss: "https://www.youtube.com/watch?v=7MgNMIPISY4",
		href: "https://www.youtube.com/watch?v=7MgNMIPISY4",
		tags: ["qwik"],
	},
]
