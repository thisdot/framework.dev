import { Story, Meta } from "@storybook/react"
import { vars } from "../../themes/themes.css"
import { exampleSearchData } from "../../util/example-content"
import { Search as SearchComponent, SearchProps } from "./search"

export default {
	title: "Search/Search",
	component: SearchComponent,
	args: {
		data: exampleSearchData,
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

const Template: Story<SearchProps> = (args) => <SearchComponent {...args} />

export const Search = Template.bind({})
