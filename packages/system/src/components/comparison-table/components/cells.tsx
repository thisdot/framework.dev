import React from "react"
import classNames from "classnames"
import { Headings, ISortConfig } from "../types"
import {
	cellTHStyle,
	cellTDStyle,
	cellTHButtonStyle,
	cellContentsStyle,
} from "./cells.css"

type THProps = {
	name: Headings
	sort: ISortConfig
	onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const TH = ({
	children,
	className,
	name,
	sort,
	onClick,
	...props
}: THProps & React.ComponentPropsWithoutRef<"th">) => {
	let sorted = {}
	if (sort.by === name) {
		sorted = { "aria-sort": sort.asc ? "ascending" : "descending" }
	}
	return (
		<th className={classNames(cellTHStyle, className)} {...props} {...sorted}>
			<button
				className={classNames(cellTHButtonStyle)}
				onClick={onClick}
				aria-roledescription="sort button"
			>
				{children}
			</button>
		</th>
	)
}

type TDProps = {
	role?: string
}

export const TD = ({
	children,
	className,
	role = "cell",
	...props
}: TDProps & React.ComponentPropsWithoutRef<"td">) => (
	<td className={classNames(cellTDStyle, className)} role={role} {...props}>
		<div className={cellContentsStyle}>{children}</div>
	</td>
)
