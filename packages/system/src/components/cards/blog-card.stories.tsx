import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { exampleBlogs } from "../../util/example-content"
import { titleFirstCardGrid } from "./card-layouts.css"
import { BlogCard as BlogCardComponent, BlogCardProps } from "./blog-card"

export default {
	title: "Cards/Blog Card",
	component: BlogCardComponent,
	args: {
		headingTag: "h1",
	},
	argTypes: {
		onTagClick: {
			action: "onTagClick",
		},
	},
} as Meta

const Template: Story<BlogCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: "surface4",
			padding: 16,
		})}
	>
		<div className={titleFirstCardGrid}>
			{exampleBlogs.map((blog) => (
				<BlogCardComponent key={blog.title} {...args} blog={blog} />
			))}
		</div>
	</div>
)

export const BlogCard = Template.bind({})
