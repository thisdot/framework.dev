import classNames from "classnames"
import React from "react"
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

export function ComparisonTable({
	libraries,
	className,
	...props
}: ComparisonTableProps) {
	return (
		<div
			className={classNames(className, comparisonTableContainerStyle)}
			{...props}
		>
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
								{library.name}
							</TD>
							<TD>{library.author}</TD>
							<TD>85%</TD>
							<TD>29M/week</TD>
							<TD>92%</TD>
							<TD>2.4K</TD>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
