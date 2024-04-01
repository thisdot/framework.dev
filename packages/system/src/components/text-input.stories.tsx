import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput as TextInputComponent } from './text-input';

const meta: Meta<typeof TextInputComponent> = {
	title: 'Text Input',
	component: TextInputComponent,
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		disabled: false,
		hideLabel: false,
	},
};
export default meta;

type Story = StoryObj<typeof TextInputComponent>;

export const TextInput: Story = {
	render: (args) => <TextInputComponent {...args} />,
};
