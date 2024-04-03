import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentBanner as ContentBannerComponent } from './content-banner';
import { examplePodcasts } from '../../util/example-content';

const meta: Meta<typeof ContentBannerComponent> = {
	title: 'Home/Content Banner',
	component: ContentBannerComponent,
	args: {
		title: 'Content banner title',
		viewAll: {
			title: 'View all things',
			href: '#',
		},
		items: examplePodcasts.slice(0, 4).map((podcast) => {
			return {
				title: podcast.title,
				metadata: podcast.hosts.join(', '),
				image: podcast.image,
				href: podcast.href,
			};
		}),
	},
};
export default meta;

type Story = StoryObj<typeof ContentBannerComponent>;

export const ContentBanner: Story = {
	render: (args) => <ContentBannerComponent {...args} />,
};
