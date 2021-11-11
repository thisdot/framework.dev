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
	courseCardStyle,
} from "./course-card.css"
import { ResourceTag } from "./resource-tag"
import { CardDivider } from "./card-divider"
import { Tag } from "./tag"

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
					href={`/categories/courses/payment/${course.paymentType}`}
					className={sprinkles({ color: "regularText" })}
				>
					{course.paymentType}
				</a>
			</div>
			<div className={courseCardBodyStyle}>{course.description}</div>
			<footer className={courseCardFooterStyle}>
				<div className={sprinkles({ layout: "row", gap: 4 })}>
					<ResourceTag
						icon={course.format}
						href={`/categories/courses/formats/${course.format}`}
					>
						{course.format}
					</ResourceTag>
				</div>
				<CardDivider />
				<div className={sprinkles({ layout: "row", gap: 4 })}>
					<Tag
						href={`/categories/courses/levels/${course.level}`}
						color={course.level}
					>
						{course.level}
					</Tag>
					{course.tags.map((tag) => (
						<Tag key={tag} href={`/categories/courses/tags/${kebabCase(tag)}`}>
							{tag}
						</Tag>
					))}
				</div>
			</footer>
		</article>
	)
}
