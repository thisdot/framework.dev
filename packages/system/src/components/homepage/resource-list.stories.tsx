import { Story, Meta } from "@storybook/react"
import { ResourceList as ResourceListComponent, ResourceListProps } from "./resource-list"

export default {
	title: "Resource List",
	component: ResourceListComponent,
	args: {
		children: "Hello world",
	}
} as Meta

const Template: Story<ResourceListProps> = (args) => <ResourceListComponent {...args} />

export const ResourceList = Template.bind({})