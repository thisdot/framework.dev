import classNames from "classnames"
import React, { useState, useEffect } from "react"
import fetch from "node-fetch"
import {data} from "../../../../site/src/pages/index.astro"
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
import { ResourcesInfoBanner } from "../landing/resources-info-banner"
import { LinkCardProps } from "../landing/link-card"
import { LogoIcon } from "../../icons/logo-icon"
import { method } from "lodash"

export interface HomepageProps extends React.ComponentPropsWithoutRef<"div"> {
	librariesTitle: string
	libraries: Library<string>[]
	libraryTags: string[]
	podcasts: Podcast<string>[]
	courses: Course<string>[]
	blogs: Blog<string>[]
	books: Book<string>[]
	tools: Tool<string>[]
	communities: Community<string>[]
	siteName: string
	resourceCards: LinkCardProps[]
}
const contributors = [];
function display_components(props){
	for(let i=0;i<props.length;i++)
	{
		contributors.push(props[i].avatar_url);
	}
}
export function Homepage({
	className,
	librariesTitle,
	libraries,
	libraryTags,
	podcasts,
	courses,
	blogs,
	books,
	tools,
	communities,
	siteName,
	resourceCards,
	...props
}: HomepageProps) {
	resourceCards.unshift({
		title: "Framework.dev",
		href: "https://framework.dev/",
		RawIcon(props) {
			return <LogoIcon {...props} />
		},
		backgroundColor: "#F6FDFF",
		color: "#2E3132",
	})
	return (
		<div>
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
						title={librariesTitle}
					/>
					<Podcasts podcasts={podcasts} />
					<div className={homepageTwoAndOneSectionStyle}>
						<Courses courses={courses} />
						<Blogs blogs={blogs} />
					</div>
					<ContributorBanner
						// contributorImages={[
						// 	"https://github.com/jbachhardie.png",
						// 	"https://github.com/tvanantwerp.png",
						// 	"https://github.com/markshenouda.png",
						// ]}
						contributors
					></ContributorBanner>
					<div className={homepageTwoAndOneSectionStyle}>
						<Books books={books} />
						<LatestTools tools={tools} />
					</div>
					<Communities communities={communities} />

					<ResourcesInfoBanner
						title="Other Frameworks"
						description="Explore some of the top resources added by a community to learn or be up to date with your framework"
						resourceCards={resourceCards}
						className={sprinkles({
							borderRadius: 40,
						})}
					/>
				</div>
			</div>
		</div>
	)
}
