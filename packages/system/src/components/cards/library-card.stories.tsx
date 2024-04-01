import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { exampleLibraries } from '../../util/example-content';
import { titleFirstCardGrid } from './card-layouts.css';
import { LibraryCard as LibraryCardComponent } from './library-card';

const meta: Meta<typeof LibraryCardComponent> = {
	title: 'Cards/Library Card',
	component: LibraryCardComponent,
	args: {
		headingTag: 'h1',
	},
	argTypes: {
		onTagClick: {
			action: 'onTagClick',
		},
	},
};
export default meta;

type Story = StoryObj<typeof LibraryCardComponent>;

export const LibraryCard: Story = {
	render: (args) => (
		<div
			className={sprinkles({
				backgroundColor: 'surface4',
				padding: 16,
			})}
		>
			<div className={titleFirstCardGrid}>
				{exampleLibraries.map((library) => (
					<LibraryCardComponent
						key={library.name}
						{...args}
						library={library}
					/>
				))}
			</div>
		</div>
	),
};
