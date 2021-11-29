import { Story, Meta } from "@storybook/react"
import { exampleSearchData } from "../../util/example-content"
import { Search as SearchComponent, SearchProps } from "./search"

export default {
	title: "Search/Search",
	component: SearchComponent,
	args: {
		data: exampleSearchData,
		preFilters: {
			category: ["courses"],
			field: [],
			tag: [],
		},
	},
} as Meta

const Template: Story<SearchProps> = (args) => <SearchComponent {...args} />

export const Search = Template.bind({})
