import classNames from "classnames"
import React from "react"
import { buttonStyle } from "./button.css"

export type ButtonProps = {
	children?: React.ReactNode
	className?: string
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
}

export function Button({ children, className, type = "button" }: ButtonProps) {
	return (
		<button type={type} className={classNames(className, buttonStyle)}>
			{children}
		</button>
	)
}
