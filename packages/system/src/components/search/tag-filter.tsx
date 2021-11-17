import classNames from "classnames"
import React, { useState } from "react"
import "@reach/combobox/styles.css"
import {
	Combobox,
	ComboboxInput,
	ComboboxList,
	ComboboxOption,
	ComboboxPopover,
} from "@reach/combobox"
import { startCase } from "lodash"
import { TextInput } from "../text-input"
import { Tag } from "../tag"
import {
	tagFilterBodyStyle,
	tagFilterSearchBodyStyle,
	tagFilterSearchStyle,
	tagFilterSearchTitleStyle,
	tagFilterStyle,
	tagFilterTitleStyle,
} from "./tag-filter.css"

export interface TagFilterProps<T extends string>
	extends React.ComponentPropsWithoutRef<"fieldset"> {
	options: Set<T>
	value: T[]
	onUpdate: (newValue: T[]) => void
}

export function TagFilter<T extends string>({
	children,
	className,
	onUpdate,
	options,
	value,
	...props
}: TagFilterProps<T>) {
	const [tagSearch, setTagSearch] = useState("")
	return (
		<fieldset className={classNames(className, tagFilterStyle)} {...props}>
			<legend className={tagFilterTitleStyle}>Tags filtering</legend>
			<div className={tagFilterBodyStyle}>
				<Combobox
					onSelect={(selection: T) => {
						setTagSearch("")
						onUpdate([...value, selection])
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
					<fieldset className={tagFilterSearchStyle}>
						<legend className={tagFilterSearchTitleStyle}>Selected Tags</legend>
						<div className={tagFilterSearchBodyStyle}>
							{value.map((tag) => (
								<Tag
									key={tag}
									onClick={() => onUpdate(value.filter((v) => v !== tag))}
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
