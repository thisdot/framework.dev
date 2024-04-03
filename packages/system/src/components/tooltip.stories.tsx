import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InteractiveIcon } from '../icons/interactive-icon';
import { Tooltip as TooltipComponent } from './tooltip';

const meta: Meta<typeof TooltipComponent> = {
	title: 'Tooltip',
	component: TooltipComponent,
	args: {
		label: 'Hello world!',
		position: 'top',
	},
	argTypes: {
		position: {
			options: ['top', 'bottom', 'left', 'right'],
			control: 'inline-radio',
		},
	},
};
export default meta;

type Story = StoryObj<typeof TooltipComponent>;

export const Tooltip: Story = {
	render: (args) => (
		<div
			style={{
				display: 'grid',
				width: '90vw',
				height: '90vh',
				placeItems: 'center',
			}}
		>
			<TooltipComponent {...args}>
				<InteractiveIcon />
			</TooltipComponent>
		</div>
	),
};
