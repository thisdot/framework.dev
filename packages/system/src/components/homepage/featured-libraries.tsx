import classNames from "classnames"
import React from "react"
import {
	featuredLibrariesStyle,
	featuredLibrariesHeadingStyle,
	featuredLibrariesListStyle,
	featuredLibrariesViewAllStyle,
} from "./featured-libraries.css"
import { Library } from "../../models/library"
import { LibraryCard } from "../cards/library-card"
import { getRandomNumberArray } from "./utils"

export interface FeaturedLibrariesProps
	extends React.ComponentPropsWithoutRef<"div"> {
	libraries: Library<string>[]
	libraryTags: string[]
}

export function FeaturedLibraries({
	children,
	className,
	libraries,
	libraryTags,
	...props
}: FeaturedLibrariesProps) {
	const indices = getRandomNumberArray(6, libraries.length)
	const randomLibraries = indices.map((i) => libraries[i])
	return (
		<div className={classNames(className, featuredLibrariesStyle)} {...props}>
			<h2 className={featuredLibrariesHeadingStyle}>
				Featured React Libraries
			</h2>
			<div className={featuredLibrariesListStyle}>
				{randomLibraries.map((library, i) => (
					<LibraryCard
						key={`featured-library-${i}`}
						library={library}
						headingTag="h3"
						onTagClick={() => {
							return null
						}}
					/>
				))}
			</div>
			<a href="/categories/libraries" className={featuredLibrariesViewAllStyle}>
				View all libraries
			</a>
		</div>
	)
}
