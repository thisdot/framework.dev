import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import startCase from 'lodash/startCase';
import { sprinkles } from '../sprinkles/sprinkles.css';
import { NavItem } from './nav-item';
import { MobileNav as MobileNavComponent } from './mobile-nav';
import { allCategoryNames } from '../models/all-categories';
import { bodyWithNav, fullscreen } from '../styles/layouts.css';
import classNames from 'classnames';

const meta: Meta<typeof MobileNavComponent> = {
	title: 'Mobile Nav',
	component: MobileNavComponent,
	parameters: {
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'mobile2',
		},
	},
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
	},
	argTypes: {
		// This arg exists only for rendering in the open state by Percy
		// so we want to hide it from humans
		initialMenuState: {
			table: { disable: true },
			control: { disable: true },
		},
	},
};
export default meta;

type Story = StoryObj<typeof MobileNavComponent>;

export const MobileNav: Story = {
	render: (args) => (
		<div className={classNames(bodyWithNav, fullscreen)}>
			<div />
			<MobileNavComponent {...args} />
		</div>
	),
};
