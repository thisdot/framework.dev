import React from "react"
import { useId } from "@reach/auto-id"
import { checkboxLabelStyle } from "./checkbox.css"
import { visuallyHidden } from "../styles/utilities.css"

export interface CheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
	label: string
}

export function Checkbox({
	className,
	label,
	id: customIdFromProps,
	...props
}: CheckboxProps) {
	const id = useId(customIdFromProps)
	return (
		<div className={className}>
			<input type="checkbox" className={visuallyHidden} id={id} {...props} />
			<label htmlFor={id} className={checkboxLabelStyle}>
				{label}
			</label>
		</div>
	)
}
