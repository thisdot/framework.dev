import classNames from "classnames"
import React from "react"
import { chipIconStyle, chipStyle } from "./chip.css"

export type ChipProps = React.ComponentPropsWithoutRef<"a"> & {
	icon: React.ComponentType
}

export function Chip({ className, children, icon: Icon, ...props }: ChipProps) {
	return (
		<a className={classNames(className, chipStyle)} {...props}>
			{Icon && (
				<div className={chipIconStyle}>
					<Icon />
				</div>
			)}
			{children}
		</a>
	)
}
