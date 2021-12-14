import classNames from "classnames"
import React from "react"
import { coursesStyle } from "./courses.css"
import { Course } from "../../models/course"

export interface CoursesProps extends React.ComponentPropsWithoutRef<"div"> {
	courses: Course<string>[]
}

export function Courses({
	children,
	className,
	courses,
	...props
}: CoursesProps) {
	return (
		<div className={classNames(className, coursesStyle)} {...props}>
			{children}
		</div>
	)
}
