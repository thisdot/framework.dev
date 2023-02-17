import React from 'react'
import classNames from 'classnames'
import { Headings, ISortConfig } from '../types'
import {
	cellTHStyle,
	cellTDStyle,
	cellTHButtonStyle,
	cellContentsStyle,
	rowHeadingStyle,
	rowHeadingContentsStyle,
} from './cells.css'

type ColHeadingProps = {
	name?: Headings
	sort?: ISortConfig
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ColHeading = ({
	children,
	className,
	name,
	sort,
	onClick,
	...props
}: ColHeadingProps & React.ComponentPropsWithoutRef<'th'>) => {
	let sorted = {}
	if (sort && sort.by === name) {
		sorted = { 'aria-sort': sort.asc ? 'ascending' : 'descending' }
	}
	return (
		<th
			className={classNames(cellTHStyle, className)}
			{...props}
			{...sorted}
			scope="col"
		>
			{sort && (
				<button
					className={classNames(cellTHButtonStyle)}
					onClick={onClick}
					aria-roledescription="sort button"
				>
					{children}
				</button>
			)}
		</th>
	)
}

export const RowHeading = ({
	children,
	className,
	...props
}: React.ComponentPropsWithoutRef<'th'>) => {
	return (
		<th
			className={classNames(rowHeadingStyle, className)}
			{...props}
			scope="row"
		>
			<div className={rowHeadingContentsStyle}>{children}</div>
		</th>
	)
}

export const TD = ({
	children,
	className,
	...props
}: React.ComponentPropsWithoutRef<'td'>) => (
	<td className={classNames(cellTDStyle, className)} {...props}>
		<div className={cellContentsStyle}>{children}</div>
	</td>
)
