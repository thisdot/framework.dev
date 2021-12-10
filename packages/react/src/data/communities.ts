import { Community } from "@framework/system/src/models/community"

export const communityTags = [] as const

export const communities: Community<typeof communityTags[number]>[] = [
  {
    name: "Reactiflux",
    description: "A chat community of 147,000+ React JS, React Native, Redux, Jest, Relay and GraphQL developers. They hold Q&A’s with Facebook Engineers and other developers in the community, both on Discord and Twitter.",
    image: "https://github.com/reactiflux.png",
    type: "discord",
    href: "https://usehooks.com/",
    tags: []
  },
  {
    name: "r/ReactJS",
    description: "Reddit's largest community for learning and developing web applications using React.",
    image: "https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png",
    type: "reddit",
    href: "https://www.reddit.com/r/reactjs/",
    tags: []
  }
]
