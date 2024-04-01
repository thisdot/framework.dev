import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LatestTools as LatestToolsComponent } from './latest-tools';
import { exampleTools } from '../../util/example-content';
import { pxToRem } from '../../util/style-utils';

const meta: Meta<typeof LatestToolsComponent> = {
	title: 'Home/Latest Tools',
	component: LatestToolsComponent,
	args: {
		tools: exampleTools,
	},
};
export default meta;

type Story = StoryObj<typeof LatestToolsComponent>;

export const LatestTools: Story = {
	render: (args) => (
		<div style={{ maxWidth: pxToRem(350) }}>
			<LatestToolsComponent {...args} />
		</div>
	),
};
