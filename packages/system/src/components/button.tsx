import classNames from "classnames"
import React from "react"
import { buttonStyle } from "./button.css"

export type ButtonProps<T extends "a" | "button"> =
	React.ComponentPropsWithoutRef<T> & {
		size?: Parameters<typeof buttonStyle>[0]["size"]
		color?: Parameters<typeof buttonStyle>[0]["color"]
		as: T
	}

export function Button(
	props: ButtonProps<"a"> | ButtonProps<"button">
): JSX.Element {
	switch (props.as) {
		case "a": {
			const { className, size, color, children } = props
			return (
				<a
					className={classNames(className, buttonStyle({ size, color }))}
					{...props}
				>
					{children}
				</a>
			)
		}
		case "button": {
			const { className, size, color, children, type = "button" } = props
			return (
				<button
					type={type}
					className={classNames(className, buttonStyle({ size, color }))}
					{...props}
				>
					{children}
				</button>
			)
		}
	}
}
