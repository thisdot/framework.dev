import { Story, Meta } from "@storybook/react"
import {
	Communities as CommunitiesComponent,
	CommunitiesProps,
} from "./communities"
import { exampleCommunities } from "../../util/example-content"

export default {
	title: "Home/Communities",
	component: CommunitiesComponent,
	args: {
		communities: exampleCommunities,
	},
} as Meta

const Template: Story<CommunitiesProps> = (args) => (
	<CommunitiesComponent {...args} />
)

export const Communities = Template.bind({})
