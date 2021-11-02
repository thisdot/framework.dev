import { Story, Meta } from "@storybook/react"
import { exampleCourses } from "../util/example-content"
import { themeColors } from "../themes/themes.css"
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
					value: themeColors.gray100,
					default: true,
				},
			],
		},
	},
} as Meta

const Template: Story<CourseListProps> = (args) => (
	<div style={{ maxWidth: "522px" }}>
		<CourseListComponent courses={exampleCourses} {...args} />
	</div>
)

export const CourseList = Template.bind({})
