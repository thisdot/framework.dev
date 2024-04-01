import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContributorBanner as ContributorBannerComponent } from './contributor-banner';

const meta: Meta<typeof ContributorBannerComponent> = {
	title: 'Home/Contributor Banner',
	component: ContributorBannerComponent,
	args: {
		contributors: [
			{
				login: 'jbachhardie',
				url: 'https://github.com/jbachhardie',
				avatarUrl: 'https://github.com/jbachhardie.png',
			},
			{
				login: 'tvanantwerp',
				url: 'https://github.com/tvanantwerp',
				avatarUrl: 'https://github.com/tvanantwerp.png',
			},
			{
				login: 'markshenouda',
				url: 'https://github.com/markshenouda',
				avatarUrl: 'https://github.com/markshenouda.png',
			},
			{
				login: 'ktrz',
				url: 'https://github.com/ktrz',
				avatarUrl: 'https://github.com/ktrz.png',
			},
		],
	},
};
export default meta;

type Story = StoryObj<typeof ContributorBannerComponent>;

export const ContributorBanner: Story = {
	render: (args) => <ContributorBannerComponent {...args} />,
};
