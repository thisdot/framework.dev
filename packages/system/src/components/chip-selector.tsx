import { useId } from "@reach/auto-id"
import React from "react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { chipSelectorStyle, chipSelectorIconStyle } from "./chip-selector.css"

export interface ChipSelectorProps
	extends React.ComponentPropsWithoutRef<"input"> {
	label: React.ReactNode
}

export function ChipSelector({
	className,
	label,
	id: customIdFromProps,
	...props
}: ChipSelectorProps) {
	const id = useId(customIdFromProps)
	return (
		<div className={className}>
			<input
				type="checkbox"
				className={sprinkles({ hidden: "visually" })}
				id={id}
				{...props}
			/>
			<label htmlFor={id} className={chipSelectorStyle}>
				{label}
				<div className={chipSelectorIconStyle} />
			</label>
		</div>
	)
}
