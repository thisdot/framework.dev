import classNames from "classnames"
import React from "react"

import {
	searchStyle,
	searchBoxStyle,
	searchIconStyle,
	searchInputStyle,
	searchLabelStyle,
} from "./search.css"
import { SearchIcon } from "../../icons/search-icon"
import { visuallyHidden } from "../../styles/utilities.css"
import { Button } from "../button"

export interface SearchProps extends React.ComponentPropsWithoutRef<"input"> {}

export function Search({ className, onReset, ...props }: SearchProps) {
	return (
		<form
			className={classNames(className, searchStyle)}
			method="get"
			action={`/search`}
		>
			<div className={searchBoxStyle}>
				<SearchIcon className={searchIconStyle} />
				<input
					type="search"
					id="homepage-search"
					className={searchInputStyle}
					name="q"
					{...props}
				/>
			</div>
			<label
				htmlFor="homepage-search"
				className={classNames(searchLabelStyle, visuallyHidden)}
			>
				Search
			</label>
			<Button type="submit" color="tertiary" size="large">
				Search
			</Button>
		</form>
	)
}
