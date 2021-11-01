import { Story, Meta } from "@storybook/react"

import { BookCard as BookCardComponent, BookCardProps } from "./book-card"
import { themeColors } from "../themes/themes.css"

export default {
	title: "Card",
	component: BookCardComponent,
	argTypes: {
		difficulty: {
			options: ["beginner", "intermediate", "hard"],
			control: { type: "radio" },
		},
	},
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

const Template: Story<BookCardProps> = (args) => (
	<div style={{ width: "249px", minHeight: "394px" }}>
		<BookCardComponent {...args} />
	</div>
)

export const BookCard = Template.bind({})

BookCard.args = {
	slug: "/atomic-habits",
	title:
		"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
	image: "https://placekitten.com/96/144",
	authors: ["James Clear"],
	year: 2018,
	pages: 320,
	difficulty: "beginner",
	blurb:
		"This breakthrough book from James Clear is the most comprehensive guide on how to change your habits and get 1% better every day.",
}
