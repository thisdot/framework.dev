import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Hero as HeroComponent } from './hero';

const meta: Meta<typeof HeroComponent> = {
	title: 'Home/Hero',
	component: HeroComponent,
	args: {
		children: 'Hello world',
	},
};
export default meta;

type Story = StoryObj<typeof HeroComponent>;

export const Hero: Story = {
	render: (args) => <HeroComponent {...args} />,
	args: {
		siteName: 'react',
	},
};
