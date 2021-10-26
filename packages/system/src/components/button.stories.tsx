import { Story, Meta } from "@storybook/react"
import { Button, ButtonProps } from "./button"

export default {
	title: "Button",
	component: Button,
	argTypes: { onClick: { action: "clicked" } },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Example = Template.bind({})

Example.args = {
	children: "Click me!",
}
