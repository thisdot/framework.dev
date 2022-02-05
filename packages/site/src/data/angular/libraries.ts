import { Library } from "@framework/system/src/models/library"

export const libraryTags = [
	"state management",
	"internationalization",
	"framework",
	"documentation",
	"styling",
	"component",
] as const

export const libraries: Library<typeof libraryTags[number]>[] = [
	{
		name: "Angular CLI",
		author: "Google",
		gitHubRepo: "angular/angular-cli",
		npmPackage: "@angular/cli",
		href: "https://angular.io/cli",
		description:
			"The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell",
		image: "https://github.com/angular.png",
		tags: ["framework"],
	},
	{
		name: "NgRx Store",
		author: "NgRx",
		gitHubRepo: "ngrx/platform",
		npmPackage: "@ngrx/store",
		href: "https://ngrx.io/guide/store",
		description:
			"Store is RxJS powered global state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular.",
		image: "https://github.com/ngrx.png",
		tags: ["state management"],
	},
	{
		name: "NgRx Effects",
		author: "NgRx",
		gitHubRepo: "ngrx/platform",
		npmPackage: "@ngrx/effects",
		href: "https://ngrx.io/guide/effects",
		description:
			"Effects are an RxJS powered side effect model for Store. Effects use streams to provide new sources of actions to reduce state based on external interactions such as network requests, web socket messages and time-based events.",
		image: "https://github.com/ngrx.png",
		tags: ["state management"],
	},
	{
		name: "RxJS",
		author: "ReactiveX",
		gitHubRepo: "reactivex/rxjs",
		npmPackage: "rxjs",
		href: "https://rxjs.dev/guide/overview",
		description:
			"RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.",
		image:
			"https://raw.githubusercontent.com/ReactiveX/rxjs/master/docs_app/src/assets/images/logos/Rx_Logo_S.png",
		tags: ["state management"],
	},
	{
		name: "Transloco",
		author: "Transloco",
		gitHubRepo: "ngneat/transloco",
		npmPackage: "@ngneat/transloco",
		href: "https://ngneat.github.io/transloco/docs/installation",
		description: "The internationalization (i18n) library for Angular",
		image: "https://raw.githubusercontent.com/ngneat/transloco/master/logo.svg",
		tags: ["internationalization"],
	},
	{
		name: "Nx",
		author: "Nrwl",
		gitHubRepo: "nrwl/nx",
		npmPackage: "@nrwl/nx",
		href: "https://nx.dev/getting-started/intro",
		description:
			"Nx is an open source build system featuring a lot of monorepo features that help enterprise teams develop Angular at scale.",
		image: "https://raw.githubusercontent.com/nrwl/nx/master/images/nx.png",
		tags: ["framework"],
	},
	{
		name: "Angular Material",
		author: "Google",
		gitHubRepo: "angular/components",
		npmPackage: "@angular/material",
		href: "https://material.angular.io/guide/getting-started",
		description: "Material Design UI components for Angular applications.",
		image: "https://github.com/angular.png",
		tags: ["styling", "component"],
	},
	{
		name: "Compodoc",
		author: "Compodoc",
		gitHubRepo: "compodoc/compodoc",
		npmPackage: "@compodoc/compodoc",
		href: "https://compodoc.app/guides/getting-started.html",
		description:
			"A documentation tool for Angular applications, that can generate static documentation of your application.",
		image: "https://github.com/compodoc.png",
		tags: ["documentation"],
	},
]
