import classNames from 'classnames';
import React from 'react';
import sampleSize from 'lodash/sampleSize';
import { type Book } from '../../models/book';
import {
	booksStyle,
	emptyState,
	emptyStateContainer,
	emptyStateContentContainer,
	emptyStateTitle,
	emptyStateDescription,
	emptyStateBookContainer,
	emptyStateBookBinding,
	emptyStateBookCover,
	emptyStateBookTitle,
} from './books.css';
import { FeatureAndList } from './feature-and-list';

export interface BooksProps extends React.ComponentPropsWithoutRef<'div'> {
	books: Book<string>[];
}

export function Books({ className, books, ...props }: BooksProps) {
	const randomBooks = sampleSize(books, 6);
	return (
		<FeatureAndList
			className={classNames(className, booksStyle)}
			title="Top-tier books to read"
			viewAll={{ title: 'View all books', href: '/categories/books' }}
			items={randomBooks.map((book) => {
				return {
					image: { src: book.image, style: 'book' },
					title: book.title,
					metadata: book.authors.join(', '),
					href: book.href,
					description: book.description,
					attributes: [['level', book.level]],
				};
			})}
			hideFeature
			emptyStateElement={<EmptyState />}
			{...props}
		/>
	);
}

function EmptyState() {
	return (
		<div className={emptyState}>
			<div className={emptyStateContainer}>
				<div className={emptyStateContentContainer}>
					<h5 className={emptyStateTitle}>No books added yet</h5>
					<p className={emptyStateDescription}>
						If you want to submit a new book, please create a PR!
					</p>
				</div>
				<div className={emptyStateBookContainer}>
					<div className={emptyStateBookBinding} />
					<div className={emptyStateBookCover}>
						<p className={emptyStateBookTitle}>An empty book</p>
					</div>
				</div>
			</div>
		</div>
	);
}
