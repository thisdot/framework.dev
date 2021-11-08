import classNames from "classnames"
import React from "react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { selectInputBoxStyle, selectInputContainerStyle, selectInputLabelStyle } from "./select-input.css"

export interface SelectInputProps
	extends React.ComponentPropsWithoutRef<"select"> {
	label: string
	hideLabel?: boolean
}

export function SelectInput({
	children,
	className,
	hideLabel,
	label,
	...props
}: SelectInputProps) {
	return (
		<div className={classNames(className, selectInputContainerStyle)}>
			<select className={selectInputBoxStyle} {...props}>{children}</select>
			<label
				className={classNames(
					selectInputLabelStyle,
					hideLabel && sprinkles({ hidden: "visually" })
				)}
			>
				{label}
			</label>
		</div>
	)
}
