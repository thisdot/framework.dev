import { Story, Meta } from "@storybook/react"
import { Tag as TagComponent, TagProps } from "./tag"

export default {
	title: "Tag",
	component: TagComponent,
	argTypes: {
		color: {
			options: ["neutral", "beginner", "intermediate", "advanced"],
			control: { type: "radio" },
		}
	}
} as Meta

const Template: Story<TagProps> = (args) => <TagComponent {...args} />

export const Tag = Template.bind({})

Tag.args = {
	href: "/data-visualization",
	children: "data visualization",
}
