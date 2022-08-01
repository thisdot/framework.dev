import { ISortConfig, ILibrary } from "./types"

export function sortLibraries(
	libraries: ILibrary[],
	sortConfig: ISortConfig
): ILibrary[] {
	return [...libraries].sort((a, b) => {
		const valueA =
			typeof a[sortConfig.by] === "string"
				? (a[sortConfig.by] as string).toUpperCase()
				: a[sortConfig.by]

		const valueB =
			typeof b[sortConfig.by] === "string"
				? (b[sortConfig.by] as string).toUpperCase()
				: b[sortConfig.by]

		if (valueA === valueB) {
			return 0
		}
		if (sortConfig.asc) {
			return valueA > valueB ? 1 : -1
		} else {
			return valueB > valueA ? 1 : -1
		}
	})
}

export function formatPercentage(value: number) {
	if (value === undefined || value === null) {
		return
	}

	return new Intl.NumberFormat([], {
		style: "percent",
	}).format(value)
}

export function formatNumber(value: number) {
	if (value === undefined || value === null) {
		return
	}

	return new Intl.NumberFormat().format(value)
}
