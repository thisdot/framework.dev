import { Story, Meta } from "@storybook/react"
import { allCategoryNames } from "../../models/all-categories"
import { exampleTags } from "../../util/example-content"
import {
	FilterMenu as FilterMenuComponent,
	FilterMenuProps,
} from "./filter-menu"
import { QueryParams } from "./types"

const params: QueryParams = {
	categories: [],
	fields: [],
	tags: [],
	textSearch: "",
	availableFilters: {
		category: new Set(allCategoryNames),
		tag: new Set(exampleTags),
		fields: new Map([
			["level", new Set(["beginner", "intermediate", "advanced"])],
			["paymentType", new Set(["free", "paid"])],
			["format", new Set(["text", "video", "interactive"])],
		]),
	},
}

export default {
	title: "Search/Filter Menu",
	component: FilterMenuComponent,
	parameters: {
		layout: "fullscreen",
		viewport: {
			defaultViewport: "mobile2",
		},
	},
	args: {
		params,
	},
	argTypes: {
		onConfirm: { action: "confirm" },
		params: {
			type: {
				summary: "QueryParams",
			},
			control: {
				type: null,
			},
		},
	},
} as Meta

const Template: Story<FilterMenuProps> = (args) => (
	<FilterMenuComponent {...args} />
)

export const FilterMenu = Template.bind({})
