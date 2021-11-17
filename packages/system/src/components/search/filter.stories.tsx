import { Story, Meta } from "@storybook/react"
import { allCategoryNames } from "../../models/all-categories"
import { Filter as FilterComponent, FilterProps } from "./filter"

export default {
	title: "Filter",
	component: FilterComponent,
	args: {
		name: "Search in",
		options: new Set(allCategoryNames),
		value: ["books"],
	},
	argTypes: {
		onUpdate: { action: "update" },
	},
} as Meta

const Template: Story<FilterProps<string>> = (args) => (
	<FilterComponent {...args} />
)

export const Filter = Template.bind({})
