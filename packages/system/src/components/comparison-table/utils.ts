import { ISortConfig, ILibrary } from "./types"

export function sortLibraries(
	libraries: ILibrary[],
	sortConfig: ISortConfig
): ILibrary[] {
	return [...libraries].sort((a, b) => {
		if (a[sortConfig.by] === b[sortConfig.by]) {
			return 0
		}
		if (sortConfig.asc) {
			return a[sortConfig.by] > b[sortConfig.by] ? 1 : -1
		} else {
			return b[sortConfig.by] > a[sortConfig.by] ? 1 : -1
		}
	})
}

export function formatPercentage(value: number) {
	return new Intl.NumberFormat([], {
		style: "percent",
	}).format(value)
}

export function formatNumber(value: number) {
	return new Intl.NumberFormat().format(value)
}
