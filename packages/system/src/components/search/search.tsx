import classNames from "classnames"
import React, { useEffect, useMemo, useRef, useState } from "react"
import Fuse from "fuse.js"
import {
	compareBarStyle,
	searchContainerStyle,
	searchStyle,
} from "./search.css"
import { AllCategories, AllModelsByName } from "../../models/all-categories"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { FilterMenu } from "./filter-menu"
import { SideDialog } from "../side-dialog"
import { Button } from "../button"
import { ResultsCategory, ResultsCategoryProps } from "./results-category"
import {
	calculateAvailableFilters,
	emptyFilterSet,
	getSearchResults,
	isEmptyFilterSet,
	parseQueryString,
	serializeQueryParams,
} from "./query-util"
import { SearchAutocomplete } from "./search-autocomplete"
import { FilterIcon } from "../../icons/filter-icon"
import { FilterSet, QueryParams } from "./types"
import uniq from "lodash/uniq"
import map from "lodash/map"
import sortBy from "lodash/sortBy"
import take from "lodash/take"
import without from "lodash/without"
import { Library } from "../../models/library"
import { ComparisonTable } from "../comparison-table"
import { CloseIcon } from "../../icons/close-icon"
import { ResetIcon } from "../../icons/reset-icon"
import { AddIcon } from "../../icons/add-icon"

export interface SearchProps extends React.ComponentPropsWithoutRef<"section"> {
	data: AllCategories[]
	initialQuery?: string
	appliedPreFilters?: FilterSet
	siteName: string
}

export function Search({
	className,
	data,
	initialQuery = "",
	appliedPreFilters = emptyFilterSet,
	siteName,
	...props
}: SearchProps) {
	const [query, setQuery] = useState(initialQuery)
	const [activeQuery, setActiveQuery] = useState(initialQuery)
	useEffect(() => {
		const timeout = setTimeout(() => setActiveQuery(query), 500)
		return () => {
			clearTimeout(timeout)
		}
	}, [query])
	const [selectedLibraries, setSelectedLibraries] = useState<Library[]>([])
	const [comparisonTableOpen, setComparisonTableOpen] = useState(false)
	const availableFilters = useMemo(
		() => calculateAvailableFilters(data, appliedPreFilters),
		[data, appliedPreFilters]
	)
	const queryParams = parseQueryString(activeQuery, availableFilters)
	const scrollableContainerRef = useRef<null | HTMLDivElement>(null)
	return (
		<section className={classNames(className, searchStyle)} {...props}>
			{comparisonTableOpen ? (
				<LibraryComparison
					selectedLibraries={selectedLibraries}
					onClose={() => setComparisonTableOpen(false)}
					onReset={() => {
						setSelectedLibraries([])
						setComparisonTableOpen(false)
					}}
				/>
			) : (
				<>
					<div className={searchContainerStyle} ref={scrollableContainerRef}>
						<SearchBar
							availableFilters={availableFilters}
							data={data}
							onChange={setQuery}
							preFilters={appliedPreFilters}
							value={query}
							onSubmit={(e) => {
								e.preventDefault()
								setActiveQuery(query)
							}}
						/>
						<SearchResults
							data={data}
							onLibrarySelect={setSelectedLibraries}
							onTagClick={(tag: string) => {
								setQuery(
									serializeQueryParams({
										...queryParams,
										filters: {
											...queryParams.filters,
											tag: uniq([...queryParams.filters.tag, tag]),
										},
									})
								)
								scrollableContainerRef.current?.scrollTo(0, 0)
							}}
							preFilters={appliedPreFilters}
							selectedLibraries={selectedLibraries}
							queryParams={queryParams}
						/>
					</div>
					{selectedLibraries.length > 0 && (
						<ComparisonBar
							onOpenClick={() => setComparisonTableOpen(true)}
							selectedLibraries={selectedLibraries}
							onSelectionChange={setSelectedLibraries}
							allLibraries={
								(data.find((c) => c.name === "libraries")?.data as Library[]) ??
								[]
							}
						/>
					)}
				</>
			)}
		</section>
	)
}

type SearchBarProps = {
	preFilters: FilterSet
	availableFilters: FilterSet
	onChange: (newValue: string) => void
	onSubmit: React.FormEventHandler<HTMLFormElement>
	value: string
	data: AllCategories[]
}

function SearchBar({
	preFilters,
	availableFilters,
	onChange,
	onSubmit,
	value,
	data,
}: SearchBarProps) {
	const [filterMenuOpen, setFilterMenuOpen] = useState(false)
	const popularTags = useMemo(() => calculatePopularTags(data), [data])
	const queryParams = parseQueryString(value, availableFilters)
	return (
		<form
			role="search"
			onSubmit={onSubmit}
			className={sprinkles({
				layout: "row",
				gap: 12,
				paddingX: { mobile: 16, desktop: 48 },
			})}
		>
			<SearchAutocomplete
				staticPrefix={serializeQueryParams({
					filters: preFilters,
					textSearch: "",
				})}
				availableFilters={availableFilters}
				className={sprinkles({ width: "full" })}
				onChange={onChange}
				value={value}
				data={data}
			/>
			<div
				className={sprinkles({ display: { mobile: "none", desktop: "block" } })}
			>
				<Button
					as="button"
					color="tertiary"
					size="large"
					onClick={() => setFilterMenuOpen(true)}
				>
					Advanced <FilterIcon />
				</Button>
			</div>
			<div
				className={sprinkles({ display: { mobile: "block", desktop: "none" } })}
			>
				<Button
					as="button"
					color="tertiary"
					size="largeSquare"
					aria-label="Advanced search"
					onClick={() => setFilterMenuOpen(true)}
				>
					<FilterIcon />
				</Button>
			</div>
			<SideDialog
				position="right"
				isOpen={filterMenuOpen}
				onDismiss={() => setFilterMenuOpen(false)}
				zIndex={10}
			>
				<FilterMenu
					params={queryParams}
					availableFilters={availableFilters}
					onConfirm={(newParams) => {
						onChange(serializeQueryParams(newParams))
						setFilterMenuOpen(false)
					}}
					popularTags={popularTags}
				/>
			</SideDialog>
		</form>
	)
}

type SearchResultsProps = {
	queryParams: QueryParams
	preFilters: FilterSet
	selectedLibraries: Library[]
	onLibrarySelect: (newSelection: Library[]) => void
	onTagClick: (tag: string) => void
	data: AllCategories[]
}

function SearchResults({
	queryParams,
	preFilters,
	selectedLibraries,
	onLibrarySelect,
	onTagClick,
	data,
}: SearchResultsProps) {
	const searchIndices: {
		[K in keyof AllModelsByName]?: Fuse<AllModelsByName[K]>
	} = useMemo(
		() =>
			Object.fromEntries(
				data?.map((category) => [
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
	return (
		<div
			className={sprinkles({
				layout: "stack",
				gap: 8,
				paddingBottom: 24,
				paddingX: { mobile: 16, desktop: 24 },
			})}
		>
			{(!isEmptyFilterSet(preFilters) ||
				!isEmptyFilterSet(queryParams.filters) ||
				queryParams.textSearch) &&
				data
					.filter((category) =>
						queryParams.filters.category.length > 0
							? isInFilteredCategories(category)
							: true
					)
					.map((category, _index) => {
						const searchIndex = searchIndices[category.name]
						const commonProps = {
							category: category.name,
							variant:
								preFilters.category.length === 1 ? "bare" : "withHeading",
							searchResults: searchIndex
								? getSearchResults({
										category: category.name,
										data: category.data,
										params: queryParams,
										searchIndex,
								  })
								: [],
							onTagClick,
						} as const
						if (category.name === "libraries") {
							return (
								<ResultsCategory
									key={category.name}
									onSelect={(item: Library, selected: boolean) =>
										onLibrarySelect(
											selected
												? uniq([...selectedLibraries, item])
												: without(selectedLibraries, item)
										)
									}
									selectedItems={selectedLibraries}
									{...(commonProps as ResultsCategoryProps<"libraries">)}
								/>
							)
						}
						return <ResultsCategory key={category.name} {...commonProps} />
					})}
		</div>
	)

	function isInFilteredCategories(category: AllCategories): unknown {
		return queryParams.filters.category.some(
			(includedCategory) => includedCategory === category.name
		)
	}
}

type ComparisonBarProps = {
	selectedLibraries: Library[]
	allLibraries: Library[]
	onSelectionChange: (selection: Library[]) => void
	onOpenClick: () => void
}

function ComparisonBar({
	selectedLibraries,
	onSelectionChange,
	onOpenClick,
	allLibraries,
}: ComparisonBarProps) {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				onOpenClick()
			}}
			className={compareBarStyle}
			aria-label={`Compare ${selectedLibraries.length} libraries`}
		>
			<div
				className={sprinkles({ display: { mobile: "none", desktop: "block" } })}
			>
				<Button color="destructive" onClick={() => onSelectionChange([])}>
					Reset <ResetIcon />
				</Button>
			</div>
			<div className={sprinkles({ display: { desktop: "none" } })}>
				<Button
					size="square"
					color="destructive"
					aria-label="Reset"
					onClick={() => onSelectionChange([])}
				>
					<ResetIcon />
				</Button>
			</div>

			<Button color="tertiary" onClick={() => onSelectionChange(allLibraries)}>
				Select all
			</Button>

			<Button
				color="secondary"
				className={sprinkles({
					textStyle: "button",
					layout: "row",
					alignItems: "center",
					gap: 4,
				})}
				type="submit"
			>
				Compare ({selectedLibraries.length})
			</Button>
		</form>
	)
}

function calculatePopularTags(data: AllCategories[]): string[] {
	const tags = new Map<string, number>()
	for (const category of data) {
		for (const record of category.data) {
			for (const tag of record.tags) {
				tags.set(tag, tags.get(tag) ?? 0 + 1)
			}
		}
	}
	return map(take(sortBy(Array.from(tags.entries()), [1]), 5), 0)
}

type LibraryComparisonProps = {
	selectedLibraries: Library[]
	onClose: () => void
	onReset: () => void
}

function LibraryComparison({
	selectedLibraries,
	onClose,
	onReset,
}: LibraryComparisonProps) {
	return (
		<div
			className={sprinkles({
				minWidth: 0,
				minHeight: 0,
				maxHeight: "100vh",
				layout: "stack",
				paddingY: { mobile: 24, tablet: 40, desktop: 48 },
			})}
		>
			<div
				className={sprinkles({
					layout: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingBottom: { mobile: 16, tablet: 24 },
					paddingX: { mobile: 16, tablet: 24, desktop: 64 },
				})}
			>
				<h2 className={sprinkles({ textStyle: "h200" })}>Library comparison</h2>
				<Button color="primary" size="square" onClick={onClose} title="Close">
					<CloseIcon />
				</Button>
			</div>
			<ComparisonTable
				className={sprinkles({
					paddingX: { mobile: 0, tablet: 24, desktop: 64 },
					minHeight: 0,
					layout: "stack",
				})}
				libraries={selectedLibraries}
			/>
			<div
				className={sprinkles({
					layout: "row",
					justifyContent: "flex-end",
					gap: 12,
					paddingTop: 16,
					paddingX: { mobile: 16, tablet: 24, desktop: 64 },
				})}
			>
				<Button color="destructive" onClick={onReset}>
					Reset <ResetIcon />
				</Button>
				<Button color="tertiary" onClick={onClose}>
					Add library <AddIcon />
				</Button>
			</div>
		</div>
	)
}
