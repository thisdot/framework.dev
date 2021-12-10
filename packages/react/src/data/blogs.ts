import { Blog } from "@framework/system/src/models/blog"

export const blogTags = [] as const

export const blogs: Blog<typeof blogTags[number]>[] = [
  {
    title: "ui.dev",
    author: "Tyler McGinnis",
    description: "A JavaScript blog with a focus on React content.",
    image: "https://github.com/uidotdev.png",
    href: "https://ui.dev/blog/",
    tags: []
  },
  {
    title: "Kent C. Dodds' Blog",
    author: "Kent C. Dodds",
    description: "Renowned JavaScript and React educator, Kent C. Dodds, shares his React knowledge through his blog.",
    image: "https://github.com/kentcdodds.png",
    href: "https://kentcdodds.com/blog?q=react",
    tags: []
  },
  {
    title: "Robin Wieruch's Blog",
    author: "Robin Wieruch",
    description: "German software engineer, Robin Weiruch, shares a variety of posts on React and JavaScript.",
    image: "https://github.com/rwieruch.png",
    href: "https://www.robinwieruch.de/categories/react/",
    tags: []
  }
]
