import { Story, Meta } from "@storybook/react"
import { Counter as CounterComponent, CounterProps } from "./counter"

export default {
	title: "Counter",
	component: CounterComponent,
	argTypes: {
		size: {
			options: ["small", "medium"],
			control: { type: "radio" },
		},
	},
} as Meta

const Template: Story<CounterProps> = (args) => <CounterComponent {...args} />

export const Counter = Template.bind({})

Counter.args = {
	children: "16",
}
