import { Story, Meta } from "@storybook/react"
import {
	FeaturedLibraries as FeaturedLibrariesComponent,
	FeaturedLibrariesProps,
} from "./featured-libraries"

export default {
	title: "Home/Featured Libraries",
	component: FeaturedLibrariesComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const Template: Story<FeaturedLibrariesProps> = (args) => (
	<FeaturedLibrariesComponent {...args} />
)

export const FeaturedLibraries = Template.bind({})
