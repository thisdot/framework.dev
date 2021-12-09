import classNames from "classnames"
import React from "react"
import { chipStyle } from "./chip.css"

export type ChipProps = React.ComponentPropsWithoutRef<"button">

export function Chip({ className, children, ...props }: ChipProps) {
	return (
		<button className={classNames(className, chipStyle)} {...props}>
			{children}
		</button>
	)
}
