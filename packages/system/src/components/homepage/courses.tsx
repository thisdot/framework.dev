import classNames from 'classnames'
import React from 'react'
import { sampleSize } from 'lodash'
import { coursesStyle } from './courses.css'
import { Course } from '../../models/course'
import { FeatureAndList } from './feature-and-list'

export interface CoursesProps extends React.ComponentPropsWithoutRef<'div'> {
	courses: Course<string>[]
}

export function Courses({ className, courses, ...props }: CoursesProps) {
	const randomCourses = sampleSize(courses, 6)
	return (
		<FeatureAndList
			className={classNames(className, coursesStyle)}
			title="Courses to get you started"
			viewAll={{ title: 'View all courses', href: '/categories/courses' }}
			items={randomCourses.map((course) => {
				return {
					image: { src: course.image, style: 'normal' },
					title: course.title,
					metadata: course.author,
					href: course.href,
					description: course.description,
					attributes: [
						['level', course.level],
						['format', course.format],
						['paymentType', course.paymentType],
					],
				}
			})}
			{...props}
		/>
	)
}
