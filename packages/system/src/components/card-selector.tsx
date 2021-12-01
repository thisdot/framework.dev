import { useId } from "@reach/auto-id"
import React from "react"
import { SelectIcon } from "../icons/select-icon"
import { UnselectIcon } from "../icons/unselect-icon"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { cardSelectorLabelStyle } from "./card-selector.css"
import { Tooltip } from "./tooltip"

export interface CardSelectorProps
	extends React.ComponentPropsWithoutRef<"input"> {}

export function CardSelector({
	children,
	className,
	checked,
	id: customIdFromProps,
	...props
}: CardSelectorProps) {
	const id = useId(customIdFromProps)
	return (
		<Tooltip label={checked ? "Remove from comparison" : "Add to comparison"}>
			<div className={className} {...props}>
				<input
					type="checkbox"
					checked={checked}
					className={sprinkles({ hidden: "visually" })}
					id={id}
					{...props}
				/>
				<label htmlFor={id} className={cardSelectorLabelStyle}>
					<div className={sprinkles({ hidden: "visually" })}>
						Add to comparison
					</div>
					{checked ? (
						<UnselectIcon
							className={sprinkles({ color: "error" })}
							size="large"
						/>
					) : (
						<SelectIcon
							className={sprinkles({ color: "tertiary" })}
							size="large"
						/>
					)}
				</label>
			</div>
		</Tooltip>
	)
}
