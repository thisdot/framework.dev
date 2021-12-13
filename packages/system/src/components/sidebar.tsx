import React from "react"
import { Logo } from "./logo"
import {
	sidebarHeaderStyle,
	sidebarBodyStyle,
	sidebarStyle,
} from "./sidebar.css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { GithubIcon } from "../icons/github-icon"

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
			<footer
				className={sprinkles({
					borderBottom: "thin",
					paddingY: 24,
					paddingX: 32,
					layout: "stack",
					gap: 14,
				})}
			>
				<a
					className={sprinkles({
						textStyle: "bodyShort2",
						fontWeight: "bold",
						color: "softText",
						layout: "row",
						alignItems: "center",
						gap: 12,
					})}
					href="https://github.com/thisdot/framework.dev"
				>
					<GithubIcon size="large" />
					Submit a PR
				</a>
				<p
					className={sprinkles({
						textStyle: "bodyShort3",
						color: "softText",
					})}
				>
					© 2021 This Dot, Inc.
				</p>
			</footer>
		</nav>
	)
}
