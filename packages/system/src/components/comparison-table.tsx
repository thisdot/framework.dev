import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { Library } from "../models/library"
import { getGitHubStarsUrl } from "../util/stats-util"
import {
	comparisonTableContainerStyle,
	comparisonTableStyle,
	comparisonTableLibraryIconStyle,
	comparisonTableCellStyle,
	comparisonTableCellContentsStyle,
	comparisonTableHeadStyle,
	comparisonTableRowCellStyle,
} from "./comparison-table.css"

const TH = ({ children }: React.ComponentPropsWithoutRef<"th">) => (
	<th className={comparisonTableCellStyle}>{children}</th>
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
	const [librariesWithData, setLibrariesWithData] = useState<LibraryWithData[]>(
		[]
	)
	useEffect(() => {
		async function fetchData() {
			const librariesWithData = await Promise.all(
				libraries.map(async (library) => {
					const stars = await fetch(
						getGitHubStarsUrl(library.gitHubRepo, "json")
					)
						.then((res) => res.json())
						.then((res) => res.value)
					return { ...library, stars }
				})
			)
			setLibrariesWithData(librariesWithData)
		}
		fetchData()
	}, [libraries])

	console.log(librariesWithData)

	return (
		<div
			className={classNames(className, comparisonTableContainerStyle)}
			{...props}
		>
			{librariesWithData && (
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
						{librariesWithData.map((library) => (
							<tr key={library.name} className={comparisonTableRowCellStyle}>
								<TD>
									<img
										src={library.image}
										className={comparisonTableLibraryIconStyle}
									/>
									{library.name}
								</TD>
								<TD>{library.author}</TD>
								<TD>85%</TD>
								<TD>29M/week</TD>
								<TD>92%</TD>
								<TD>{library.stars}</TD>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}
