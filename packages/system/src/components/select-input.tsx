import classNames from "classnames"
import React from "react"
import { useId } from "@reach/auto-id"
import {
	selectInputBoxStyle,
	selectInputContainerStyle,
	selectInputLabelStyle,
} from "./select-input.css"
import { visuallyHidden } from "../styles/utilities.css"

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
	id: customIdFromProps,
	...props
}: SelectInputProps) {
	const id = useId(customIdFromProps)
	return (
		<div className={classNames(className, selectInputContainerStyle)}>
			<select id={id} className={selectInputBoxStyle} {...props}>
				{children}
			</select>
			<label
				htmlFor={id}
				className={classNames(
					selectInputLabelStyle,
					hideLabel && visuallyHidden
				)}
			>
				{label}
			</label>
		</div>
	)
}
