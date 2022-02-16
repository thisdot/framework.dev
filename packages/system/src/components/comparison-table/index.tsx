import React, { useEffect, useState } from "react"
import { Library } from "../../models/library"
import {
	comparisonTableStyle,
	comparisonTableLibraryIconStyle,
} from "./comparison-table.css"
import { ColHeading, RowHeading, TD } from "./components/cells"
import { HorizontalScrollbar } from "./components/horizontal-scrollbar"
import { ISortConfig, ILibrary } from "./types"
import { sortLibraries, formatPercentage, formatNumber } from "./utils"

export interface ComparisonTableProps
	extends React.ComponentPropsWithoutRef<"div"> {
	libraries: Library<string>[]
}

export function ComparisonTable({
	libraries,
	className,
	...props
}: ComparisonTableProps) {
	const [data, setData] = useState<ILibrary[]>([])
	const [sortConfig, setSortConfig] = useState<ISortConfig>({
		by: "name",
		asc: false,
	})

	useEffect(() => {
		const abortController = new AbortController()
		async function fetchData() {
			const npmsio = await fetch(`https://api.npms.io/v2/package/mget`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(libraries.map((library) => library.npmPackage)),
				signal: abortController.signal,
			})
				.then((res) => res.json())
				.catch((error) => {
					if (error.name === "AbortError") {
						return
					}
				})
			const data: ILibrary[] = libraries.map((library) => {
				return {
					name: library.name,
					author: library.author,
					image: library.image,
					href: library.href,
					coverage: npmsio[library.npmPackage]?.evaluation?.quality?.tests,
					downloads:
						npmsio[library.npmPackage]?.collected?.npm?.downloads[1]?.count,
					health: npmsio[library.npmPackage]?.evaluation?.quality?.health,
					stars: npmsio[library.npmPackage]?.collected?.github?.starsCount,
				}
			})
			setData(data)
		}
		fetchData()
			.then(() => handleSort("name"))
			.catch((error) => {
				if (error.name === "AbortError") {
					return
				}
			})
		return () => abortController.abort()
	}, [libraries])

	const libraryStats = React.useMemo(
		() => sortLibraries(data, sortConfig),
		[data, sortConfig]
	)

	function handleSort(heading: typeof sortConfig.by) {
		setSortConfig((prevSort) => {
			if (prevSort.by === heading) {
				return { by: heading, asc: !prevSort.asc }
			}
			if (heading === "name" || heading === "author") {
				return { by: heading, asc: true }
			}
			return { by: heading, asc: false }
		})
	}

	return (
		<div className={className} {...props}>
			{libraryStats && (
				<HorizontalScrollbar>
					<table className={comparisonTableStyle}>
						<thead style={{ display: "contents" }}>
							<tr style={{ display: "contents" }}>
								<ColHeading
									name="name"
									sort={sortConfig}
									onClick={() => handleSort("name")}
								>
									Name
								</ColHeading>
								<ColHeading
									name="author"
									sort={sortConfig}
									onClick={() => handleSort("author")}
								>
									Author
								</ColHeading>
								<ColHeading
									name="coverage"
									sort={sortConfig}
									onClick={() => handleSort("coverage")}
								>
									Testing Coverage
								</ColHeading>
								<ColHeading
									name="downloads"
									sort={sortConfig}
									onClick={() => handleSort("downloads")}
								>
									Weekly Downloads
								</ColHeading>
								<ColHeading
									name="health"
									sort={sortConfig}
									onClick={() => handleSort("health")}
								>
									Overall Health
								</ColHeading>
								<ColHeading
									name="stars"
									sort={sortConfig}
									onClick={() => handleSort("stars")}
								>
									Stars
								</ColHeading>
							</tr>
						</thead>
						<tbody style={{ display: "contents" }}>
							{libraryStats.map((library) => (
								<tr style={{ display: "contents" }} key={library.name}>
									<RowHeading scope="row">
										<img
											alt=""
											src={library.image}
											className={comparisonTableLibraryIconStyle}
										/>
										<a
											href={library.href}
											target="_blank"
											rel="noopener noreferrer"
										>
											{library.name}
										</a>
									</RowHeading>
									<TD>{library.author}</TD>
									<TD>{formatPercentage(library.coverage) || "N/A"}</TD>
									<TD>{formatNumber(library.downloads) || "N/A"}</TD>
									<TD>{formatPercentage(library.health) || "N/A"}</TD>
									<TD>{formatNumber(library.stars) || "N/A"}</TD>
								</tr>
							))}
						</tbody>
					</table>
				</HorizontalScrollbar>
			)}
		</div>
	)
}
