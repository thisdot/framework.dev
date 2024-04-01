import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { examplePodcasts } from '../../util/example-content';
import { imageFirstCardGrid } from './card-layouts.css';
import { PodcastCard as PodcastCardComponent } from './podcast-card';

const meta: Meta<typeof PodcastCardComponent> = {
	title: 'Cards/Podcast Card',
	component: PodcastCardComponent,
	args: {
		headingTag: 'h1',
	},
	argTypes: {
		onTagClick: {
			action: 'onTagClick',
		},
	},
	parameters: {
		layout: 'fullscreen',
	},
};
export default meta;

type Story = StoryObj<typeof PodcastCardComponent>;

export const PodcastCard: Story = {
	render: (args) => (
		<div
			className={sprinkles({
				backgroundColor: 'surface4',
				padding: 16,
			})}
		>
			<div className={imageFirstCardGrid}>
				{examplePodcasts.map((podcast) => (
					<PodcastCardComponent
						{...args}
						podcast={podcast}
						key={podcast.title}
						lastPublishedDate="November 4th, 2021"
					/>
				))}
			</div>
		</div>
	),
};
