import classNames from "classnames"
import React, { useMemo, useState } from "react"
import { assertNever } from "assert-never"
import Fuse from "fuse.js"
import startCase from "lodash/startCase"
import { searchStyle } from "./search.css"
import { TextInput } from "./text-input"
import { AllCategories } from "../models/all-categories"
import { BookCard } from "./book-card"
import { Book } from "../models/book"
import { CodeExampleCard } from "./code-example-card"
import { CodeExample } from "../models/code-example"
import { CommunityCard } from "./community-card"
import { Community } from "../models/community"
import { CompanyCard } from "./company-card"
import { Company } from "../models/company"
import { CourseCard } from "./course-card"
import { Course } from "../models/course"
import { LibraryCard } from "./library-card"
import { Library } from "../models/library"
import { PodcastCard } from "./podcast-card"
import { Podcast } from "../models/podcast"
import { ToolCard } from "./tool-card"
import { Tool } from "../models/tool"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { Counter } from "./counter"

export interface SearchProps extends React.ComponentPropsWithoutRef<"section"> {
	data: AllCategories<string>[]
}

export function Search({ className, data, ...props }: SearchProps) {
	const [query, setQuery] = useState("")
	return (
		<section className={classNames(className, searchStyle)} {...props}>
			<TextInput
				label="Search"
				hideLabel
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<div className={sprinkles({ layout: "stack", gap: 8 })}>
				{data.map((category) => (
					<ResultsCategory
						key={category.indexMetadata.name}
						category={category}
						query={query}
					/>
				))}
			</div>
		</section>
	)
}

type ResultsCategoryProps<T> = {
	category: T
	query: string
}

function ResultsCategory<T extends AllCategories<string>>({
	category,
	query,
}: ResultsCategoryProps<T>) {
	const fuse = useMemo(
		() =>
			new Fuse<T["data"][number]>(category.data, {
				keys: [...category.indexMetadata.searchableFields],
				ignoreLocation: true,
				includeScore: true,
				threshold: 0.2,
				useExtendedSearch: true,
			}),
		[category]
	)
	const results = fuse.search(query).filter((result) => result.score < 0.4)

	if (results.length === 0) return null

	return (
		<div
			className={sprinkles({
				backgroundColor: "surface1",
				padding: 24,
				borderRadius: 12,
			})}
		>
			<header
				className={sprinkles({ layout: "row", gap: 8, alignItems: "center" })}
			>
				<h2
					className={sprinkles({
						textStyle: "bodyShort1",
						fontWeight: "bold",
						paddingY: 2,
					})}
				>
					{startCase(category.name)}
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
				{results.map(renderCard<T>(category))}
			</div>
		</div>
	)
}

function renderCard<T extends AllCategories<string>>(
	category: AllCategories<string>
): (
	value: Fuse.FuseResult<T["data"][number]>,
	index: number,
	array: Fuse.FuseResult<T["data"][number]>[]
) => JSX.Element {
	return function ResultCard(result) {
		switch (category.name) {
			case "books":
				return (
					<BookCard
						key={result.refIndex}
						book={result.item as Book<string>}
						headingTag="h3"
					/>
				)
			case "codeExamples":
				return (
					<CodeExampleCard
						key={result.refIndex}
						codeExample={result.item as CodeExample<string>}
						headingTag="h3"
					/>
				)
			case "communities":
				return (
					<CommunityCard
						key={result.refIndex}
						community={result.item as Community<string>}
						headingTag="h3"
					/>
				)
			case "companies":
				return (
					<CompanyCard
						key={result.refIndex}
						company={result.item as Company}
						headingTag="h3"
					/>
				)
			case "courses":
				return (
					<CourseCard
						key={result.refIndex}
						course={result.item as Course<string>}
						headingTag="h3"
					/>
				)
			case "libraries":
				return (
					<LibraryCard
						key={result.refIndex}
						library={result.item as Library<string>}
						headingTag="h3"
					/>
				)
			case "podcasts":
				return (
					<PodcastCard
						key={result.refIndex}
						podcast={result.item as Podcast<string>}
						headingTag="h3"
					/>
				)
			case "tools":
				return (
					<ToolCard
						key={result.refIndex}
						tool={result.item as Tool<string>}
						headingTag="h3"
					/>
				)
			default:
				return assertNever(category)
		}
	}
}
