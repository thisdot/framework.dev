import classNames from "classnames"
import React from "react"
import { heroStyle, heroHeadingStyle, heroParagraphStyle } from "./hero.css"

export interface HeroProps extends React.ComponentPropsWithoutRef<"div"> {}

export function Hero({ className, ...props }: HeroProps) {
	return (
		<div className={classNames(className, heroStyle)} {...props}>
			<h1 className={heroHeadingStyle}>React Resources</h1>
			<p className={heroParagraphStyle}>
				Below you&apos;ll find some of the top resources to learn or stay in the
				loop with React.
			</p>
		</div>
	)
}
