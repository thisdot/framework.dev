import { CodeExample } from "@framework/system/src/models/code-example"

export const codeExampleTags = [] as const

export const codeExamples: CodeExample<typeof codeExampleTags[number]>[] = []
