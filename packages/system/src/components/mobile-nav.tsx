import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import {
	burgerIconStyle,
	dialogContentStyle,
	dialogOverlayStyle,
	menuButtonStyle,
	menuCloseButtonStyle,
	mobileNavStyle,
} from "./mobile-nav.css"
import { Sidebar } from "./sidebar"
import { Logo } from "./logo"

type MenuState = "opening" | "open" | "closed"

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
	useEffect(() => {
		if (menuState === "opening") setImmediate(() => setMenuState("open"))
	}, [menuState])
	return (
		<nav className={classNames(className, mobileNavStyle)} {...props}>
			<Logo />
			<button
				className={menuButtonStyle}
				type="button"
				id={menuButtonId}
				onClick={() =>
					setMenuState((state) => (state === "closed" ? "opening" : state))
				}
			>
				Menu
				<BurgerIcon className={burgerIconStyle} />
			</button>
			<DialogOverlay
				className={dialogOverlayStyle}
				isOpen={menuState !== "closed"}
				onDismiss={() => setMenuState("closed")}
			>
				<DialogContent
					className={dialogContentStyle({ state: menuState })}
					aria-labelledby={menuButtonId}
				>
					<button
						type="button"
						aria-label="Close"
						className={menuCloseButtonStyle}
						onClick={() => setMenuState("closed")}
					>
						<svg
							aria-hidden="true"
							role="img"
							viewBox="0 0 24 24"
							width="20"
							height="20"
						>
							<path
								d="M11.585 18.01L5.575 12l6.01-6.01L13 7.404l-4.6 4.6l4.6 4.6l-1.414 1.406h-.001zm5.425 0L10.999 12l6.011-6.01l1.414 1.414l-4.6 4.6l4.6 4.6l-1.413 1.406h-.001z"
								fill="currentColor"
							/>
						</svg>
					</button>
					<Sidebar>{children}</Sidebar>
				</DialogContent>
			</DialogOverlay>
		</nav>
	)
}

function BurgerIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg viewBox="0 0 100 80" {...props}>
			<rect width="100" height="13"></rect>
			<rect y="30" width="100" height="13"></rect>
			<rect y="60" width="100" height="13"></rect>
		</svg>
	)
}
