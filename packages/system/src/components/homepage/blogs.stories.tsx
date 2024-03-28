import { type Story, type Meta } from '@storybook/react';
import { Blogs as BlogsComponent, type BlogsProps } from './blogs';
import { exampleBlogs } from '../../util/example-content';
import { pxToRem } from '../../util/style-utils';

export default {
	title: 'Home/Blogs',
	component: BlogsComponent,
	args: {
		blogs: exampleBlogs,
	},
} as Meta;

const Template: Story<BlogsProps> = (args) => (
	<div style={{ maxWidth: pxToRem(350) }}>
		<BlogsComponent {...args} />
	</div>
);

export const Blogs = Template.bind({});
