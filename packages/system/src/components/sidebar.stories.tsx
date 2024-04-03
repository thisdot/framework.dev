import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import startCase from 'lodash/startCase';
import { sprinkles } from '../sprinkles/sprinkles.css';
import { Sidebar as SidebarComponent } from './sidebar';
import { NavItem } from './nav-item';
import { allCategoryNames } from '../models/all-categories';
import { bodyWithNav } from '../styles/layouts.css';

const meta: Meta<typeof SidebarComponent> = {
	title: 'Sidebar',
	component: SidebarComponent,
	args: {
		children: (
			<div className={sprinkles({ layout: 'stack', gap: 8 })}>
				{allCategoryNames.map((category) => (
					<NavItem href={`#${category}`} key={category}>
						{startCase(category)}
					</NavItem>
				))}
			</div>
		),
		siteName: 'react',
	},
};
export default meta;

type Story = StoryObj<typeof SidebarComponent>;

export const Sidebar: Story = {
	render: (args) => (
		<div className={bodyWithNav}>
			<SidebarComponent {...args} />
			<main className={sprinkles({ backgroundColor: 'surface4' })} />
		</div>
	),
};
