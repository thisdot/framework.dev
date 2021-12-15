import classNames from "classnames"
import React from "react"
import { Community } from "../../models/community"
import { communitiesStyle } from "./communities.css"
import { ContentBanner } from "./content-banner"
import { getRandomNumberArray } from "./utils"

export interface CommunitiesProps
	extends React.ComponentPropsWithoutRef<"div"> {
	communities: Community<string>[]
}

export function Communities({
	className,
	communities,
	...props
}: CommunitiesProps) {
	const indices = getRandomNumberArray(4, communities.length)
	const randomCommunities = indices.map((i) => communities[i])
	return (
		<ContentBanner
			className={classNames(className, communitiesStyle)}
			title="Connect with the React Community"
			viewAll={{
				title: "View all communities",
				href: "/categories/communities",
			}}
			items={randomCommunities.map((community) => {
				return {
					title: community.name,
					metadata: community.type,
					image: community.image,
					href: community.href,
				}
			})}
			{...props}
		/>
	)
}
