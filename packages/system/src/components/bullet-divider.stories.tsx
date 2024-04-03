import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { sprinkles } from '../sprinkles/sprinkles.css';
import { BulletDivider as BulletDividerComponent } from './bullet-divider';

const meta: Meta<typeof BulletDividerComponent> = {
	title: 'Bullet Divider',
	component: BulletDividerComponent,
	parameters: {
		controls: {
			disabled: true,
		},
	},
};
export default meta;

type Story = StoryObj<typeof BulletDividerComponent>;

export const BulletDivider: Story = {
	render: () => (
		<div className={sprinkles({ textStyle: 'overline' })}>
			<span>Some text</span>
			<BulletDividerComponent />
			<span>Other text</span>
		</div>
	),
};
