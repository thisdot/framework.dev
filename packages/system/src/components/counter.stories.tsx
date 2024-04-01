import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Counter as CounterComponent } from './counter';

const meta: Meta<typeof CounterComponent> = {
	title: 'Counter',
	component: CounterComponent,
	args: {
		children: '16',
	},
	argTypes: {
		size: {
			options: ['small', 'medium'],
			control: { type: 'radio' },
		},
	},
};
export default meta;

type Story = StoryObj<typeof CounterComponent>;

export const Counter: Story = {
	render: (args) => <CounterComponent {...args} />,
};
