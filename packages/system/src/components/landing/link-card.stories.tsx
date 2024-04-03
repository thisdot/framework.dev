import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactIcon } from '../../icons/react-icon';
import { LinkCard as LinkCardComponent } from './link-card';

const meta: Meta<typeof LinkCardComponent> = {
	title: 'Landing/Link Card',
	component: LinkCardComponent,
};
export default meta;

type Story = StoryObj<typeof LinkCardComponent>;

export const LinkCard: Story = {
	render: (args) => <LinkCardComponent {...args} />,
	args: {
		title: 'React Resources',
		href: 'https://react.framework.dev/',
		Icon(props) {
			return <ReactIcon {...props} />;
		},
		backgroundColor: '#00BCDA',
		bigSize: true,
	},
};
