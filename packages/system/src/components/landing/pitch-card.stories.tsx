import { type Story, type Meta } from '@storybook/react'
import { PitchCard as PitchCardComponent, PitchCardProps } from './pitch-card'

export default {
	title: 'Landing/Pitch Card',
	component: PitchCardComponent,
	args: {
		children: 'Hello world',
	},
} as Meta

const Template: Story<PitchCardProps> = (args) => (
	<PitchCardComponent
		{...args}
		pitchText={{
			highlightedText: 'Diferent channels',
			softText: 'Browse books, podcasts, libraries, curses and more',
		}}
		imageUrl="/pitch-image-1.png"
	/>
)

export const PitchCard = Template.bind({})
