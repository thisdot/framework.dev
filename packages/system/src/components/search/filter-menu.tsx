import classNames from "classnames"
import "@reach/combobox/styles.css"
import {
	Combobox,
	ComboboxInput,
	ComboboxList,
	ComboboxOption,
	ComboboxPopover,
} from "@reach/combobox"
import { startCase } from "lodash"
import React, { useState } from "react"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { Button } from "../button"
import { CardDivider } from "../card-divider"
import { Checkbox } from "../checkbox"
import { TextInput } from "../text-input"
import { filterMenuStyle } from "./filter-menu.css"
import { QueryParams } from "./types"
import { Tag } from "../tag"

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
		<article className={classNames(className, filterMenuStyle)} {...props}>
			<header
				className={sprinkles({
					layout: "row",
					paddingY: 24,
					paddingX: 16,
					gap: 8,
					backgroundColor: "surface2",
					alignItems: "center",
				})}
			>
				<h1 className={sprinkles({ textStyle: "subtitle1", width: "full" })}>
					Filter
				</h1>
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
			<div className={sprinkles({ layout: "stack", gap: 16, paddingY: 24 })}>
				{availableFilters.category.size > 0 && (
					<Filter
						name="Search in"
						options={availableFilters.category}
						value={categories}
						onChange={(newValue) =>
							setParams((oldParams) => ({ ...oldParams, categories: newValue }))
						}
					/>
				)}
				<CardDivider />
				{Array.from(availableFilters.fields).map(
					([fieldName, fieldOptions]) => (
						<>
							<Filter
								key={fieldName}
								name={startCase(fieldName)}
								options={fieldOptions}
								value={fields
									.filter(([name]) => name === fieldName)
									.map(([_, value]) => value)}
								onChange={(newValue) =>
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
						</>
					)
				)}
				<TagFilter
					options={availableFilters.tag}
					value={tags}
					onChange={(newValue) =>
						setParams((oldParams) => ({ ...oldParams, tags: newValue }))
					}
				/>
			</div>
		</article>
	)
}

type FilterProps<T extends string> = {
	name: string
	options: Set<T>
	value: T[]
	onChange: (newValue: T[]) => void
}

function Filter<T extends string>({
	name,
	options,
	value,
	onChange,
}: FilterProps<T>): JSX.Element {
	return (
		<fieldset className={sprinkles({ paddingX: 16, paddingY: 12 })}>
			<legend
				className={sprinkles({
					textStyle: "bodyShort3",
					fontWeight: "bold",
					color: "softText",
				})}
			>
				{name}
			</legend>
			<div className={sprinkles({ layout: "stack", gap: 16 })}>
				{Array.from(options).map((option) => {
					const otherValues = value.filter((v) => v !== option)
					return (
						<Checkbox
							key={option}
							label={startCase(option)}
							checked={value.includes(option)}
							onChange={(e) =>
								onChange(
									e.target.checked ? [...otherValues, option] : otherValues
								)
							}
						/>
					)
				})}
			</div>
		</fieldset>
	)
}

type TagFilterProps<T extends string> = {
	options: Set<T>
	value: T[]
	onChange: (newValue: T[]) => void
}

function TagFilter<T extends string>({
	options,
	value,
	onChange,
}: TagFilterProps<T>): JSX.Element {
	const [tagSearch, setTagSearch] = useState("")
	return (
		<fieldset className={sprinkles({ paddingX: 16, paddingY: 12 })}>
			<legend
				className={sprinkles({
					textStyle: "bodyShort3",
					fontWeight: "bold",
					color: "softText",
				})}
			>
				Tags filtering
			</legend>
			<div className={sprinkles({ layout: "stack", gap: 16 })}>
				<Combobox
					onSelect={(selection: T) => {
						setTagSearch("")
						onChange([...value, selection])
					}}
					aria-label="Search tags"
				>
					<ComboboxInput
						as={TextInput}
						autocomplete={false}
						label=""
						hideLabel
						value={tagSearch}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setTagSearch(e.target.value)
						}
					/>
					<ComboboxPopover>
						<ComboboxList>
							{Array.from(options)
								.filter((o) => !value.includes(o))
								.map((option) => (
									<ComboboxOption key={option} value={option} />
								))}
						</ComboboxList>
					</ComboboxPopover>
				</Combobox>
				{value.length > 0 && (
					<fieldset className={sprinkles({ padding: 0 })}>
						<legend
							className={sprinkles({
								textStyle: "overline",
								color: "softText",
								paddingBottom: 8,
							})}
						>
							Selected Tags
						</legend>
						<div className={sprinkles({ layout: "row", gap: 4 })}>
							{value.map((tag) => (
								<Tag
									key={tag}
									onClick={() => onChange(value.filter((v) => v !== tag))}
								>
									{startCase(tag)}
								</Tag>
							))}
						</div>
					</fieldset>
				)}
			</div>
		</fieldset>
	)
}
