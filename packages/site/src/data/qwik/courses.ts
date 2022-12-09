import { Course } from "@framework/system/src/models/course"

export const courseTags = [
	"state management",
	"data fetching",
	"structure",
	"routing",
] as const

export const courses: Course<typeof courseTags[number]>[] = [
	{
		title: "Qwik: A no-hydration instant-on personalized web applications",
		author: "Misko Hevery",
		image: "https://i.ytimg.com/vi/0tCuUQe_ZA0/hqdefault.jpg",
		description:
			"Qwik is a new breed of frameworks with a goal of instant-on interactivity for your site even on low-power slow-network devices. Qwik is a resumable framework that starts its execution on the server and seamlessly transitions to executing on the client in a very lazy and incremental way. The seamless transition from server to the client provides an instant on-user experience which leads to lower bounce rates, more conversions, and higher sales.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=0tCuUQe_ZA0",
		tags: ["state management", "data fetching", "routing"],
	},
	{
		title: "Introduction to Qwik for JS Developers ft. Miško Hevery | JS Drops",
		author: "Misko Hevery",
		image: "https://i.ytimg.com/vi/0tCuUQe_ZA0/hqdefault.jpg",
		description:
			"In this Drop, Miško Hevery, CTO at Qwik, demonstrates the essential tools JavaScript developers need to build rich applications using the Qwik framework.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=DxJgXw91cCQ",
		tags: ["structure", "state management", "routing"],
	},
]
