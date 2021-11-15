import React, { useEffect, useState } from "react"
import { Library } from "../../models/library"
import {
	comparisonTableStyle,
	comparisonTableLibraryIconStyle,
	comparisonTableHeadStyle,
	comparisonTableRowCellStyle,
} from "./comparison-table.css"
import { TH, TD } from "./components/cells"
import { Headings } from "./types"

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
	const [sortBy, setSortBy] = useState<Headings>("name")
	const [sortAscending, setSortAscending] = useState<boolean | null>(null)

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
		fetchData()
	}, [libraries])

	useEffect(() => {
		if (libraryStats.length === 0) {
			return
		}
		const sorted = [...libraryStats].sort((a, b) => {
			if (a[sortBy] === b[sortBy]) {
				return 0
			}
			if (sortAscending) {
				return a[sortBy] > b[sortBy] ? 1 : -1
			} else {
				return b[sortBy] > a[sortBy] ? 1 : -1
			}
		})
		setLibraryStats(sorted)
	}, [sortBy, sortAscending])

	function handleSort(heading: typeof sortBy) {
		if (sortBy === heading) {
			if (sortAscending === null) {
				setSortAscending(
					heading === "name" || heading === "author" ? true : false
				)
			} else {
				setSortAscending(!sortAscending)
			}
		} else {
			setSortBy(heading)
			setSortAscending(
				heading === "name" || heading === "author" ? true : false
			)
		}
	}

	return (
		<div className={className} {...props}>
			{libraryStats && (
				<table className={comparisonTableStyle}>
					<thead className={comparisonTableHeadStyle}>
						<tr>
							<TH
								name="name"
								ascending={sortAscending}
								sortBy={sortBy}
								onClick={() => handleSort("name")}
							>
								Name
							</TH>
							<TH
								name="author"
								ascending={sortAscending}
								sortBy={sortBy}
								onClick={() => handleSort("author")}
							>
								Author
							</TH>
							<TH
								name="coverage"
								ascending={sortAscending}
								sortBy={sortBy}
								onClick={() => handleSort("coverage")}
							>
								Testing Coverage
							</TH>
							<TH
								name="downloads"
								ascending={sortAscending}
								sortBy={sortBy}
								onClick={() => handleSort("downloads")}
							>
								Weekly Downloads
							</TH>
							<TH
								name="health"
								ascending={sortAscending}
								sortBy={sortBy}
								onClick={() => handleSort("health")}
							>
								Overall Health
							</TH>
							<TH
								name="stars"
								ascending={sortAscending}
								sortBy={sortBy}
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
