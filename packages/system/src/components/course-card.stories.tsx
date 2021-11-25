import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { exampleCourses } from "../util/example-content"
import {
	CourseCard as CourseCardComponent,
	CourseCardProps,
} from "./course-card"

export default {
	title: "Course Card",
	component: CourseCardComponent,
	args: {
		headingTag: "h1",
	},
} as Meta

const Template: Story<CourseCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: "surface4",
			padding: 16,
		})}
	>
		<div
			className={sprinkles({
				layout: "landscapeCardGrid",
				gap: 16,
			})}
		>
			{exampleCourses.map((course) => (
				<CourseCardComponent key={course.title} {...args} course={course}  />
			))}
		</div>
	</div>
)

export const CourseCard = Template.bind({})
