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
}: THProps & React.ComponentPropsWithoutRef<"div">) => {
	let sorted = {}
	if (sort.by === name) {
		sorted = { "aria-sort": sort.asc ? "ascending" : "descending" }
	}
	return (
		<div className={classNames(cellTHStyle, className)} {...props} {...sorted}>
			<button
				className={classNames(cellTHButtonStyle)}
				onClick={onClick}
				aria-roledescription="sort button"
			>
				{children}
			</button>
		</div>
	)
}

export const TD = ({
	children,
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) => (
	<div className={classNames(cellTDStyle, className)} {...props}>
		<div className={cellContentsStyle}>{children}</div>
	</div>
)
