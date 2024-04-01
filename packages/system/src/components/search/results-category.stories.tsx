import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { allCategoryNames } from '../../models/all-categories';
import { exampleSearchData } from '../../util/example-content';
import { ResultsCategory as ResultsCategoryComponent } from './results-category';

const meta: Meta<typeof ResultsCategoryComponent> = {
	title: 'Search/Results Category',
	component: ResultsCategoryComponent,
	args: {
		category: 'books',
		variant: 'withHeading',
	},
	argTypes: {
		variant: {
			options: ['withHeading', 'bare'],
			control: 'inline-radio',
		},
		category: {
			options: allCategoryNames,
			control: 'select',
		},
	},
};
export default meta;

type Story = StoryObj<typeof ResultsCategoryComponent>;

export const ResultsCategory: Story = {
	render: (args) => (
		<ResultsCategoryComponent
			{...args}
			searchResults={
				exampleSearchData.find((category) => category.name === args.category)
					?.data ?? []
			}
		/>
	),
};
