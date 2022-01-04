import { Story, Meta } from "@storybook/react"
import {
	BookDecorator as BookDecoratorComponent,
	BookDecoratorProps,
} from "./book-decorator"
import bookSrc from "../util/example-assets/book-2.png"

export default {
	title: "Book Decorator",
	component: BookDecoratorComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const Template: Story<BookDecoratorProps> = (args) => (
	<BookDecoratorComponent {...args}>
		<img src={bookSrc} />
	</BookDecoratorComponent>
)

export const BookDecorator = Template.bind({})
