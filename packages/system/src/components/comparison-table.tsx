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

const TH = ({ children, className }: React.ComponentPropsWithoutRef<"th">) => (
	<th className={classNames(comparisonTableCellStyle, className)}>
		{children}
	</th>
)

const TD = ({ children }: React.ComponentPropsWithoutRef<"td">) => (
	<td className={comparisonTableCellStyle}>
		<div className={comparisonTableCellContentsStyle}>{children}</div>
	</td>
)

export interface ComparisonTableProps
	extends React.ComponentPropsWithoutRef<"div"> {
	libraries: Library<string>[]
}

interface LibraryWithData extends Library<string> {
	stars: string
}

export function ComparisonTable({
	libraries,
	className,
	...props
}: ComparisonTableProps) {
	const [libraryStats, setLibraryStats] = useState<LibraryWithData[]>([])
	useEffect(() => {
		async function fetchData() {
			const data = await fetch(`https://api.npms.io/v2/package/mget`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(libraries.map((library) => library.npmPackage)),
			}).then((res) => res.json())
			setLibraryStats(data)
		}
		fetchData()
	}, [libraries])

	return (
		<div
			className={classNames(className, comparisonTableContainerStyle)}
			{...props}
		>
			{libraryStats && (
				<table className={comparisonTableStyle}>
					<thead className={comparisonTableHeadStyle}>
						<tr>
							<TH>Name</TH>
							<TH>Author</TH>
							<TH>Testing Coverage</TH>
							<TH>Weekly Downloads</TH>
							<TH>Overall Health</TH>
							<TH>Stars</TH>
						</tr>
					</thead>
					<tbody>
						{libraries.map((library) => (
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
								<TD>
									{libraryStats[library.npmPackage]?.evaluation?.quality
										?.tests || "N/A"}
								</TD>
								<TD>
									{libraryStats[library.npmPackage]?.collected?.npm
										?.downloads[1]?.count || "N/A"}
								</TD>
								<TD>
									{libraryStats[library.npmPackage]?.evaluation?.quality
										?.health || "N/A"}
								</TD>
								<TD>
									{libraryStats[library.npmPackage]?.collected?.github
										?.starsCount || "N/A"}
								</TD>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}
