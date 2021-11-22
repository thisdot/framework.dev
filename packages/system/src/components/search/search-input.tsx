import classNames from "classnames"
import React from "react"
import { useId } from "@reach/auto-id"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import {
	searchInputBoxStyle,
	searchInputContainerStyle,
	searchInputIconStyle,
	searchInputInputStyle,
	searchInputLabelStyle,
	searchInputResetButtonStyle,
} from "./search-input.css"
import { SearchIcon } from "../../icons/search-icon"
import { CloseIcon } from "../../icons/close-icon"

export interface SearchInputProps
	extends React.ComponentPropsWithoutRef<"input"> {
	label: string
	staticPrefix?: string
	hideLabel?: boolean
	onReset: () => void
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
	function SearchInput(
		{
			className,
			label,
			hideLabel = false,
			id: customIdFromProps,
			staticPrefix = "",
			onReset,
			...props
		}: SearchInputProps,
		ref
	) {
		const id = useId(customIdFromProps)
		return (
			<div className={classNames(className, searchInputContainerStyle)}>
				<div className={searchInputBoxStyle}>
					<SearchIcon className={searchInputIconStyle} />
					<div className={sprinkles({ color: "softText" })}>{staticPrefix}</div>
					<input
						type="search"
						id={id}
						className={searchInputInputStyle}
						{...props}
						ref={ref}
					/>
					<button
						title="Reset"
						onClick={onReset}
						className={searchInputResetButtonStyle}
					>
						<CloseIcon />
					</button>
				</div>
				<label
					htmlFor={id}
					className={classNames(
						searchInputLabelStyle,
						hideLabel && sprinkles({ hidden: "visually" })
					)}
				>
					{label}
				</label>
			</div>
		)
	}
)
