import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BookDecorator as BookDecoratorComponent } from './book-decorator';

const meta: Meta<typeof BookDecoratorComponent> = {
	title: 'Book Decorator',
	component: BookDecoratorComponent,
	args: {
		children: 'Hello world',
	},
};
export default meta;

type Story = StoryObj<typeof BookDecoratorComponent>;

export const BookDecorator: Story = {
	render: (args) => (
		<BookDecoratorComponent {...args}>
			<img src="/book-2.png" alt="" />
		</BookDecoratorComponent>
	),
};
