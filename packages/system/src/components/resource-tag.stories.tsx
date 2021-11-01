import { Story, Meta } from "@storybook/react"
import {
	ResourceTag as ResourceTagComponent,
	ResourceTagProps,
} from "./resource-tag"

export default {
	title: "Resource Tag",
	component: ResourceTagComponent,
	argTypes: {
		icon: {
			options: ["topic", "text", "video", "interactive"],
			control: { type: "radio" },
		},
	},
} as Meta

const Template: Story<ResourceTagProps> = (args) => (
	<ResourceTagComponent {...args} />
)

export const ResourceTag = Template.bind({})

ResourceTag.args = {
	href: "/data-visualization",
	children: "Data Visualization",
	icon: "interactive",
}
