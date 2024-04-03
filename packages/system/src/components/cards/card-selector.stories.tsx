import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardSelector as CardSelectorComponent } from './card-selector';

const meta: Meta<typeof CardSelectorComponent> = {
	title: 'Cards/Card Selector',
	component: CardSelectorComponent,
	args: {
		checked: false,
	},
	argTypes: {
		onChange: {
			action: 'onChange',
		},
	},
};
export default meta;

type Story = StoryObj<typeof CardSelectorComponent>;

export const CardSelector: Story = {
	render: (args) => (
		<div
			style={{
				display: 'grid',
				width: '90vw',
				height: '90vh',
				placeItems: 'center',
			}}
		>
			<CardSelectorComponent {...args} />
		</div>
	),
};
