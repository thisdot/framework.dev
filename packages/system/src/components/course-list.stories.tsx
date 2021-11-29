import { Story, Meta } from "@storybook/react"
import { exampleCourses } from "../util/example-content"
import {
	CourseList as CourseListComponent,
	CourseListProps,
} from "./course-list"

export default {
	title: "Course List",
	component: CourseListComponent,
	args: {
		headingTag: "h1",
	},
} as Meta

const Template: Story<CourseListProps> = (args) => (
	<div style={{ maxWidth: "522px" }}>
		<CourseListComponent {...args} courses={exampleCourses} />
	</div>
)

export const CourseList = Template.bind({})
