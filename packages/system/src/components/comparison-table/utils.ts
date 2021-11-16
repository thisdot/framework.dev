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
