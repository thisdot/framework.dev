import classnames from "classnames"
import React from "react"
import { logoAccentStyle, logoStyle, logoTitleStyle } from "./logo.css"

export type LogoProps = React.ComponentPropsWithoutRef<"div">

export function Logo({ className }: LogoProps) {
	return (
		<div className={classnames(className, logoStyle)}>
			<span className={logoTitleStyle}>Framework</span>
			<span className={logoAccentStyle}>dev</span>
		</div>
	)
}
