import { Story, Meta } from "@storybook/react"
import { PitchCard as PitchCardComponent, PitchCardProps } from "./pitch-card"

export default {
	title: "Landing/Pitch Card",
	component: PitchCardComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const Template: Story<PitchCardProps> = (args) => (
	<PitchCardComponent
		{...args}
		pitchText={{
			highlightedText: "Wow, such moves",
			softText: "much pitch, much info much pitch, much info much pitch, much info much pitch, much info much pitch, much info ",
		}}
		image="/pitch-image-1.png"
	/>
)

export const PitchCard = Template.bind({})
