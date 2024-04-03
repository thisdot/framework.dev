import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Logo as LogoComponent } from './logo';

const meta: Meta<typeof LogoComponent> = {
	title: 'Logo',
	component: LogoComponent,
};
export default meta;

type Story = StoryObj<typeof LogoComponent>;

export const Logo: Story = {
	render: (args) => <LogoComponent {...args} />,
	args: {
		siteName: 'react',
	},
};
