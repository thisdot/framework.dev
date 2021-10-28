import { Meta } from "@storybook/react"
import { Button as ButtonComponent } from "./button"

export default {
	title: "Button",
	component: ButtonComponent,
	args: {
		as: "button",
		size: "medium",
		color: "primary",
		children: "Click me!",
	},
	argTypes: {
		onClick: { action: "clicked" },
		as: {
			options: ["button", "a"],
			control: { type: "radio" },
		},
		size: {
			options: ["small", "medium"],
			control: { type: "radio" },
		},
		color: {
			options: ["primary", "destructive"],
			control: { type: "radio" },
		},
	},
} as Meta

const Template = (args) => <ButtonComponent {...args} />

export const Button = Template.bind({})

Button.parameters = {
	percy: {
		name: "Button",
		additionalSnapshots: [{ suffix: "as anchor", args: { as: "a" } }],
	},
}
