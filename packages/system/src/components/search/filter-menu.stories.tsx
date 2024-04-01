import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { allCategoryNames } from '../../models/all-categories';
import { exampleTags } from '../../util/example-content';
import { FilterMenu as FilterMenuComponent } from './filter-menu';
import { type FilterSet, type QueryParams } from './types';

const params: QueryParams = {
	filters: {
		category: [],
		field: [],
		tag: [],
	},
	textSearch: '',
};

const availableFilters: FilterSet = {
	category: allCategoryNames,
	tag: [...exampleTags],
	field: [
		['level', ['beginner', 'intermediate', 'advanced']],
		['paymentType', ['free', 'paid']],
		['format', ['text', 'video', 'interactive']],
	],
};

const meta: Meta<typeof FilterMenuComponent> = {
	title: 'Search/Filter Menu',
	component: FilterMenuComponent,
	parameters: {
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'mobile2',
		},
	},
	args: {
		params,
		availableFilters,
		popularTags: exampleTags,
	},
	argTypes: {
		onConfirm: { action: 'confirm' },
		params: {
			table: {
				type: {
					summary: 'QueryParams',
				},
			},
			control: {
				type: null,
			},
		},
	},
};
export default meta;

type Story = StoryObj<typeof FilterMenuComponent>;

export const FilterMenu: Story = {
	render: (args) => <FilterMenuComponent {...args} />,
};
