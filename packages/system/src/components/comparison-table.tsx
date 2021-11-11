import classNames from "classnames"
import React from "react"
import { Library } from "../models/library"
import { comparisonTableStyle } from "./comparison-table.css"

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
		<div className={classNames(className, comparisonTableStyle)} {...props}>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Author</th>
						<th>Testing Coverage</th>
						<th>Weekly Downloads</th>
						<th>Overall Health</th>
						<th>Stars</th>
					</tr>
				</thead>
				<tbody>
					{libraries.map((library) => (
						<tr key={library.name}>
							<td>
								<img src={library.image} />
								{library.name}
							</td>
							<td>{library.author}</td>
							<td>85%</td>
							<td>29M/week</td>
							<td>92%</td>
							<td>2.4K</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
