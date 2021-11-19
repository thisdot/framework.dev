import { Story, Meta } from "@storybook/react"
import { exampleTags } from "../../util/example-content"
import { TagFilter as TagFilterComponent, TagFilterProps } from "./tag-filter"

export default {
	title: "Search/Tag Filter",
	component: TagFilterComponent,
	args: {
		options: exampleTags,
		value: ["accessibility"],
	},
	argTypes: {
		onUpdate: { action: "update" },
	},
} as Meta

const Template: Story<TagFilterProps<string>> = (args) => (
	<TagFilterComponent {...args} />
)

export const TagFilter = Template.bind({})
