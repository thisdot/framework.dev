import { type Story, type Meta } from '@storybook/react'
import {
	ContributorBanner as ContributorBannerComponent,
	type ContributorBannerProps,
} from './contributor-banner'

export default {
	title: 'Home/Contributor Banner',
	component: ContributorBannerComponent,
	args: {
		contributors: [
			{
				login: 'jbachhardie',
				url: 'https://github.com/jbachhardie',
				avatarUrl: 'https://github.com/jbachhardie.png',
			},
			{
				login: 'tvanantwerp',
				url: 'https://github.com/tvanantwerp',
				avatarUrl: 'https://github.com/tvanantwerp.png',
			},
			{
				login: 'markshenouda',
				url: 'https://github.com/markshenouda',
				avatarUrl: 'https://github.com/markshenouda.png',
			},
			{
				login: 'ktrz',
				url: 'https://github.com/ktrz',
				avatarUrl: 'https://github.com/ktrz.png',
			},
		],
	},
} as Meta

const Template: Story<ContributorBannerProps> = (args) => (
	<ContributorBannerComponent {...args} />
)

export const ContributorBanner = Template.bind({})
