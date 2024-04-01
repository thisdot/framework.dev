import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { exampleTools } from '../../util/example-content';
import { titleFirstCardGrid } from './card-layouts.css';
import { ToolCard as ToolCardComponent } from './tool-card';

const meta: Meta<typeof ToolCardComponent> = {
	title: 'Cards/Tool Card',
	component: ToolCardComponent,
	args: {
		headingTag: 'h1',
	},
	argTypes: {
		onTagClick: {
			action: 'onTagClick',
		},
	},
};
export default meta;

type Story = StoryObj<typeof ToolCardComponent>;

export const ToolCard: Story = {
	render: (args) => (
		<div
			className={sprinkles({
				backgroundColor: 'surface4',
				padding: 16,
			})}
		>
			<div className={titleFirstCardGrid}>
				{exampleTools.map((tool) => (
					<ToolCardComponent key={tool.name} {...args} tool={tool} />
				))}
			</div>
		</div>
	),
};
