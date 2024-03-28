import { type LinkCardProps } from '@framework/system/src/components/landing/link-card';
import { AngularIcon } from '../icons/angular-icon';
import { QwikIcon } from '../icons/qwik-icon';
import { NodejsIcon } from '../icons/nodejs-icon';
import { ReactIcon } from '../icons/react-icon';
import { SolidJSIcon } from '../icons/solidjs-icon';
import { SvelteIcon } from '../icons/svelte-icon';
import { VueIcon } from '../icons/vue-icon';
import { GraphQLIcon } from '../icons/graphql-icon';
import { DenoIcon } from '../icons/deno-icon';

export const FRAMEWORK_RESOURCES = (bigSize = false): LinkCardProps[] => [
	{
		title: 'Angular Resources',
		href: 'https://angular.framework.dev/',
		Icon(props) {
			return <AngularIcon {...props} />;
		},
		backgroundColor: '#C3002F',
		bigSize,
	},
	{
		title: 'React Resources',
		href: 'https://react.framework.dev/',
		Icon(props) {
			return <ReactIcon {...props} />;
		},
		backgroundColor: '#00BCDA',
		bigSize,
	},
	{
		title: 'Vue Resources',
		href: 'https://vue.framework.dev/',
		Icon(props) {
			return <VueIcon {...props} />;
		},
		backgroundColor: '#41B883',
		bigSize,
	},
	{
		title: 'Qwik Resources',
		href: 'https://qwik.framework.dev/',
		Icon(props) {
			return <QwikIcon {...props} />;
		},
		backgroundColor: '#AC7EF4',
		bigSize,
	},
	{
		title: 'SolidJS Resources',
		href: 'https://solidjs.framework.dev/',
		Icon(props) {
			return <SolidJSIcon {...props} />;
		},
		backgroundColor: '#446b9e',
		bigSize,
	},
	{
		title: 'GraphQL Resources',
		href: 'https://graphql.framework.dev/',
		Icon(props) {
			return <GraphQLIcon {...props} />;
		},
		backgroundColor: '#E10098',
		bigSize,
	},
	{
		title: 'NodeJS Resources',
		href: 'https://nodejs.framework.dev/',
		Icon(props) {
			return <NodejsIcon {...props} />;
		},

		backgroundColor: '#539e43',
		bigSize,
	},
	{
		title: 'Svelte Resources',
		href: 'https://svelte.framework.dev/',
		Icon(props) {
			return <SvelteIcon {...props} />;
		},
		backgroundColor: '#ff3e00',
		bigSize,
	},

	{
		title: 'Deno Resources',
		href: 'https://deno.framework.dev/',
		Icon(props) {
			return <DenoIcon {...props} />;
		},
		backgroundColor: '#12124B',
		bigSize,
	},
];
