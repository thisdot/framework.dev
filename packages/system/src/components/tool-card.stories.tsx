import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { exampleTools } from "../util/example-content"
import { ToolCard as ToolCardComponent, ToolCardProps } from "./tool-card"

export default {
	title: "Cards/Tool Card",
	component: ToolCardComponent,
	args: {
		headingTag: "h1",
	},
} as Meta

const Template: Story<ToolCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: "surface4",
			padding: 16,
		})}
	>
		<div
			className={sprinkles({
				layout: "titleFirstCardGrid",
				gap: 16,
			})}
		>
			{exampleTools.map((tool) => (
				<ToolCardComponent key={tool.name} {...args} tool={tool} />
			))}
		</div>
	</div>
)

export const ToolCard = Template.bind({})
