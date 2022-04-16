import classNames from "classnames"
import React from "react"
import {
	homepageContentContainerStyle,
	homepageGutterStyle,
	homepageStyle,
	homepageTwoAndOneSectionStyle,
} from "./homepage.css"
import { Search } from "./search"
import { Hero } from "./hero"
import { FeaturedLibraries } from "./featured-libraries"
import { Podcasts } from "./podcasts"
import { Courses } from "./courses"
import { Blogs } from "./blogs"
import { ContributorBanner } from "./contributor-banner"
import { Books } from "./books"
import { LatestTools } from "./latest-tools"
import { Communities } from "./communities"
import { Library } from "../../models/library"
import { Podcast } from "../../models/podcast"
import { Course } from "../../models/course"
import { Blog } from "../../models/blog"
import { Book } from "../../models/book"
import { Tool } from "../../models/tool"
import { Community } from "../../models/community"
import { sprinkles } from "../../sprinkles/sprinkles.css"

export interface HomepageProps extends React.ComponentPropsWithoutRef<"div"> {
	libraries: Library<string>[]
	libraryTags: string[]
	podcasts: Podcast<string>[]
	courses: Course<string>[]
	blogs: Blog<string>[]
	books: Book<string>[]
	tools: Tool<string>[]
	communities: Community<string>[]
	siteName: string
}

export function Homepage({
	className,
	libraries,
	libraryTags,
	podcasts,
	courses,
	blogs,
	books,
	tools,
	communities,
	siteName,
	...props
}: HomepageProps) {
	return (
		<div className={classNames(className, homepageStyle)} {...props}>
			<div
				className={classNames(
					homepageGutterStyle,
					sprinkles({
						paddingBottom: { mobile: 24, desktop: 16 },
						paddingTop: { mobile: 0, desktop: 16 },
					})
				)}
			>
				<Search />
			</div>
			<div className={sprinkles({ backgroundColor: "surface5" })}>
				<Hero siteName={siteName} className={homepageGutterStyle} />
			</div>
			<div
				className={classNames(
					homepageContentContainerStyle,
					homepageGutterStyle
				)}
			>
				<FeaturedLibraries
					libraries={libraries}
					libraryTags={libraryTags}
					siteName={siteName}
				/>
				<Podcasts podcasts={podcasts} />
				<div className={homepageTwoAndOneSectionStyle}>
					<Courses courses={courses} />
					<Blogs blogs={blogs} />
				</div>
				<ContributorBanner
					contributorImages={[
						"https://github.com/jbachhardie.png",
						"https://github.com/tvanantwerp.png",
						"https://github.com/markshenouda.png",
					]}
				></ContributorBanner>
				<div className={homepageTwoAndOneSectionStyle}>
					<Books books={books} />
					<LatestTools tools={tools} />
				</div>
				<Communities communities={communities} />
			</div>
		</div>
	)
}
