import { Library } from "@framework/system/src/models/library"

export const libraryTags = [
	"state management",
	"data fetching",
	"graphQL",
	"HTTP client",
	"styling",
	"CSS in JS",
	"utility-first CSS",
	"CSS processor",
	"CSS modules",
	"webpack",
	"component library",
] as const

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: "Flux",
		author: "Facebook",
		gitHubRepo: "facebook/flux",
		npmPackage: "flux",
		href: "https://facebook.github.io/flux/",
		description:
			"The original state management architecture for React utilizing a unidirectional data flow. Now deprecated and in maintenance mode.",
		image:
			"https://camo.githubusercontent.com/d281ce16f30146daddb2800415d6c177fccf9a7f198d21aacfe81f0f6ebb1490/68747470733a2f2f66616365626f6f6b2e6769746875622e696f2f666c75782f696d672f666c75782d6c6f676f2d636f6c6f722e737667",
		tags: ["state management"],
	},
	{
		name: "Redux",
		author: "Dan Abramov",
		gitHubRepo: "reduxjs/redux",
		npmPackage: "redux",
		href: "https://redux.js.org/",
		description:
			"A predictable, centralized, debuggable and flexible state container for JS apps inspired by the Flux and Elm architectures.",
		image: "https://github.com/redux.png",
		tags: ["state management"],
	},
	{
		name: "MobX",
		author: "Michel Weststrate",
		gitHubRepo: "mobxjs/mobx",
		npmPackage: "mobx",
		href: "https://mobx.js.org/",
		description:
			"A battle tested library that makes state management simple and scalable by transparently applying functional reactive programming. Uses observable data structures instead of actions and reducers.",
		image:
			"https://camo.githubusercontent.com/0dc3b9afa37acc792f49624b1f8dd364b55c9107167fd291ffde1d81917aceba/68747470733a2f2f6d6f62782e6a732e6f72672f6173736574732f6d6f62782e706e67",
		tags: ["state management"],
	},
	{
		name: "Apollo Client",
		author: "Apollo GraphQL",
		gitHubRepo: "apollographql/apollo-client",
		npmPackage: "@apollo/client",
		href: "https://www.apollographql.com/docs/react/",
		description:
			"A fully-featured caching GraphQL client with integrations for React that also has functionality for managing local state.",
		image: "https://github.com/apollographql.png",
		tags: ["state management", "data fetching", "graphQL"],
	},
	{
		name: "XState",
		author: "David Khourshid",
		gitHubRepo: "statelyai/xstate",
		npmPackage: "xstate",
		href: "https://xstate.js.org/docs/",
		description:
			"JavaScript and TypeScript finite state machines and statecharts for the modern web.",
		image: "https://github.com/statelyai.png",
		tags: ["state management"],
	},
	{
		name: "Recoil",
		author: "Facebook",
		gitHubRepo: "facebookexperimental/Recoil",
		npmPackage: "recoil",
		href: "https://recoiljs.org/",
		description:
			"Recoil lets you create a data-flow graph that flows from atoms (shared state) through selectors (pure functions) and down into your React components. Atoms are units of state that components can subscribe to. Selectors transform this state either synchronously or asynchronously.",
		image:
			"https://pbs.twimg.com/profile_images/1377116487933030410/kyyHFjc2_400x400.jpg",
		tags: ["state management"],
	},
	{
		name: "React Query",
		author: "Tanner Linsley",
		gitHubRepo: "tannerlinsley/react-query",
		npmPackage: "react-query",
		href: "https://react-query.tanstack.com/",
		description:
			"Writing your data fetching logic by hand is over. Tell React Query where to get your data and how fresh you need it to be and the rest is automatic. React Query handles caching, background updates and stale data out of the box with zero-configuration.",
		image:
			"https://react-query.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg",
		tags: ["data fetching", "state management"],
	},
	{
		name: "SWR",
		author: "Vercel",
		gitHubRepo: "vercel/swr",
		npmPackage: "swr",
		href: "https://swr.vercel.app/",
		description:
			"The name “SWR” is derived from stale-while-revalidate, a HTTP cache invalidation strategy popularized by HTTP RFC 5861. SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.",
		image: "https://github.com/vercel.png",
		tags: ["data fetching"],
	},
	{
		name: "React Fetching Library",
		author: "Marcin Piela",
		gitHubRepo: "marcin-piela/react-fetching-library",
		npmPackage: "react-fetching-library",
		href: "https://marcin-piela.github.io/react-fetching-library",
		description:
			"Use hooks or FACC's (Function as Child Component) to fetch data in an easy way. No dependencies! Just React under the hood. Request and response interceptors allows you to easily customize connection with API (add authorization, refresh token, cache, etc). It uses Fetch API so it can be used in SSR apps (i.e. with isomorphic-fetch).",
		image: "https://github.com/marcin-piela.png",
		tags: ["data fetching"],
	},
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
		name: "Superagent",
		author: "TJ Holowaychuk",
		gitHubRepo: "visionmedia/superagent",
		npmPackage: "superagent",
		href: "https://github.com/visionmedia/superagent",
		description:
			"Small progressive client-side HTTP request library, and Node.js module with the same API, supporting many high-level HTTP client features.",
		image: "https://github.com/tj.png",
		tags: ["data fetching", "HTTP client"],
	},
	{
		name: "Ky",
		author: "Sindre Sorhus",
		gitHubRepo: "sindresorhus/ky",
		npmPackage: "ky",
		href: "https://github.com/sindresorhus/ky",
		description:
			"Ky is a tiny and elegant HTTP client based on the browser Fetch API. Ky targets modern browsers and Deno. It's just a tiny file with no dependencies.",
		image: "https://github.com/sindresorhus.png",
		tags: ["data fetching", "HTTP client"],
	},
	{
		name: "Popsicle",
		author: "Blake Embrey",
		gitHubRepo: "serviejs/popsicle",
		npmPackage: "popsicle",
		href: "https://github.com/serviejs/popsicle",
		description:
			"Advanced HTTP requests in node.js and browsers, using Servie, a set of standard, framework-agnostic HTTP interfaces for JavaScript servers and clients",
		image: "https://github.com/serviejs.png",
		tags: ["data fetching", "HTTP client"],
	},
	{
		name: "Stream HTTP",
		author: "John Hiesey",
		gitHubRepo: "jhiesey/stream-http",
		npmPackage: "stream-http",
		href: "https://github.com/jhiesey/stream-http",
		description:
			"This module is an implementation of Node's native http module for the browser. It tries to match Node's API and behavior as closely as possible, but some features aren't available, since browsers don't give nearly as much control over requests.",
		image: "https://github.com/jhiesey.png",
		tags: ["data fetching", "HTTP client"],
	},
	{
		name: "Emotion",
		author: "Emotion Team",
		gitHubRepo: "emotion-js/emotion",
		npmPackage: "@emotion/react",
		href: "https://emotion.sh/",
		description:
			"Emotion is a performant and flexible CSS-in-JS library. Building on many other CSS-in-JS libraries, it allows you to style apps quickly with string or object styles. It has predictable composition to avoid specificity issues with CSS. With source maps and labels, Emotion has a great developer experience and great performance with heavy caching in production.",
		image: "https://github.com/emotion-js.png",
		tags: ["styling", "CSS in JS"],
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
		name: "styled-components",
		author: "Glen Maddern & Maximilian Stoiber",
		gitHubRepo: "styled-components/styled-components",
		npmPackage: "styled-components",
		href: "https://www.styled-components.com/",
		description:
			"Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!",
		image: "https://github.com/styled-components.png",
		tags: ["styling", "CSS in JS"],
	},
	{
		name: "CSS Loader",
		author: "OpenJS Foundation",
		gitHubRepo: "webpack-contrib/css-loader",
		npmPackage: "css-loader",
		href: "https://github.com/webpack-contrib/css-loader",
		description:
			"Allows the use of CSS Modules in projects built using Webpack. Also interprets @import and url() like import/require() and will resolve them.",
		image: "https://github.com/webpack-contrib.png",
		tags: ["styling", "CSS modules", "CSS processor", "webpack"],
	},
	{
		name: "PostCSS",
		author: "Andrey Sitnik",
		gitHubRepo: "postcss/postcss",
		npmPackage: "postcss",
		href: "https://github.com/postcss/postcss",
		description:
			"PostCSS takes a CSS file and provides an API to analyze and modify its rules (by transforming them into an Abstract Syntax Tree). This API can then be used by plugins to do a lot of useful things, e.g., to find errors automatically, or to insert vendor prefixes.",
		image: "https://github.com/postcss.png",
		tags: ["styling", "CSS processor"],
	},
	{
		name: "Sass",
		author: "Google",
		gitHubRepo: "sass/dart-sass",
		npmPackage: "sass",
		href: "https://sass-lang.com/",
		description:
			"Sass is a very mature, stable, and powerful professional grade CSS extension language. It provides a superset of CSS with features like nesting, variables, imports and mixins.",
		image: "https://github.com/sass.png",
		tags: ["styling", "CSS processor"],
	},
	{
		name: "Aphrodite",
		author: "Khan Academy",
		gitHubRepo: "Khan/aphrodite",
		npmPackage: "aphrodite",
		href: "https://github.com/Khan/aphrodite",
		description:
			"Framework-agnostic CSS-in-JS with support for server-side rendering, browser prefixing, and minimum CSS generation.",
		image: "https://github.com/Khan.png",
		tags: ["styling", "CSS in JS"],
	},
	{
		name: "Radium",
		author: "Formidable Labs",
		gitHubRepo: "formidablelabs/radium",
		npmPackage: "radium",
		href: "https://github.com/formidablelabs/radium",
		description:
			"Radium is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS.",
		image: "https://github.com/FormidableLabs.png",
		tags: ["styling", "CSS in JS"],
	},
	{
		name: "Vanilla Extract",
		author: "SEEK",
		gitHubRepo: "seek-oss/vanilla-extract",
		npmPackage: "@vanilla-extract/css",
		href: "https://vanilla-extract.style/",
		description:
			"Use TypeScript as your preprocessor. Write type‑safe, locally scoped classes, variables and themes, then generate static CSS files at build time.",
		image: "https://github.com/seek-oss.png",
		tags: ["styling", "CSS processor", "CSS in JS", "CSS modules"],
	},
	{
		name: "Sprinkles",
		author: "SEEK",
		gitHubRepo: "seek-oss/vanilla-extract",
		npmPackage: "@vanilla-extract/sprinkles",
		href: "https://vanilla-extract.style/",
		description:
			"Generate a static set of custom utility classes and compose them either statically at build time, or dynamically at runtime, without the usual style generation overhead of CSS-in-JS. Basically, it’s like building your own zero-runtime, type-safe version of Tailwind, Styled System, etc.",
		image: "https://github.com/seek-oss.png",
		tags: ["styling", "utility-first CSS", "CSS in JS"],
	},
	{
		name: "MUI",
		author: "Material-UI",
		gitHubRepo: "mui-org/material-ui",
		npmPackage: "@mui/material",
		href: "https://mui.com/",
		description:
			"MUI is a simple and customizable component library to build faster, beautiful, and more accessible React applications. Follow your own design system, or start with Material Design.",
		image: "https://github.com/mui-org",
		tags: ["component library"],
	},
	{
		name: "React Bootstrap",
		author: "Stephen J. Collings, Matthew Honnibal, Pieter Vanderwerff",
		gitHubRepo: "https://github.com/react-bootstrap/react-bootstrap",
		npmPackage: "react-bootstrap",
		href: "https://react-bootstrap.github.io/",
		description:
			"The most popular front-end framework rebuilt for React. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.",
		image: "https://github.com/react-bootstrap.png",
		tags: ["component library"],
	},
	{
		name: "Fluent UI React",
		author: "Microsoft",
		gitHubRepo: "microsoft/fluentui",
		npmPackage: "@fluentui/react",
		href: "https://aka.ms/fluentui-react",
		description:
			"Fluent UI web represents a collection of utilities, React components, and web components for building web applications. It is the web version of Microsoft's cross-platform Fluent UI design framework.",
		image: "https://github.com/microsoft.png",
		tags: ["component library"],
	},
	{
		name: "Blueprint",
		author: "Palantir",
		gitHubRepo: "palantir/blueprint",
		npmPackage: "@blueprintjs/core",
		href: "http://blueprintjs.com/docs",
		image:
			"https://cloud.githubusercontent.com/assets/464822/20228152/d3f36dc2-a804-11e6-80ff-51ada2d13ea7.png",
		tags: ["component library"],
		description:
			"Blueprint is a React-based UI toolkit for the web. It is optimized for building complex, data-dense web interfaces for desktop applications which run in modern browsers and IE11. This is not a mobile-first UI toolkit.",
	},
	{
		name: "Semantic UI React",
		author: "Semantic Org",
		gitHubRepo: "Semantic-Org/Semantic-UI-React",
		npmPackage: "semantic-ui-react",
		href: "https://react.semantic-ui.com/",
		image:
			"https://github.com/Semantic-Org/Semantic-UI-React/raw/master/docs/public/logo.png",
		tags: ["component library"],
		description:
			"Semantic UI React is the official React integration for Semantic UI, a popular UI development framework.",
	},
	{
		name: "Headless UI",
		author: "Tailwind Labs",
		gitHubRepo: "tailwindlabs/headlessui",
		npmPackage: "@headlessui/react",
		href: "https://headlessui.dev/",
		image: "https://github.com/tailwindlabs.png",
		tags: ["component library"],
		description:
			"A set of completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
	},
	{
		name: "Ant Design",
		author: "Ant",
		gitHubRepo: "ant-design/ant-design",
		npmPackage: "antd",
		href: "https://ant.design/",
		image: "https://github.com/ant-design.png",
		tags: ["component library"],
		description: "An enterprise-class UI design language and React UI library.",
	},
	{
		name: "Radix Primitives",
		author: "Modulz",
		gitHubRepo: "radix-ui/primitives",
		npmPackage: "@radix-ui/primitives",
		href: "https://radix-ui.com/docs/primitives",
		image: "https://github.com/radix-ui.png",
		tags: ["component library"],
		description:
			"Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.",
	},
]
