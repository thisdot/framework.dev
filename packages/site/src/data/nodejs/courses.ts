import { Course } from "@framework/system/src/models/course"

export const courseTags = [
	"data fetching",
	"testing",
	"services",
	"typescript",
	"events",
] as const

export const courses: Course<typeof courseTags[number]>[] = [
	{
		title: "",
		author: "",
		image: "",
		description: "",
		paymentType: "free",
		level: "beginner",
		format: "interactive",
		href: "",
		tags: [],
	},
]
