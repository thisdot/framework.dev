import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { exampleTags } from '../../util/example-content';
import { TagFilter as TagFilterComponent } from './tag-filter';

const meta: Meta<typeof TagFilterComponent> = {
	title: 'Search/Tag Filter',
	component: TagFilterComponent,
	args: {
		options: exampleTags,
		value: ['accessibility'],
	},
	argTypes: {
		onUpdate: { action: 'update' },
	},
};
export default meta;

type Story = StoryObj<typeof TagFilterComponent>;

export const TagFilter: Story = {
	render: (args) => <TagFilterComponent {...args} />,
};
