import React, { useRef } from "react"
import "@reach/combobox/styles.css"
import {
	Combobox,
	ComboboxInput,
	ComboboxList,
	ComboboxOption,
	ComboboxOptionText,
	ComboboxPopover,
} from "@reach/combobox"
import { lowerCase } from "lodash"
import { SearchInput } from "./search-input"
import { getWordCoordinatesAt, parseQueryString } from "./query-util"
import { FilterSet } from "./types"
import { AllCategories } from "../../models/all-categories"

export interface SearchAutocompleteProps {
	value: string
	onChange: (newValue: string) => void
	data: AllCategories[]
	className?: string
}

export function SearchAutocomplete({
	onChange,
	value,
	data,
	...props
}: SearchAutocompleteProps) {
	const inputRef = useRef<HTMLInputElement>()
	const currentWordCoordinates = getWordCoordinatesAt(
		value,
		inputRef.current?.selectionStart
	)
	const queryParams = parseQueryString(value, data)
	const autoCompleteResults = currentWordCoordinates
		? calculateAutocompleteResults(
				queryParams.availableFilters,
				value.slice(...currentWordCoordinates)
		  )
		: []
	return (
		<Combobox
			onSelect={(selection) =>
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
				ref={inputRef}
				autocomplete={false}
				label="Search"
				hideLabel
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					onChange(e.target.value)
				}}
				onReset={() => onChange("")}
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
		availableFilters.field
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
