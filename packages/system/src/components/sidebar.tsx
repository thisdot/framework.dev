import React from "react"
import { Logo } from "./logo"
import {
	sidebarStyle,
	sidebarContentsStyle,
	sidebarHeaderStyle,
	sidebarBodyStyle,
	sidebarSponsorIconContainerStyle,
} from "./sidebar.css"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { GithubIcon } from "../icons/github-icon"
import { SponsorIcon } from "../icons/sponsor-icon"

export type SidebarProps = React.ComponentPropsWithoutRef<"nav"> & {
	siteName: string
}

export function Sidebar({
	children,
	className,
	siteName,
	...props
}: SidebarProps) {
	return (
		<nav className={sidebarStyle} {...props}>
			<div className={sidebarContentsStyle}>
				<header className={sidebarHeaderStyle}>
					<a href="/">
						<Logo siteName={siteName} />
					</a>
				</header>
				<div className={sidebarBodyStyle}>{children}</div>
				<footer
					className={sprinkles({
						paddingY: 24,
						paddingX: 32,
						layout: "stack",
						gap: 32,
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
						target="_blank"
						rel="noreferrer noopener"
					>
						<GithubIcon size="large" />
						Submit a PR
					</a>
					<div className={sidebarSponsorIconContainerStyle}>
						<SponsorIcon size="full" />
					</div>
					<div>
						<a href="https://www.netlify.com">
							{" "}
							<img
								src="https://www.netlify.com/v3/img/components/netlify-light.svg"
								alt="Deploys by Netlify"
							/>{" "}
						</a>
					</div>
				</footer>
			</div>
		</nav>
	)
}
