import { Library } from "@framework/system/src/models/library"

export const libraryTags = ["state management"] as const

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: "test",
		author: "test",
		gitHubRepo: "facebook/flux",
		npmPackage: "flux",
		href: "https://facebook.github.io/flux/",
		description: "test test test test.",
		image:
			"https://camo.githubusercontent.com/d281ce16f30146daddb2800415d6c177fccf9a7f198d21aacfe81f0f6ebb1490/68747470733a2f2f66616365626f6f6b2e6769746875622e696f2f666c75782f696d672f666c75782d6c6f676f2d636f6c6f722e737667",
		tags: ["state management"],
	},
]
