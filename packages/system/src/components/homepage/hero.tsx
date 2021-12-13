import classNames from "classnames"
import React from "react"
import { heroStyle } from "./hero.css"

export interface HeroProps
	extends React.ComponentPropsWithoutRef<"div"> {}

export function Hero({ children, className, ...props }: HeroProps) {
	return (
		<div className={classNames(className, heroStyle)} {...props}>
			{children}
		</div>
	)
}