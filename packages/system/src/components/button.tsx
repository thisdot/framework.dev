import classNames from "classnames"
import React from "react"
import { buttonStyle } from "./button.css"
import type * as Polymorphic from "@reach/utils/polymorphic"

export type ButtonProps = {
	size?: Parameters<typeof buttonStyle>[0]["size"]
	color?: Parameters<typeof buttonStyle>[0]["color"]
}

export const Button = React.forwardRef(function Button(
	{
		as: Comp = "button",
		className,
		children,
		size,
		color,
		type = "button",
		...props
	},
	ref
): JSX.Element {
	return (
		<Comp
			ref={ref}
			className={classNames(className, buttonStyle({ size, color }))}
			type={Comp === "button" ? type : undefined}
			{...props}
		>
			{children}
		</Comp>
	)
}) as Polymorphic.ForwardRefComponent<"button", ButtonProps>
