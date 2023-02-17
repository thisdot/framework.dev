import classNames from 'classnames'
import React from 'react'
import { sprinkles } from '../../sprinkles/sprinkles.css'
import { Button } from '../button'
import { Contributor, ContributorData } from './contributor'
import {
	contributorBannerStyle,
	buttonStyles,
	contributorsContainerStyle,
	contributorElementStyle,
} from './contributor-banner.css'

export interface ContributorBannerProps
	extends React.ComponentPropsWithoutRef<'div'> {
	contributors: ContributorData[]
}

export function ContributorBanner({
	children,
	className,
	contributors,
	...props
}: ContributorBannerProps) {
	return (
		<div className={classNames(className, contributorBannerStyle)} {...props}>
			<div>
				<h1
					className={sprinkles({
						textStyle: 'h100',
						marginBottom: 8,
					})}
				>
					Build better. Together.
				</h1>
				<p className={sprinkles({ textStyle: 'bodyLong2' })}>
					Know a resource that should be included? Spotted a typo or mistake?
					We&apos;d love to have your contributions! Please send us a pull
					request and get added to our growing collection of contributors.
				</p>
				<Button
					className={classNames(className, buttonStyles)}
					color="primary"
					as="a"
					href="https://github.com/thisdot/framework.dev"
				>
					Contribute
				</Button>
			</div>
			<div className={contributorsContainerStyle}>
				{contributors.map((contributor) => (
					<Contributor
						key={contributor.login}
						contributor={contributor}
						className={contributorElementStyle}
					/>
				))}
			</div>
		</div>
	)
}
