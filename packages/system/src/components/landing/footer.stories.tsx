import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Footer as FooterComponent } from './footer';

const meta: Meta<typeof FooterComponent> = {
	title: 'Landing/Footer',
	component: FooterComponent,
	args: {
		children: 'Hello world',
	},
};
export default meta;

type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {
	render: (args) => <FooterComponent {...args} />,
};
