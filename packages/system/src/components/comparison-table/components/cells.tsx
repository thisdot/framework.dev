import React from "react"
import classNames from "classnames"
import { Headings, ISortConfig } from "../types"
import {
	cellStyle,
	cellTHButtonStyle,
	cellAscStyle,
	cellDescStyle,
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
}: THProps & React.ComponentPropsWithoutRef<"th">) => (
	<th className={classNames(cellStyle, className)} {...props}>
		<button
			className={classNames(
				cellTHButtonStyle,
				sort.asc === true && sort.by === name && cellAscStyle,
				sort.asc === false && sort.by === name && cellDescStyle
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
