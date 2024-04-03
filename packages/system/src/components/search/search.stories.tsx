import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fullscreen } from '../../styles/layouts.css';
import { exampleSearchData } from '../../util/example-content';
import { Search as SearchComponent } from './search';

const meta: Meta<typeof SearchComponent> = {
	title: 'Search/Search',
	component: SearchComponent,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		data: exampleSearchData,
		initialQuery: '',
		siteName: 'react',
		appliedPreFilters: {
			category: ['libraries'],
			field: [],
			tag: [],
		},
	},
};
export default meta;

type Story = StoryObj<typeof SearchComponent>;

export const Search: Story = {
	render: (args) => (
		<div className={fullscreen}>
			<SearchComponent {...args} />
		</div>
	),
};
