import { Story, Meta } from '@storybook/react'
import { Chip as ChipComponent, ChipProps } from './chip'

export default {
	title: 'Chip',
	component: ChipComponent,
	args: {
		children: 'Hello world',
	},
} as Meta

const Template: Story<ChipProps> = (args) => <ChipComponent {...args} />

export const Chip = Template.bind({})
