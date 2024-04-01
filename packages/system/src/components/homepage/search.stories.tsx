import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Search as SearchComponent } from './search';

const meta: Meta<typeof SearchComponent> = {
	title: 'Home/Search',
	component: SearchComponent,
	args: {
		placeholder: 'Hello world',
	},
};
export default meta;

type Story = StoryObj<typeof SearchComponent>;

export const Search: Story = {
	render: (args) => <SearchComponent {...args} />,
};
