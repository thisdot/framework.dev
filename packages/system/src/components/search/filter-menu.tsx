import React, { useState } from "react"
import { Button } from "../button"
import { CardDivider } from "../card-divider"
import {
	filterMenuFilterContainerStyle,
	filterMenuFooterStyle,
	filterMenuStyle,
} from "./filter-menu.css"
import { FilterSet, QueryParams } from "./types"
import { Filter } from "./filter"
import { TagFilter } from "./tag-filter"
import classNames from "classnames"
import { TextInput } from "../text-input"
import { sprinkles } from "../../sprinkles/sprinkles.css"

export type FilterMenuProps = React.ComponentPropsWithoutRef<"div"> & {
	params: QueryParams
	availableFilters: FilterSet
	onConfirm: (newParams: QueryParams) => void
	popularTags: string[]
}

export function FilterMenu({
	className,
	params: initialParams,
	availableFilters,
	onConfirm,
	popularTags,
	...props
}: FilterMenuProps) {
	const [params, setParams] = useState<QueryParams>(initialParams)
	const { filters } = params
	return (
		<article className={classNames(className, filterMenuStyle)} {...props}>
			<div className={filterMenuFilterContainerStyle}>
				<TextInput
					className={sprinkles({ paddingX: 16 })}
					label="Has the words"
					value={params.textSearch}
					onChange={(e) =>
						setParams((oldParams) => ({
							...oldParams,
							textSearch: e.target.value,
						}))
					}
				/>
				<CardDivider />
				{availableFilters.field.map((fieldFilter) => (
					<React.Fragment key={fieldFilter[0]}>
						<Filter
							options={fieldFilter}
							value={
								filters.field.find(([name]) => name === fieldFilter[0]) ?? [
									fieldFilter[0],
									[],
								]
							}
							onUpdate={(newValue) =>
								setParams((oldParams) => ({
									...oldParams,
									filters: {
										...oldParams.filters,
										field: [
											...filters.field.filter(
												([name]) => name !== fieldFilter[0]
											),
											newValue,
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
					suggestions={popularTags}
				/>
				<CardDivider />
			</div>
			<footer className={filterMenuFooterStyle}>
				<Button
					as="button"
					color="plain"
					onClick={() =>
						setParams({
							textSearch: "",
							filters: { category: [], field: [], tag: [] },
						})
					}
				>
					Clear filters
				</Button>
				<Button as="button" color="primary" onClick={() => onConfirm(params)}>
					Search
				</Button>
			</footer>
		</article>
	)
}
