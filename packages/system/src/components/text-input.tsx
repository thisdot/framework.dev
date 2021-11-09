import classNames from "classnames"
import React from "react"
import { useId } from "@reach/auto-id"
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
	id: customIdFromProps,
	...props
}: TextInputProps) {
	const id = useId(customIdFromProps)
	return (
		<div className={classNames(className, textInputContainerStyle)}>
			<input type="text" className={textInputBoxStyle} id={id} {...props} />
			<label
				htmlFor={id}
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
