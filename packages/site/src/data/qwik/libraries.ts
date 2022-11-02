import { Library } from "@framework/system/src/models/library"

export const libraryTags = [
	"web-workers",
	"styling",
	"utility-first CSS",
	"documentation",
	"testing",
	"storybook",
	"internationalization",
	"react"
] as const

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: "TailwindCSS",
		author: "Adam Wathan & Jonathan Reinink",
		gitHubRepo: "tailwindlabs/tailwindcss",
		npmPackage: "tailwindcss",
		href: "https://tailwindcss.com/",
		description:
			"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
		image: "https://github.com/tailwindlabs.png",
		tags: ["styling", "utility-first CSS"],
	},
	{
		name: "Storybook",
		author: "Storybook",
		gitHubRepo: "storybookjs/storybook",
		npmPackage: "@storybook/react",
		href: "https://storybook.js.org/",
		image: "https://github.com/storybookjs.png",
		tags: ["documentation", "testing", "storybook"],
		description:
			"Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.",
	},
	{
		name: "Qwik i18n",
		author: "i18next",
		gitHubRepo: "mhevery/qwik-i18n",
		npmPackage: "",
		href: "https://github.com/mhevery/qwik-i18n",
		image: "https://qwik.builder.io/logos/social-card.png?v=3",
		tags: ["internationalization"],
		description:
			"Qwik is unique in that it has fine-grained lazy loading of code. The classical way to do translation is at runtime by looking up the translation strings in the translation map.",
	},
	{
		name: "Partytown",
		author: "BuilderIO",
		gitHubRepo: "BuilderIO/partytown",
		npmPackage: "@builder.io/partytown",
		href: "https://github.com/BuilderIO/partytown",
		image: "https://qwik.builder.io/logos/social-card.png?v=3",
		tags: ["web-workers"],
		description:
			"Partytown is a lazy-loaded library to help relocate resource intensive scripts into a web worker, and off of the main thread. Its goal is to help speed up sites by dedicating the main thread to your code, and offloading third-party scripts to a web worker.",
	},
	{
		name: "React",
		author: "facebook",
		gitHubRepo: "facebook/react",
		npmPackage: "@facebook/react",
		href: "https://reactjs.org/",
		image: "https://github.com/react.png",
		tags: ["react"],
		description:
			"React is a JavaScript library for building user interfaces.",
	},
]
