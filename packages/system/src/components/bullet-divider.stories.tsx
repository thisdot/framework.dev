import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { BulletDivider as BulletDividerComponent } from "./bullet-divider"

export default {
	title: "Bullet Divider",
	component: BulletDividerComponent,
	parameters: {
		controls: {
			disabled: true,
		},
	},
} as Meta

const Template: Story = (args) => (
	<div className={sprinkles({ textStyle: "overline" })}>
		<span>Some text</span>
		<BulletDividerComponent {...args} />
		<span>Other text</span>
	</div>
)

export const BulletDivider = Template.bind({})
