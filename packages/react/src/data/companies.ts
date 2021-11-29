import { Company } from "@framework/system/src/models/company"

export const companyTags = [] as const

export const companies: Company<typeof companyTags[number]>[] = []
