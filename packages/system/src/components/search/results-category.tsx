/* eslint-disable react/display-name */
import classNames from "classnames"
import React from "react"
import { startCase } from "lodash"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { BookCard } from "../cards/book-card"
import { Book } from "../../models/book"
import { CodeExampleCard } from "../cards/code-example-card"
import { CodeExample } from "../../models/code-example"
import { CommunityCard } from "../cards/community-card"
import { Community } from "../../models/community"
import { CompanyCard } from "../cards/company-card"
import { Company } from "../../models/company"
import { CourseCard } from "../cards/course-card"
import { Course } from "../../models/course"
import { LibraryCard } from "../cards/library-card"
import { Library } from "../../models/library"
import { PodcastCard } from "../cards/podcast-card"
import { Podcast } from "../../models/podcast"
import { ToolCard } from "../cards/tool-card"
import { Tool } from "../../models/tool"
import { Counter } from "../counter"
import { CategoryName, Model } from "../../models/all-categories"
import assertNever from "assert-never"
import { ResourceCardProps } from "../cards/resource-card"
import {
	imageFirstCardGrid,
	titleFirstCardGrid,
} from "../cards/card-layouts.css"

export type ResultsCategoryProps<T extends CategoryName> = Omit<
	React.ComponentPropsWithoutRef<"div">,
	"onSelect"
> & {
	category: T
	searchResults: Model<T>[]
	variant: "withHeading" | "bare"
	onTagClick: (tag: string) => void
	onSelect?: (item: Model<T>, selected: boolean) => void
	selectedItems?: Model<T>[]
}

export function ResultsCategory<T extends CategoryName>({
	category,
	searchResults: results,
	variant,
	className,
	onTagClick,
	onSelect,
	selectedItems = [],
	...props
}: ResultsCategoryProps<T>) {
	if (results.length === 0) return null
	const layout = ["books", "communities", "podcasts"].includes(category)
		? imageFirstCardGrid
		: titleFirstCardGrid

	switch (variant) {
		case "bare":
			return (
				<div
					className={classNames(className, layout, sprinkles({ padding: 24 }))}
					{...props}
				>
					{results.map(
						renderCard({
							headingTag: "h3",
							category,
							onTagClick,
							onSelect,
							selectedItems,
						})
					)}
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
					<div className={classNames(layout, sprinkles({ paddingTop: 24 }))}>
						{results.map(
							renderCard({
								headingTag: "h3",
								category,
								onTagClick,
								onSelect,
								selectedItems,
							})
						)}
					</div>
				</div>
			)
		default:
			assertNever(variant)
	}
}

type RenderCardFn<T extends CategoryName> = (
	value: Model<T>,
	index: number
) => JSX.Element

type RenderCardProps<T extends CategoryName> = {
	headingTag: ResourceCardProps["headingTag"]
	category: T
	selectedItems: Model<T>[]
	onTagClick: (tag: string) => void
	onSelect?: (item: Model<T>, selected: boolean) => void
}

function renderCard<T extends CategoryName>({
	category,
	selectedItems,
	onSelect,
	...props
}: RenderCardProps<T>): RenderCardFn<T> {
	switch (category) {
		case "books":
			return ((record: Book<string>, index: number) => (
				<BookCard key={index} book={record} {...props} />
			)) as RenderCardFn<T>
		case "codeExamples":
			return ((record: CodeExample<string>, index: number) => (
				<CodeExampleCard key={index} codeExample={record} {...props} />
			)) as RenderCardFn<T>
		case "communities":
			return ((record: Community<string>, index: number) => (
				<CommunityCard key={index} community={record} {...props} />
			)) as RenderCardFn<T>
		case "companies":
			return ((record: Company<string>, index: number) => (
				<CompanyCard key={index} company={record} {...props} />
			)) as RenderCardFn<T>
		case "courses":
			return ((record: Course<string>, index: number) => (
				<CourseCard key={index} course={record} {...props} />
			)) as RenderCardFn<T>
		case "libraries":
			return ((record: Library<string>, index: number) => (
				<LibraryCard
					key={index}
					library={record}
					onSelect={
						onSelect && ((selected) => onSelect(record as Model<T>, selected))
					}
					selected={selectedItems.includes(record as Model<T>)}
					{...props}
				/>
			)) as RenderCardFn<T>
		case "podcasts":
			return ((record: Podcast<string>, index: number) => (
				<PodcastCard key={index} podcast={record} {...props} />
			)) as RenderCardFn<T>
		case "tools":
			return ((record: Tool<string>, index: number) => (
				<ToolCard key={index} tool={record} {...props} />
			)) as RenderCardFn<T>
		default:
			return assertNever(category)
	}
}
