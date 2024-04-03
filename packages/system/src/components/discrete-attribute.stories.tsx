import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	allCategoriesMetadata,
	type FieldFilter,
} from '../models/all-categories';
import { DiscreteAttribute as DiscreteAttributeComponent } from './discrete-attribute';
import { ungroupFieldFilters } from './search/query-util';

const attributeMapping = Object.fromEntries(
	Object.values(allCategoriesMetadata)
		.flatMap((metadata) =>
			ungroupFieldFilters(
				Object.entries(metadata.filterableFields).map(
					([key, value]) => [key, value] as FieldFilter,
				),
			),
		)
		.map((entry) => [entry.join(':'), entry]),
);

const meta: Meta<typeof DiscreteAttributeComponent> = {
	title: 'Discrete Attribute',
	component: DiscreteAttributeComponent,
	args: {
		attribute: ['level', 'beginner'],
		colorize: false,
	},
	argTypes: {
		attribute: {
			control: 'select',
			options: Object.keys(attributeMapping),
			mapping: attributeMapping,
		},
	},
};
export default meta;

type Story = StoryObj<typeof DiscreteAttributeComponent>;

export const DiscreteAttribute: Story = {
	render: (args) => <DiscreteAttributeComponent {...args} />,
};
