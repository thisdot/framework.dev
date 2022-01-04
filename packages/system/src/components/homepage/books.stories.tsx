import { Story, Meta } from "@storybook/react"
import { Books as BooksComponent, BooksProps } from "./books"
import { exampleBooks } from "../../util/example-content"
import { pxToRem } from "../../util/style-utils"

export default {
	title: "Home/Books",
	component: BooksComponent,
	args: {
		books: exampleBooks,
	},
} as Meta

const Template: Story<BooksProps> = (args) => (
	<div style={{ maxWidth: pxToRem(800) }}>
		<BooksComponent {...args} />
	</div>
)

export const Books = Template.bind({})
