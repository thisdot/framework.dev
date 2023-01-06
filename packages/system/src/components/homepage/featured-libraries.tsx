import classNames from "classnames"
import React from "react"
import sampleSize from "lodash/sampleSize"
import {
	featuredLibrariesStyle,
	featuredLibrariesHeadingStyle,
	featuredLibrariesListStyle,
	featuredLibrariesViewAllStyle,
} from "./featured-libraries.css"
import { Library } from "../../models/library"
import { LibraryCard } from "../cards/library-card"

export interface FeaturedLibrariesProps
	extends React.ComponentPropsWithoutRef<"div"> {
	title: string
	libraries: Library<string>[]
	libraryTags: string[]
}

export function FeaturedLibraries({
	children,
	className,
	title,
	libraries,
	libraryTags,
	...props
}: FeaturedLibrariesProps) {
	const randomLibraries = sampleSize(libraries, 6)
	return (
		<div className={classNames(className, featuredLibrariesStyle)} {...props}>
			<h2 className={featuredLibrariesHeadingStyle}>{title}</h2>
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
