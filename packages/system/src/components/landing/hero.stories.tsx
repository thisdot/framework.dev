import { type Story, type Meta } from '@storybook/react'
import { AngularIcon } from '../../icons/angular-icon'
import { ReactIcon } from '../../icons/react-icon'
import { VueIcon } from '../../icons/vue-icon'
import { SvelteIcon } from '../../icons/svelte-icon'
import { Hero as HeroComponent, type HeroProps } from './hero'
import { DenoIcon } from '../../icons/deno-icon'

export default {
	title: 'Landing/Hero',
	component: HeroComponent,
} as Meta

const Template: Story<HeroProps> = (args) => <HeroComponent {...args} />

export const Hero = Template.bind({})

Hero.args = {
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
				return <AngularIcon {...props} />
			},
			backgroundColor: '#C3002F',
		},
		{
			title: 'React Resources',
			href: 'https://react.framework.dev/',
			Icon(props) {
				return <ReactIcon {...props} />
			},
			backgroundColor: '#00BCDA',
		},
		{
			title: 'Vue Resources',
			href: 'https://vue.framework.dev/',
			Icon(props) {
				return <VueIcon {...props} />
			},
			backgroundColor: '#41B883',
		},
		{
			title: 'Svelte Resources',
			href: 'https://svelte.framework.dev/',
			Icon(props) {
				return <SvelteIcon {...props} />
			},
			backgroundColor: '#FF3E00',
		},
		{
			title: 'Deno Resources',
			href: 'https://deno.framework.dev/',
			Icon(props) {
				return <DenoIcon {...props} />
			},
			backgroundColor: '#12124B',
		},
	],
}
