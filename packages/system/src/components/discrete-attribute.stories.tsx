import { type Story, type Meta } from '@storybook/react';
import { allCategoriesMetadata } from '../models/all-categories';
import {
	DiscreteAttribute as DiscreteAttributeComponent,
	type DiscreteAttributeProps,
} from './discrete-attribute';
import { ungroupFieldFilters } from './search/query-util';

const attributeMapping = Object.fromEntries(
	Object.values(allCategoriesMetadata)
		.flatMap((metadata) =>
			ungroupFieldFilters(Object.entries(metadata.filterableFields) as any),
		)
		.map((entry) => [entry.join(':'), entry]),
);

export default {
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
} as Meta;

const Template: Story<DiscreteAttributeProps> = (args) => (
	<DiscreteAttributeComponent {...args} />
);

export const DiscreteAttribute = Template.bind({});
