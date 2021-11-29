import { Story, Meta } from "@storybook/react"
import { AttributeDefinition } from "../models/all-categories"
import {
	exampleBooks,
	exampleCourses,
	exampleLibraries,
	exampleTags,
} from "../util/example-content"
import {
	ResourceCard as ResourceCardComponent,
	ResourceCardProps,
} from "./resource-card"

export default {
	title: "Resource Card",
	component: ResourceCardComponent,
	args: {
		headingTag: "h1",
		title: exampleCourses[0].title,
		subtitle: exampleCourses[0].author,
		image: exampleCourses[0].image,
		href: exampleCourses[0].href,
		attributes: [
			["level", exampleCourses[0].level],
			["format", exampleCourses[0].format],
		] as AttributeDefinition[],
		tags: exampleTags,
		layout: "titleFirst",
		imageLayout: "logo",
		children:
			"Mollit deserunt laborum excepteur esse excepteur incididunt irure deserunt adipisicing anim in id.",
	},
	argTypes: {
		layout: {
			options: ["titleFirst", "imageFirst"],
			control: "inline-radio",
		},
		imageLayout: {
			options: ["logo", "book"],
			control: "inline-radio",
		},
		image: {
			options: ["logo", "book"],
			mapping: {
				logo: exampleLibraries[0].image,
				book: exampleBooks[0].image,
			},
			control: {
				type: "inline-radio",
			},
		},
	},
} as Meta

const Template: Story<ResourceCardProps> = (args) => (
	<ResourceCardComponent {...args} />
)

export const ResourceCard = Template.bind({})
