import { Story, Meta } from "@storybook/react"
import {
	ComparisonTable as ComparisonTableComponent,
	ComparisonTableProps,
} from "./index"
import { exampleLibraries } from "../../util/example-content"

export default {
	title: "Comparison Table",
	component: ComparisonTableComponent,
	args: {
		libraries: exampleLibraries,
	},
} as Meta

const Template: Story<ComparisonTableProps> = (args) => (
	<ComparisonTableComponent {...args} />
)

export const ComparisonTable = Template.bind({})
