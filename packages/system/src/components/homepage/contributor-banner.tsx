import classNames from "classnames"
import React from "react"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { Button } from "../button"
import {
	contributorBannerStyle,
	contributorImageStyle,
} from "./contributor-banner.css"

export interface ContributorBannerProps
	extends React.ComponentPropsWithoutRef<"div"> {
	contributorImages: string[]
}

export function ContributorBanner({
	children,
	className,
	contributorImages,
	...props
}: ContributorBannerProps) {
	return (
		<div className={classNames(className, contributorBannerStyle)} {...props}>
			<div>
				<h1
					className={sprinkles({
						textStyle: "h100",
						marginBottom: 8,
					})}
				>
					Build better. Together.
				</h1>
				<p className={sprinkles({ textStyle: "bodyLong2" })}>
					Create a PR if you see mistakes, room for improvement, or new
					opportunities to help the dev team.
				</p>
			</div>
			<div className={sprinkles({ layout: "row" })}>
				{contributorImages.map((image) => (
					<img
						className={contributorImageStyle}
						src={image}
						key={image}
						alt=""
					/>
				))}
			</div>
			<Button
				color="primary"
				size="large"
				as="a"
				href="https://github.com/thisdot/framework.dev"
			>
				Contribute
			</Button>
		</div>
	)
}
