import React, { useEffect, useState } from "react"
import { Library } from "../../models/library"
import {
	comparisonTableStyle,
	comparisonTableLibraryIconStyle,
} from "./comparison-table.css"
import { TH, TD } from "./components/cells"
import { cellStickyStyle } from "./components/cells.css"
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
				<div className={comparisonTableStyle}>
					<TH name="name" sort={sortConfig} onClick={() => handleSort("name")}>
						Name
					</TH>
					<TH
						name="author"
						sort={sortConfig}
						onClick={() => handleSort("author")}
					>
						Author
					</TH>
					<TH
						name="coverage"
						sort={sortConfig}
						onClick={() => handleSort("coverage")}
					>
						Testing Coverage
					</TH>
					<TH
						name="downloads"
						sort={sortConfig}
						onClick={() => handleSort("downloads")}
					>
						Weekly Downloads
					</TH>
					<TH
						name="health"
						sort={sortConfig}
						onClick={() => handleSort("health")}
					>
						Overall Health
					</TH>
					<TH
						name="stars"
						sort={sortConfig}
						onClick={() => handleSort("stars")}
					>
						Stars
					</TH>
					{libraryStats.map((library) => (
						<React.Fragment key={library.name}>
							<TD className={cellStickyStyle}>
								<img
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
							</TD>
							<TD>{library.author}</TD>
							<TD>{formatPercentage(library.coverage) || "N/A"}</TD>
							<TD>{formatNumber(library.downloads) || "N/A"}</TD>
							<TD>{formatPercentage(library.health) || "N/A"}</TD>
							<TD>{formatNumber(library.stars) || "N/A"}</TD>
						</React.Fragment>
					))}
				</div>
			)}
		</div>
	)
}
