import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AngularIcon } from '../../icons/angular-icon';
import { ReactIcon } from '../../icons/react-icon';
import { VueIcon } from '../../icons/vue-icon';
import { SvelteIcon } from '../../icons/svelte-icon';
import { Hero as HeroComponent } from './hero';
import { DenoIcon } from '../../icons/deno-icon';

const meta: Meta<typeof HeroComponent> = {
	title: 'Landing/Hero',
	component: HeroComponent,
};
export default meta;

type Story = StoryObj<typeof HeroComponent>;

export const Hero: Story = {
	render: (args) => <HeroComponent {...args} />,
	args: {
		heroText: {
			highlightedTitle: 'List of the top resources',
			softTitle: 'to learn the code',
			subtitle:
				'Explore some of the top resources added by a community to learn or be up to date with your framework.',
		},
		linkCards: [
			{
				title: 'Angular Resources',
				href: 'https://angular.framework.dev/',
				Icon(props) {
					return <AngularIcon {...props} />;
				},
				backgroundColor: '#C3002F',
			},
			{
				title: 'React Resources',
				href: 'https://react.framework.dev/',
				Icon(props) {
					return <ReactIcon {...props} />;
				},
				backgroundColor: '#00BCDA',
			},
			{
				title: 'Vue Resources',
				href: 'https://vue.framework.dev/',
				Icon(props) {
					return <VueIcon {...props} />;
				},
				backgroundColor: '#41B883',
			},
			{
				title: 'Svelte Resources',
				href: 'https://svelte.framework.dev/',
				Icon(props) {
					return <SvelteIcon {...props} />;
				},
				backgroundColor: '#FF3E00',
			},
			{
				title: 'Deno Resources',
				href: 'https://deno.framework.dev/',
				Icon(props) {
					return <DenoIcon {...props} />;
				},
				backgroundColor: '#12124B',
			},
		],
	},
};
