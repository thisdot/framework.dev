import classNames from "classnames"
import React, { useState } from "react"
import {
	menuButtonStyle,
	mobileNavDialogStyle,
	mobileNavStyle,
} from "./mobile-nav.css"
import { SideDialog } from "./side-dialog"
import { SearchIcon } from "../icons/search-icon"
import { HomeIcon } from "../icons/home-icon"
import { BurgerIcon } from "../icons/burger-icon"
import { CloseBurgerIcon } from "../icons/close-burger-icon"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { GithubIcon } from "../icons/github-icon"

type MenuState = "open" | "closed"

export type MobileNavProps = React.ComponentProps<"nav"> & {
	initialMenuState?: MenuState
}

const menuButtonId = "burger-menu-button"

export function MobileNav({
	className,
	initialMenuState = "closed",
	children,
	...props
}: MobileNavProps) {
	const [menuState, setMenuState] = useState(initialMenuState)
	return (
		<nav className={classNames(className, mobileNavStyle)} {...props}>
			{menuState === "closed" ? (
				<>
					<button
						type="button"
						aria-label="Search"
						onClick={() =>
							(
								document.querySelector(
									'input[type="search"]'
								) as HTMLInputElement | null
							)?.focus()
						}
						className={sprinkles({ layout: "row" })}
					>
						<SearchIcon size="large" />
					</button>
					<button
						className={menuButtonStyle}
						type="button"
						id={menuButtonId}
						onClick={() => setMenuState("open")}
					>
						<BurgerIcon size="large" />
						Categories
					</button>
					<a
						aria-label="Home"
						href="/"
						className={sprinkles({ layout: "row" })}
					>
						<HomeIcon size="large" />
					</a>
				</>
			) : (
				<>
					<div />
					<button
						className={menuButtonStyle}
						type="button"
						id={menuButtonId}
						onClick={() => setMenuState("closed")}
					>
						<CloseBurgerIcon size="large" />
						Close
					</button>
					<div />
				</>
			)}
			<SideDialog
				position="bottom"
				isOpen={menuState !== "closed"}
				onDismiss={() => setMenuState("closed")}
				aria-labelledby={menuButtonId}
				className={mobileNavDialogStyle}
				zIndex={3}
			>
				<div
					className={sprinkles({
						borderBottom: "thin",
						paddingY: 24,
						paddingX: 32,
						layout: "stack",
						gap: 14,
					})}
				>
					<p
						className={sprinkles({
							textStyle: "bodyShort3",
							color: "softText",
						})}
					>
						© 2021 This Dot, Inc.
					</p>
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
				</div>
				<div className={sprinkles({ padding: 16 })}>{children}</div> 
			</SideDialog>
		</nav>
	)
}
