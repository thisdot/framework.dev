import classNames from "classnames"
import React from "react"
import { Course } from "../models/course"
import { sprinkles } from "../sprinkles/sprinkles.css"
import {
	courseListStyle,
	courseListCourseHeaderStyle,
	courseListCourseInfoStyle,
	courseListCourseSpacerStyle,
	courseListCourseMetadataBullet,
} from "./course-list.css"

export type CourseListProps = React.ComponentPropsWithoutRef<"article"> & {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	courses: Course<string>[]
}

export function CourseList({
	className,
	courses,
	headingTag: H,
	...props
}: CourseListProps) {
	return (
		<section className={classNames(className, courseListStyle)} {...props}>
			{courses.map((course, i) => {
				return (
					<article key={`course-list-${course.title}`}>
						<div className={courseListCourseInfoStyle}>
							<span
								className={sprinkles({ color: course.level, paddingRight: 6 })}
							>
								{course.level}
							</span>
							<span className={courseListCourseMetadataBullet}>•</span>
							<span
								className={sprinkles({
									color: course.paymentType,
									paddingLeft: 6,
								})}
							>
								{course.paymentType}
							</span>
						</div>
						<header className={courseListCourseHeaderStyle}>
							<img
								src={course.image}
								className={sprinkles({ border: "thin" })}
								aria-hidden
								height={40}
								width={40}
							/>
							<div className={sprinkles({ layout: "stack", gap: 4 })}>
								<a href={course.href} target="_blank" rel="noopener noreferrer">
									<H
										className={sprinkles({
											margin: 0,
											textStyle: "minorHeading",
											fontWeight: "bold",
											color: "strongText",
										})}
									>
										{course.title}
									</H>
								</a>
								<p className={sprinkles({ textStyle: "subHeading" })}>
									{course.author}
								</p>
							</div>
						</header>
						{i !== courses.length - 1 && (
							<div className={courseListCourseSpacerStyle} />
						)}
					</article>
				)
			})}
		</section>
	)
}
