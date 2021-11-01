import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { BookCard as BookCardComponent, BookCardProps } from "./book-card"
import { themeColors } from "../themes/themes.css"
import { exampleBooks } from "../util/example-content"

export default {
	title: "Book Card",
	component: BookCardComponent,
	args: {
		headingTag: "h1",
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
	<div
		className={sprinkles({
			backgroundColor: "shaded",
			padding: 16,
		})}
	>
		<div
			className={sprinkles({
				layout: "threeGrid",
				gap: 16,
			})}
		>
			{exampleBooks.map((book) => (
				<BookCardComponent book={book} key={book.title} {...args} />
			))}
		</div>
	</div>
)

export const BookCard = Template.bind({})
