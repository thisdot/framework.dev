import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput as SearchInputComponent } from './search-input';

const meta: Meta<typeof SearchInputComponent> = {
	title: 'Search/Search Input',
	component: SearchInputComponent,
	args: {
		label: 'Search',
		staticPrefix: 'in:books',
		placeholder: '',
		disabled: false,
		hideLabel: true,
	},
};
export default meta;

type Story = StoryObj<typeof SearchInputComponent>;

export const SearchInput: Story = {
	render: (args) => <SearchInputComponent {...args} />,
};
