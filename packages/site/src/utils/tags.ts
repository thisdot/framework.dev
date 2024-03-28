import {
	type CollectionTypes,
	type Frameworks,
} from '@framework/site/src/types';

const LIBRARY_TAGS: [string, ...string[]] = [
	'animation',
	'API libraries',
	'auth',
	'CLI',
	'component',
	'data fetching',
	'data processing',
	'database drivers',
	'documentation',
	'forms',
	'frameworks',
	'http client',
	'internationalization',
	'logging',
	'ORM',
	'performance tools',
	'routing',
	'state management',
	'styling',
	'templating',
	'testing',
	'tooling',
	'utilities',
	'web servers',
];
const TAGS: Record<string, Record<string, [string, ...string[]]>> = {
	angular: {
		blogs: [''],
		books: [
			'nx',
			'recipes',
			'monorepo',
			'state management',
			'NgRx',
			'testing',
			'PWA',
			'routing',
			'components',
			'data binding',
		],
		communities: ['meetups', 'conferences'],
		courses: [
			'state management',
			'components',
			'data fetching',
			'routing',
			'testing',
			'services',
			'RxJS',
			'NgRx',
			'JavaScript marathon',
			'nx monorepo',
			'ignite UI',
			'ivy',
			'PWA',
			'A11Y',
			'pipes',
			'angular patterns',
			'TypeScript',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general'],
		tools: ['chrome', 'VSCode', 'RxJS', 'development', 'testing', 'UI Design'],
	},
	deno: {
		blogs: [''],
		books: ['foundational', 'intro', 'oak', 'graphql'],
		communities: ['meetups', 'conferences'],
		courses: [
			'deno',
			'typescript',
			'mongodb',
			'backend',
			'docker',
			'aws',
			'data fetching',
			'oak framework',
			'data validation',
			'fresh framework',
			'testing',
			'debugging',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general', 'how-to', 'technology', 'open source', 'career'],
		tools: ['vscode', 'webstorm'],
	},
	graphql: {
		blogs: [''],
		books: [
			'nx',
			'recipes',
			'monorepo',
			'state management',
			'NgRx',
			'testing',
			'PWA',
			'routing',
			'components',
			'data binding',
			'graphQL',
			'reactJS',
			'nodeJS',
			'apollo',
			'sql',
			'testing',
			'docker',
			'authentication',
		],
		communities: ['meetups', 'conferences'],
		podcasts: ['general', 'graphQL', 'ruby', 'rails'],
		tools: [
			'Chrome',
			'VSCode',
			'development',
			'testing',
			'schemas',
			'frontend',
			'backend',
		],
		courses: [
			'state management',
			'components',
			'data fetching',
			'routing',
			'testing',
			'services',
			'javascript marathon',
			'typescript',
			'graphQL',
			'JS drops',
		],
		libraries: LIBRARY_TAGS,
	},
	nodejs: {
		blogs: [''],
		books: [
			'patterns',
			'systems',
			'database',
			'full stack',
			'backend',
			'performance',
			'projects',
			'servers',
		],
		communities: ['meetups', 'conferences'],
		courses: [
			'data fetching',
			'testing',
			'services',
			'typescript',
			'backend',
			'events',
			'javascript marathon',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general, node, full stack'],
		tools: ['VSCode', 'development', 'testing', 'database', 'API testing'],
	},
	qwik: {
		blogs: [''],
		books: ['projects'],
		communities: ['conferences'],
		courses: ['state management', 'data fetching', 'structure', 'routing'],
		libraries: LIBRARY_TAGS,
		podcasts: ['general', 'qwik'],
		tools: [
			'VSCode',
			'Chrome',
			'Firefox',
			'Safari',
			'development',
			'UI Design',
		],
	},
	react: {
		blogs: [''],
		books: [
			'projects',
			'TypeScript',
			'recipes',
			'testing',
			'routing',
			'NextJS',
			'redux',
			'authentication',
			'A11Y',
			'GraphQL',
			'Material UI',
		],
		communities: ['meetups', 'conferences'],
		courses: [
			'state management',
			'data fetching',
			'routing',
			'testing',
			'forms',
			'GraphQL',
			'native',
			'redux',
			'authentication',
			'SCSS',
			'CSS',
			'bootstrap',
			'react context',
			'hooks',
			'TypeScript',
			'tailwind',
			'Material UI',
			'vite',
			'JavaScript marathon',
			'AWS',
			'netlify',
			'continuous integration',
			'GatsbyJS',
			'component design',
			'apollo',
			'FaunaDB',
			'sass',
			'static site generation',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general', 'react', 'GraphQL', 'react native', 'redux'],
		tools: [
			'VSCode',
			'chrome',
			'firefox',
			'safari',
			'UI Design',
			'react native',
			'development',
		],
	},
	solidjs: {
		blogs: [''],
		books: [''],
		communities: ['meetups', 'conferences'],
		courses: [
			'state management',
			'data fetching',
			'routing',
			'reactivity',
			'events',
			'effects',
			'conditionals',
			'loops',
			'lifecycle methods',
			'control flow',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general', 'SolidJS'],
		tools: [
			'UI Design',
			'development',
			'generator',
			'Editor',
			'Command palette',
			'primitives',
			'markdown',
			'dragndrop',
		],
	},
	svelte: {
		blogs: [''],
		books: [
			'projects',
			'CI/CD',
			'testing',
			'state management',
			'sapper',
			'routing',
			'animations',
			'debugging',
			'accessibility',
			'Netlify',
			'forms',
			'caching',
			'data fetching',
		],
		communities: ['conferences'],
		courses: [
			'routing',
			'state management',
			'data fetching',
			'forms',
			'animations',
			'SSR',
			'tailwind',
			'Supabase',
			'daisyUI',
			'Arduino',
			'accessibility',
			'reactivity',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general'],
		tools: [
			'Jetbrains',
			'extension',
			'Firefox',
			'VSCode',
			'Chrome',
			'UI Design',
			'development',
		],
	},
	vue: {
		blogs: [''],
		books: [
			'projects',
			'vuex',
			'routing',
			'testing',
			'authentication',
			'best practices',
			'patterns',
			'state management',
			'forms',
			'vue 2',
			'vue 3',
			'vite',
			'TypeScript',
			'GraphQL',
		],
		communities: ['meetups', 'conferences'],
		courses: [
			'state management',
			'data fetching',
			'routing',
			'testing',
			'forms',
			'graphQL',
			'vuex',
			'vue CLI',
			'authentication',
			'CSS',
			'bootstrap',
			'TypeScript',
			'tailwind',
			'Material UI',
			'vue 2',
			'vue 3',
			'nuxt 2',
			'component design',
			'PWA',
			'AWS',
			'DevOps',
			'continuous integration',
			'vite',
			'debugging',
			'JavaScript marathon',
			'sass',
		],
		libraries: LIBRARY_TAGS,
		podcasts: ['general', 'GraphQL', 'vue', 'quasar'],
		tools: [
			'VSCode',
			'chrome',
			'firefox',
			'edge',
			'safari',
			'UI Design',
			'development',
		],
	},
};

export function getTagsByType(
	collectionType: CollectionTypes,
	framework: Frameworks,
) {
	return TAGS[framework][collectionType];
}
