import { type Story, type Meta } from '@storybook/react'
import { sprinkles } from '../../sprinkles/sprinkles.css'
import { exampleCourses } from '../../util/example-content'
import { titleFirstCardGrid } from './card-layouts.css'
import {
	CourseCard as CourseCardComponent,
	CourseCardProps,
} from './course-card'

export default {
	title: 'Cards/Course Card',
	component: CourseCardComponent,
	args: {
		headingTag: 'h1',
	},
	argTypes: {
		onTagClick: {
			action: 'onTagClick',
		},
	},
} as Meta

const Template: Story<CourseCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: 'surface4',
			padding: 16,
		})}
	>
		<div className={titleFirstCardGrid}>
			{exampleCourses.map((course) => (
				<CourseCardComponent key={course.title} {...args} course={course} />
			))}
		</div>
	</div>
)

export const CourseCard = Template.bind({})
