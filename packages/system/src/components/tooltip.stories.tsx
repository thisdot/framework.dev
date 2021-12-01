import { Story, Meta } from "@storybook/react"
import { InteractiveIcon } from "../icons/interactive-icon"
import { Tooltip as TooltipComponent, TooltipProps } from "./tooltip"

export default {
	title: "Tooltip",
	component: TooltipComponent,
	args: {
		label: "Hello world!",
		position: "top",
	},
	argTypes: {
		position: {
			options: ["top", "bottom", "left", "right"],
			control: "inline-radio"
		}
	}
} as Meta

const Template: Story<TooltipProps> = (args) => (
	<div
		style={{
			display: "grid",
			width: "90vw",
			height: "90vh",
			placeItems: "center",
		}}
	>
		<TooltipComponent {...args}>
			<InteractiveIcon />
		</TooltipComponent>
	</div>
)

export const Tooltip = Template.bind({})
