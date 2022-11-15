import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [
	"VSCode",
	"Chrome",
	"Firefox",
	"Safari",
	"UI Design",
	"React native",
	"development",
] as const

export const tools: Tool<typeof toolTags[number]>[] = [
	{
		name: "useHooks",
		author: "ui.dev",
		description: "Easy to understand React hook recipes.",
		image: "https://github.com/uidotdev.png",
		href: "https://usehooks.com/",
		tags: [],
	},
	{
		name: "React Developer Tools for Chrome",
		author: "Facebook",
		description:
			"A tool that allows you to inspect a React tree, including the component hierarchy, props, state, and more.",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
		href: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en",
		tags: ["Chrome"],
	},
	{
		name: "React Developer Tools for Firefox",
		author: "Facebook",
		description:
			"A tool that allows you to inspect a React tree, including the component hierarchy, props, state, and more.",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
		href: "https://addons.mozilla.org/en-US/firefox/addon/react-devtools/",
		tags: ["Firefox"],
	},
	{
		name: "GraphQL Playground for Chrome",
		author: "Dustin R. Callaway",
		description: "Chrome extension for GraphQL Playground",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
		href: "https://chrome.google.com/webstore/detail/graphql-playground-for-ch/kjhjcgclphafojaeeickcokfbhlegecd?hl=en",
		tags: ["Chrome"],
	},
	{
		name: "GraphQL Playground for Firefox",
		author: "Francesco De Stefano",
		description: "Firefox extension for GraphQL Playground",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
		href: "https://addons.mozilla.org/en-US/firefox/addon/graphql-developer-tools/",
		tags: ["Firefox"],
	},
	{
		name: "Apollo Client Devtools for Chrome",
		author: "Apollo GraphQL",
		description: "GraphQL debugging tools for Apollo Client.",
		image: "https://github.com/apollographql.png",
		href: "https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=en",
		tags: ["Chrome"],
	},
	{
		name: "Apollo Client Devtools for Firefox",
		author: "Apollo GraphQL",
		description: "GraphQL debugging tools for Apollo Client.",
		image: "https://github.com/apollographql.png",
		href: "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools",
		tags: ["Firefox"],
	},
	{
		name: "ES7 React/Redux/GraphQL/React-Native snippets",
		author: "dsznajder",
		description:
			"Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
		href: "https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets",
		tags: ["VSCode"],
	},
	{
		name: "React Native Tools",
		author: "Microsoft",
		description: "Debugging and integrated commands for React Native",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
		href: "https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native",
		tags: ["VSCode", "React native"],
	},
	{
		name: "Simple React Snippets",
		author: "Burke Holland",
		description: "Dead simple React snippets you will actually use",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
		href: "https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets",
		tags: ["VSCode"],
	},
	{
		name: "Anima",
		author: "Anima",
		description:
			"Anima helps teams to create interactive prototypes using Figma, XD, & Sketch. Then automatically convert them to React, Vue & HTML code.",
		image: "https://a.storyblok.com/f/89137/x/e1adbda50a/anima-logo.svg",
		href: "https://www.animaapp.com/",
		tags: ["UI Design"],
	},
	{
		name: "Framer",
		author: "Framer",
		description:
			"A tool to create interactive animated prototypes and import them into your React app using framer-motion.",
		image: "https://framerusercontent.com/images/3ydDYhTbVKKzF5xDzZpZKoMmc.png",
		href: "https://www.framer.com/",
		tags: ["UI Design"],
	},
	{
		name: "Storybook",
		author: "Storybook",
		href: "https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/",
		description:
			"Storybook runs alongside your app in development mode. It helps you build UI components isolated from the business logic and context of your app.",
		image: "https://github.com/storybookjs.png",
		tags: ["UI Design", "development"],
	},
	{
		name: "TanStack Router",
		author: "Tanner Linsley",
		description: "A fully typesafe router with first-class search-param APIs and built-in caching, built for JS/TS",
		image:
			"https://pbs.twimg.com/profile_images/1474105199757180928/lsqWAJKv_400x400.jpg",
		href: "https://tanstack.com/router/v1/",
		tags: ["development"],
	},
]
