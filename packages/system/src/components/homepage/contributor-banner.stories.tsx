import { Story, Meta } from '@storybook/react'
import {
	ContributorBanner as ContributorBannerComponent,
	ContributorBannerProps,
} from './contributor-banner'

export default {
	title: 'Home/Contributor Banner',
	component: ContributorBannerComponent,
	args: {
		contributorImages: [
			'https://github.com/jbachhardie.png',
			'https://github.com/tvanantwerp.png',
			'https://github.com/markshenouda.png',
		],
	},
} as Meta

const Template: Story<ContributorBannerProps> = (args) => (
	<ContributorBannerComponent {...args} />
)

export const ContributorBanner = Template.bind({})
