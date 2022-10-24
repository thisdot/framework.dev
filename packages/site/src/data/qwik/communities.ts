import { Community } from "@framework/system/src/models/community"

export const communityTags = [] as const

export const communities: Community<typeof communityTags[number]>[] = [
  {
    name: "Qwik Discord Community",
    description: "A community-ran Discord for all things Qwik.",
    image: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/62594fddd654fc29fcc07359_cb48d2a8d4991281d7a6a95d2f58195e.svg",
    type: "discord",
    href: "https://discord.com/invite/bNVSQmPzqy",
    tags: []
  },
  {
    name: "Qwik Reddit Community",
    description: "An Open-Source framework designed for best possible time to interactive, by focusing on resumability of server-side-rendering of HTML, and fine-grained lazy-loading of code",
    image: "https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png",
    type: "reddit",
    href: "https://www.reddit.com/r/qwik/",
    tags: []
  },
  {
    name: "Qwik GitHub Discussions",
    description: "A community-ran GitHub Discussions for all things Qwik.",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    type: "github",
    href: "https://github.com/BuilderIO/qwik/discussions",
    tags: []
  },
]