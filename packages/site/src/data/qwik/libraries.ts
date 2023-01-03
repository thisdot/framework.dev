import { Library } from "@framework/system/src/models/library"
import { LibraryTag } from "../library-tag"

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

export const libraries: Library[] = [
	{
		name: "TailwindCSS",
		author: "Adam Wathan & Jonathan Reinink",
		repo: "https://www.github.com/tailwindlabs/tailwindcss",
		package: "https://www.npmjs.com/package/tailwindcss",
		href: "https://tailwindcss.com/",
		description:
			"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
		image: "https://github.com/tailwindlabs.png",
		tags: [LibraryTag.STYLING],
		language: "CSS",
	},
	{
		name: "Storybook",
		author: "Storybook",
		repo: "https://www.github.com/storybookjs/storybook",
		package: "https://www.npmjs.com/package/@storybook/react",
		href: "https://storybook.js.org/",
		image: "https://github.com/storybookjs.png",
		tags: [LibraryTag.DOCUMENTATION, LibraryTag.TOOLING],
		description:
			"Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.",
		language: "NodeJS",
	},
	{
		name: "Qwik i18n",
		author: "i18next",
		repo: "https://www.github.com/mhevery/qwik-i18n",
		package: "",
		href: "https://github.com/mhevery/qwik-i18n",
		image: defaultImage,
		tags: [LibraryTag.I18N],
		description:
			"Qwik is unique in that it has fine-grained lazy loading of code. The classical way to do translation is at runtime by looking up the translation strings in the translation map.",
		language: "TypeScript",
	},
	{
		name: "Partytown",
		author: "BuilderIO",
		repo: "https://www.github.com/BuilderIO/partytown",
		package: "https://www.npmjs.com/package/@builder.io/partytown",
		href: "https://github.com/BuilderIO/partytown",
		image: defaultImage,
		tags: [LibraryTag.UTILITIES],
		description:
			"Partytown is a lazy-loaded library to help relocate resource intensive scripts into a web worker, and off of the main thread. Its goal is to help speed up sites by dedicating the main thread to your code, and offloading third-party scripts to a web worker.",
		language: "TypeScript",
	},
]
