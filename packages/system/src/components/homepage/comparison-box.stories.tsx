import { Story, Meta } from "@storybook/react"
import {
	ComparisonBox as ComparisonBoxComponent,
	ComparisonBoxProps,
} from "./comparison-box"

export default {
	title: "Home/Comparison Box",
	component: ComparisonBoxComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const Template: Story<ComparisonBoxProps> = (args) => (
	<ComparisonBoxComponent {...args} />
)

export const ComparisonBox = Template.bind({})
