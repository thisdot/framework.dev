import classNames from "classnames"
import React from "react"
import { counterStyle } from "./counter.css"

export interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
	size?: Parameters<typeof counterStyle>[0]["size"]
}

export function Counter({ children, className, size, ...props }: CounterProps) {
	return (
		<span className={classNames(className, counterStyle({ size }))} {...props}>
			{children}
		</span>
	)
}
