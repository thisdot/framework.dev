import classNames from "classnames"
import React from "react"
import { useId } from "@reach/auto-id"
import { sprinkles } from "../sprinkles/sprinkles.css"
import {
	searchInputBoxStyle,
	searchInputContainerStyle,
	searchInputIconStyle,
	searchInputLabelStyle,
	searchInputResetButtonStyle,
} from "./search-input.css"
import { SearchIcon } from "../icons/search-icon"
import { CloseIcon } from "../icons/close-icon"

export interface SearchInputProps
	extends React.ComponentPropsWithoutRef<"input"> {
	label: string
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
			onReset,
			...props
		}: SearchInputProps,
		ref
	) {
		const id = useId(customIdFromProps)
		return (
			<div className={classNames(className, searchInputContainerStyle)}>
				<SearchIcon className={searchInputIconStyle} />
				<button
					title="Reset"
					onClick={onReset}
					className={searchInputResetButtonStyle}
				>
					<CloseIcon />
				</button>
				<input
					type="search"
					className={searchInputBoxStyle}
					id={id}
					{...props}
					ref={ref}
				/>
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
