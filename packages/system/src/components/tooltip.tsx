import {
	TooltipParams,
	TooltipPopup,
	TooltipPopupProps,
	useTooltip,
} from '@reach/tooltip'
import { Portal } from '@reach/portal'
import classNames from 'classnames'
import React, { CSSProperties } from 'react'
import { tooltipStyle, tooltipTriangleStyle } from './tooltip.css'
import { Position } from '@reach/popover'

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps
	extends Omit<TooltipPopupProps, keyof TooltipParams | 'position'> {
	children: React.ReactElement
	position?: TooltipPosition
	className?: string
}

export function Tooltip({
	children,
	className,
	position = 'top',
	...props
}: TooltipProps) {
	// get the props from useTooltip
	const [trigger, tooltip] = useTooltip()

	// destructure off what we need to position the triangle
	const { isVisible, triggerRect } = tooltip

	return (
		<React.Fragment>
			{React.cloneElement(children, trigger)}

			{isVisible && (
				<Portal>
					<Triangle
						className={tooltipTriangleStyle}
						style={trianglePosition(position)(triggerRect)}
					/>
				</Portal>
			)}
			<TooltipPopup
				{...tooltip}
				{...props}
				className={classNames(className, tooltipStyle)}
				position={tooltipPosition(position)}
			/>
		</React.Fragment>
	)
}

const Triangle = (props: React.ComponentPropsWithoutRef<'svg'>) => (
	<svg width="20" height="8" viewBox="0 0 20 8" fill="currentColor" {...props}>
		<path d="M10 0C13 0 15.9999 8 20 8H0C3.9749 8 7 0 10 0Z" />
	</svg>
)

const center = (
	triggerPos: number,
	triggerSpan: number,
	tooltipSpan: number,
	docSpan: number
) =>
	Math.min(
		Math.max(2, triggerPos + triggerSpan / 2 - tooltipSpan / 2),
		docSpan - tooltipSpan - 2
	)

const tooltipPosition =
	(orientation: TooltipPosition): Position =>
	(triggerRect, tooltipRect) => {
		if (!triggerRect || !tooltipRect) return { left: 0, top: 0 }
		switch (orientation) {
			case 'bottom':
				return {
					left:
						center(
							triggerRect.left,
							triggerRect.width,
							tooltipRect.width,
							window.innerWidth
						) + window.scrollX,
					top: triggerRect.bottom + 8 + window.scrollY,
				}
			case 'top':
				return {
					left:
						center(
							triggerRect.left,
							triggerRect.width,
							tooltipRect.width,
							window.innerWidth
						) + window.scrollX,
					bottom: window.innerHeight - triggerRect.top + 8 - window.scrollY,
				}
			case 'right':
				return {
					top:
						center(
							triggerRect.top,
							triggerRect.height,
							tooltipRect.height,
							window.innerHeight
						) + window.scrollY,
					left: triggerRect.right + 8 + window.scrollX,
				}
			case 'left':
				return {
					top:
						center(
							triggerRect.top,
							triggerRect.height,
							tooltipRect.height,
							window.innerHeight
						) + window.scrollY,
					right: window.innerWidth - triggerRect.left + 8 - window.scrollX,
				}
		}
	}

const trianglePosition =
	(orientation: TooltipPosition) =>
	(triggerRect: DOMRect | null): CSSProperties => {
		if (!triggerRect) return {}
		switch (orientation) {
			case 'bottom':
				return {
					left: triggerRect.left - 10 + triggerRect.width / 2,
					top: triggerRect.bottom + window.scrollY,
				}
			case 'top':
				return {
					left: triggerRect.left - 10 + triggerRect.width / 2,
					bottom: window.innerHeight - triggerRect.top + window.scrollY,
					transform: 'rotate(180deg)',
				}
			case 'right':
				return {
					top: triggerRect.top - 10 + triggerRect.height / 2,
					left: triggerRect.right + window.scrollX,
					transform: 'rotate(270deg)',
					transformOrigin: 'bottom',
				}
			case 'left':
				return {
					top: triggerRect.top - 10 + triggerRect.height / 2,
					right: window.innerWidth - triggerRect.left + window.scrollX,
					transform: 'rotate(90deg)',
					transformOrigin: 'bottom',
				}
		}
	}
