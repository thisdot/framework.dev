import { type Story, type Meta } from '@storybook/react';
import { bookIndexMetadata } from '../../models/book';
import { exampleTags } from '../../util/example-content';
import { Filter as FilterComponent, type FilterProps } from './filter';

export default {
	title: 'Search/Filter',
	component: FilterComponent,
	args: {
		options: Object.entries(bookIndexMetadata.filterableFields)[0],
		value: ['level', ['beginner']],
		suggestions: exampleTags,
	} as Partial<FilterProps>,
	argTypes: {
		onUpdate: { action: 'update' },
	},
} as Meta;

const Template: Story<FilterProps> = (args) => <FilterComponent {...args} />;

export const Filter = Template.bind({});
