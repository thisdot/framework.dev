import { Story, Meta } from "@storybook/react"
import { LinkCard as LinkCardComponent, LinkCardProps } from "./link-card"

export default {
	title: "Landing/Link Card",
	component: LinkCardComponent,
} as Meta

const Template: Story<LinkCardProps> = (args) => (
	<LinkCardComponent
		{...args}
		title="React Resources"
		href="https://react.framework.dev/"
		icon="/icon-react.svg"
		backgroundColor="#00BCDA"
	/>
)

export const LinkCard = Template.bind({})
