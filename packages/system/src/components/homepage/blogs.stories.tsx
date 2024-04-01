import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Blogs as BlogsComponent } from './blogs';
import { exampleBlogs } from '../../util/example-content';
import { pxToRem } from '../../util/style-utils';

const meta: Meta<typeof BlogsComponent> = {
	title: 'Home/Blogs',
	component: BlogsComponent,
	args: {
		blogs: exampleBlogs,
	},
};
export default meta;

type Story = StoryObj<typeof BlogsComponent>;

export const Blogs: Story = {
	render: (args) => (
		<div style={{ maxWidth: pxToRem(350) }}>
			<BlogsComponent {...args} />
		</div>
	),
};
