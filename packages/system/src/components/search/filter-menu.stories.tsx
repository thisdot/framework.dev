import { type Story, type Meta } from '@storybook/react';
import { allCategoryNames } from '../../models/all-categories';
import { exampleTags } from '../../util/example-content';
import {
	FilterMenu as FilterMenuComponent,
	type FilterMenuProps,
} from './filter-menu';
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

export default {
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
} as Meta;

const Template: Story<FilterMenuProps> = (args) => (
	<FilterMenuComponent {...args} />
);

export const FilterMenu = Template.bind({});
