import { Story, Meta } from "@storybook/react"
import { Books as BooksComponent, BooksProps } from "./books"

export default {
	title: "Home/Books",
	component: BooksComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const Template: Story<BooksProps> = (args) => <BooksComponent {...args} />

export const Books = Template.bind({})
