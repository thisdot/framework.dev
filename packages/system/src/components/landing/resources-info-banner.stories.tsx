import { Story, Meta } from "@storybook/react"
import {
	ResourcesInfoBanner as ResourcesInfoBannerComponent,
	ResourcesInfoBannerProps,
} from "./resources-info-banner"

export default {
	title: "Landing/Resources Info Banner",
	component: ResourcesInfoBannerComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const cardResources = [
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
]

const Template: Story<ResourcesInfoBannerProps> = (args) => (
	<ResourcesInfoBannerComponent
		{...args}
		title="Get started now"
		description="Explore some of the top resources added by a community to learn or be up to date with your framework"
		cardResources={cardResources}
	/>
)

export const ResourcesInfoBanner = Template.bind({})
