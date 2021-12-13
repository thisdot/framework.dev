import classNames from "classnames"
import React from "react"
import { homepageStyle } from "./homepage.css"
import { Hero } from "./hero"
import { FeaturedLibraries } from "./featured-libraries"
import { ComparisonBox } from "./comparison-box"
import { Podcasts } from "./podcasts"
import { Courses } from "./courses"
import { ContributorBanner } from "./contributor-banner"
import { Books } from "./books"
import { LatestTools } from "./latest-tools"
import { Communities } from "./communities"

export interface HomepageProps extends React.ComponentPropsWithoutRef<"div"> {}

export function Homepage({ children, className, ...props }: HomepageProps) {
	return (
		<div className={classNames(className, homepageStyle)} {...props}>
			<Hero />
			<FeaturedLibraries />
			<ComparisonBox />
			<Podcasts />
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
