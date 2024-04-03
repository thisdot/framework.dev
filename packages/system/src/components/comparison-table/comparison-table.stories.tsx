import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonTable as ComparisonTableComponent } from './index';
import { exampleLibraries } from '../../util/example-content';
import { fullscreen } from '../../styles/layouts.css';

const meta: Meta<typeof ComparisonTableComponent> = {
	title: 'Comparison Table',
	component: ComparisonTableComponent,
	args: {
		libraries: exampleLibraries,
	},
	parameters: {
		layout: 'fullscreen',
	},
};
export default meta;

type Story = StoryObj<typeof ComparisonTableComponent>;

export const ComparisonTable: Story = {
	render: (args) => (
		<ComparisonTableComponent className={fullscreen} {...args} />
	),
};
