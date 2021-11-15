import React from "react"
import classNames from "classnames"
import { Headings } from "../types"
import {
	cellStyle,
	cellTHButtonStyle,
	cellAscStyle,
	cellDescStyle,
	cellContentsStyle,
} from "./cells.css"

type THProps = {
	name: Headings
	ascending: boolean
	sortBy: Headings
	onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const TH = ({
	children,
	className,
	name,
	ascending,
	sortBy,
	onClick,
	...props
}: THProps & React.ComponentPropsWithoutRef<"th">) => (
	<th className={classNames(cellStyle, className)} {...props}>
		<button
			className={classNames(
				cellTHButtonStyle,
				ascending === true && sortBy === name && cellAscStyle,
				ascending === false && sortBy === name && cellDescStyle
			)}
			onClick={onClick}
		>
			{children}
		</button>
	</th>
)

export const TD = ({
	children,
	...props
}: React.ComponentPropsWithoutRef<"td">) => (
	<td className={cellStyle} role="button" {...props}>
		<div className={cellContentsStyle}>{children}</div>
	</td>
)
