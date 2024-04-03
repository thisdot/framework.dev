import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Books as BooksComponent } from './books';
import { exampleBooks } from '../../util/example-content';
import { pxToRem } from '../../util/style-utils';

const meta: Meta<typeof BooksComponent> = {
	title: 'Home/Books',
	component: BooksComponent,
	args: {
		books: exampleBooks,
	},
};
export default meta;

type Story = StoryObj<typeof BooksComponent>;

export const Books: Story = {
	render: (args) => (
		<div style={{ maxWidth: pxToRem(800) }}>
			<BooksComponent {...args} />
		</div>
	),
};
