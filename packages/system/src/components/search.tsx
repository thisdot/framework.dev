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
import {
	AllCategories,
	allCategoryNames,
	AllModelsByName,
} from "../models/all-categories"
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
	const searchIndices: {
		[K in keyof AllModelsByName]?: Fuse<AllModelsByName[K]>
	} = useMemo(
		() =>
			Object.fromEntries(
				data.map((category) => [
					category.name,
					new Fuse<AllCategories["data"][number]>(category.data, {
						keys: [...category.indexMetadata.searchableFields],
						ignoreLocation: true,
						includeScore: true,
						threshold: 0.2,
						useExtendedSearch: true,
					}),
				])
			),
		[data]
	)
	const [query, setQuery] = useState("")
	const inputRef = useRef<HTMLInputElement>()
	const currentWordCoordinates = getWordCoordinatesAt(
		query,
		inputRef.current?.selectionStart
	)
	const queryParams = parseQueryString(query, data)
	const autoCompleteResults = currentWordCoordinates
		? calculateAutocompleteResults(
				queryParams.availableFilters,
				query.slice(...currentWordCoordinates)
		  )
		: []
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
					<ComboboxPopover>
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
				{query &&
					data
						.filter((category) =>
							queryParams.categories.length > 0
								? isInFilteredCategories(category)
								: true
						)
						.map((category, _index, allCategories) => (
							<ResultsCategory
								key={category.name}
								category={category}
								variant={allCategories.length > 1 ? "withHeading" : "bare"}
								query={queryParams}
								searchIndex={searchIndices[category.name]}
							/>
						))}
			</div>
		</section>
	)

	function isInFilteredCategories(category: AllCategories): unknown {
		return queryParams.categories.some(
			(includedCategory) => includedCategory === category.name
		)
	}
}

type ResultsCategoryProps<T extends AllCategories> = {
	category: T
	query: QueryParams
	searchIndex: Fuse<T["data"][number]>
	variant: "withHeading" | "bare"
}

function ResultsCategory<T extends AllCategories>({
	category,
	query: { textSearch, fields, tags },
	searchIndex,
	variant,
}: ResultsCategoryProps<T>) {
	const initialResults: T["data"][number][] = textSearch
		? searchIndex
				.search(textSearch)
				.filter((result) => result.score < 0.4)
				.map((result) => result.item)
		: category.data

	const results = initialResults.filter(
		(record) =>
			(tags.length === 0 || record.tags.some((tag) => tags.includes(tag))) &&
			fields.every(
				([fieldName, fieldValue]) => record[fieldName] === fieldValue
			)
	)

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
	value: T["data"][number],
	index: number,
	array: T["data"][number][]
) => JSX.Element {
	return function ResultCard(record, index) {
		switch (category.name) {
			case "books":
				return (
					<BookCard key={index} book={record as Book<string>} headingTag="h3" />
				)
			case "codeExamples":
				return (
					<CodeExampleCard
						key={index}
						codeExample={record as CodeExample<string>}
						headingTag="h3"
					/>
				)
			case "communities":
				return (
					<CommunityCard
						key={index}
						community={record as Community<string>}
						headingTag="h3"
					/>
				)
			case "companies":
				return (
					<CompanyCard
						key={index}
						company={record as Company<string>}
						headingTag="h3"
					/>
				)
			case "courses":
				return (
					<CourseCard
						key={index}
						course={record as Course<string>}
						headingTag="h3"
					/>
				)
			case "libraries":
				return (
					<LibraryCard
						key={index}
						library={record as Library<string>}
						headingTag="h3"
					/>
				)
			case "podcasts":
				return (
					<PodcastCard
						key={index}
						podcast={record as Podcast<string>}
						headingTag="h3"
					/>
				)
			case "tools":
				return (
					<ToolCard key={index} tool={record as Tool<string>} headingTag="h3" />
				)
			default:
				return assertNever(category)
		}
	}
}

type Filters = {
	category: Set<typeof allCategoryNames[number]>
	tag: Set<string>
	fields: Map<string, Set<string>>
}

type QueryParams = {
	categories: string[]
	tags: string[]
	fields: (readonly [string, string])[]
	textSearch: string
	availableFilters: Filters
}

const filterRegex = /(\S+):(\S+)/g
function parseQueryString(
	queryString: string,
	allCategories: AllCategories[]
): QueryParams {
	const filters = Array.from(queryString.matchAll(filterRegex)).map(
		([_match, key, value]) => [key, value]
	)
	const availableCategories = new Set(
		allCategories.map((category) => category.name)
	)
	const categories = filters
		.filter(([key]) => key === "in")
		.map(([_key, value]) => value)
	const tags = filters
		.filter(([key]) => key === "tag")
		.map(([_key, value]) => value)
	const availableFilters = {
		category: availableCategories,
		tag: new Set(allCategories.flatMap((category) => category.tags)),
		fields: allCategories
			.filter(
				(category) =>
					categories.length === 0 || categories.includes(category.name)
			)
			.flatMap((category) =>
				Object.entries(category.indexMetadata.filterableFields)
			)
			.reduce((map, [key, values]) => {
				if (!map.has(key)) map.set(key, new Set())
				for (const value of values) {
					map.get(key).add(value)
				}
				return map
			}, new Map<string, Set<string>>()),
	}
	const fields = filters
		.filter(([key]) => availableFilters.fields.has(key))
		.map(([key, value]) => [key, value] as const)
	const textSearch = queryString.replaceAll(filterRegex, "").trim()

	return {
		categories,
		tags,
		fields,
		textSearch,
		availableFilters,
	}
}

type AutocompleteResult = {
	value: string
	description: string
}

function calculateAutocompleteResults(
	availableFilters: Filters,
	word: string
): AutocompleteResult[] {
	const categoryFilterSuggestions: AutocompleteResult[] = Array.from(
		availableFilters.category
	).map((name) => ({
		value: `in:${name}`,
		description: `Limit search to ${lowerCase(name)}`,
	}))
	const tagFilterSuggestions: AutocompleteResult[] = Array.from(
		availableFilters.tag
	).map((name) => ({
		value: `tag:${name}`,
		description: `Only results tagged ${lowerCase(name)}`,
	}))
	const fieldFilterSuggestions: AutocompleteResult[] = Array.from(
		availableFilters.fields
	).flatMap(([key, values]) =>
		Array.from(values).map((value) => ({
			value: `${key}:${value}`,
			description: `Only results where the ${lowerCase(key)} is ${lowerCase(
				value
			)}`,
		}))
	)
	return [
		...categoryFilterSuggestions,
		...tagFilterSuggestions,
		...fieldFilterSuggestions,
	].filter((suggestion) => suggestion.value.startsWith(word))
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
