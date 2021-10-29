import { Story, Meta } from "@storybook/react"

import { Card as CardComponent, CardProps } from "./card"
import { themeColors } from "../themes/themes.css"

export default {
	title: "Card",
	component: CardComponent,
	parameters: {
		backgrounds: {
			default: "Light Theme Background",
			values: [
				{
					name: "Light Theme Background",
					value: themeColors.gray100,
					default: true,
				},
			],
		},
	},
} as Meta

const Template: Story<CardProps> = (args) => <CardComponent {...args} />

export const Card = Template.bind({})

Card.args = {
	children: "Data Visualization",
}
