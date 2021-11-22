/* eslint-disable react/display-name */
import classNames from "classnames"
import React from "react"
import { startCase } from "lodash"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { BookCard } from "../book-card"
import { Book } from "../../models/book"
import { CodeExampleCard } from "../code-example-card"
import { CodeExample } from "../../models/code-example"
import { CommunityCard } from "../community-card"
import { Community } from "../../models/community"
import { CompanyCard } from "../company-card"
import { Company } from "../../models/company"
import { CourseCard } from "../course-card"
import { Course } from "../../models/course"
import { LibraryCard } from "../library-card"
import { Library } from "../../models/library"
import { PodcastCard } from "../podcast-card"
import { Podcast } from "../../models/podcast"
import { ToolCard } from "../tool-card"
import { Tool } from "../../models/tool"
import { Counter } from "../counter"
import { AllModelsByName, CategoryName } from "../../models/all-categories"
import assertNever from "assert-never"

export type ResultsCategoryProps<T extends CategoryName> =
	React.ComponentPropsWithoutRef<"div"> & {
		category: T
		searchResults: AllModelsByName[T][]
		variant: "withHeading" | "bare"
	}

export function ResultsCategory<T extends CategoryName>({
	category,
	searchResults: results,
	variant,
	className,
	...props
}: ResultsCategoryProps<T>) {
	if (results.length === 0) return null

	switch (variant) {
		case "bare":
			return (
				<div
					className={classNames(
						className,
						sprinkles({
							layout: "landscapeCardGrid",
							gap: 24,
							justifyContent: "flex-start",
						})
					)}
					{...props}
				>
					{results.map(renderCard(category))}
				</div>
			)
		case "withHeading":
			return (
				<div
					className={classNames(
						className,
						sprinkles({
							backgroundColor: "surface1",
							padding: 24,
							borderRadius: 12,
						})
					)}
					{...props}
				>
					<header
						className={sprinkles({
							layout: "row",
							gap: 8,
							alignItems: "center",
						})}
					>
						<h2
							className={sprinkles({
								textStyle: "bodyShort1",
								fontWeight: "bold",
								paddingY: 2,
							})}
						>
							{startCase(category)}
						</h2>
						<Counter size="small">{results.length}</Counter>
					</header>
					<div
						className={sprinkles({
							paddingTop: 24,
							layout: "landscapeCardGrid",
							gap: 24,
							justifyContent: "flex-start",
						})}
					>
						{results.map(renderCard(category))}
					</div>
				</div>
			)
		default:
			assertNever(variant)
	}
}

function renderCard(
	category: CategoryName
): CategoryName extends string
	? (value: AllModelsByName[CategoryName], index: number) => JSX.Element
	: never {
	switch (category) {
		case "books":
			return (record: Book<string>, index) => (
				<BookCard key={index} book={record} headingTag="h3" />
			)
		case "codeExamples":
			return (record: CodeExample<string>, index) => (
				<CodeExampleCard key={index} codeExample={record} headingTag="h3" />
			)
		case "communities":
			return (record: Community<string>, index) => (
				<CommunityCard key={index} community={record} headingTag="h3" />
			)
		case "companies":
			return (record: Company<string>, index) => (
				<CompanyCard key={index} company={record} headingTag="h3" />
			)
		case "courses":
			return (record: Course<string>, index) => (
				<CourseCard key={index} course={record} headingTag="h3" />
			)
		case "libraries":
			return (record: Library<string>, index) => (
				<LibraryCard key={index} library={record} headingTag="h3" />
			)
		case "podcasts":
			return (record: Podcast<string>, index) => (
				<PodcastCard key={index} podcast={record} headingTag="h3" />
			)
		case "tools":
			return (record: Tool<string>, index) => (
				<ToolCard key={index} tool={record} headingTag="h3" />
			)
		default:
			return assertNever(category)
	}
}
