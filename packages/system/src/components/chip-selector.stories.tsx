import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChipSelector as ChipSelectorComponent } from './chip-selector';

const meta: Meta<typeof ChipSelectorComponent> = {
	title: 'Chip Selector',
	component: ChipSelectorComponent,
	args: {
		label: 'Hello world',
	},
};
export default meta;

type Story = StoryObj<typeof ChipSelectorComponent>;

export const ChipSelector: Story = {
	render: (args) => <ChipSelectorComponent {...args} />,
};
