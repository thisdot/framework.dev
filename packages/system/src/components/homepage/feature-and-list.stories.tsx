import { Story, Meta } from "@storybook/react"
import { FeatureAndList as FeatureAndListComponent, FeatureAndListProps } from "./feature-and-list"

export default {
	title: "Feature And List",
	component: FeatureAndListComponent,
	args: {
		children: "Hello world",
	}
} as Meta

const Template: Story<FeatureAndListProps> = (args) => <FeatureAndListComponent {...args} />

export const FeatureAndList = Template.bind({})