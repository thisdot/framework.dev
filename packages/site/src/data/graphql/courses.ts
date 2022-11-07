import { Course } from "@framework/system/src/models/course"

export const courseTags = [
	"state management",
	"components",
	"data fetching",
	"routing",
	"testing",
	"services",
	"RxJS",
	"ngRx",
	"javascript marathon",
	"nx monorepo",
	"ignite UI",
	"ivy",
	"PWA",
	"A11Y",
	"pipes",
	"angular patterns",
	"typescript",
] as const

export const courses: Course<typeof courseTags[number]>[] = []
