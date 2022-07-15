import classNames from 'classnames'
import React from 'react'
import { sampleSize } from 'lodash'
import { Community } from '../../models/community'
import { communitiesStyle } from './communities.css'
import { ContentBanner } from './content-banner'

export interface CommunitiesProps
	extends React.ComponentPropsWithoutRef<'div'> {
	communities: Community<string>[]
}

export function Communities({
	className,
	communities,
	...props
}: CommunitiesProps) {
	const randomCommunities = sampleSize(communities, 4)
	return (
		<ContentBanner
			className={classNames(className, communitiesStyle)}
			title="Connect with the React Community"
			viewAll={{
				title: 'View all communities',
				href: '/categories/communities',
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
