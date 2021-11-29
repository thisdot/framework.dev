import { Story, Meta } from "@storybook/react"
import { exampleBooks } from "../util/example-content"
import { BookList as BookListComponent, BookListProps } from "./book-list"

export default {
	title: "Book List",
	component: BookListComponent,
	args: {
		headingTag: "h1",
	},
} as Meta

const Template: Story<BookListProps> = (args) => (
	<div style={{ maxWidth: "522px" }}>
		<BookListComponent {...args} books={exampleBooks} />
	</div>
)

export const BookList = Template.bind({})
