import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FeaturedLibraries as FeaturedLibrariesComponent } from './featured-libraries';
import { exampleLibraries } from '../../util/example-content';

const meta: Meta<typeof FeaturedLibrariesComponent> = {
	title: 'Home/Featured Libraries',
	component: FeaturedLibrariesComponent,
	args: {
		libraries: exampleLibraries,
	},
};
export default meta;

type Story = StoryObj<typeof FeaturedLibrariesComponent>;

export const FeaturedLibraries: Story = {
	render: (args) => <FeaturedLibrariesComponent {...args} />,
};
