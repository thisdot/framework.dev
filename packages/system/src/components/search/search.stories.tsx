import { type Story, type Meta } from '@storybook/react'
import { fullscreen } from '../../styles/layouts.css'
import { exampleSearchData } from '../../util/example-content'
import { Search as SearchComponent, type SearchProps } from './search'

export default {
	title: 'Search/Search',
	component: SearchComponent,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		data: exampleSearchData,
		initialQuery: '',
		siteName: 'react',
		preFilters: {
			category: ['libraries'],
			field: [],
			tag: [],
		},
	},
} as Meta

const Template: Story<SearchProps> = (args) => (
	<div className={fullscreen}>
		<SearchComponent {...args} />
	</div>
)

export const Search = Template.bind({})
