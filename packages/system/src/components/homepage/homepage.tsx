import classNames from "classnames"
import React from "react"
import { homepageStyle } from "./homepage.css"
import { Hero } from "./hero"
import { FeaturedLibraries } from "./featured-libraries"
import { Podcasts } from "./podcasts"
import { Courses } from "./courses"
import { ContributorBanner } from "./contributor-banner"
import { Books } from "./books"
import { LatestTools } from "./latest-tools"
import { Communities } from "./communities"
import { Library } from "../../models/library"
import { Podcast } from "../../models/podcast"

export interface HomepageProps extends React.ComponentPropsWithoutRef<"div"> {
	libraries: Library<string>[]
	libraryTags: string[]
	podcasts: Podcast<string>[]
}

export function Homepage({
	children,
	className,
	libraries,
	libraryTags,
	podcasts,
	...props
}: HomepageProps) {
	return (
		<div className={classNames(className, homepageStyle)} {...props}>
			<Hero />
			<FeaturedLibraries libraries={libraries} libraryTags={libraryTags} />
			<Podcasts podcasts={podcasts} />
			<Courses />
			<ContributorBanner
				contributorImages={[
					"https://github.com/jbachhardie.png",
					"https://github.com/tvanantwerp.png",
					"https://github.com/dustinsgoodman.png",
				]}
			></ContributorBanner>
			<Books />
			<LatestTools />
			<Communities />
		</div>
	)
}
