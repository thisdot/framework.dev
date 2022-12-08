import { Library } from "@framework/system/src/models/library"

export const libraryTags = [
	"web-workers",
	"styling",
	"utility-first CSS",
	"documentation",
	"testing",
	"storybook",
	"internationalization",
	"react",
] as const

// The default image here for use
// on libraries that don't have an image
const defaultImage = "/qwik-icon.png"

// TODO: Update the language fields to contain the correct language for package lookup

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: "TailwindCSS",
		author: "Adam Wathan & Jonathan Reinink",
		repo: "https://www.github.com/tailwindlabs/tailwindcss",
		package: "https://www.npmjs.com/package/tailwindcss",
		href: "https://tailwindcss.com/",
		description:
			"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
		image: "https://github.com/tailwindlabs.png",
		tags: ["styling", "utility-first CSS"],
		language: libraryTags[0],
	},
	{
		name: "Storybook",
		author: "Storybook",
		repo: "https://www.github.com/storybookjs/storybook",
		package: "https://www.npmjs.com/package/@storybook/react",
		href: "https://storybook.js.org/",
		image: "https://github.com/storybookjs.png",
		tags: ["documentation", "testing", "storybook"],
		description:
			"Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.",
		language: libraryTags[0],
	},
	{
		name: "Qwik i18n",
		author: "i18next",
		repo: "https://www.github.com/mhevery/qwik-i18n",
		package: "",
		href: "https://github.com/mhevery/qwik-i18n",
		image: defaultImage,
		tags: ["internationalization"],
		description:
			"Qwik is unique in that it has fine-grained lazy loading of code. The classical way to do translation is at runtime by looking up the translation strings in the translation map.",
		language: libraryTags[0],
	},
	{
		name: "Partytown",
		author: "BuilderIO",
		repo: "https://www.github.com/BuilderIO/partytown",
		package: "https://www.npmjs.com/package/@builder.io/partytown",
		href: "https://github.com/BuilderIO/partytown",
		image: defaultImage,
		tags: ["web-workers"],
		description:
			"Partytown is a lazy-loaded library to help relocate resource intensive scripts into a web worker, and off of the main thread. Its goal is to help speed up sites by dedicating the main thread to your code, and offloading third-party scripts to a web worker.",
		language: libraryTags[0],
	},
	{
		name: "React",
		author: "facebook",
		repo: "https://www.github.com/facebook/react",
		package: "https://www.npmjs.com/package/@facebook/react",
		href: "https://reactjs.org/",
		image: "https://github.com/react.png",
		tags: ["react"],
		description: "React is a JavaScript library for building user interfaces.",
		language: libraryTags[0],
	},
]
