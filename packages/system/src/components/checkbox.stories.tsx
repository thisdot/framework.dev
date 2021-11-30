import { Story, Meta } from "@storybook/react"
import { Checkbox as CheckboxComponent, CheckboxProps } from "./checkbox"

export default {
	title: "Checkbox",
	component: CheckboxComponent,
	args: {
		label: "Check me out",
		disabled: false,
	}
} as Meta

const Template: Story<CheckboxProps> = (args) => <CheckboxComponent {...args} />

export const Checkbox = Template.bind({})
