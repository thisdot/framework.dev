import { startCase } from "lodash"
import React, { useState } from "react"
import { Button } from "../button"
import { CardDivider } from "../card-divider"
import {
	filterMenuFilterContainerStyle,
	filterMenuHeaderStyle,
	filterMenuHeadingStyle,
} from "./filter-menu.css"
import { FilterSet, QueryParams } from "./types"
import { Filter } from "./filter"
import { TagFilter } from "./tag-filter"

export type FilterMenuProps = React.ComponentPropsWithoutRef<"div"> & {
	params: QueryParams
	availableFilters: FilterSet
	onConfirm: (newParams: QueryParams) => void
}

export function FilterMenu({
	className,
	params: initialParams,
	availableFilters,
	onConfirm,
	...props
}: FilterMenuProps) {
	const [params, setParams] = useState<QueryParams>(initialParams)
	const { filters } = params
	return (
		<article className={className} {...props}>
			<header className={filterMenuHeaderStyle}>
				<h1 className={filterMenuHeadingStyle}>Filter</h1>
				<Button
					as="button"
					color="destructive"
					onClick={() =>
						setParams({
							...params,
							filters: { category: [], field: [], tag: [] },
						})
					}
				>
					Reset
				</Button>
				<Button as="button" color="primary" onClick={() => onConfirm(params)}>
					Apply
				</Button>
			</header>
			<div className={filterMenuFilterContainerStyle}>
				{availableFilters.category.length > 0 && (
					<Filter
						name="Search in"
						options={availableFilters.category}
						value={filters.category}
						onUpdate={(newValue) =>
							setParams((oldParams) => ({
								...oldParams,
								filters: { ...oldParams.filters, category: newValue },
							}))
						}
					/>
				)}
				<CardDivider />
				{availableFilters.field.map(([fieldName, fieldOptions]) => (
					<React.Fragment key={fieldName}>
						<Filter
							name={startCase(fieldName)}
							options={fieldOptions}
							value={
								filters.field.find(([name]) => name === fieldName)?.[1] ?? []
							}
							onUpdate={(newValue) =>
								setParams((oldParams) => ({
									...oldParams,
									filters: {
										...oldParams.filters,
										field: [
											...filters.field.filter(([name]) => name !== fieldName),
											[fieldName, newValue],
										],
									},
								}))
							}
						/>
						<CardDivider />
					</React.Fragment>
				))}
				<TagFilter
					options={availableFilters.tag}
					value={filters.tag}
					onUpdate={(newValue) =>
						setParams((oldParams) => ({
							...oldParams,
							filters: { ...oldParams.filters, tag: newValue },
						}))
					}
				/>
			</div>
		</article>
	)
}
