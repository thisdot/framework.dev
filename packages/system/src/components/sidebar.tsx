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
		<nav className={sidebarStyle} {...props}>
			<header className={sidebarHeaderStyle}>
				<a href="/">
					<Logo />
				</a>
			</header>
			<div className={sidebarBodyStyle}>{children}</div>
		</nav>
	)
}
