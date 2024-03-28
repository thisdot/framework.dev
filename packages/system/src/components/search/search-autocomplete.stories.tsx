import { type Story, type Meta } from '@storybook/react'
import { useState } from 'react'
import { exampleSearchData } from '../../util/example-content'
import {
	SearchAutocomplete as SearchAutocompleteComponent,
	type SearchAutocompleteProps,
} from './search-autocomplete'

export default {
	title: 'Search/Search Autocomplete',
	component: SearchAutocompleteComponent,
	args: {
		data: exampleSearchData,
		availableFilters: {
			category: ['books', 'courses'],
			tag: ['redux', 'data fetching'],
			field: [['level', ['beginner', 'intermediate', 'advanced']]],
		},
	},
} as Meta

const Template: Story<SearchAutocompleteProps> = (args) => {
	const [value, setValue] = useState('')
	return (
		<SearchAutocompleteComponent {...args} value={value} onChange={setValue} />
	)
}

export const SearchAutocomplete = Template.bind({})
