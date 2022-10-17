import { Community } from "@framework/system/src/models/community"

export const communityTags = [] as const

export const communities: Community<typeof communityTags[number]>[] = [
  {
    name: "test",
    description: "test",
    image: "https://github.com/reactiflux.png",
    type: "discord",
    href: "https://usehooks.com/",
    tags: []
  },
]
