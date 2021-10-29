import classNames from "classnames"
import React from "react"
import { counterStyle } from "./counter.css"

export interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Counter({ children, className, ...props }: CounterProps) {
	return (
		<span className={classNames(className, counterStyle)} {...props}>
			{children}
		</span>
	)
}
