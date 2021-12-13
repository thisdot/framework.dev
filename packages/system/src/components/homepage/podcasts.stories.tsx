import { Story, Meta } from "@storybook/react"
import { Podcasts as PodcastsComponent, PodcastsProps } from "./podcasts"

export default {
	title: "Home/Podcasts",
	component: PodcastsComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const Template: Story<PodcastsProps> = (args) => <PodcastsComponent {...args} />

export const Podcasts = Template.bind({})
