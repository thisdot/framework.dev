import { type Story, type Meta } from '@storybook/react'
import { AngularIcon } from '../../icons/angular-icon'
import { ReactIcon } from '../../icons/react-icon'
import { SvelteIcon } from '../../icons/svelte-icon'
import { VueIcon } from '../../icons/vue-icon'
import {
	LinkCardGroup as LinkCardGroupComponent,
	LinkCardGroupProps,
} from './link-card-group'
import { DenoIcon } from '../../icons/deno-icon'

export default {
	title: 'Landing/Link Card Group',
	component: LinkCardGroupComponent,
} as Meta

const Template: Story<LinkCardGroupProps> = (args) => (
	<LinkCardGroupComponent {...args} />
)

export const LinkCardGroup = Template.bind({})

LinkCardGroup.args = {
	cards: [
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
			bigSize: true,
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
