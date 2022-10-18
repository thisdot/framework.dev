import {Community} from "@framework/system/src/models/community"

export const communityTags = [] as const

export const communities: Community<typeof communityTags[number]>[] = [
    {
        name: "",
        description: "",
        image: "",
        type: "",
        href: "",
        tags: []
    },
]
