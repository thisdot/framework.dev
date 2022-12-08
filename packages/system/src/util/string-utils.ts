import { camelCase, kebabCase, startCase } from "lodash"
import { titleCase } from "title-case"

export function deserializeFieldValue<T extends string>(
	inputValue: string,
	canonicalForms: readonly T[]
): T | undefined {
	return canonicalForms.find((form) => kebabCase(form) === inputValue)
}

export function deserializeFieldValues(
	inputValues: string[],
	canonicalForms: readonly string[]
): string[] {
	const canonicalizedValues = []
	for (const inputValue of inputValues) {
		const canonicalForm = canonicalForms.find(
			(form) => kebabCase(form) === inputValue
		)
		if (canonicalForm) canonicalizedValues.push(canonicalForm)
	}
	return canonicalizedValues
}

export function serializeFieldValue(inputValue: string) {
	return kebabCase(inputValue)
}

export function formatFieldValue(inputValue: string) {
	const titleCased = titleCase(inputValue)
	// Capitalize first letter to work around edge cases with the titleCase
	// algorithm not working correctly on single-word mixed-case values
	return titleCased.charAt(0).toUpperCase() + titleCased.slice(1)
}

export function formatAllFrameworkTitles(inputValue: string) {
	switch (inputValue) {
		case "graphql":
			return "GraphQL";
		case "solidjs":
			return "SolidJS";
		default:
			return formatFieldValue(inputValue);
	}
}

export function deserializeFieldName(inputValue: string) {
	return camelCase(inputValue)
}

export function serializeFieldName(inputValue: string) {
	return kebabCase(inputValue)
}

export function formatFieldName(inputValue: string) {
	return startCase(inputValue)
}
