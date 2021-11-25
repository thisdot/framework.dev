import { Story, Meta } from "@storybook/react"
import { vars } from "../themes/themes.css"
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
	parameters: {
		backgrounds: {
			default: "Light Theme Background",
			values: [
				{
					name: "Light Theme Background",
					value: vars.themeColors.surface4,
					default: true,
				},
			],
		},
	},
} as Meta

const Template: Story<CourseListProps> = (args) => (
	<div style={{ maxWidth: "522px" }}>
		<CourseListComponent {...args} courses={exampleCourses} />
	</div>
)

export const CourseList = Template.bind({})
