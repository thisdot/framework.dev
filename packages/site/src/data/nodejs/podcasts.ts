import { Podcast } from "@framework/system/src/models/podcast"

export const podcastTags = ["general"] as const

export const podcasts: Podcast<typeof podcastTags[number]>[] = []
