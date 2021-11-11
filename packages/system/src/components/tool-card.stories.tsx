import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { exampleTools } from "../util/example-content"
import { ToolCard as ToolCardComponent, ToolCardProps } from "./tool-card"

export default {
	title: "Tool Card",
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
				layout: "landscapeCardGrid",
				gap: 16,
			})}
		>
			{exampleTools.map((tool) => (
				<ToolCardComponent tool={tool} key={tool.name} {...args} />
			))}
		</div>
	</div>
)

export const ToolCard = Template.bind({})
