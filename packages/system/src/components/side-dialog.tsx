import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import {
	dialogContentStyle,
	DialogContentVariants,
	dialogOverlayStyle,
} from './side-dialog.css'
import assertNever from 'assert-never'

type MenuState = 'closed' | 'closing' | 'opening' | 'open'
type AnimationState = 'open' | 'closed'

export interface SideDialogProps extends React.ComponentPropsWithoutRef<'div'> {
	isOpen?: boolean
	onDismiss: () => void
	position: NonNullable<DialogContentVariants['position']>
	zIndex?: number
}

export function SideDialog({
	children,
	className,
	isOpen = false,
	onDismiss,
	position,
	zIndex,
	...props
}: SideDialogProps) {
	const menuState = useMenuState(isOpen)
	return (
		<DialogOverlay
			style={{ zIndex }}
			className={dialogOverlayStyle({
				state: menuStateToAnimationState(menuState),
			})}
			isOpen={menuState !== 'closed'}
			onDismiss={onDismiss}
		>
			<DialogContent
				className={classNames(
					className,
					dialogContentStyle({
						state: menuStateToAnimationState(menuState),
						position,
					})
				)}
				{...props}
			>
				{children}
			</DialogContent>
		</DialogOverlay>
	)
}

function useMenuState(isOpen: boolean): MenuState {
	const [menuState, setMenuState] = useState<MenuState>(
		isOpen ? 'open' : 'closed'
	)
	useEffect(() => {
		if (isOpen) {
			switch (menuState) {
				case 'closed':
				case 'closing':
					setMenuState('opening')
					return
				case 'opening':
					requestAnimationFrame(() => setMenuState('open'))
					return
				case 'open':
					return
				default:
					assertNever(menuState)
			}
		} else {
			switch (menuState) {
				case 'open':
				case 'opening':
					setMenuState('closing')
					return
				case 'closing':
					const timeout = setTimeout(() => setMenuState('closed'), 200)
					return () => clearTimeout(timeout)
				case 'closed':
					return
				default:
					assertNever(menuState)
			}
		}
	}, [isOpen, menuState])
	return menuState
}

function menuStateToAnimationState(menuState: MenuState): AnimationState {
	switch (menuState) {
		case 'open':
			return 'open'
		case 'closed':
		case 'opening':
		case 'closing':
			return 'closed'
		default:
			assertNever(menuState)
	}
}
