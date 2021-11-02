import { Story, Meta } from "@storybook/react"
import { exampleBooks } from "../util/example-content"
import { themeColors } from "../themes/themes.css"
import { BookList as BookListComponent, BookListProps } from "./book-list"

export default {
	title: "Book List",
	component: BookListComponent,
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

const Template: Story<BookListProps> = (args) => (
	<div style={{ maxWidth: "522px" }}>
		<BookListComponent books={exampleBooks} {...args} />
	</div>
)

export const BookList = Template.bind({})
