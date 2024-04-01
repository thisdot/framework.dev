import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { exampleBlogs } from '../../util/example-content';
import { titleFirstCardGrid } from './card-layouts.css';
import { BlogCard as BlogCardComponent } from './blog-card';

const meta: Meta<typeof BlogCardComponent> = {
	title: 'Cards/Blog Card',
	component: BlogCardComponent,
	args: {
		headingTag: 'h1',
	},
	argTypes: {
		onTagClick: {
			action: 'onTagClick',
		},
	},
};
export default meta;

type Story = StoryObj<typeof BlogCardComponent>;

export const BlogCard: Story = {
	render: (args) => (
		<div
			className={sprinkles({
				backgroundColor: 'surface4',
				padding: 16,
			})}
		>
			<div className={titleFirstCardGrid}>
				{exampleBlogs.map((blog) => (
					<BlogCardComponent key={blog.title} {...args} blog={blog} />
				))}
			</div>
		</div>
	),
};
