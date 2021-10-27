import { Story, Meta } from "@storybook/react"
import { Tag as TagComponent, TagProps } from "./tag"

export default {
	title: "Tag",
	component: TagComponent,
} as Meta

const Template: Story<TagProps> = (args) => <TagComponent {...args} />

export const Tag = Template.bind({})

Tag.args = {
	href: "/data-visualization",
	children: "Data Visualization",
}
