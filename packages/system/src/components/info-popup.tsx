import classNames from 'classnames'
import React from 'react'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import {
	infoPopupArrowStyle,
	infoPopupContentStyle,
	infoPopupOverlayStyle,
} from './info-popup.css'
import useMeasure from '../util/use-measure'

export interface InfoPopupProps extends React.ComponentPropsWithoutRef<'div'> {
	isOpen?: boolean
	onDismiss: () => void
	targetRef: React.RefObject<HTMLElement>
}

const blankDOMRect = {
	width: 0,
	height: 0,
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	x: 0,
	y: 0,
	toJSON: () => '{}',
}

export function InfoPopup({
	children,
	className,
	isOpen = false,
	onDismiss,
	targetRef,
	...props
}: InfoPopupProps) {
	const [contentRef, contentBounds] = useMeasure<HTMLDivElement>({
		box: 'border-box',
	})
	const targetBounds =
		targetRef.current?.getBoundingClientRect() ?? blankDOMRect
	const contentPosition = calculateContentPosition(targetBounds, contentBounds)
	const arrowOrientation =
		contentPosition.top > targetBounds.top ? 'up' : 'down'
	return (
		<DialogOverlay
			className={infoPopupOverlayStyle}
			isOpen={isOpen}
			onDismiss={onDismiss}
		>
			<DialogContent
				ref={contentRef}
				style={contentPosition}
				className={classNames(className, infoPopupContentStyle)}
				aria-label="Additional information"
				{...props}
			>
				{children}
				<div
					className={infoPopupArrowStyle({ orientation: arrowOrientation })}
					style={{
						left:
							targetBounds.left -
							contentPosition.left +
							targetBounds.width / 2 -
							10,
					}}
				/>
			</DialogContent>
		</DialogOverlay>
	)
}

function calculateContentPosition(
	targetBounds: DOMRect,
	contentBounds: ResizeObserverSize,
): { top: number; left: number } {
	if (typeof document === 'undefined') return { top: 0, left: 0 }
	const position = {
		top: targetBounds.top - contentBounds.blockSize - 8,
		left: targetBounds.left,
	}
	const wouldOverflowTop = position.top < 0
	const wouldOverflowLeft = position.left < 0
	const wouldOverflowRight =
		position.left + contentBounds.inlineSize >
		document.documentElement.clientWidth

	if (wouldOverflowTop) {
		position.top = targetBounds.top + targetBounds.height + 8
	}
	if (wouldOverflowLeft) {
		position.left = 0
	}
	if (wouldOverflowRight) {
		position.left =
			position.left -
			(position.left +
				contentBounds.inlineSize -
				document.documentElement.clientWidth)
	}
	return position
}
