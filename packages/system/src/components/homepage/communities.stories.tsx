import { Story, Meta } from "@storybook/react"
import {
	Communities as CommunitiesComponent,
	CommunitiesProps,
} from "./communities"

export default {
	title: "Hone/Communities",
	component: CommunitiesComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const Template: Story<CommunitiesProps> = (args) => (
	<CommunitiesComponent {...args} />
)

export const Communities = Template.bind({})
