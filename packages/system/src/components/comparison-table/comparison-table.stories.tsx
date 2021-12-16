import { Story, Meta } from "@storybook/react"
import {
	ComparisonTable as ComparisonTableComponent,
	ComparisonTableProps,
} from "./index"
import { exampleLibraries } from "../../util/example-content"
import { fullscreen } from "../../styles/layouts.css"

export default {
	title: "Comparison Table",
	component: ComparisonTableComponent,
	args: {
		libraries: exampleLibraries,
	},
	parameters: {
		layout: "fullscreen",
	},
} as Meta

const Template: Story<ComparisonTableProps> = (args) => (
	<ComparisonTableComponent className={fullscreen} {...args} />
)

export const ComparisonTable = Template.bind({})
