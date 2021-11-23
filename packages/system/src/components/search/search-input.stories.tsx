import { Story, Meta } from "@storybook/react"
import { vars } from "../../themes/themes.css"
import { SearchInput as SearchInputComponent, SearchInputProps } from "./search-input"

export default {
	title: "Search/Search Input",
	component: SearchInputComponent,
	args: {
		label: "Search",
		staticPrefix: "in:books",
		placeholder: "",
		disabled: false,
		hideLabel: true,
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

const Template: Story<SearchInputProps> = (args) => <SearchInputComponent {...args} />

export const SearchInput = Template.bind({})