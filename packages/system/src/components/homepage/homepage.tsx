import classNames from "classnames"
import React from "react"
import { homepageStyle, homepageTwoAndOneSectionStyle } from "./homepage.css"
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

export interface HomepageProps extends React.ComponentPropsWithoutRef<"div"> {
	libraries: Library<string>[]
	libraryTags: string[]
	podcasts: Podcast<string>[]
	courses: Course<string>[]
	blogs: Blog<string>[]
	books: Book<string>[]
	tools: Tool<string>[]
	communities: Community<string>[]
}

export function Homepage({
	children,
	className,
	libraries,
	libraryTags,
	podcasts,
	courses,
	blogs,
	books,
	tools,
	communities,
	...props
}: HomepageProps) {
	return (
		<div className={classNames(className, homepageStyle)} {...props}>
			<Hero />
			<FeaturedLibraries libraries={libraries} libraryTags={libraryTags} />
			<Podcasts podcasts={podcasts} />
			<div className={homepageTwoAndOneSectionStyle}>
				<Courses courses={courses} />
				<Blogs blogs={blogs} />
			</div>
			<ContributorBanner
				contributorImages={[
					"https://github.com/jbachhardie.png",
					"https://github.com/tvanantwerp.png",
					"https://github.com/dustinsgoodman.png",
				]}
			></ContributorBanner>
			<Books books={books} />
			<LatestTools tools={tools} />
			<Communities communities={communities} />
		</div>
	)
}
