import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import { dialogContentStyle, dialogOverlayStyle } from "./side-dialog.css"

export interface SideDialogProps extends React.ComponentPropsWithoutRef<"div"> {
	isOpen?: boolean
	onDismiss: () => void
	position: Parameters<typeof dialogContentStyle>[0]["position"]
}

export function SideDialog({
	children,
	className,
	isOpen,
	onDismiss,
	position,
	...props
}: SideDialogProps) {
	const [menuState, setMenuState] = useState<"closed" | "opening" | "open">(
		isOpen ? "open" : "closed"
	)
	useEffect(() => {
		if (isOpen) {
			if (menuState === "closed") {
				setMenuState("opening")
			}
			if (menuState === "opening") {
				requestAnimationFrame(() => setMenuState("open"))
			}
		} else {
			if (menuState !== "closed") setMenuState("closed")
		}
	}, [isOpen, menuState])
	return (
		<DialogOverlay
			className={dialogOverlayStyle}
			isOpen={menuState !== "closed"}
			onDismiss={onDismiss}
		>
			<DialogContent
				className={classNames(
					className,
					dialogContentStyle({ state: menuState, position })
				)}
				{...props}
			>
				{children}
			</DialogContent>
		</DialogOverlay>
	)
}
