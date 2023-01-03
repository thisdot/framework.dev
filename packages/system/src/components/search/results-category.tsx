/* eslint-disable react/display-name */
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { startCase } from "lodash";
import { sprinkles } from "../../sprinkles/sprinkles.css";
import { BookCard } from "../cards/book-card";
import { Book } from "../../models/book";
import { CommunityCard } from "../cards/community-card";
import { Community } from "../../models/community";
import { CourseCard } from "../cards/course-card";
import { Course } from "../../models/course";
import { LibraryCard } from "../cards/library-card";
import { Library } from "../../models/library";
import { PodcastCard } from "../cards/podcast-card";
import { Podcast } from "../../models/podcast";
import { ToolCard } from "../cards/tool-card";
import { Tool } from "../../models/tool";
import { Counter } from "../counter";
import { CategoryName, Model } from "../../models/all-categories";
import assertNever from "assert-never";
import { ResourceCardProps } from "../cards/resource-card";
import { imageFirstCardGrid, titleFirstCardGrid } from "../cards/card-layouts.css";
import { Blog } from "../../models/blog";
import { BlogCard } from "../cards/blog-card";
import { visuallyHidden } from "../../styles/utilities.css";
import { useId } from "@reach/auto-id";
import { BannerTooltip } from "../banner-tooltip";
import { LocalStorageItems } from "../../models/common";

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
	const [showBannerTooltip, setShowBannerTooltip] = useState<boolean>(false)
	const headerId = useId()

	const layout = ["books", "communities", "podcasts"].includes(category)
		? imageFirstCardGrid
		: titleFirstCardGrid

	useEffect(() => {
		// Libraries are comparable only if they have a valid package
		const isComparable =
			category === "libraries" &&
			results.some((model) => !!(model as Library).package)

		setShowBannerTooltip(
			results.length > 0 &&
				isComparable &&
				!localStorage.getItem(LocalStorageItems.CompareToolTip)
		)
	}, [category, results.length])

	switch (variant) {
		case "bare":
			return (
				<div className={sprinkles({ padding: { mobile: 0, desktop: 24 } })}>
					{showBannerTooltip && (
						<BannerTooltip
							onClick={() => {
								setShowBannerTooltip(false)
								localStorage.setItem(LocalStorageItems.CompareToolTip, "true")
							}}
							pitchText={{
								highlightedText: "Compare and select libraries",
								softText: "based on your needs",
							}}
							explanatoryText="Click on icon to add the lib to comparison"
							className={sprinkles({
								marginBottom: { mobile: 24, desktop: 40 },
							})}
						/>
					)}

					<div className={classNames(className, layout)} {...props}>
						<ResultsCategoryHeader
							category={category}
							numberOfResults={results.length}
							className={visuallyHidden}
						/>
						{results.length > 0 ? (
							results.map(
								renderCard({
									headingTag: "h3",
									category,
									onTagClick,
									onSelect,
									selectedItems,
								})
							)
						) : (
							<p
								className={sprinkles({
									textStyle: "h100",
								})}
								style={{ textAlign: "center" }}
							>
								{`Sorry, no ${category} matched your search.`}
							</p>
						)}
					</div>
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
					aria-labelledby={headerId}
					role="region"
					{...props}
				>
					<ResultsCategoryHeader
						category={category}
						numberOfResults={results.length}
						id={headerId}
					/>
					<div className={classNames(layout, sprinkles({ paddingTop: 24 }))}>
						{results.length > 0 ? (
							results.map(
								renderCard({
									headingTag: "h3",
									category,
									onTagClick,
									onSelect,
									selectedItems,
								})
							)
						) : (
							<p
								className={sprinkles({
									textStyle: "bodyShort1",
								})}
								style={{ textAlign: "center" }}
							>
								{`Sorry, no ${category} matched your search.`}
							</p>
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
		case "blogs":
			return ((record: Blog<string>, index: number) => (
				<BlogCard key={index} blog={record} {...props} />
			)) as RenderCardFn<T>
		case "communities":
			return ((record: Community<string>, index: number) => (
				<CommunityCard key={index} community={record} {...props} />
			)) as RenderCardFn<T>
		case "courses":
			return ((record: Course<string>, index: number) => (
				<CourseCard key={index} course={record} {...props} />
			)) as RenderCardFn<T>
		case "libraries":
			return ((record: Library, index: number) => (
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

function ResultsCategoryHeader({
	category,
	numberOfResults,
	...props
}: React.ComponentPropsWithoutRef<"header"> & {
	category: string
	numberOfResults: number
}) {
	return (
		<header
			className={sprinkles({
				layout: "row",
				gap: 8,
				alignItems: "center",
			})}
			aria-live="polite"
			aria-atomic
			{...props}
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
			<Counter size="small">{numberOfResults}</Counter>
		</header>
	)
}
