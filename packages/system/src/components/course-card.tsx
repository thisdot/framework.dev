import { kebabCase } from "lodash"
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
import { BulletDivider } from "./bullet-divider"

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
					<a href={course.href} target="_blank" rel="noreferrer">
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
			<div className={courseCardInfoStyle}>
				<a
					href={`/categories/courses/levels/${course.level}`}
					className={sprinkles({ color: course.level })}
				>
					{course.level}
				</a>
				<BulletDivider />
				<a
					href={`/categories/courses/payment/${course.paymentType}`}
					className={sprinkles({ color: "regularText" })}
				>
					{course.paymentType}
				</a>
			</div>
			<div className={courseCardBodyStyle}>{course.description}</div>
			<div className={courseCardSpacerStyle} />
			<footer className={courseCardFooterStyle}>
				<ResourceTag
					icon={course.format}
					href={`/categories/courses/formats/${course.format}`}
				>
					{course.format}
				</ResourceTag>
				{course.tags.map((tag) => (
					<ResourceTag
						icon="topic"
						key={tag}
						href={`/categories/courses/tags/${kebabCase(tag)}`}
					>
						{tag}
					</ResourceTag>
				))}
			</footer>
		</article>
	)
}
