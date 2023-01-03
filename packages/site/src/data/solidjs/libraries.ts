import { Library } from "@framework/system/src/models/library";
import { LibraryTag } from "@framework/system/src/models/library-tag";

// The default image here for use
// on libraries that don't have an image
const defaultImage =
	"https://repository-images.githubusercontent.com/130884470/ad63fd00-7ab2-11ea-9c57-6c114391183a"

export const libraries: Library[] = [
	{
		name: "Solid Store",
		author: "SolidJs",
		repo: "https://www.github.com/solidjs/solid/tree/main/packages/solid/store",
		package: "",
		href: "https://www.solidjs.com/tutorial/stores_createstore",
		description:
			"This submodules contains the means for handling deeps nested reactivity.",
		image: defaultImage,
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: "TypeScript",
	},
	{
		name: "Solid Zustand",
		author: "Wobsoriano",
		repo: "https://www.github.com/wobsoriano/solid-zustand",
		package: "https://www.npmjs.com/package/solid-zustand",
		href: "https://github.com/wobsoriano/solid-zustand",
		description:
			"🐻 State management in Solid using zustand. Contribute to wobsoriano/solid-zustand development by creating an account on GitHub.",
		image:
			"https://opengraph.githubassets.com/0e09b9ed47ad0ddb03deebe8d82dc55f3960f66b1f90ce00b2e3bba234fd2979/wobsoriano/solid-zustand",
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: "TypeScript",
	},
	{
		name: "Solid Services",
		author: "Exelord",
		repo: "https://www.github.com/exelord/solid-services",
		package: "https://www.npmjs.com/package/solid-services",
		href: "https://github.com/exelord/solid-services",
		description:
			"Services are 'global' objects useful for features that require shared state or persistent connections. They are lazy evaluated, only when used, solving an issue of cross dependencies and contexts tree.",
		image:
			"https://repository-images.githubusercontent.com/445865183/c49ba9a2-c297-414e-977a-a746c81750c5",
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: "TypeScript",
	},
	{
		name: "Solid Gstatem",
		author: "Gstatem",
		repo: "https://www.github.com/gstatem/gstatem/tree/main/packages/solid-gstatem",
		package: "https://www.npmjs.com/package/solid-gstatem",
		href: "https://github.com/gstatem/gstatem/tree/main/packages/solid-gstatem",
		description: "GStatem is a small, simple and fast state-management tool.",
		image:
			"https://opengraph.githubassets.com/ff31739cf46bcad922738d440410e896569c720caae0736e3a8cf7d1a599b396/gstatem/gstatem",
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: "TypeScript",
	},
	{
		name: "Solid Resources",
		author: "Solidjs",
		repo: "https://github.com/solidjs/solid",
		package: "",
		href: "https://www.solidjs.com/tutorial/async_resources",
		description:
			"Resources are special Signals designed specifically to handle Async loading.",
		image: defaultImage,
		tags: [LibraryTag.DATA_FETCHING],
		language: "TypeScript",
	},
	{
		name: "TanStack Query",
		author: "Tanner Linsley",
		repo: "https://www.github.com/TanStack/query/tree/main/packages/solid-query",
		package: "https://www.npmjs.com/package/@tanstack/solid-query",
		href: "https://tanstack.com/query/v4/docs/adapters/solid-query",
		description:
			"🤖 Powerful asynchronous state management, server-state utilities and data fetching for TS/JS, React, Solid, Svelte and Vue. - query/packages at main · TanStack/query",
		image:
			"https://raw.githubusercontent.com/TanStack/query/beta/media/repo-header.png",
		tags: [LibraryTag.DATA_FETCHING],
		language: "TypeScript",
	},
	{
		name: "Solid Styled",
		author: "LXSMNSYC",
		repo: "https://www.github.com/LXSMNSYC/solid-styled",
		package: "https://www.npmjs.com/package/solid-styled",
		href: "https://github.com/LXSMNSYC/solid-styled",
		description: "Reactive stylesheets for solidjs",
		image:
			"https://opengraph.githubassets.com/647460914dea6f99c7f3e314dc5d0fef67e1ba61f432556c7ad0b38da95414b9/lxsmnsyc/solid-styled",
		tags: [LibraryTag.STYLING],
		language: "TypeScript",
	},
	{
		name: "Emotion Solid",
		author: "tqwewe",
		repo: "https://www.github.com/tqwewe/emotion-solid",
		package: "https://www.npmjs.com/package/emotion-solid",
		href: "https://github.com/tqwewe/emotion-solid",
		description: "Emotion JS support for Solid JS.",
		image:
			"https://opengraph.githubassets.com/6bb80c79acd55929b40ae05650a257895a7b4aa0a929b7d135f02753982d9716/tqwewe/emotion-solid",
		tags: [LibraryTag.STYLING],
		language: "TypeScript",
	},
	{
		name: "Guillotin",
		author: "xstevenyung",
		repo: "https://www.github.com/xstevenyung/guillotin-solid-v1",
		package: "https://www.npmjs.com/package/@guillotin/solid",
		href: "https://guillotin.recodable.io/",
		description: "Collection of Headless Components for demanding developers",
		image:
			"https://opengraph.githubassets.com/f167dc5a21f3b9cc4313cd4f53c9bbb871bbc7f1f2351333696551da2b955505/xstevenyung/guillotin-solid-v1",
		tags: [LibraryTag.COMPONENT],
		language: "TypeScript",
	},
	{
		name: "Solid Select",
		author: "thisbeyond",
		repo: "https://www.github.com/thisbeyond/solid-select",
		package: "https://www.npmjs.com/package/@thisbeyond/solid-select",
		href: "https://solid-select.com",
		description: "A Select component for Solid",
		image: "https://solid-select.com/solid-select.png",
		tags: [LibraryTag.COMPONENT],
		language: "TypeScript",
	},
	{
		name: "Solid MultiSelect",
		author: "DigiChanges",
		repo: "https://www.github.com/DigiChanges/solid-multiselect",
		package: "https://www.npmjs.com/package/@digichanges/solid-multiselect",
		href: "https://github.com/DigiChanges/solid-multiselect",
		description: "A multi-select dropdown implementation for SolidJs",
		image:
			"https://opengraph.githubassets.com/3d77a1fbc9cc60af77bbd066466a010b7fd84422c2564802223a006317e81e7e/DigiChanges/solid-multiselect",
		tags: [LibraryTag.COMPONENT],
		language: "TypeScript",
	},
	{
		name: "Hope UI",
		author: "Fabien MARIE-LOUISE",
		repo: "https://www.github.com/hope-ui/hope-ui",
		package: "https://www.npmjs.com/package/@hope-ui/solid",
		href: "https://hope-ui.com/docs/getting-started",
		description:
			"Hope UI is a composable and accessible component library that gives you the foundation to build your next SolidJS application.",
		image:
			"https://opengraph.githubassets.com/73d54d4bfc8030c11c32733e99afb3f0443ad9085d6a2d8dfa7348274c90f934/hope-ui/hope-ui",
		tags: [LibraryTag.COMPONENT],
		language: "TypeScript",
	},
	{
		name: "Suid",
		author: "swordev",
		repo: "https://www.github.com/swordev/suid",
		package: "https://www.npmjs.com/package/suid",
		href: "https://suid.io/",
		description: "A port of MUI built with SolidJs",
		image: "https://suid.io/assets/preview.png",
		tags: [LibraryTag.COMPONENT],
		language: "TypeScript",
	},
	{
		name: "Solid Bootstrap",
		author: "solid-libs",
		repo: "https://www.github.com/solid-libs/solid-bootstrap",
		package: "https://www.npmjs.com/package/solid-bootstrap",
		href: "https://solid-libs.github.io/solid-bootstrap/#/",
		description:
			"Solid-Bootstrap replaces the Bootstrap JavaScript. Each component has been carefully ported into a true SolidJS component, without unneeded dependencies like jQuery.",
		image:
			"https://opengraph.githubassets.com/824c95680dd01104c9412933dd5cfd21dc6da2a7d090e253ee7f92e4222f0ec8/solid-libs/solid-bootstrap",
		tags: [LibraryTag.COMPONENT],
		language: "TypeScript",
	},
	{
		name: "Solid Start",
		author: "solidjs",
		repo: "https://www.github.com/solidjs/solid-start",
		package: "",
		href: "https://start.solidjs.com/getting-started/what-is-solidstart",
		description:
			"a framework that provides many of these components out-of-the-box and integrates them seamlessly!",
		image:
			"https://opengraph.githubassets.com/03a31e6350dc6548ce8a098f167e9b5a7f90a33bdc2d4a9694b05dd6f2321c00/solidjs/solid-start",
		tags: [LibraryTag.FRAMEWORKS],
		language: "TypeScript",
	},
	{
		name: "Solid Form Handler",
		author: "solidjs",
		repo: "https://www.github.com/webblocksapp/solid-form-handler",
		package: "https://www.npmjs.com/package/solid-form-handler",
		href: "https://solid-form-handler.com/docs/introduction",
		description:
			"solidjs-form-handler is a lightweight library for building form components and validating forms with them.",
		image:
			"https://opengraph.githubassets.com/b15e607516c45b8906d85d0565b9c91faa0826f5468e3d5f53c001c7a4cc7245/webblocksapp/solid-form-handler",
		tags: [LibraryTag.FORMS],
		language: "TypeScript",
	},
	{
		name: "solid-i18n",
		author: "SanichKotikov",
		repo: "https://www.github.com/SanichKotikov/solid-i18n",
		package: "https://www.npmjs.com/package/solid-i18n",
		href: "https://github.com/SanichKotikov/solid-i18n",
		description: "Tiny internationalization library for SolidJS.",
		image:
			"https://opengraph.githubassets.com/2ed9c41fd80336224cf4acb87a5288ff598ad89c848cf0e721635d7235480015/SanichKotikov/solid-i18n",
		tags: [LibraryTag.I18N],
		language: "TypeScript",
	},
	{
		name: "Solid primitives i18n",
		author: "Solid Community",
		repo: "https://www.github.com/solidjs-community/solid-primitives/tree/main/packages/i18n",
		package: "https://www.npmjs.com/package/@solid-primitives/i18n",
		href: "https://github.com/solidjs-community/solid-primitives/tree/main/packages/i18n",
		description:
			"A library of high-quality primitives that extend SolidJS reactivity.",
		image:
			"https://repository-images.githubusercontent.com/369884446/f2fe21a6-2e1e-42ff-8659-f86d335a0904",
		tags: [LibraryTag.I18N],
		language: "TypeScript",
	},
]
