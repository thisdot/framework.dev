import classNames from "classnames"
import React from "react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import {
	textInputBoxStyle,
	textInputContainerStyle,
	textInputLabelStyle,
} from "./text-input.css"

export interface TextInputProps
	extends React.ComponentPropsWithoutRef<"input"> {
	label: string
	hideLabel?: boolean
}

export function TextInput({
	className,
	label,
	hideLabel = false,
	...props
}: TextInputProps) {
	return (
		<div className={classNames(className, textInputContainerStyle)}>
			<input type="text" className={textInputBoxStyle} {...props} />
			<label
				className={classNames(
					textInputLabelStyle,
					hideLabel && sprinkles({ hidden: "visually" })
				)}
			>
				{label}
			</label>
		</div>
	)
}
