import { Community } from "@framework/system/src/models/community"

export const communityTags = [] as const

export const communities: Community<typeof communityTags[number]>[] = [
  {
    name: "Discord",
    description: "Solid is a declarative reactive Javascript library for creating user interfaces. | 5809 members.",
    image: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/625e5fcef7ab80b8c1fe559e_Discord-Logo-Color.png",
    type: "discord",
    href: "https://discord.com/invite/solidjs",
    tags: []
  },
  {
    name: "Twitter",
    description: "Simple and performant reactivity for building user interfaces.",
    image: "https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg",
    type: "twitter",
    href: "https://twitter.com/solid_js",
    tags: []
  },
  {
    name: "r/SolidJS",
    description: "Reddit's community for learning and developing web applications using SolidJS.",
    image: "https://www.redditinc.com/assets/images/site/reddit-logo.png",
    type: "reddit",
    href: "https://www.reddit.com/r/solidjs/",
    tags: []
  },
]
