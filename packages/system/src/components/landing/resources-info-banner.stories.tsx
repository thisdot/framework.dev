import { Story, Meta } from "@storybook/react"
import { ResourcesInfoBanner as ResourcesInfoBannerComponent, ResourcesInfoBannerProps } from "./resources-info-banner"

export default {
	title: "Landing/Resources Info Banner",
	component: ResourcesInfoBannerComponent,
	args: {
		children: "Hello world",
	}
} as Meta

const Template: Story<ResourcesInfoBannerProps> = (args) => <ResourcesInfoBannerComponent {...args} />

export const ResourcesInfoBanner = Template.bind({})