import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PitchCard as PitchCardComponent } from './pitch-card';

const meta: Meta<typeof PitchCardComponent> = {
	title: 'Landing/Pitch Card',
	component: PitchCardComponent,
	args: {
		children: 'Hello world',
	},
};
export default meta;

type Story = StoryObj<typeof PitchCardComponent>;

export const PitchCard: Story = {
	render: (args) => (
		<PitchCardComponent
			{...args}
			pitchText={{
				highlightedText: 'Diferent channels',
				softText: 'Browse books, podcasts, libraries, curses and more',
			}}
			imageUrl="/pitch-image-1.png"
		/>
	),
};
