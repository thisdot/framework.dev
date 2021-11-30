import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { BookCard as BookCardComponent, BookCardProps } from "./book-card"
import { exampleBooks } from "../util/example-content"

export default {
	title: "Cards/Book Card",
	component: BookCardComponent,
	args: {
		headingTag: "h1",
	},
} as Meta

const Template: Story<BookCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: "surface4",
			padding: 16,
		})}
	>
		<div
			className={sprinkles({
				layout: "imageFirstCardGrid",
				gap: 16,
			})}
		>
			{exampleBooks.map((book) => (
				<BookCardComponent key={book.title} {...args} book={book} />
			))}
		</div>
	</div>
)

export const BookCard = Template.bind({})
