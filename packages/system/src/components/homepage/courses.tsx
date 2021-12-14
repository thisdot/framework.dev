import classNames from "classnames"
import React from "react"
import { coursesStyle } from "./courses.css"
import { Course } from "../../models/course"
import { FeatureAndList } from "./feature-and-list"
import { getRandomNumberArray } from "./utils"

export interface CoursesProps extends React.ComponentPropsWithoutRef<"div"> {
	courses: Course<string>[]
}

export function Courses({ className, courses, ...props }: CoursesProps) {
	const indices = getRandomNumberArray(6, courses.length)
	const randomCourses = indices.map((i) => courses[i])
	return (
		<FeatureAndList
			className={classNames(className, coursesStyle)}
			title="Courses to get you started"
			viewAll={{ title: "View all courses", href: "/categories/courses" }}
			items={randomCourses.map((course) => {
				return {
					image: course.image,
					title: course.title,
					metadata: course.author,
					href: course.href,
					description: course.description,
					attributes: [
						["level", course.level],
						["format", course.format],
						["paymentType", course.paymentType],
					],
				}
			})}
			{...props}
		/>
	)
}
