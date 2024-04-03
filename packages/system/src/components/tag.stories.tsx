import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag as TagComponent } from './tag';

const meta: Meta<typeof TagComponent> = {
	title: 'Tag',
	component: TagComponent,
	argTypes: {
		onClick: {
			action: 'onClick',
		},
	},
};
export default meta;

type Story = StoryObj<typeof TagComponent>;

export const Tag: Story = {
	render: (args) => <TagComponent {...args} />,
	args: {
		children: 'data visualization',
		color: 'neutral',
	},
};
