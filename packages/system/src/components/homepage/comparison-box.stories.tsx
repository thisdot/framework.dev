import { Story, Meta } from "@storybook/react"
import {
	ComparisonBox as ComparisonBoxComponent,
	ComparisonBoxProps,
} from "./comparison-box"
import { libraryTags } from "../../util/example-content"
import { pxToRem } from "../../util/style-utils"

export default {
	title: "Home/Comparison Box",
	component: ComparisonBoxComponent,
	args: {
		libraryTags: libraryTags,
	},
} as Meta

const Template: Story<ComparisonBoxProps> = (args) => (
	<div style={{ maxWidth: pxToRem(350) }}>
		<ComparisonBoxComponent {...args} />
	</div>
)

export const ComparisonBox = Template.bind({})
