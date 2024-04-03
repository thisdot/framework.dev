import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { bookIndexMetadata } from '../../models/book';
import { exampleTags } from '../../util/example-content';
import { Filter as FilterComponent, type FilterProps } from './filter';

const meta: Meta<typeof FilterComponent> = {
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
};
export default meta;

type Story = StoryObj<typeof FilterComponent>;

export const Filter: Story = {
	render: (args) => <FilterComponent {...args} />,
};
