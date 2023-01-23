import { Library } from "@framework/system/src/models/library"
import { LibraryTag } from "@framework/system/src/models/library-tag" // The default image here for use

// The default image here for use
// on libraries that don't have an image
const defaultImage =
	"https://avatars.githubusercontent.com/u/23617963?s=200&v=4"

export const libraries: Library[] = [
	{
		name: "Axios",
		author: "Matt Zabriskie",
		repo: "https://www.github.com/axios/axios",
		package: "https://www.npmjs.com/package/axios",
		href: "https://axios-http.com/",
		description:
			"Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.",
		image: "https://github.com/axios.png",
		tags: [LibraryTag.HTTP_CLIENT],
		language: "TypeScript",
	},
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
		name: "Svelte Material UI",
		author: "hperrin",
		repo: "https://www.github.com/hperrin/svelte-material-ui",
		package: "https://www.npmjs.com/package/svelte-material-ui",
		href: "https://sveltematerialui.com/",
		description:
			"A library of Svelte Material UI components, based on Material Design Components - Web.",
		image: "https://sveltematerialui.com/icons/android-icon-192x192.png",
		tags: [LibraryTag.COMPONENT],
		language: "TypeScript",
	},
	{
		name: "Sveltestrap",
		author: "bestguy",
		repo: "https://www.github.com/bestguy/sveltestrap",
		package: "https://www.npmjs.com/package/sveltestrap",
		href: "https://sveltestrap.js.org/?path=/story/components--get-started",
		description:
			"A library that provides all Bootstrap 5 components for a Svelte app, without needing to use Bootstrap component classes or needing to include Bootstrap's JavaScript.",
		image: "https://github.com/bestguy.png",
		tags: [LibraryTag.COMPONENT],
		language: "TypeScript",
	},
	{
		name: "Svelte Forms",
		author: "chainlist",
		repo: "https://www.github.com/chainlist/svelte-forms",
		package: "https://www.npmjs.com/package/svelte-forms",
		href: "https://chainlist.github.io/svelte-forms/",
		description: "A form validation library for Svelte.",
		image: "https://github.com/chainlist.png",
		tags: [LibraryTag.FORMS],
		language: "TypeScript",
	},
	{
		name: "Svelte Formly",
		author: "dyaliCode",
		repo: "https://www.github.com/dyaliCode/svelte-formly",
		package: "https://www.npmjs.com/package/svelte-formly",
		href: "https://svelte-formly-ts-documentation.netlify.app/",
		description:
			"A good solution to generate and control a dynamic forms using core and custom rules with customize styles.",
		image: "https://github.com/dyaliCode.png",
		tags: [LibraryTag.FORMS],
		language: "TypeScript",
	},
	{
		name: "rx-svelte-forms",
		author: "MohamedElmdary",
		repo: "https://www.github.com/MohamedElmdary/rx-svelte-forms",
		package: "https://www.npmjs.com/package/rx-svelte-forms",
		href: "https://github.com/MohamedElmdary/rx-svelte-forms",
		description: "Reactive svelte forms inspired by angular reactive forms.",
		image: "https://github.com/MohamedElmdary.png",
		tags: [LibraryTag.FORMS],
		language: "TypeScript",
	},
	{
		name: "svelte-i18n",
		author: "kaisermann",
		repo: "https://www.github.com/kaisermann/svelte-i18n",
		package: "https://www.npmjs.com/package/svelte-i18n",
		href: "https://github.com/kaisermann/svelte-i18n",
		image: "https://github.com/kaisermann.png",
		tags: [LibraryTag.I18N],
		description:
			"svelte-i18n helps you localize your app using the reactive tools Svelte provides. By using stores to keep track of the current locale, dictionary of messages and to format messages, we keep everything neat, in sync and easy to use on your svelte files.",
		language: "TypeScript",
	},
	{
		name: "svelte-check",
		author: "Svelte",
		repo: "https://www.github.com/sveltejs/language-tools",
		package: "https://www.npmjs.com/package/svelte-check",
		href: "https://github.com/sveltejs/language-tools",
		image: defaultImage,
		tags: [LibraryTag.TOOLING],
		description:
			"Svelte Language Tools contains a library implementing the Language Server Protocol (LSP). LSP powers the VSCode extension, which is also hosted in this repository. Additionally, LSP is capable of powering plugins for numerous other IDEs.",
		language: "TypeScript",
	},
	{
		name: "Svelte Preprocess",
		author: "Svelte",
		repo: "https://www.github.com/sveltejs/svelte-preprocess",
		package: "https://www.npmjs.com/package/svelte-check",
		href: "https://github.com/sveltejs/svelte-preprocess",
		image: defaultImage,
		tags: [LibraryTag.TOOLING],
		description:
			"A Svelte preprocessor with sensible defaults and support for: PostCSS, SCSS, Less, Stylus, CoffeeScript, TypeScript, Pug and much more.",
		language: "TypeScript",
	},
	{
		name: "@xstate/svelte",
		author: "statelyai",
		repo: "https://github.com/statelyai/xstate",
		package: "https://www.npmjs.com/package/@xstate/svelte",
		href: "https://xstate.js.org/docs/packages/xstate-svelte",
		image: "https://avatars.githubusercontent.com/u/61783956?s=200&v=4",
		tags: [LibraryTag.STATE_MANAGEMENT],
		description:
			"This package contains utilities for using XState with Svelte.",
		language: "TypeScript",
	},
	{
		name: "TanStack Router",
		author: "Tanner Linsley",
		repo: "https://github.com/tanstack/router",
		package: "",
		description:
			"A fully typesafe router with first-class search-param APIs and built-in caching, built for JS/TS",
		image: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4",
		href: "https://tanstack.com/router/v1/",
		tags: [LibraryTag.ROUTING],
		language: "TypeScript",
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
		name: "Zod",
		author: "Colin McDonnell",
		repo: "https://github.com/colinhacks/zod",
		package: "https://www.npmjs.com/package/zod",
		href: "https://storybook.js.org/",
		image: "https://github.com/colinhacks/zod/raw/master/logo.svg",
		tags: [LibraryTag.TOOLING],
		description:
			"TypeScript-first schema validation with static type inference",
		language: "TypeScript",
	},
]
