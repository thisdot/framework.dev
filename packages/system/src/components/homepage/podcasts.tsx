import classNames from "classnames"
import React from "react"
import { podcastsStyle } from "./podcasts.css"

export interface PodcastsProps extends React.ComponentPropsWithoutRef<"div"> {}

export function Podcasts({ children, className, ...props }: PodcastsProps) {
	return (
		<div className={classNames(className, podcastsStyle)} {...props}>
			{children}
		</div>
	)
}
