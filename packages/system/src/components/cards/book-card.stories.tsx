import { type Story, type Meta } from '@storybook/react';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { BookCard as BookCardComponent, type BookCardProps } from './book-card';
import { exampleBooks } from '../../util/example-content';
import { imageFirstCardGrid } from './card-layouts.css';

export default {
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
} as Meta;

const Template: Story<BookCardProps> = (args) => (
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
);

export const BookCard = Template.bind({});
