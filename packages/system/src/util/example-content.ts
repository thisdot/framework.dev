import { type Course, courseIndexMetadata } from '../models/course'
import { type Library, libraryIndexMetadata } from '../models/library'
import { type Book, bookIndexMetadata } from '../models/book'
import { type Podcast, podcastIndexMetadata } from '../models/podcast'
import { type Community, communityIndexMetadata } from '../models/community'
import { type Company } from '../models/company'
import { type CodeExample } from '../models/code-example'
import { type Tool, toolIndexMetadata } from '../models/tool'
import { type AllCategories } from '../models/all-categories'
import { type Blog, blogIndexMetadata } from '../models/blog'
import { LibraryTag } from '../models/library-tag'

export const exampleTags = [
	'accessibility',
	'state management',
	'redux',
] as const

export type ExampleTag = (typeof exampleTags)[number]

export const exampleCourses: Course<ExampleTag>[] = [
	{
		title: 'Code 15 React Projects - Complete Course',
		author: 'freeCodeCamp',
		image: './example-assets/logo-1.png',
		description:
			'Improve your skills with the React JavaScript library by building 15 projects using React.',
		paymentType: 'free',
		level: 'advanced',
		format: 'video',
		href: 'https://www.freecodecamp.org/news/solidify-your-react-skills-by-building-15-projects/',
		tags: ['accessibility', 'state management'],
	},
	{
		title: 'Fullstack React',
		author: 'newline',
		image: './example-assets/logo-3.png',
		description:
			'The up-to-date, in-depth, complete guide to React and friends.',
		paymentType: 'paid',
		level: 'beginner',
		format: 'text',
		href: 'https://www.newline.co/fullstack-react/',
		tags: [],
	},
	{
		title: 'Mastering React',
		author: 'Mosh',
		image: './example-assets/logo-2.png',
		description:
			"If you're on React 15, take your components to new levels with these advanced patterns, lectures, exercises, and more.",
		paymentType: 'paid',
		level: 'intermediate',
		format: 'interactive',
		href: 'https://codewithmosh.com/p/mastering-react',
		tags: ['state management'],
	},
]

export const exampleLibraries: Library[] = [
	{
		name: 'Flux',
		author: 'Facebook',
		repo: 'https://www.github.com/facebook/flux',
		package: 'https://www.example.com/package/flux',
		href: 'https://facebook.github.io/flux/',
		description:
			'The original state management architecture for React utilizing a unidirectional data flow. Now deprecated and in maintenance mode.',
		image:
			'https://camo.githubusercontent.com/d281ce16f30146daddb2800415d6c177fccf9a7f198d21aacfe81f0f6ebb1490/68747470733a2f2f66616365626f6f6b2e6769746875622e696f2f666c75782f696d672f666c75782d6c6f676f2d636f6c6f722e737667',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'JavaScript',
	},
	{
		name: 'Redux',
		author: 'Dan Abramov',
		repo: 'https://www.github.com/reduxjs/redux',
		package: 'https://www.npmjs.com/package/redux',
		href: 'https://redux.js.org/',
		description:
			'A predictable, centralized, debuggable and flexible state container for JS apps inspired by the Flux and Elm architectures.',
		image: 'https://github.com/reduxjs.png',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'MobX',
		author: 'Michel Weststrate',
		repo: 'https://www.github.com/mobxjs/mobx',
		package: 'https://www.npmjs.com/package/mobx',
		href: 'https://mobx.js.org/',
		description:
			'A battle tested library that makes state management simple and scalable by transparently applying functional reactive programming. Uses observable data structures instead of actions and reducers.',
		image:
			'https://camo.githubusercontent.com/0dc3b9afa37acc792f49624b1f8dd364b55c9107167fd291ffde1d81917aceba/68747470733a2f2f6d6f62782e6a732e6f72672f6173736574732f6d6f62782e706e67',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'Apollo Client',
		author: 'Apollo GraphQL',
		repo: 'https://www.github.com/apollographql/apollo-client',
		package: 'https://www.npmjs.com/package/@apollo/client',
		href: 'https://www.apollographql.com/docs/react/',
		description:
			'A fully-featured caching GraphQL client with integrations for React that also has functionality for managing local state.',
		image: 'https://github.com/apollographql.png',
		tags: [LibraryTag.DATA_FETCHING, LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'XState',
		author: 'David Khourshid',
		repo: 'https://www.github.com/statelyai/xstate',
		package: 'https://www.npmjs.com/package/xstate',
		href: 'https://xstate.js.org/docs/',
		description:
			'JavaScript and TypeScript finite state machines and statecharts for the modern web.',
		image: 'https://github.com/statelyai.png',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'Recoil',
		author: 'Facebook',
		repo: 'https://www.github.com/facebookexperimental/Recoil',
		package: 'https://www.npmjs.com/package/recoil',
		href: 'https://recoiljs.org/',
		description:
			'Recoil lets you create a data-flow graph that flows from atoms (shared state) through selectors (pure functions) and down into your React components. Atoms are units of state that components can subscribe to. Selectors transform this state either synchronously or asynchronously.',
		image:
			'https://pbs.twimg.com/profile_images/1377116487933030410/kyyHFjc2_400x400.jpg',
		tags: [LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'React Query',
		author: 'Tanner Linsley',
		repo: 'https://www.github.com/tannerlinsley/react-query',
		package: 'https://www.npmjs.com/package/react-query',
		href: 'https://react-query.tanstack.com/',
		description:
			'Writing your data fetching logic by hand is over. Tell React Query where to get your data and how fresh you need it to be and the rest is automatic. React Query handles caching, background updates and stale data out of the box with zero-configuration.',
		image:
			'https://react-query.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg',
		tags: [LibraryTag.DATA_FETCHING, LibraryTag.STATE_MANAGEMENT],
		language: 'TypeScript',
	},
	{
		name: 'SWR',
		author: 'Vercel',
		repo: 'https://www.github.com/vercel/swr',
		package: 'https://www.npmjs.com/package/swr',
		href: 'https://swr.vercel.app/',
		description:
			'The name “SWR” is derived from stale-while-revalidate, a HTTP cache invalidation strategy popularized by HTTP RFC 5861. SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.',
		image: 'https://github.com/vercel.png',
		tags: [LibraryTag.HTTP_CLIENT],
		language: 'TypeScript',
	},
	{
		name: 'React Fetching Library',
		author: 'Marcin Piela',
		repo: 'https://www.github.com/marcin-piela/react-fetching-library',
		package: 'https://www.npmjs.com/package/react-fetching-library',
		href: 'https://marcin-piela.github.io/react-fetching-library',
		description:
			"Use hooks or FACC's (Function as Child Component) to fetch data in an easy way. No dependencies! Just React under the hood. Request and response interceptors allows you to easily customize connection with API (add authorization, refresh token, cache, etc). It uses Fetch API so it can be used in SSR apps (i.e. with isomorphic-fetch).",
		image: 'https://github.com/marcin-piela.png',
		tags: [LibraryTag.DATA_FETCHING],
		language: 'TypeScript',
	},
	{
		name: 'Axios',
		author: 'Matt Zabriskie',
		repo: 'https://www.github.com/axios/axios',
		package: 'https://www.npmjs.com/package/axios',
		href: 'https://axios-http.com/',
		description:
			'Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.',
		image: 'https://github.com/axios.png',
		tags: [LibraryTag.HTTP_CLIENT],
		language: 'JavaScript',
	},
	{
		name: 'Superagent',
		author: 'TJ Holowaychuk',
		repo: 'https://www.github.com/visionmedia/superagent',
		package: 'https://www.npmjs.com/package/superagent',
		href: 'https://github.com/visionmedia/superagent',
		description:
			'Small progressive client-side HTTP request library, and Node.js module with the same API, supporting many high-level HTTP client features.',
		image: 'https://github.com/tj.png',
		tags: [LibraryTag.HTTP_CLIENT],
		language: 'JavaScript',
	},
	{
		name: 'Ky',
		author: 'Sindre Sorhus',
		repo: 'https://www.github.com/sindresorhus/ky',
		package: 'https://www.npmjs.com/package/ky',
		href: 'https://github.com/sindresorhus/ky',
		description:
			"Ky is a tiny and elegant HTTP client based on the browser Fetch API. Ky targets modern browsers and Deno. It's just a tiny file with no dependencies.",
		image: 'https://github.com/sindresorhus.png',
		tags: [LibraryTag.HTTP_CLIENT],
		language: 'TypeScript',
	},
	{
		name: 'Popsicle',
		author: 'Blake Embrey',
		repo: 'https://www.github.com/serviejs/popsicle',
		package: 'https://www.npmjs.com/package/popsicle',
		href: 'https://github.com/serviejs/popsicle',
		description:
			'Advanced HTTP requests in node.js and browsers, using Servie, a set of standard, framework-agnostic HTTP interfaces for JavaScript servers and clients',
		image: 'https://github.com/serviejs.png',
		tags: [LibraryTag.HTTP_CLIENT],
		language: 'TypeScript',
	},
	{
		name: 'Stream HTTP',
		author: 'John Hiesey',
		repo: 'https://www.github.com/jhiesey/stream-http',
		package: 'https://www.npmjs.com/package/stream-http',
		href: 'https://github.com/jhiesey/stream-http',
		description:
			"This module is an implementation of Node's native http module for the browser. It tries to match Node's API and behavior as closely as possible, but some features aren't available, since browsers don't give nearly as much control over requests.",
		image: 'https://github.com/jhiesey.png',
		tags: [LibraryTag.HTTP_CLIENT],
		language: 'JavaScript',
	},
	{
		name: 'Emotion',
		author: 'Emotion Team',
		repo: 'https://www.github.com/emotion-js/emotion',
		package: 'https://www.npmjs.com/package/@emotion/react',
		href: 'https://emotion.sh/',
		description:
			'Emotion is a performant and flexible CSS-in-JS library. Building on many other CSS-in-JS libraries, it allows you to style apps quickly with string or object styles. It has predictable composition to avoid specificity issues with CSS. With source maps and labels, Emotion has a great developer experience and great performance with heavy caching in production.',
		image: 'https://github.com/emotion-js.png',
		tags: [LibraryTag.STYLING],
		language: 'TypeScript',
	},
	{
		name: 'TailwindCSS',
		author: 'Adam Wathan & Jonathan Reinink',
		repo: 'https://www.github.com/tailwindlabs/tailwindcss',
		package: 'https://www.npmjs.com/package/tailwindcss',
		href: 'https://tailwindcss.com/',
		description:
			'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
		image: 'https://github.com/tailwindlabs.png',
		tags: [LibraryTag.STYLING],
		language: 'CSS',
	},
	{
		name: 'styled-components',
		author: 'Glen Maddern & Maximilian Stoiber',
		repo: 'https://www.github.com/styled-components/styled-components',
		package: 'https://www.npmjs.com/package/styled-components',
		href: 'https://www.styled-components.com/',
		description:
			'Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!',
		image: 'https://github.com/styled-components.png',
		tags: [LibraryTag.STYLING],
		language: 'TypeScript',
	},
	{
		name: 'CSS Loader',
		author: 'OpenJS Foundation',
		repo: 'https://www.github.com/webpack-contrib/css-loader',
		package: 'https://www.npmjs.com/package/css-loader',
		href: 'https://github.com/webpack-contrib/css-loader',
		description:
			'Allows the use of CSS Modules in projects built using Webpack. Also interprets @import and url() like import/require() and will resolve them.',
		image: 'https://github.com/webpack-contrib.png',
		tags: [LibraryTag.TOOLING, LibraryTag.STYLING],
		language: 'NodeJS',
	},
	{
		name: 'PostCSS',
		author: 'Andrey Sitnik',
		repo: 'https://www.github.com/postcss/postcss',
		package: 'https://www.npmjs.com/package/postcss',
		href: 'https://github.com/postcss/postcss',
		description:
			'PostCSS takes a CSS file and provides an API to analyze and modify its rules (by transforming them into an Abstract Syntax Tree). This API can then be used by plugins to do a lot of useful things, e.g., to find errors automatically, or to insert vendor prefixes.',
		image: 'https://github.com/postcss.png',
		tags: [LibraryTag.TOOLING],
		language: 'TypeScript',
	},
	{
		name: 'Sass',
		author: 'Google',
		repo: 'https://www.github.com/sass/dart-sass',
		package: 'https://www.npmjs.com/package/sass',
		href: 'https://sass-lang.com/',
		description:
			'Sass is a very mature, stable, and powerful professional grade CSS extension language. It provides a superset of CSS with features like nesting, variables, imports and mixins.',
		image: 'https://github.com/sass.png',
		tags: [LibraryTag.TOOLING, LibraryTag.STYLING],
		language: 'NodeJS',
	},
	{
		name: 'Aphrodite',
		author: 'Khan Academy',
		repo: 'https://www.github.com/Khan/aphrodite',
		package: 'https://www.npmjs.com/package/aphrodite',
		href: 'https://github.com/Khan/aphrodite',
		description:
			'Framework-agnostic CSS-in-JS with support for server-side rendering, browser prefixing, and minimum CSS generation.',
		image: 'https://github.com/Khan.png',
		tags: [LibraryTag.STYLING],
		language: 'JavaScript',
	},
	{
		name: 'Radium',
		author: 'Formidable Labs',
		repo: 'https://www.github.com/formidablelabs/radium',
		package: 'https://www.npmjs.com/package/radium',
		href: 'https://github.com/formidablelabs/radium',
		description:
			'Radium is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS.',
		image: 'https://github.com/FormidableLabs.png',
		tags: [LibraryTag.STYLING],
		language: 'JavaScript',
	},
	{
		name: 'Vanilla Extract',
		author: 'SEEK',
		repo: 'https://www.github.com/seek-oss/vanilla-extract',
		package: 'https://www.npmjs.com/package/@vanilla-extract/css',
		href: 'https://vanilla-extract.style/',
		description:
			'Use TypeScript as your preprocessor. Write type‑safe, locally scoped classes, variables and themes, then generate static CSS files at build time.',
		image: 'https://github.com/seek-oss.png',
		tags: [LibraryTag.STYLING],
		language: 'TypeScript',
	},
	{
		name: 'Sprinkles',
		author: 'SEEK',
		repo: 'https://www.github.com/seek-oss/vanilla-extract',
		package: 'https://www.npmjs.com/package/@vanilla-extract/sprinkles',
		href: 'https://vanilla-extract.style/',
		description:
			'Generate a static set of custom utility classes and compose them either statically at build time, or dynamically at runtime, without the usual style generation overhead of CSS-in-JS. Basically, it’s like building your own zero-runtime, type-safe version of Tailwind, Styled System, etc.',
		image: 'https://github.com/seek-oss.png',
		tags: [LibraryTag.STYLING],
		language: 'TypeScript',
	},
	{
		name: 'MUI',
		author: 'Material-UI',
		repo: 'https://www.github.com/mui-org/material-ui',
		package: 'https://www.npmjs.com/package/@mui/material',
		href: 'https://mui.com/',
		description:
			'MUI is a simple and customizable component library to build faster, beautiful, and more accessible React applications. Follow your own design system, or start with Material Design.',
		image: 'https://github.com/mui-org.png',
		tags: [LibraryTag.COMPONENT],
		language: 'JavaScript',
	},
	{
		name: 'React Bootstrap',
		author: 'Stephen J. Collings, Matthew Honnibal, Pieter Vanderwerff',
		repo: 'https://www.github.com/react-bootstrap/react-bootstrap',
		package: 'https://www.npmjs.com/package/react-bootstrap',
		href: 'https://react-bootstrap.github.io/',
		description:
			'The most popular front-end framework rebuilt for React. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.',
		image: 'https://github.com/react-bootstrap.png',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'Fluent UI React',
		author: 'Microsoft',
		repo: 'https://www.github.com/microsoft/fluentui',
		package: 'https://www.npmjs.com/package/@fluentui/react',
		href: 'https://aka.ms/fluentui-react',
		description:
			"Fluent UI web represents a collection of utilities, React components, and web components for building web applications. It is the web version of Microsoft's cross-platform Fluent UI design framework.",
		image: 'https://github.com/microsoft.png',
		tags: [LibraryTag.COMPONENT],
		language: 'TypeScript',
	},
	{
		name: 'Blueprint',
		author: 'Palantir',
		repo: 'https://www.github.com/palantir/blueprint',
		package: 'https://www.npmjs.com/package/@blueprintjs/core',
		href: 'https://blueprintjs.com/docs',
		image:
			'https://cloud.githubusercontent.com/assets/464822/20228152/d3f36dc2-a804-11e6-80ff-51ada2d13ea7.png',
		tags: [LibraryTag.COMPONENT],
		description:
			'Blueprint is a React-based UI toolkit for the web. It is optimized for building complex, data-dense web interfaces for desktop applications which run in modern browsers and IE11. This is not a mobile-first UI toolkit.',
		language: 'TypeScript',
	},
	{
		name: 'Semantic UI React',
		author: 'Semantic Org',
		repo: 'https://www.github.com/Semantic-Org/Semantic-UI-React',
		package: 'https://www.npmjs.com/package/semantic-ui-react',
		href: 'https://react.semantic-ui.com/',
		image:
			'https://github.com/Semantic-Org/Semantic-UI-React/raw/master/docs/public/logo.png',
		tags: [LibraryTag.COMPONENT],
		description:
			'Semantic UI React is the official React integration for Semantic UI, a popular UI development framework.',
		language: 'TypeScript',
	},
	{
		name: 'Headless UI',
		author: 'Tailwind Labs',
		repo: 'https://www.github.com/tailwindlabs/headlessui',
		package: 'https://www.npmjs.com/package/@headlessui/react',
		href: 'https://headlessui.dev/',
		image: 'https://github.com/tailwindlabs.png',
		tags: [LibraryTag.COMPONENT],
		description:
			'A set of completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
		language: 'TypeScript',
	},
	{
		name: 'Ant Design',
		author: 'Ant',
		repo: 'https://www.github.com/ant-design/ant-design',
		package: 'https://www.npmjs.com/package/antd',
		href: 'https://ant.design/',
		image: 'https://github.com/ant-design.png',
		tags: [LibraryTag.COMPONENT],
		description: 'An enterprise-class UI design language and React UI library.',
		language: 'TypeScript',
	},
	{
		name: 'Radix Primitives',
		author: 'Modulz',
		repo: 'https://www.github.com/radix-ui/primitives',
		package: 'https://www.npmjs.com/package/@radix-ui/react-primitive',
		href: 'https://radix-ui.com/docs/primitives',
		image: 'https://github.com/radix-ui.png',
		tags: [LibraryTag.COMPONENT],
		description:
			'Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.',
		language: 'TypeScript',
	},
	{
		name: 'Formik',
		author: 'Formium',
		repo: 'https://www.github.com/formium/formik',
		package: 'https://www.npmjs.com/package/formik',
		href: 'https://formik.org/',
		image: 'https://github.com/formium.png',
		tags: [LibraryTag.FORMS],
		description:
			"Build forms in React, without the tears. Formik takes care of the repetitive and annoying stuff—keeping track of values/errors/visited fields, orchestrating validation, and handling submission—so you don't have to. This means you spend less time wiring up state and change handlers and more time focusing on your business logic.",
		language: 'TypeScript',
	},
	{
		name: 'Formsy React',
		author: 'The Formsy Authors',
		repo: 'https://www.github.com/formsy/formsy-react',
		package: 'https://www.npmjs.com/package/formsy-react',
		href: 'https://github.com/formsy/formsy-react',
		image: 'https://github.com/formsy.png',
		tags: [LibraryTag.FORMS],
		description:
			'christianalfoni wrote an article on forms and validation with React, Nailing that validation with React JS, the result of that was this library. The main concept is that forms, inputs, and validation are done very differently across developers and projects. This React component aims to be that “sweet spot” between flexibility and reusability.',
		language: 'TypeScript',
	},
	{
		name: 'React Final Form',
		author: 'Erik Rasmussen',
		repo: 'https://www.github.com/final-form/react-final-form',
		package: 'https://www.npmjs.com/package/react-final-form',
		href: 'https://final-form.org/react',
		image: 'https://github.com/final-form.png',
		tags: [LibraryTag.FORMS],
		description:
			'High performance, zero-dependency subscription-based form state management for React',
		language: 'JavaScript',
	},
	{
		name: 'React Hook Form',
		author: 'Beier (Bill) Luo',
		repo: 'https://www.github.com/react-hook-form/react-hook-form',
		package: 'https://www.npmjs.com/package/react-hook-form',
		href: 'https://react-hook-form.com/',
		image: 'https://github.com/react-hook-form.png',
		tags: [LibraryTag.FORMS],
		description:
			'Performant, flexible and extensible forms with easy-to-use validation. React Hook Form reduces the amount of code you need to write while removing unnecessary re-renders.',
		language: 'TypeScript',
	},
	{
		name: 'KendoReact UI',
		author: 'Telerik',
		repo: 'https://www.github.com/telerik/kendo-react',
		package: 'https://www.npmjs.com/package/@progress/kendo-react-all',
		href: 'https://www.telerik.com/kendo-react-ui',
		image: 'https://github.com/telerik.png',
		tags: [LibraryTag.COMPONENT],
		description:
			'KendoReact is a commercial UI library designed and built for developing business applications with React. Every UI component in the KendoReact suite has been built from the ground-up specifically for React. Please keep in mind that in order to use the npm packages you should either sign up for a 30-day free trial, or be a licensed developer, as KendoReact has a commercial license.',
		language: 'JavaScript',
	},
	{
		name: 'Redux Form',
		author: 'Erik Rasmussen',
		repo: 'https://www.github.com/redux-form/redux-form',
		package: 'https://www.npmjs.com/package/redux-form',
		href: 'https://redux-form.com/8.3.0/',
		image: 'https://github.com/redux-form.png',
		tags: [LibraryTag.FORMS],
		description:
			'Manage your form state in Redux. This library is largely deprecated in favor of React Final Form.',
		language: 'JavaScript',
	},
	{
		name: 'Astro',
		author: 'Fred K. Schott',
		repo: 'https://www.github.com/withastro/astro',
		package: 'https://www.npmjs.com/package/astro',
		href: 'https://astro.build/',
		image: 'https://github.com/withastro.png',
		tags: [LibraryTag.FRAMEWORKS],
		description:
			'Astro is a fresh but familiar approach to building websites. Astro combines decades of proven performance best practices with the DX improvements of the component-oriented era. Use your favorite JavaScript framework and automatically ship the bare-minimum amount of JavaScript—by default.',
		language: 'TypeScript',
	},
	{
		name: 'Redwood',
		author: 'Redwood',
		repo: 'https://www.github.com/redwoodjs/redwood',
		package: 'https://www.npmjs.com/package/@redwoodjs/core',
		href: 'https://redwoodjs.com/',
		image: 'https://github.com/redwoodjs.png',
		tags: [LibraryTag.FRAMEWORKS],
		description:
			"Redwood is an opinionated, full-stack, serverless-ready web application framework that will allow you to build and deploy with ease. Imagine a React frontend, statically delivered by CDN, that talks via GraphQL to your backend running on AWS Lambdas (or containers) around the world, all deployable with just a git push—that's Redwood.",
		language: 'TypeScript',
	},
	{
		name: 'Create React App',
		author: 'Facebook',
		repo: 'https://www.github.com/facebook/create-react-app',
		package: 'https://www.npmjs.com/package/create-react-app',
		href: 'https://create-react-app.dev/',
		image: 'https://create-react-app.dev/img/logo.svg',
		tags: [LibraryTag.TOOLING],
		description:
			"Create React apps with no build configuration. You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.",
		language: 'TypeScript',
	},
	{
		name: 'Next.js',
		author: 'Vercel',
		repo: 'https://www.github.com/vercel/next.js',
		package: 'https://www.npmjs.com/package/next',
		href: 'https://nextjs.org/',
		image:
			'https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67',
		tags: [LibraryTag.FRAMEWORKS, LibraryTag.WEB_SERVERS],
		description:
			'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
		language: 'TypeScript',
	},
	{
		name: 'Gatsby',
		author: 'Gatsbyjs',
		repo: 'https://www.github.com/gatsbyjs/gatsby',
		package: 'https://www.npmjs.com/package/gatsby',
		href: 'https://www.gatsbyjs.com/',
		image: 'https://github.com/gatsbyjs.png',
		tags: [LibraryTag.FRAMEWORKS, LibraryTag.CLI],
		description:
			'Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.   It combines the control and scalability of dynamically rendered sites with the speed of static-site generation, creating a whole new web of possibilities.',
		language: 'TypeScript',
	},
	{
		name: 'Eleventy',
		author: 'Zach Leatherman',
		repo: 'https://www.github.com/11ty/eleventy',
		package: 'https://www.npmjs.com/package/@11ty/eleventy',
		href: 'https://www.11ty.dev/',
		image: 'https://github.com/11ty.png',
		tags: [LibraryTag.FRAMEWORKS],
		description:
			'A simpler static site generator. An alternative to Jekyll. Written in JavaScript. Transforms a directory of templates (of varying types) into HTML. Works with HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug, and JavaScript Template Literals.',
		language: 'JavaScript',
	},
	{
		name: 'Storybook',
		author: 'Storybook',
		repo: 'https://www.github.com/storybookjs/storybook',
		package: 'https://www.npmjs.com/package/@storybook/react',
		href: 'https://storybook.js.org/',
		image: 'https://github.com/storybookjs.png',
		tags: [LibraryTag.DOCUMENTATION, LibraryTag.TOOLING],
		description:
			'Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.',
		language: 'TypeScript',
	},
	{
		name: 'React Router',
		author: 'Remix Software',
		repo: 'https://www.github.com/remix-run/react-router',
		package: 'https://www.npmjs.com/package/react-router',
		href: 'https://github.com/remix-run/react-router',
		image: 'https://github.com/remix-run.png',
		tags: [LibraryTag.ROUTING],
		description:
			'React Router is a lightweight, fully-featured routing library for the React JavaScript library. React Router runs everywhere that React runs; on the web, on the server (using node.js), and on React Native.',
		language: 'TypeScript',
	},
	{
		name: 'Reach Router',
		author: 'Ryan Florence',
		repo: 'https://www.github.com/reach/router',
		package: 'https://www.npmjs.com/package/@reach/router',
		href: 'https://reach.tech/router',
		image: 'https://github.com/reach.png',
		tags: [LibraryTag.ROUTING],
		description:
			'Reach Router is a small, simple router for React that borrows from React Router, Ember, and Preact Router. Reach Router has a small footprint, supports only simple route patterns by design, and has strong (but experimental) accessibility features.',
		language: 'JavaScript',
	},
	{
		name: 'Framer Motion',
		author: 'Framer',
		repo: 'https://www.github.com/framer/motion',
		package: 'https://www.npmjs.com/package/framer-motion',
		href: 'https://www.framer.com/docs/',
		image:
			'https://user-images.githubusercontent.com/22095598/123793419-f5528800-d8e1-11eb-8c5f-e2dad45a9c81.png',
		tags: [LibraryTag.ANIMATION],
		description:
			'Motion is a production-ready motion library for React from Framer. It brings declarative animations, effortless layout transitions and gestures while maintaining HTML and SVG semantics.',
		language: 'TypeScript',
	},
	{
		name: 'React Spring',
		author: 'Paul Henschel and contributors',
		repo: 'https://www.github.com/pmndrs/react-spring',
		package: 'https://www.npmjs.com/package/react-spring',
		href: 'https://www.react-spring.io/',
		image:
			'https://camo.githubusercontent.com/973c99d17e4ce72d08c4433449045d8391948711f11ac5f328a585e2a7bc8663/68747470733a2f2f692e696d6775722e636f6d2f515a6f776e68672e706e67',
		tags: [LibraryTag.ANIMATION],
		description:
			'react-spring is a spring-physics based animation library that should cover most of your UI related animation needs. It gives you tools flexible enough to confidently cast your ideas into moving interfaces.',
		language: 'TypeScript',
	},
	{
		name: 'React Motion',
		author: 'Multiple contributors',
		repo: 'https://www.github.com/chenglou/react-motion',
		package: 'https://www.npmjs.com/package/react-motion',
		href: 'https://github.com/chenglou/react-motion',
		image: 'https://github.com/chenglou.png',
		tags: [LibraryTag.ANIMATION],
		description:
			"For 95% of use-cases of animating components, we don't have to resort to using hard-coded easing curves and duration. Set up a stiffness and damping for your UI element, and let the magic of physics take care of the rest. This way, you don't have to worry about petty situations such as interrupted animation behavior. It also greatly simplifies the API.",
		language: 'JavaScript',
	},
	{
		name: 'React Toastify',
		author: 'Fadi Khadra',
		repo: 'https://www.github.com/fkhadra/react-toastify',
		package: 'https://www.npmjs.com/package/react-toastify',
		href: 'https://fkhadra.github.io/react-toastify/introduction',
		image: 'https://github.com/fkhadra.png',
		tags: [LibraryTag.COMPONENT],
		description:
			'React-Toastify allows you to add notifications to your app with ease.',
		language: 'TypeScript',
	},
	{
		name: 'React Intl',
		author: 'Oath',
		repo: 'https://www.github.com/formatjs/formatjs',
		package: 'https://www.npmjs.com/package/react-intl',
		href: 'https://formatjs.io/docs/getting-started/installation/',
		image: 'https://github.com/formatjs.png',
		tags: [LibraryTag.I18N],
		description:
			'FormatJS is a modular collection of JavaScript libraries for internationalization that are focused on formatting numbers, dates, and strings for displaying to people. It includes a set of core libraries that build on the JavaScript Intl built-ins and industry-wide i18n standards, plus a set of integrations for common template and component libraries.',
		language: 'TypeScript',
	},
	{
		name: 'Next Intl',
		author: 'Jan Amann',
		repo: 'https://www.github.com/amannn/next-intl',
		package: 'https://www.npmjs.com/package/next-intl',
		href: 'https://github.com/amannn/next-intl',
		image: 'https://github.com/amannn.png',
		tags: [LibraryTag.I18N],
		description:
			'This library complements the internationalized routing capabilities of Next.js by managing translations and providing them to components.',
		language: 'TypeScript',
	},
	{
		name: 'React i18next',
		author: 'i18next',
		repo: 'https://www.github.com/i18next/react-i18next',
		package: 'https://www.npmjs.com/package/react-i18next',
		href: 'https://react.i18next.com/',
		image: 'https://github.com/i18next.png',
		tags: [LibraryTag.I18N],
		description:
			'react-i18next is a powerful internationalization framework for React / React Native which is based on i18next. The module provides multiple components eg. to assert that needed translations get loaded or that your content gets rendered when the language changes.',
		language: 'JavaScript',
	},
	{
		name: 'LinguiJS',
		author: 'Tomáš Ehrlich',
		repo: 'https://www.github.com/lingui/js-lingui',
		package: 'https://www.npmjs.com/package/@lingui/react',
		href: 'https://lingui.js.org/',
		image: 'https://github.com/lingui.png',
		tags: [LibraryTag.I18N],
		description:
			'A readable, automated, and optimized (5 kb) internationalization for JavaScript',
		language: 'TypeScript',
	},
	{
		name: 'Rosetta',
		author: 'Luke Edwards',
		repo: 'https://www.github.com/lukeed/rosetta',
		package: 'https://www.npmjs.com/package/rosetta',
		href: 'https://github.com/lukeed/rosetta',
		image: 'https://github.com/lukeed.png',
		tags: [LibraryTag.I18N],
		description: 'A general purpose internationalization library in 298 bytes',
		language: 'JavaScript',
	},
]

export const exampleBooks: Book<string>[] = [
	{
		href: '/atomic-habits',
		title:
			'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
		image: './example-assets/book-1.png',
		authors: ['James Clear'],
		yearOfPublication: 2018,
		numberOfPages: 320,
		level: 'intermediate',
		tags: ['self-help'],
		description:
			'This breakthrough book from James Clear is the most comprehensive guide on how to change your habits and get 1% better every day.',
	},
	{
		href: '/harry-potter',
		title: "Harry Potter and the Sorcerer's Stone",
		image: './example-assets/book-2.png',
		authors: ['J. K. Rowling', 'Robert Galbraith'],
		yearOfPublication: 1997,
		numberOfPages: 223,
		level: 'beginner',
		tags: ['fiction'],
		description:
			'After 11 years of disregard and neglect at the hands of his aunt, uncle and their swinish son Dudley, Harry suddenly receives a visit from a giant named Hagrid, who informs Harry that his mother and father were a witch and wizard.',
	},
	{
		href: '/cryptonomicon',
		title: 'Cryptonomicon',
		image: './example-assets/book-3.png',
		authors: ['Neal Stephenson'],
		yearOfPublication: 1999,
		numberOfPages: 918,
		level: 'advanced',
		tags: ['fiction'],
		description:
			'Randy Waterhouse spearheads a movement to create a safe haven for data in a world where information equals power and big business and government seek to control the flow of knowledge.',
	},
]

export const examplePodcasts: Podcast<string>[] = [
	{
		title: 'Syntax',
		image: 'https://syntax.fm/static/logo.png',
		description: 'A Tasty Treats Podcast for Web Developers.',
		rss: 'https://feed.syntax.fm/rss',
		hosts: ['Wes Bos', 'Scott Tolinksi'],
		tags: ['react', 'front end'],
		href: 'https://syntax.fm',
	},
	{
		title: 'Syntax',
		image:
			'https://image.simplecastcdn.com/images/bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3/20f97d0b-6dab-4005-a995-0ab8fc2cf31c/480x480/1550288890-artwork@2x.jpg',
		description: 'Conversations about React with your favorite developers.',
		rss: 'https://feeds.simplecast.com/JoR28o79',
		hosts: ['Michael Chan'],
		tags: ['react', 'front end'],
		href: 'https://reactpodcast.simplecast.com/',
	},
	{
		title: 'React Round Up',
		image:
			'https://devchat.tv/wp-content/uploads/2020/06/reactroundup-1-scaled-1024x1024.jpg',
		description:
			"Every week we get together to talk all things React, front-end, and developer careers. Whether you're working on a React web app, React Native app, or diving into development for the first time, we'll help you level up and achieve your React related goals.",
		rss: 'https://feed.syntax.fm/rss',
		hosts: ['Paige Neidringhaus', 'TJ VanToll'],
		tags: ['react'],
		href: 'https://devchat.tv/podcasts/react-round-up/',
	},
]

export const exampleCommunities: Community<string>[] = [
	{
		name: 'Community One',
		description: 'Example community, full of people who, uh, commune.',
		image:
			'https://picsum.photos/seed/3aea63e0-3db5-517c-99e7-817a11b35b3e/250',
		type: 'Discord Community',
		tags: ['accessibility'],
		href: 'https://google.com',
	},
	{
		name: 'Community Two',
		description: "This community isn't as nice if I'm being honest.",
		image:
			'https://picsum.photos/seed/ca6b8711-bda2-5f1b-8dc4-5cb48098265d/250',
		type: 'Slack Community',
		tags: ['state management'],
		href: 'https://bing.com',
	},
	{
		name: 'Community Three',
		description:
			"I can't tell you much about this community because they won't let me join.",
		image:
			'https://picsum.photos/seed/18702836-66b7-5bda-af53-24605bdeed0a/250',
		type: 'Secret Society',
		tags: ['graphQL'],
		href: 'https://duckduckgo.com',
	},
]

export const exampleCompanies: Company<'consultancy'>[] = [
	{
		name: 'This Dot',
		description:
			'Provides architectural guidance, staff augmentation, on demand Subject Matter Experts, temporary CTOs, one-on-one pairing, mentorship, and open source strategy support.',
		image: './example-assets/company1.png',
		numberOfEmployees: '10 to 50',
		href: 'https://labs.thisdot.co',
		tags: ['consultancy'],
	},
]

export const exampleCodeExamples: CodeExample<ExampleTag>[] = [
	{
		title: 'Redux Essentials: Counter',
		author: 'reduxjs',
		description: 'A basic counter implemented using Redux',
		href: 'https://codesandbox.io/s/un8my',
		tags: ['redux', 'state management'],
	},
]

export const exampleTools: Tool<string>[] = [
	{
		name: 'Doge Generator',
		author: 'Jackson Palmer',
		description: 'Wow. Doge meme generator. Very plugin.',
		image: './example-assets/tool-1.png',
		tags: ['Data Visualization', 'Web3', 'Hooks'],
		href: 'https://dogecoin.com/',
	},
]

export const exampleBlogs: Blog<ExampleTag>[] = [
	{
		title: 'ui.dev',
		author: 'Tyler McGinnis',
		description: 'A JavaScript blog with a focus on React content.',
		image: 'https://github.com/uidotdev.png',
		href: 'https://ui.dev/blog/',
		tags: [],
	},
	{
		title: "Kent C. Dodds' Blog",
		author: 'Kent C. Dodds',
		description:
			'Renowned JavaScript and React educator, Kent C. Dodds, shares his React knowledge through his blog.',
		image: 'https://github.com/kentcdodds.png',
		href: 'https://kentcdodds.com/blog?q=react',
		tags: [],
	},
	{
		title: "Robin Wieruch's Blog",
		author: 'Robin Wieruch',
		description:
			'German software engineer, Robin Weiruch, shares a variety of posts on React and JavaScript.',
		image: 'https://github.com/rwieruch.png',
		href: 'https://www.robinwieruch.de/categories/react/',
		tags: [],
	},
]

export const exampleSearchData: AllCategories[] = [
	{
		data: exampleBooks,
		indexMetadata: bookIndexMetadata,
		name: bookIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleBlogs,
		indexMetadata: blogIndexMetadata,
		name: blogIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleCommunities,
		indexMetadata: communityIndexMetadata,
		name: communityIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleCourses,
		indexMetadata: courseIndexMetadata,
		name: courseIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleLibraries,
		indexMetadata: libraryIndexMetadata,
		name: libraryIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: examplePodcasts,
		indexMetadata: podcastIndexMetadata,
		name: podcastIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleTools,
		indexMetadata: toolIndexMetadata,
		name: toolIndexMetadata.name,
		tags: exampleTags,
	},
]
