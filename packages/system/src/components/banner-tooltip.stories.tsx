import { type Story, type Meta } from '@storybook/react'
import {
	BannerTooltip as BannerTooltipComponent,
	type BannerTooltipProps,
} from './banner-tooltip'

export default {
	title: 'Banner Tooltip',
	component: BannerTooltipComponent,
	args: {
		children: 'Hello world',
	},
} as Meta

const Template: Story<BannerTooltipProps> = (args) => (
	<BannerTooltipComponent {...args} />
)

export const BannerTooltip = Template.bind({})

BannerTooltip.args = {
	pitchText: {
		highlightedText: 'Compare and select libraries',
		softText: 'based on your needs',
	},
	explanatoryText: 'Click on icon to add the lib to comparison',
}
