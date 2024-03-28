import { type Story, type Meta } from '@storybook/react';
import {
	allCategoryNames,
	type CategoryName,
} from '../../models/all-categories';
import { exampleSearchData } from '../../util/example-content';
import {
	ResultsCategory as ResultsCategoryComponent,
	type ResultsCategoryProps,
} from './results-category';

export default {
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
} as Meta;

const Template: Story<ResultsCategoryProps<CategoryName>> = (args) => (
	<ResultsCategoryComponent
		{...args}
		searchResults={
			exampleSearchData.find((category) => category.name === args.category)
				?.data ?? []
		}
	/>
);

export const ResultsCategory = Template.bind({});
