import { Story, Meta } from "@storybook/react"
import { Courses as CoursesComponent, CoursesProps } from "./courses"

export default {
	title: "Home/Courses",
	component: CoursesComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const Template: Story<CoursesProps> = (args) => <CoursesComponent {...args} />

export const Courses = Template.bind({})
