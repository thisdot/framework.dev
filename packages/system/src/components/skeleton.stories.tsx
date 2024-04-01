import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton as SkeletonComponent } from './skeleton';

const meta: Meta<typeof SkeletonComponent> = {
	title: 'Skeleton',
	component: SkeletonComponent,
	args: {
		variant: 'circle',
		height: 20,
		width: 20,
	},
};
export default meta;

type Story = StoryObj<typeof SkeletonComponent>;

export const Skeleton: Story = {
	render: (args) => <SkeletonComponent {...args} />,
};
