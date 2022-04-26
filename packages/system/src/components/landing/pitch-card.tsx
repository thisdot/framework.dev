import classNames from "classnames"
import React from "react"
import {
	pitchCardHeadingSoftStyle,
	pitchCardHeadingStyle,
	pitchCardImage,
	pitchCardStyle,
} from "./pitch-card.css"

export interface PitchCardProps extends React.ComponentPropsWithoutRef<"div"> {
	pitchText: {
		highlightedText: string
		softText: string
	}
	image?: string
}

export function PitchCard({
	children,
	className,
	pitchText,
	image,
	...props
}: PitchCardProps) {
	return (
		<div className={classNames(className, pitchCardStyle)} {...props}>
			<h2 className={pitchCardHeadingStyle}>
				{pitchText.highlightedText}{" "}
				<span className={pitchCardHeadingSoftStyle}>{pitchText.softText}</span>
			</h2>
			
			<div className={pitchCardImage}>
				<img src={image} alt={pitchText.highlightedText} />
			</div>
		</div>
	)
}
