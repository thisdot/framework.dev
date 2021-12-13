import { Story, Meta } from "@storybook/react"
import { Homepage as HomepageComponent, HomepageProps } from "./homepage"

export default {
	title: "Home/Homepage",
	component: HomepageComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const Template: Story<HomepageProps> = (args) => <HomepageComponent {...args} />

export const Homepage = Template.bind({})
