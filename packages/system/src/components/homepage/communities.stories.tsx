import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Communities as CommunitiesComponent } from './communities';
import { exampleCommunities } from '../../util/example-content';

const meta: Meta<typeof CommunitiesComponent> = {
	title: 'Home/Communities',
	component: CommunitiesComponent,
	args: {
		communities: exampleCommunities,
	},
};
export default meta;

type Story = StoryObj<typeof CommunitiesComponent>;

export const Communities: Story = {
	render: (args) => <CommunitiesComponent {...args} />,
};
