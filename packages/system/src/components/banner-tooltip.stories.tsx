import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BannerTooltip as BannerTooltipComponent } from './banner-tooltip';

const meta: Meta<typeof BannerTooltipComponent> = {
	title: 'Banner Tooltip',
	component: BannerTooltipComponent,
	args: {
		children: 'Hello world',
		pitchText: {
			highlightedText: 'Compare and select libraries',
			softText: 'based on your needs',
		},
		explanatoryText: 'Click on icon to add the lib to comparison',
	},
};
export default meta;

type Story = StoryObj<typeof BannerTooltipComponent>;

export const BannerTooltip: Story = {
	render: (args) => <BannerTooltipComponent {...args} />,
};
