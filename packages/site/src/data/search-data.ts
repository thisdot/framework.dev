import { AllCategories } from "@framework/system/src/models/all-categories"
import { blogIndexMetadata } from "@framework/system/src/models/blog"
import { bookIndexMetadata } from "@framework/system/src/models/book"
import { communityIndexMetadata } from "@framework/system/src/models/community"
import { courseIndexMetadata } from "@framework/system/src/models/course"
import { libraryIndexMetadata } from "@framework/system/src/models/library"
import { podcastIndexMetadata } from "@framework/system/src/models/podcast"
import { toolIndexMetadata } from "@framework/system/src/models/tool"

export async function getSearchData(framework: string): Promise<AllCategories[]> {
  const { blogs, blogTags } = await import(`./${framework}/blogs.ts`)
  const { books, bookTags } = await import(`./${framework}/books.ts`)
  const { communities, communityTags } = await import(`./${framework}/communities.ts`)
  const { courses, courseTags } = await import(`./${framework}/courses.ts`)
  const { libraries, libraryTags } = await import(`./${framework}/libraries.ts`)
  const { podcasts, podcastTags } = await import(`./${framework}/podcasts.ts`)
  const { tools, toolTags } = await import(`./${framework}/tools.ts`)
  
  return [
    {
      data: libraries,
      indexMetadata: libraryIndexMetadata,
      name: libraryIndexMetadata.name,
      tags: libraryTags,
      subCategories: [
        "state management",
        "data fetching",
        "styling",
        "component library",
        "forms",
        "framework",
        "internationalization",
      ] as typeof libraryTags[number][],
    },
    {
      data: tools,
      indexMetadata: toolIndexMetadata,
      name: toolIndexMetadata.name,
      tags: toolTags,
    },
    {
      data: courses,
      indexMetadata: courseIndexMetadata,
      name: courseIndexMetadata.name,
      tags: courseTags,
    },
    {
      data: communities,
      indexMetadata: communityIndexMetadata,
      name: communityIndexMetadata.name,
      tags: communityTags,
    },
    {
      data: podcasts,
      indexMetadata: podcastIndexMetadata,
      name: podcastIndexMetadata.name,
      tags: podcastTags,
    },
    {
      data: books,
      indexMetadata: bookIndexMetadata,
      name: bookIndexMetadata.name,
      tags: bookTags,
    },
    {
      data: blogs,
      indexMetadata: blogIndexMetadata,
      name: blogIndexMetadata.name,
      tags: blogTags,
    },
  ]
}