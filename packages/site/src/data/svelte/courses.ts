import {Course} from "@framework/system/src/models/course"

export const courseTags = [] as const

export const courses: Course<typeof courseTags[number]>[] = [
    {
        title: "",
        author: "",
        image: "",
        description:
            "",
        paymentType: "free",
        level: "advanced",
        format: "video",
        href: "",
        tags: [],
    },
]
