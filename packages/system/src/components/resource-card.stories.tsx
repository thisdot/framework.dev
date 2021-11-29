import { Story, Meta } from "@storybook/react"
import {
	exampleBooks,
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
		title: exampleLibraries[0].name,
		subtitle: exampleLibraries[0].author,
		image: exampleLibraries[0].image,
		href: exampleLibraries[0].href,
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
			options: [exampleLibraries[0].image, exampleBooks[0].image],
			control: {
				type: "inline-radio",
				labels: {
					[exampleLibraries[0].image]: "logo",
					[exampleBooks[0].image]: "book",
				},
			},
		},
	},
} as Meta

const Template: Story<ResourceCardProps> = (args) => (
	<ResourceCardComponent {...args} />
)

export const ResourceCard = Template.bind({})
