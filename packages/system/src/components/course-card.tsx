import classNames from "classnames"
import React from "react"
import { Course } from "../models/course"
import { sprinkles } from "../sprinkles/sprinkles.css"
import {
	courseCardBodyStyle,
	courseCardFooterStyle,
	courseCardHeaderStyle,
	courseCardInfoStyle,
	courseCardSpacerStyle,
	courseCardStyle,
} from "./course-card.css"
import { ResourceTag } from "./resource-tag"

export type CourseCardProps = React.ComponentPropsWithoutRef<"article"> & {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	course: Course<string>
}

export function CourseCard({
	className,
	course,
	headingTag: H,
	...props
}: CourseCardProps) {
	return (
		<article className={classNames(className, courseCardStyle)} {...props}>
			<header className={courseCardHeaderStyle}>
				<img
					src={course.image}
					className={sprinkles({ border: "thin" })}
					aria-hidden
					height={40}
					width={40}
				/>
				<div className={sprinkles({ layout: "stack", gap: 4 })}>
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
					<p className={sprinkles({ textStyle: "subHeading" })}>
						{course.author}
					</p>
				</div>
			</header>
			<div className={courseCardInfoStyle}>
				<div className={sprinkles({ color: course.level })}>{course.level}</div>
				<div>•</div>
				<div className={sprinkles({ color: course.paymentType })}>
					{course.paymentType}
				</div>
			</div>
			<div className={courseCardBodyStyle}>{course.description}</div>
			<div className={courseCardSpacerStyle} />
			<footer className={courseCardFooterStyle}>
				<ResourceTag icon={course.format}>{course.format}</ResourceTag>
				{course.tags.map((tag) => (
					<ResourceTag icon="topic" key={tag}>
						{tag}
					</ResourceTag>
				))}
			</footer>
		</article>
	)
}
