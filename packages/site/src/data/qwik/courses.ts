import { Course } from "@framework/system/src/models/course"

export const courseTags = [
	"state management",
	"data fetching",
	"routing",
] as const

export const courses: Course<typeof courseTags[number]>[] = [
//   {
// 		title: "test",
// 		author: "test",
// 		image: "https://github.com/john-smilga.png",
// 		description:
// 			"test test test test.",
// 		paymentType: "free",
// 		level: "advanced",
// 		format: "video",
// 		href: "https://www.youtube.com/watch?v=a_7Z7C_JCyo",
// 		tags: ["state management", "data fetching", "routing"],
// 	},
]