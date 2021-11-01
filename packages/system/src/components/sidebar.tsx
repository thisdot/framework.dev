import classNames from "classnames"
import React from "react"
import { Logo } from "./logo"
import {
	sidebarHeaderStyle,
	sidebarBodyStyle,
	sidebarStyle,
} from "./sidebar.css"

export type SidebarProps = React.ComponentPropsWithoutRef<"nav">

export function Sidebar({ children, className, ...props }: SidebarProps) {
	return (
		<nav className={classNames(className, sidebarStyle)} {...props}>
			<header className={sidebarHeaderStyle}>
				<Logo />
			</header>
			<div className={sidebarBodyStyle}>{children}</div>
		</nav>
	)
}
