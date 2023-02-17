import { Story, Meta } from '@storybook/react'
import {
	Contributor as ContributorComponent,
	ContributorProps,
} from './contributor'

export default {
	title: 'Home/Contributor',
	component: ContributorComponent,
	args: {
		contributor: {
			login: 'ktrz',
			url: 'https://github.com/ktrz',
			avatarUrl: 'https://github.com/ktrz.png',
		},
	},
} as Meta

const Template: Story<ContributorProps> = (args) => (
	<ContributorComponent {...args} />
)

export const Contributor = Template.bind({})
