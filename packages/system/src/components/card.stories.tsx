import { Story, Meta } from "@storybook/react"
import { Card as CardComponent, CardProps } from "./card"

export default {
	title: "Card",
	component: CardComponent,
} as Meta

const Template: Story<CardProps> = (args) => <CardComponent {...args} />

export const Card = Template.bind({})

Card.args = {
	children: "Data Visualization",
}
