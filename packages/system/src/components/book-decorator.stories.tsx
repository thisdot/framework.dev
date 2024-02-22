import { type Story, type Meta } from '@storybook/react'
import {
	BookDecorator as BookDecoratorComponent,
	BookDecoratorProps,
} from './book-decorator'

export default {
	title: 'Book Decorator',
	component: BookDecoratorComponent,
	args: {
		children: 'Hello world',
	},
} as Meta

const Template: Story<BookDecoratorProps> = (args) => (
	<BookDecoratorComponent {...args}>
		<img src="/book-2.png" alt="" />
	</BookDecoratorComponent>
)

export const BookDecorator = Template.bind({})
