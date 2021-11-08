import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { BookCard as BookCardComponent, BookCardProps } from "./book-card"
import { exampleBooks } from "../util/example-content"

export default {
	title: "Book Card",
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
				layout: "landscapeCardGrid",
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
