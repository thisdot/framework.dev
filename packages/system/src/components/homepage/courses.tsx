import classNames from "classnames"
import React from "react"
import { coursesStyle } from "./courses.css"

export interface CoursesProps extends React.ComponentPropsWithoutRef<"div"> {}

export function Courses({ children, className, ...props }: CoursesProps) {
	return (
		<div className={classNames(className, coursesStyle)} {...props}>
			{children}
		</div>
	)
}
