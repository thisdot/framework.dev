import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Homepage as HomepageComponent } from './homepage';
import {
	exampleBlogs,
	exampleBooks,
	exampleCommunities,
	exampleCourses,
	exampleLibraries,
	examplePodcasts,
	exampleTools,
} from '../../util/example-content';

const meta: Meta<typeof HomepageComponent> = {
	title: 'Home/Homepage',
	component: HomepageComponent,
	args: {
		libraries: exampleLibraries,
		podcasts: examplePodcasts,
		courses: exampleCourses,
		blogs: exampleBlogs,
		books: exampleBooks,
		tools: exampleTools,
		communities: exampleCommunities,
		siteName: 'react',
	},
};
export default meta;

type Story = StoryObj<typeof HomepageComponent>;

export const Homepage: Story = {
	render: (args) => <HomepageComponent {...args} />,
};
