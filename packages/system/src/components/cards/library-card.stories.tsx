import { type Story, type Meta } from '@storybook/react';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { exampleLibraries } from '../../util/example-content';
import { titleFirstCardGrid } from './card-layouts.css';
import {
	LibraryCard as LibraryCardComponent,
	type LibraryCardProps,
} from './library-card';

export default {
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
} as Meta;

const Template: Story<LibraryCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: 'surface4',
			padding: 16,
		})}
	>
		<div className={titleFirstCardGrid}>
			{exampleLibraries.map((library) => (
				<LibraryCardComponent key={library.name} {...args} library={library} />
			))}
		</div>
	</div>
);

export const LibraryCard = Template.bind({});
