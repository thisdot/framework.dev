import { Story, Meta } from "@storybook/react"
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
} as Meta

const Template: Story<SelectInputProps> = (args) => (
	<SelectInputComponent {...args} />
)

export const SelectInput = Template.bind({})
