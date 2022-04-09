import { Tool } from "@framework/system/src/models/tool"

export const toolTags = ["Chrome", "VSCode", "RxJS"] as const

export const tools: Tool<typeof toolTags[number]>[] = [
	{
		name: "Angular Developer Tools for Chrome",
		author: "Google",
		description:
			"A tool that allows you to inspect Angaular Components, their state, properties, and further debugging capabilities as it relates to them.",
		image: "https://github.com/angular.png",
		href: "https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh",
		tags: ["Chrome"],
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
]
