import classNames from 'classnames'
import React from 'react'
import { CloseIcon } from '../icons/close-icon'
import { LibraryCardIcon } from '../icons/library-card-icon'
import { WavyArrowIcon } from '../icons/wavy-arrow-icon'
import {
	bannerTooltipStyle,
	bannerTooltipHeadingStyle,
	bannerTooltipHeadingSoftStyle,
	bannerTooltipIconStyle,
	bannerTooltipCardIcon,
	bannerTooltipExplanatoryText,
	bannerTooltipCloseIcon,
	bannerTooltipWavyArrowIcon,
} from './banner-tooltip.css'

export interface BannerTooltipProps
	extends React.ComponentPropsWithoutRef<'div'> {
	pitchText: {
		highlightedText: string
		softText: string
	}
	explanatoryText: string
	onClick: () => void
}

export function BannerTooltip({
	children,
	className,
	pitchText,
	explanatoryText,
	onClick,
	...props
}: BannerTooltipProps) {
	return (
		<div className={classNames(className, bannerTooltipStyle)} {...props}>
			<h3 className={bannerTooltipHeadingStyle}>
				{pitchText.highlightedText}{' '}
				<span className={bannerTooltipHeadingSoftStyle}>
					{pitchText.softText}
				</span>
			</h3>

			<div className={bannerTooltipIconStyle}>
				<p className={bannerTooltipExplanatoryText}>{explanatoryText}</p>

				<WavyArrowIcon size="full" className={bannerTooltipWavyArrowIcon} />

				<LibraryCardIcon size="full" className={bannerTooltipCardIcon} />
			</div>

			<button className={bannerTooltipCloseIcon} onClick={onClick}>
				<CloseIcon size="large" />
			</button>
		</div>
	)
}
