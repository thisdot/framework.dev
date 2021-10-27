import { Story, Meta } from "@storybook/react"
import { Counter, CounterProps } from "./counter"

export default {
	title: "Counter",
	component: Counter,
} as Meta

const Template: Story<CounterProps> = (args) => <Counter {...args} />

export const Example = Template.bind({})

Example.args = {
	children: "16",
}
