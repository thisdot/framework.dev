import { Story, Meta } from "@storybook/react"
import { vars } from "../themes/themes.css"
import {
	SelectInput as SelectInputComponent,
	SelectInputProps,
} from "./select-input"

export default {
	title: "Select Input",
	component: SelectInputComponent,
	args: {
		children: (
			<>
				<option disabled selected value="">--Please choose an option--</option>
				<option value="dog">Dog</option>
				<option value="cat">Cat</option>
				<option value="hamster">Hamster</option>
				<option value="parrot">Parrot</option>
				<option value="spider">Spider</option>
				<option value="goldfish">Goldfish</option>
			</>
		),
		label: "Label",
		disabled: false,
		hideLabel: false,
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

const Template: Story<SelectInputProps> = (args) => (
	<SelectInputComponent {...args} />
)

export const SelectInput = Template.bind({})
