import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button as ButtonComponent } from './button';

const meta: Meta<typeof ButtonComponent> = {
	title: 'Button',
	component: ButtonComponent,
	args: {
		as: 'button',
		size: 'medium',
		color: 'primary',
		disabled: false,
		children: 'Click me!',
	},
	argTypes: {
		onClick: { action: 'clicked' },
		as: {
			options: ['button', 'a'],
			control: { type: 'radio' },
		},
		size: {
			options: ['medium', 'large', 'square', 'largeSquare'],
			control: { type: 'radio' },
		},
		color: {
			options: ['primary', 'secondary', 'tertiary', 'plain', 'destructive'],
			control: { type: 'radio' },
		},
	},
};
export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
	render: (args) => <ButtonComponent {...args} />,
};
