import classNames from 'classnames'
import React, { useMemo, useState } from 'react'
import {
	Combobox,
	ComboboxInput,
	ComboboxList,
	ComboboxOption,
	ComboboxPopover,
} from '@reach/combobox'
import { TextInput } from '../text-input'
import {
	tagFilterBodyStyle,
	tagFilterListboxOptionStyle,
	tagFilterListboxStyle,
	tagFilterSearchBodyStyle,
	tagFilterSearchStyle,
	tagFilterSearchTitleStyle,
	tagFilterStyle,
	tagFilterTitleStyle,
} from './tag-filter.css'
import {
	deserializeFieldValue,
	formatFieldValue,
	serializeFieldValue,
} from '../../util/string-utils'
import { CloseIcon } from '../../icons/close-icon'
import { Chip } from '../chip'
import { sprinkles } from '../../sprinkles/sprinkles.css'
import { Tag } from '../tag'
import Fuse from 'fuse.js'
import map from 'lodash/map'
import take from 'lodash/take'

export interface TagFilterProps<T extends string>
	extends React.ComponentPropsWithoutRef<'fieldset'> {
	options: T[]
	value: T[]
	suggestions?: T[]
	onUpdate: (newValue: T[]) => void
}

export function TagFilter<T extends string>({
	children,
	className,
	onUpdate,
	options,
	suggestions = [],
	value,
	...props
}: TagFilterProps<T>) {
	const [tagSearch, setTagSearch] = useState('')
	const searchIndex = useMemo(
		() => new Fuse(options, { threshold: 0.3 }),
		[options],
	)
	const searchResults = take(
		map(searchIndex.search(tagSearch), 'item').filter(
			(o) => !value.includes(o),
		),
		5,
	)
	return (
		<fieldset className={classNames(className, tagFilterStyle)} {...props}>
			<legend className={tagFilterTitleStyle}>Tags</legend>
			<div className={tagFilterBodyStyle}>
				<Combobox
					onSelect={(selection: string) => {
						setTagSearch('')
						const deserializedSelection = deserializeFieldValue(
							serializeFieldValue(selection),
							options,
						)
						if (deserializedSelection) {
							onUpdate([...value, deserializedSelection])
						}
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
					<ComboboxPopover portal={false} className={tagFilterListboxStyle}>
						<ComboboxList>
							{searchResults.map((option, index) => (
								<ComboboxOption
									className={tagFilterListboxOptionStyle}
									key={index}
									value={formatFieldValue(option)}
								/>
							))}
						</ComboboxList>
					</ComboboxPopover>
				</Combobox>
				{value.length > 0 ? (
					<fieldset className={tagFilterSearchStyle}>
						<legend className={tagFilterSearchTitleStyle}>Selected</legend>
						<div className={tagFilterSearchBodyStyle}>
							{value.map((tag) => (
								<Chip
									key={tag}
									onClick={() => onUpdate(value.filter((v) => v !== tag))}
								>
									{formatFieldValue(tag)}
									<CloseIcon />
								</Chip>
							))}
						</div>
						<button
							type="button"
							onClick={() => onUpdate([])}
							className={sprinkles({
								color: 'tertiary',
								textStyle: 'button',
								paddingTop: 16,
							})}
						>
							Remove all
						</button>
					</fieldset>
				) : (
					suggestions.length > 0 && (
						<fieldset className={tagFilterSearchStyle}>
							<legend className={tagFilterSearchTitleStyle}>Popular</legend>
							<div className={tagFilterSearchBodyStyle}>
								{suggestions.map((tag) => (
									<Tag key={tag} onClick={() => onUpdate([...value, tag])}>
										{formatFieldValue(tag)}
									</Tag>
								))}
							</div>
						</fieldset>
					)
				)}
			</div>
		</fieldset>
	)
}
