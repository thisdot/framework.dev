import { Library } from "@framework/system/src/models/library"

export const libraryTags = [
	"state-management",
	"data fetching",
	"styling",
	"component library",
	"forms",
	"framework",
	"internationalization",
	"linting",
	"a11y",
	"HTTP client",
	"utility-first CSS",
	"preprocessor",
] as const

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: "Axios",
		author: "Matt Zabriskie",
		gitHubRepo: "axios/axios",
		npmPackage: "axios",
		href: "https://axios-http.com/",
		description:
			"Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.",
		image: "https://github.com/axios.png",
		tags: ["data fetching", "HTTP client"],
	},
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
		name: "Svelte Material UI",
		author: "hperrin",
		gitHubRepo: "hperrin/svelte-material-ui",
		npmPackage: "svelte-material-ui",
		href: "https://sveltematerialui.com/",
		description:
			"A library of Svelte Material UI components, based on Material Design Components - Web.",
		image: "https://sveltematerialui.com/icons/android-icon-192x192.png",
		tags: ["styling", "component library"],
	},
	{
		name: "Sveltestrap",
		author: "bestguy",
		gitHubRepo: "bestguy/sveltestrap",
		npmPackage: "sveltestrap",
		href: "https://sveltestrap.js.org/?path=/story/components--get-started",
		description:
			"A library that provides all Bootstrap 5 components for a Svelte app, without needing to use Bootstrap component classes or needing to include Bootstrap's JavaScript.",
		image: "https://github.com/bestguy.png",
		tags: ["styling", "component library"],
	},
	{
		name: "Svelte Forms",
		author: "chainlist",
		gitHubRepo: "chainlist/svelte-forms",
		npmPackage: "svelte-forms",
		href: "https://chainlist.github.io/svelte-forms/",
		description: "A form validation library for Svelte.",
		image: "https://github.com/chainlist.png",
		tags: ["forms"],
	},
	{
		name: "Svelte Formly",
		author: "dyaliCode",
		gitHubRepo: "dyaliCode/svelte-formly",
		npmPackage: "svelte-formly",
		href: "https://svelte-formly-ts-documentation.netlify.app/",
		description:
			"A good solution to generate and control a dynamic forms using core and custom rules with customize styles.",
		image: "https://github.com/dyaliCode.png",
		tags: ["forms"],
	},
	{
		name: "rx-svelte-forms",
		author: "MohamedElmdary",
		gitHubRepo: "MohamedElmdary/rx-svelte-forms",
		npmPackage: "rx-svelte-forms",
		href: "https://github.com/MohamedElmdary/rx-svelte-forms",
		description: "Reactive svelte forms inspired by angular reactive forms.",
		image: "https://github.com/MohamedElmdary.png",
		tags: ["forms"],
	},
	{
		name: "Sapper",
		author: "Svelte",
		gitHubRepo: "sveltejs/sapper",
		npmPackage: "sapper",
		href: "https://sapper.svelte.dev/",
		description:
			"Sapper is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.",
		image: "https://avatars.githubusercontent.com/u/23617963?s=200&v=4",
		tags: ["framework"],
	},
	{
		name: "svelte-i18n",
		author: "kaisermann",
		gitHubRepo: "kaisermann/svelte-i18n",
		npmPackage: "svelte-i18n",
		href: "https://github.com/kaisermann/svelte-i18n",
		image: "https://github.com/kaisermann.png",
		tags: ["internationalization"],
		description:
			"svelte-i18n helps you localize your app using the reactive tools Svelte provides. By using stores to keep track of the current locale, dictionary of messages and to format messages, we keep everything neat, in sync and easy to use on your svelte files.",
	},
	{
		name: "svelte-check",
		author: "Svelte",
		gitHubRepo: "sveltejs/language-tools",
		npmPackage: "svelte-check",
		href: "https://github.com/sveltejs/language-tools",
		image: "https://avatars.githubusercontent.com/u/23617963?s=200&v=4",
		tags: ["linting", "a11y"],
		description:
			"Svelte Language Tools contains a library implementing the Language Server Protocol (LSP). LSP powers the VSCode extension, which is also hosted in this repository. Additionally, LSP is capable of powering plugins for numerous other IDEs.",
	},
	{
		name: "Svelte Preprocess",
		author: "Svelte",
		gitHubRepo: "sveltejs/svelte-preprocess",
		npmPackage: "svelte-check",
		href: "https://github.com/sveltejs/svelte-preprocess",
		image: "https://avatars.githubusercontent.com/u/23617963?s=200&v=4",
		tags: ["preprocessor"],
		description:
			"A Svelte preprocessor with sensible defaults and support for: PostCSS, SCSS, Less, Stylus, CoffeeScript, TypeScript, Pug and much more.",
	},
]
