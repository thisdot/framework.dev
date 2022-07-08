import { Story, Meta } from '@storybook/react'
import {
	SearchInput as SearchInputComponent,
	SearchInputProps,
} from './search-input'

export default {
	title: 'Search/Search Input',
	component: SearchInputComponent,
	args: {
		label: 'Search',
		staticPrefix: 'in:books',
		placeholder: '',
		disabled: false,
		hideLabel: true,
	},
} as Meta

const Template: Story<SearchInputProps> = (args) => (
	<SearchInputComponent {...args} />
)

export const SearchInput = Template.bind({})
