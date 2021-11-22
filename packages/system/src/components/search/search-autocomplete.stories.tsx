import { Story, Meta } from "@storybook/react"
import { useState } from "react"
import { exampleSearchData } from "../../util/example-content"
import {
	SearchAutocomplete as SearchAutocompleteComponent,
	SearchAutocompleteProps,
} from "./search-autocomplete"

export default {
	title: "Search/Search Autocomplete",
	component: SearchAutocompleteComponent,
	args: {
		data: exampleSearchData,
	},
} as Meta

const Template: Story<SearchAutocompleteProps> = (args) => {
	const [value, setValue] = useState("")
	return (
		<SearchAutocompleteComponent value={value} onChange={setValue} {...args} />
	)
}

export const SearchAutocomplete = Template.bind({})
