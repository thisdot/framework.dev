import classNames from "classnames"
import React, { useMemo, useRef, useState } from "react"
import Fuse from "fuse.js"
import {
	compareBarStyle,
	searchContainerStyle,
	searchMobileLogoContainerStyle,
	searchMobileLogoStyle,
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
	filterCategories,
	filterRecords,
	getSearchResults,
	isEmptyFilterSet,
	parseQueryString,
	serializeQueryParams,
} from "./query-util"
import { SearchAutocomplete } from "./search-autocomplete"
import { FilterIcon } from "../../icons/filter-icon"
import { FilterSet, QueryParams } from "./types"
import { uniq, map, sortBy, take, without } from "lodash"
import { Library } from "../../models/library"
import { OpenIcon } from "../../icons/open-icon"
import { ComparisonTable } from "../comparison-table"
import { CloseIcon } from "../../icons/close-icon"
import { ResetIcon } from "../../icons/reset-icon"
import { AddIcon } from "../../icons/add-icon"
import { Logo } from "../logo"

export interface SearchProps extends React.ComponentPropsWithoutRef<"section"> {
	data: AllCategories[]
	preFilters?: FilterSet
}

export function Search({
	className,
	data: initialData,
	preFilters = emptyFilterSet,
	...props
}: SearchProps) {
	const data = useMemo(() => {
		const data = filterCategories(initialData, preFilters)
		for (const category of data) {
			// @ts-expect-error just a very silly "cannot iterate over a union" error here
			category.data = filterRecords(category.data, preFilters)
		}
		return data
	}, [initialData, preFilters])
	const [query, setQuery] = useState("")
	const [selectedLibraries, setSelectedLibraries] = useState<Library<string>[]>(
		[]
	)
	const [comparisonTableOpen, setComparisonTableOpen] = useState(false)
	const availableFilters = useMemo(
		() => calculateAvailableFilters(data, preFilters),
		[data, preFilters]
	)
	const queryParams = parseQueryString(query, availableFilters)
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
						<header className={searchMobileLogoContainerStyle}>
							<Logo className={searchMobileLogoStyle} />
						</header>
						<SearchBar
							availableFilters={availableFilters}
							data={data}
							onChange={setQuery}
							preFilters={preFilters}
							value={query}
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
							preFilters={preFilters}
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
								(data.find((c) => c.name === "libraries")
									?.data as Library<string>[]) ?? []
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
	value: string
	data: AllCategories[]
}

function SearchBar({
	preFilters,
	availableFilters,
	onChange,
	value,
	data,
}: SearchBarProps) {
	const [filterMenuOpen, setFilterMenuOpen] = useState(false)
	const popularTags = useMemo(() => calculatePopularTags(data), [data])
	const queryParams = parseQueryString(value, availableFilters)
	return (
		<div
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
					size="square"
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
		</div>
	)
}

type SearchResultsProps = {
	queryParams: QueryParams
	preFilters: FilterSet
	selectedLibraries: Library<string>[]
	onLibrarySelect: (newSelection: Library<string>[]) => void
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
									onSelect={(item: Library<string>, selected: boolean) =>
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
	selectedLibraries: Library<string>[]
	allLibraries: Library<string>[]
	onSelectionChange: (selection: Library<string>[]) => void
	onOpenClick: () => void
}

function ComparisonBar({
	selectedLibraries,
	onSelectionChange,
	onOpenClick,
	allLibraries,
}: ComparisonBarProps) {
	return (
		<div className={compareBarStyle}>
			<button
				className={sprinkles({
					textStyle: "button",
					layout: "row",
					alignItems: "center",
					gap: 4,
				})}
				type="button"
				onClick={onOpenClick}
			>
				<OpenIcon size="large" /> Compare ({selectedLibraries.length})
			</button>
			<Button color="tertiary" onClick={() => onSelectionChange(allLibraries)}>
				Select all
			</Button>
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
					onClick={() => onSelectionChange([])}
				>
					<ResetIcon />
				</Button>
			</div>
		</div>
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
	selectedLibraries: Library<string>[]
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
				maxHeight: "100%",
				layout: "stack",
				paddingY: { mobile: 24, desktop: 48 },
			})}
		>
			<div
				className={sprinkles({
					layout: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingBottom: { mobile: 16, desktop: 24 },
					paddingX: { mobile: 16, desktop: 64 },
				})}
			>
				<h2 className={sprinkles({ textStyle: "h200" })}>Library comparison</h2>
				<Button color="primary" size="square" onClick={onClose} title="Close">
					<CloseIcon />
				</Button>
			</div>
			<ComparisonTable
				className={sprinkles({
					paddingX: { mobile: 0, desktop: 64 },
					minHeight: 0,
				})}
				libraries={selectedLibraries}
			/>
			<div
				className={sprinkles({
					layout: "row",
					justifyContent: "flex-end",
					gap: 12,
					paddingTop: 16,
					paddingX: { mobile: 16, desktop: 64 },
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
