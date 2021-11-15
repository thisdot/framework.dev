import "@reach/combobox/styles.css"
import classNames from "classnames"
import React, { ChangeEvent, useMemo, useRef, useState } from "react"
import { assertNever } from "assert-never"
import Fuse from "fuse.js"
import {
	Combobox,
	ComboboxInput,
	ComboboxList,
	ComboboxOption,
	ComboboxOptionText,
	ComboboxPopover,
} from "@reach/combobox"
import { startCase, lowerCase } from "lodash"
import { searchStyle } from "./search.css"
import { AllCategories, allCategoryNames } from "../models/all-categories"
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
import { SearchInput } from "./search-input"

export interface SearchProps extends React.ComponentPropsWithoutRef<"section"> {
	data: AllCategories[]
}

export function Search({ className, data, ...props }: SearchProps) {
	const [query, setQuery] = useState("")
	const inputRef = useRef<HTMLInputElement>()
	const currentWordCoordinates = getWordCoordinatesAt(
		query,
		inputRef.current?.selectionStart
	)
	const autoCompleteResults = currentWordCoordinates
		? calculateAutocompleteResults(query.slice(...currentWordCoordinates))
		: []
	const { categories, textSearch } = parseQueryString(query)
	return (
		<section className={classNames(className, searchStyle)} {...props}>
			<Combobox
				onSelect={(selection) =>
					setQuery(
						(query) =>
							query.slice(0, currentWordCoordinates[0]) +
							selection +
							query.slice(currentWordCoordinates[1])
					)
				}
				aria-label="Search"
			>
				<ComboboxInput
					as={SearchInput}
					ref={inputRef}
					autocomplete={false}
					label="Search"
					hideLabel
					value={query}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setQuery(e.target.value)
					}}
					onReset={() => setQuery("")}
				/>
				{autoCompleteResults.length > 0 && (
					<ComboboxPopover className="shadow-popup">
						<ComboboxList>
							{autoCompleteResults.slice(0, 10).map((result, index) => (
								<ComboboxOption key={index} value={result.value}>
									<ComboboxOptionText /> {result.description}
								</ComboboxOption>
							))}
						</ComboboxList>
					</ComboboxPopover>
				)}
			</Combobox>
			<div className={sprinkles({ layout: "stack", gap: 8 })}>
				{data
					.filter((category) =>
						categories.length > 0 ? isInFilteredCategories(category) : true
					)
					.map((category, _index, allCategories) => (
						<ResultsCategory
							key={category.indexMetadata.name}
							category={category}
							variant={allCategories.length > 1 ? "withHeading" : "bare"}
							query={textSearch}
						/>
					))}
			</div>
		</section>
	)

	function isInFilteredCategories(category: AllCategories): unknown {
		return categories.some(
			(includedCategory) => includedCategory === category.name
		)
	}
}

type ResultsCategoryProps<T> = {
	category: T
	query: string
	variant: "withHeading" | "bare"
}

function ResultsCategory<T extends AllCategories>({
	category,
	query,
	variant,
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

	switch (variant) {
		case "bare":
			return (
				<div
					className={sprinkles({
						layout: "landscapeCardGrid",
						gap: 24,
						justifyContent: "flex-start",
					})}
				>
					{results.map(renderCard<T>(category))}
				</div>
			)
		case "withHeading":
			return (
				<div
					className={sprinkles({
						backgroundColor: "surface1",
						padding: 24,
						borderRadius: 12,
					})}
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
		default:
			assertNever(variant)
	}
}

function renderCard<T extends AllCategories>(
	category: AllCategories
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

type QueryParams = {
	categories: string[]
	textSearch: string
}

const categoriesRegex = /in:(\w+)/g
function parseQueryString(queryString: string): QueryParams {
	const categories = Array.from(queryString.matchAll(categoriesRegex)).map(
		([_match, capture]) => capture
	)
	const textSearch = queryString.replaceAll(categoriesRegex, "").trim()

	return {
		categories,
		textSearch,
	}
}

type AutocompleteResult = {
	value: string
	description: string
}

const categoryFilterSuggestions: AutocompleteResult[] = allCategoryNames.map(
	(name) => ({
		value: `in:${name}`,
		description: `Limit search to ${lowerCase(name)}`,
	})
)

function calculateAutocompleteResults(word: string): AutocompleteResult[] {
	return categoryFilterSuggestions.filter((suggestion) =>
		suggestion.value.startsWith(word)
	)
}

function getWordCoordinatesAt(
	text: string,
	position: number
): [number, number] {
	// Search for the word's beginning and end.
	const left = text.slice(0, position).search(/\S+$/),
		right = text.slice(position).search(/\s/)

	return [
		left < 0 ? position : left,
		right < 0 ? text.length : right + position,
	]
}
