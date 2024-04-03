import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip as ChipComponent } from './chip';

const meta: Meta<typeof ChipComponent> = {
	title: 'Chip',
	component: ChipComponent,
	args: {
		children: 'Hello world',
	},
};
export default meta;

type Story = StoryObj<typeof ChipComponent>;

export const Chip: Story = { render: (args) => <ChipComponent {...args} /> };
