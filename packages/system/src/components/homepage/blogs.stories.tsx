import { Story, Meta } from "@storybook/react"
import { Blogs as BlogsComponent, BlogsProps } from "./blogs"

export default {
	title: "Blogs",
	component: BlogsComponent,
	args: {
		children: "Hello world",
	}
} as Meta

const Template: Story<BlogsProps> = (args) => <BlogsComponent {...args} />

export const Blogs = Template.bind({})