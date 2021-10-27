import { Story, Meta } from "@storybook/react"
import { Tag, TagProps } from "./tag"

export default {
	title: "Tag",
	component: Tag,
} as Meta

const Template: Story<TagProps> = (args) => <Tag {...args} />

export const Example = Template.bind({})

Example.args = {
	href: "/data-visualization",
	children: "Data Visualization",
}
