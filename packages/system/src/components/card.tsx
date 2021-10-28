import classNames from "classnames"
import React from "react"

import { cardStyle } from "./card.css"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
	return (
		<div className={classNames(className, cardStyle)} {...props}>
			{children}
		</div>
	)
}
