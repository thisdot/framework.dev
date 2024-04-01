import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InteractiveIcon } from '../icons/interactive-icon';
import { NavItem as NavItemComponent } from './nav-item';

const meta: Meta<typeof NavItemComponent> = {
	title: 'Nav Item',
	component: NavItemComponent,
	args: {
		icon: InteractiveIcon,
		children: 'Menu Item',
		count: 24,
	},
	argTypes: {
		'aria-current': {
			options: [undefined, 'page'],
			control: { type: 'radio' },
			defaultValue: undefined,
		},
	},
};
export default meta;

type Story = StoryObj<typeof NavItemComponent>;

export const NavItem: Story = {
	render: (args) => <NavItemComponent {...args} />,
};
