import { Story, Meta } from "@storybook/react"
import { vars } from "../themes/themes.css"
import { TextInput as TextInputComponent, TextInputProps } from "./text-input"

export default {
	title: "Text Input",
	component: TextInputComponent,
	args: {
		label: "Label",
		placeholder: "Placeholder",
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

const Template: Story<TextInputProps> = (args) => (
	<TextInputComponent {...args} />
)

export const TextInput = Template.bind({})
