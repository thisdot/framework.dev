import { Tool } from "@framework/system/src/models/tool"

export const toolTags = [
	"chrome",
	"VSCode",
	"RxJS",
	"development",
	"testing",
	"UI Design",
] as const

export const tools: Tool<typeof toolTags[number]>[] = [
	{
		name: "Angular Developer Tools for Chrome",
		author: "Google",
		description:
			"A tool that allows you to inspect Angular Components, their state, properties, and further debugging capabilities as it relates to them.",
		image: "https://github.com/angular.png",
		href: "https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh",
		tags: ["chrome"],
	},
	{
		name: "NgRx Store Devtools",
		author: "NgRx",
		description: "A tool that allows you to inspect the NgRx Store state.",
		image: "https://github.com/ngrx.png",
		href: "https://ngrx.io/guide/store-devtools",
		tags: [],
	},
	{
		name: "Angular Snippets",
		author: "John Papa",
		description:
			"Snippets to help you develop faster in Angular, TypeScript, and HTML.",
		image: "https://github.com/angular.png",
		href: "https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2",
		tags: ["VSCode"],
	},
	{
		name: "RxJS Operator Decision Tree",
		author: "RxJS",
		description: "Need help deciding which operator you need? This can help!",
		image: "https://rxjs.dev/assets/images/logos/Rx_Logo_S.png",
		href: "https://rxjs.dev/operator-decision-tree",
		tags: ["RxJS"],
	},
	{
		name: "Angular CLI",
		author: "Google",
		description:
			"The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.",
		image: "https://github.com/angular.png",
		href: "https://angular.io/cli",
		tags: ["development"],
	},
	{
		name: "Angular ESLint",
		author: "Angular ESLint",
		description:
			"An Angular CLI Builder which is used to execute ESLint on your Angular projects using standard commands such as ng lint.",
		image: "https://github.com/angular-eslint.png",
		href: "https://github.com/angular-eslint/angular-eslint",
		tags: ["development"],
	},
	{
		name: "Angular Playground",
		author: "SoCreate",
		description:
			"An open source tool for building enterprise angular components, directives, and pipes in isolation.",
		image:
			"https://raw.githubusercontent.com/SoCreate/angular-playground/HEAD/assets/angular-playground.png",
		href: "https://angularplayground.it/",
		tags: ["development"],
	},
	{
		name: "angular-prerender",
		author: "Christoph Guttandin",
		href: "https://github.com/chrisguttandin/angular-prerender",
		description:
			"This command line tool is meant to simplify the build process of static Angular apps. It works by analyzing the config file created by the Angular CLI.",
		image:
			"https://repository-images.githubusercontent.com/142886533/bd323700-e8ff-11e9-9645-75bc009ee359",
		tags: ["development"],
	},
	{
		name: "lite-server",
		author: "John Papa & Christopher Martin",
		href: "https://github.com/johnpapa/lite-server",
		description:
			"Lightweight development node server for serving a web app, providing a fallback for browser history API, loading in the browser, and injecting scripts on the fly.",
		image: "https://github.com/johnpapa.png",
		tags: ["development"],
	},
	{
		name: "ng-mocks",
		author: "Isaac Datlof",
		href: "https://ng-mocks.sudo.eu/",
		description:
			"ng-mocks is a testing library which helps with mocking services, components, directives, pipes and modules in tests for Angular applications.",
		image: "https://github.com/ike18t.png",
		tags: ["testing"],
	},
	{
		name: "Storybook",
		author: "Storybook",
		href: "https://storybook.js.org/tutorials/intro-to-storybook/angular/en/get-started/",
		description:
			"Storybook runs alongside your app in development mode. It helps you build UI components isolated from the business logic and context of your app.",
		image: "https://github.com/storybookjs.png",
		tags: ["UI Design", "development"],
	},
]
