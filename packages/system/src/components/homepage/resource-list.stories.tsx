import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { exampleBlogs } from '../../util/example-content';
import { ResourceList as ResourceListComponent } from './resource-list';

const meta: Meta<typeof ResourceListComponent> = {
	title: 'Resource List',
	component: ResourceListComponent,
	args: {
		title: 'Resource list title',
		viewAll: { title: 'View all resources', href: '#' },
		items: exampleBlogs.slice(0, 4).map((blog) => {
			return {
				image: blog.image,
				title: blog.title,
				metadata: blog.author,
				href: blog.href,
				description: blog.description,
			};
		}),
	},
};
export default meta;

type Story = StoryObj<typeof ResourceListComponent>;

export const ResourceList: Story = {
	render: (args) => <ResourceListComponent {...args} />,
};
