/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { exampleSearchData } from '../../util/example-content';
import { SearchAutocomplete as SearchAutocompleteComponent } from './search-autocomplete';

const meta: Meta<typeof SearchAutocompleteComponent> = {
	title: 'Search/Search Autocomplete',
	component: SearchAutocompleteComponent,
	args: {
		data: exampleSearchData,
		availableFilters: {
			category: ['books', 'courses'],
			tag: ['redux', 'data fetching'],
			field: [['level', ['beginner', 'intermediate', 'advanced']]],
		},
	},
};
export default meta;

type Story = StoryObj<typeof SearchAutocompleteComponent>;

export const SearchAutocomplete: Story = {
	render: (args) => {
		const [value, setValue] = useState('');
		return (
			<SearchAutocompleteComponent
				{...args}
				value={value}
				onChange={setValue}
			/>
		);
	},
};
