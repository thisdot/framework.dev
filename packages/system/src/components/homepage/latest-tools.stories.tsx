import { Story, Meta } from "@storybook/react"
import {
	LatestTools as LatestToolsComponent,
	LatestToolsProps,
} from "./latest-tools"

export default {
	title: "Home/Latest Tools",
	component: LatestToolsComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const Template: Story<LatestToolsProps> = (args) => (
	<LatestToolsComponent {...args} />
)

export const LatestTools = Template.bind({})
