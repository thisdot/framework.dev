import { startCase } from "lodash"
import React, { useState } from "react"
import { Button } from "../button"
import { CardDivider } from "../card-divider"
import {
	filterMenuFilterContainerStyle,
	filterMenuHeaderStyle,
	filterMenuHeadingStyle,
} from "./filter-menu.css"
import { QueryParams } from "./types"
import { Filter } from "./filter"
import { TagFilter } from "./tag-filter"

export type FilterMenuProps = React.ComponentPropsWithoutRef<"div"> & {
	params: QueryParams
	onConfirm: (newParams: QueryParams) => void
}

export function FilterMenu({
	className,
	params: initialParams,
	onConfirm,
	...props
}: FilterMenuProps) {
	const [params, setParams] = useState(initialParams)
	const { categories, fields, tags, availableFilters } = params
	return (
		<article className={className} {...props}>
			<header className={filterMenuHeaderStyle}>
				<h1 className={filterMenuHeadingStyle}>Filter</h1>
				<Button
					as="button"
					color="destructive"
					onClick={() =>
						setParams({ ...params, categories: [], fields: [], tags: [] })
					}
				>
					Reset
				</Button>
				<Button as="button" color="primary" onClick={() => onConfirm(params)}>
					Apply
				</Button>
			</header>
			<div className={filterMenuFilterContainerStyle}>
				{availableFilters.category.size > 0 && (
					<Filter
						name="Search in"
						options={availableFilters.category}
						value={categories}
						onUpdate={(newValue) =>
							setParams((oldParams) => ({ ...oldParams, categories: newValue }))
						}
					/>
				)}
				<CardDivider />
				{Array.from(availableFilters.fields).map(
					([fieldName, fieldOptions]) => (
						<React.Fragment key={fieldName}>
							<Filter
								name={startCase(fieldName)}
								options={fieldOptions}
								value={fields
									.filter(([name]) => name === fieldName)
									.map(([_, value]) => value)}
								onUpdate={(newValue) =>
									setParams((oldParams) => ({
										...oldParams,
										fields: [
											...fields.filter(([name]) => name !== fieldName),
											...newValue.map((v) => [fieldName, v] as const),
										],
									}))
								}
							/>
							<CardDivider />
						</React.Fragment>
					)
				)}
				<TagFilter
					options={availableFilters.tag}
					value={tags}
					onUpdate={(newValue) =>
						setParams((oldParams) => ({ ...oldParams, tags: newValue }))
					}
				/>
			</div>
		</article>
	)
}
