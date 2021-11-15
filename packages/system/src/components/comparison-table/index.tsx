import React, { useEffect, useState } from "react"
import { Library } from "../../models/library"
import {
	comparisonTableStyle,
	comparisonTableLibraryIconStyle,
	comparisonTableHeadStyle,
	comparisonTableRowCellStyle,
} from "./comparison-table.css"
import { TH, TD } from "./components/cells"
import { ISortConfig } from "./types"

export interface ComparisonTableProps
	extends React.ComponentPropsWithoutRef<"div"> {
	libraries: Library<string>[]
}

export function ComparisonTable({
	libraries,
	className,
	...props
}: ComparisonTableProps) {
	const [libraryStats, setLibraryStats] = useState([])
	const [sortConfig, setSortConfig] = useState<ISortConfig>({
		by: "name",
		asc: false,
	})

	useEffect(() => {
		async function fetchData() {
			const npmsio = await fetch(`https://api.npms.io/v2/package/mget`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(libraries.map((library) => library.npmPackage)),
			}).then((res) => res.json())
			const data = libraries.map((library) => {
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
			setLibraryStats(data)
		}
		fetchData().then(() => handleSort("name"))
	}, [libraries])

	useEffect(() => {
		if (libraryStats.length === 0) {
			return
		}
		const sorted = [...libraryStats].sort((a, b) => {
			if (a[sortConfig.by] === b[sortConfig.by]) {
				return 0
			}
			if (sortConfig.asc) {
				return a[sortConfig.by] > b[sortConfig.by] ? 1 : -1
			} else {
				return b[sortConfig.by] > a[sortConfig.by] ? 1 : -1
			}
		})
		setLibraryStats(sorted)
	}, [sortConfig])

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
				<table className={comparisonTableStyle}>
					<thead className={comparisonTableHeadStyle}>
						<tr>
							<TH
								name="name"
								sort={sortConfig}
								onClick={() => handleSort("name")}
							>
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
						</tr>
					</thead>
					<tbody>
						{libraryStats.map((library) => (
							<tr key={library.name} className={comparisonTableRowCellStyle}>
								<TD>
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
								<TD>{library.coverage || "N/A"}</TD>
								<TD>{library.downloads || "N/A"}</TD>
								<TD>{library.health || "N/A"}</TD>
								<TD>{library.stars || "N/A"}</TD>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}
