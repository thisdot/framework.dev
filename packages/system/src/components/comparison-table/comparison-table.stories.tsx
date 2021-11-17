import { Story, Meta } from "@storybook/react"
import {
	ComparisonTable as ComparisonTableComponent,
	ComparisonTableProps,
} from "./index"
import { vars } from "../../themes/themes.css"
import { libraries } from "../../../../react/src/data/libraries"

export default {
	title: "Comparison Table",
	component: ComparisonTableComponent,
	args: {
		libraries,
	},
	parameters: {
		backgrounds: {
			default: "Light Theme Background",
			values: [
				{
					name: "Light Theme Background",
					value: vars.themeColors.surface4,
					default: true,
				},
			],
		},
	},
} as Meta

const Template: Story<ComparisonTableProps> = (args) => (
	<ComparisonTableComponent {...args} />
)

export const ComparisonTable = Template.bind({})
