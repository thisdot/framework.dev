import { Story, Meta } from "@storybook/react"
import { exampleBlogs } from "../../util/example-content"
import {
	ResourceList as ResourceListComponent,
	ResourceListProps,
} from "./resource-list"

export default {
	title: "Resource List",
	component: ResourceListComponent,
	args: {
		title: "Resource list title",
		viewAll: { title: "View all resources", href: "#" },
		items: exampleBlogs.slice(0, 4).map((blog) => {
			return {
				image: { src: blog.image, style: "normal" },
				title: blog.title,
				metadata: blog.author,
				href: blog.href,
				description: blog.description,
			}
		}),
	},
} as Meta

const Template: Story<ResourceListProps> = (args) => (
	<ResourceListComponent {...args} />
)

export const ResourceList = Template.bind({})
