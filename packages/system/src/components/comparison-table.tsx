import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { Library } from "../models/library"
import {
	comparisonTableContainerStyle,
	comparisonTableStyle,
	comparisonTableLibraryIconStyle,
	comparisonTableCellStyle,
	comparisonTableCellContentsStyle,
	comparisonTableHeadStyle,
	comparisonTableRowCellStyle,
} from "./comparison-table.css"

const TH = ({
	children,
	className,
	...props
}: React.ComponentPropsWithoutRef<"th">) => (
	<th className={classNames(comparisonTableCellStyle, className)} {...props}>
		{children}
	</th>
)

const TD = ({ children, ...props }: React.ComponentPropsWithoutRef<"td">) => (
	<td className={comparisonTableCellStyle} role="button" {...props}>
		<div className={comparisonTableCellContentsStyle}>{children}</div>
	</td>
)

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
	const [sortBy, setSortBy] = useState<
		"name" | "author" | "coverage" | "downloads" | "health" | "stars"
	>("name")
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

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
			if (sortDirection === "asc") {
				return a[sortBy] > b[sortBy] ? 1 : -1
			} else {
				return b[sortBy] > a[sortBy] ? 1 : -1
			}
		})
		setLibraryStats(sorted)
	}, [sortBy, sortDirection])

	function handleSort(heading: typeof sortBy) {
		if (sortBy === heading) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc")
		} else {
			setSortBy(heading)
			setSortDirection(
				heading === "name" || heading === "author" ? "asc" : "desc"
			)
		}
	}

	return (
		<div
			className={classNames(className, comparisonTableContainerStyle)}
			{...props}
		>
			{libraryStats && (
				<table className={comparisonTableStyle}>
					<thead className={comparisonTableHeadStyle}>
						<tr>
							<TH onClick={() => handleSort("name")}>Name</TH>
							<TH onClick={() => handleSort("author")}>Author</TH>
							<TH onClick={() => handleSort("coverage")}>Testing Coverage</TH>
							<TH onClick={() => handleSort("downloads")}>Weekly Downloads</TH>
							<TH onClick={() => handleSort("health")}>Overall Health</TH>
							<TH onClick={() => handleSort("stars")}>Stars</TH>
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
