import classNames from "classnames"
import React from "react"
import { buttonStyle } from "./button.css"

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({
	children,
	className,
	type = "button",
	...props
}: ButtonProps) {
	return (
		<button
			type={type}
			className={classNames(className, buttonStyle)}
			{...props}
		>
			{children}
		</button>
	)
}
