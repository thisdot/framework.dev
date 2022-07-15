import React, { useRef } from 'react'
import {
	Combobox,
	ComboboxInput,
	ComboboxList,
	ComboboxOption,
	ComboboxOptionText,
	ComboboxPopover,
} from '@reach/combobox'
import { SearchInput } from './search-input'
import { getWordCoordinatesAt } from './query-util'
import { FilterSet } from './types'
import { AllCategories } from '../../models/all-categories'
import {
	formatFieldName,
	serializeFieldName,
	serializeFieldValue,
} from '../../util/string-utils'
import {
	searchAutocompleteOptionStyle,
	searchAutocompletePopoverStyle,
} from './search-autocomplete.css'

export interface SearchAutocompleteProps {
	staticPrefix?: string
	value: string
	onChange: (newValue: string) => void
	data: AllCategories[]
	availableFilters: FilterSet
	className?: string
}

export function SearchAutocomplete({
	onChange,
	value,
	data,
	availableFilters,
	staticPrefix,
	...props
}: SearchAutocompleteProps) {
	const inputRef = useRef<HTMLInputElement>(null)
	const currentWordCoordinates = getWordCoordinatesAt(
		value,
		inputRef.current?.selectionStart ?? 0
	)
	const autoCompleteResults = currentWordCoordinates
		? calculateAutocompleteResults(
				availableFilters,
				value.slice(...currentWordCoordinates)
		  )
		: []
	return (
		<Combobox
			onSelect={(selection) =>
				currentWordCoordinates &&
				onChange(
					value.slice(0, currentWordCoordinates[0]) +
						selection +
						value.slice(currentWordCoordinates[1])
				)
			}
			aria-label="Search"
			{...props}
		>
			<ComboboxInput
				as={SearchInput}
				name="q"
				ref={inputRef}
				autocomplete={false}
				label="Search"
				hideLabel
				value={value}
				staticPrefix={staticPrefix}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					onChange(e.target.value)
				}}
				onReset={() => onChange('')}
			/>
			{autoCompleteResults.length > 0 && (
				<ComboboxPopover className={searchAutocompletePopoverStyle}>
					<ComboboxList>
						{autoCompleteResults.slice(0, 10).map((result, index) => (
							<ComboboxOption
								key={index}
								value={result.value}
								className={searchAutocompleteOptionStyle}
							>
								<ComboboxOptionText /> {result.description}
							</ComboboxOption>
						))}
					</ComboboxList>
				</ComboboxPopover>
			)}
		</Combobox>
	)
}

type AutocompleteResult = {
	value: string
	description: string
}

function calculateAutocompleteResults(
	availableFilters: FilterSet,
	word: string
): AutocompleteResult[] {
	if (!word) return []

	const categoryFilterSuggestions: AutocompleteResult[] = Array.from(
		availableFilters.category
	).map((name) => ({
		value: `in:${serializeFieldName(name)}`,
		description: `Limit search to ${formatFieldName(name)}`,
	}))
	const tagFilterSuggestions: AutocompleteResult[] = Array.from(
		availableFilters.tag
	).map((name) => ({
		value: `tag:${serializeFieldValue(name)}`,
		description: `Only results tagged ${name}`,
	}))
	const fieldFilterSuggestions: AutocompleteResult[] = Array.from(
		availableFilters.field
	).flatMap(([key, values]) =>
		Array.from(values).map((value) => ({
			value: `${serializeFieldName(key)}:${serializeFieldValue(value)}`,
			description: `Only results where the ${formatFieldName(key)} is ${value}`,
		}))
	)
	return [
		...categoryFilterSuggestions,
		...tagFilterSuggestions,
		...fieldFilterSuggestions,
	].filter((suggestion) => suggestion.value.startsWith(word))
}
