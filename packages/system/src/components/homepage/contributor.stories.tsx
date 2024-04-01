import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Contributor as ContributorComponent } from './contributor';

const meta: Meta<typeof ContributorComponent> = {
	title: 'Home/Contributor',
	component: ContributorComponent,
	args: {
		contributor: {
			login: 'ktrz',
			url: 'https://github.com/ktrz',
			avatarUrl: 'https://github.com/ktrz.png',
		},
	},
};
export default meta;

type Story = StoryObj<typeof ContributorComponent>;

export const Contributor: Story = {
	render: (args) => <ContributorComponent {...args} />,
};
