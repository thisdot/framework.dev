import classNames from "classnames"
import React from "react"
import { Counter } from "./counter"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { pageHeaderStyle } from "./page-header.css"

export type PageHeaderProps = React.ComponentProps<"header"> & {
	title: string
	count: number
}

export function PageHeader({
	title,
	count,
	className,
	...props
}: PageHeaderProps) {
	return (
		<header className={classNames(className, pageHeaderStyle)} {...props}>
			<h1 className={sprinkles({ textStyle: "pageHeading" })}>{title}</h1>
			<Counter>{count.toString()}</Counter>
		</header>
	)
}
