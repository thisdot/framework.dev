import { Story, Meta } from "@storybook/react"
import { bookIndexMetadata } from "../../models/book"
import { Filter as FilterComponent, FilterProps } from "./filter"

export default {
	title: "Search/Filter",
	component: FilterComponent,
	args: {
		options: Object.entries(bookIndexMetadata.filterableFields)[0],
		value: ["level", ["beginner"]],
	} as Partial<FilterProps>,
	argTypes: {
		onUpdate: { action: "update" },
	},
} as Meta

const Template: Story<FilterProps> = (args) => <FilterComponent {...args} />

export const Filter = Template.bind({})
