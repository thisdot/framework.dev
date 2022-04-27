import { Story, Meta } from "@storybook/react"
import {
	LinkCardGroup as LinkCardGroupComponent,
	LinkCardGroupProps,
} from "./link-card-group"

export default {
	title: "Landing/Link Card Group",
	component: LinkCardGroupComponent,
} as Meta

const Template: Story<LinkCardGroupProps> = (args) => (
	<LinkCardGroupComponent
		{...args}
		cards={[
			{
				title: "React Resources",
				href: "https://react.framework.dev/",
				icon: "/icon-react.svg",
				backgroundColor: "#00BCDA",
			},
			{
				title: "Angular Resources",
				href: "https://angular.framework.dev/",
				icon: "/icon-angular.svg",
				backgroundColor: "#C3002F",
			},
			{
				title: "Vue Resources",
				href: "https://vue.framework.dev/",
				icon: "/icon-vue.svg",
				backgroundColor: "#41B883",
			},
		]}
	/>
)

export const LinkCardGroup = Template.bind({})
