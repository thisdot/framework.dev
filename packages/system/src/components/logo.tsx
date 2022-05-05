import classnames from "classnames"
import React from "react"
import { FrameworkDevIcon } from "../icons/framework-dev-icon"
import {
	logoAccentStyle,
	logoStyle,
	logoTitleStyle,
	sigilStyle,
	wordmarkStyle,
} from "./logo.css"

export type LogoProps = React.ComponentPropsWithoutRef<"div"> & {
	siteName?: string
}

export function Logo({ className, siteName }: LogoProps) {
	return (
		<div className={classnames(className, logoStyle)}>
			<div className={sigilStyle}>
				<FrameworkDevIcon />
			</div>
			<div className={wordmarkStyle}>
				{siteName && <span className={logoTitleStyle}>{siteName}</span>}
				<span className={logoAccentStyle}>framework.dev</span>
			</div>
		</div>
	)
}
