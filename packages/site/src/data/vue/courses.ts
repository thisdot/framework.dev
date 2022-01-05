import { Course } from "@framework/system/src/models/course"

export const courseTags = [] as const

export const courses: Course<typeof courseTags[number]>[] = []
