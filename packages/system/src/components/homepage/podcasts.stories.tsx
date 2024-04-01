import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { examplePodcasts } from '../../util/example-content';
import { Podcasts as PodcastsComponent } from './podcasts';

const meta: Meta<typeof PodcastsComponent> = {
	title: 'Home/Podcasts',
	component: PodcastsComponent,
	args: {
		podcasts: examplePodcasts,
	},
};
export default meta;

type Story = StoryObj<typeof PodcastsComponent>;

export const Podcasts: Story = {
	render: (args) => <PodcastsComponent {...args} />,
};
