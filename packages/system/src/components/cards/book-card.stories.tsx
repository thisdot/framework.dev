import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { BookCard as BookCardComponent } from './book-card';
import { exampleBooks } from '../../util/example-content';
import { imageFirstCardGrid } from './card-layouts.css';

const meta: Meta<typeof BookCardComponent> = {
	title: 'Cards/Book Card',
	component: BookCardComponent,
	args: {
		headingTag: 'h1',
	},
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		onTagClick: {
			action: 'onTagClick',
		},
	},
};
export default meta;

type Story = StoryObj<typeof BookCardComponent>;

export const BookCard: Story = {
	render: (args) => (
		<div
			className={sprinkles({
				backgroundColor: 'surface4',
				padding: 16,
			})}
		>
			<div className={imageFirstCardGrid}>
				{exampleBooks.map((book) => (
					<BookCardComponent key={book.title} {...args} book={book} />
				))}
			</div>
		</div>
	),
};
