import classNames from 'classnames';
import React from 'react';
import { Logo } from '../logo';
import { LinkCardGroup } from './link-card-group';
import { type LinkCardProps } from './link-card';
import {
	heroStyle,
	heroInnerStyle,
	heroHeaderStyle,
	heroBodyStyle,
	heroTitleStyle,
	heroSoftTitleStyle,
	heroSubtitleStyle,
	linkCardGroupStyle,
	heroIconTyle,
} from './hero.css';

export interface HeroProps extends React.ComponentPropsWithoutRef<'header'> {
	heroText: {
		highlightedTitle?: string;
		icon?: JSX.Element;
		softTitle?: string;
		subtitle?: string;
	};
	linkCards?: LinkCardProps[];
}

export function Hero({ className, heroText, linkCards, ...props }: HeroProps) {
	return (
		<header className={classNames(className, heroStyle)} {...props}>
			<div className={heroInnerStyle}>
				<div className={heroHeaderStyle}>
					<Logo />
				</div>
				<div className={heroBodyStyle}>
					{(heroText.highlightedTitle || heroText.softTitle) && (
						<h1 className={heroTitleStyle}>
							{heroText.highlightedTitle}

							{heroText.icon && (
								<span className={heroIconTyle}>{heroText.icon}</span>
							)}

							{heroText.softTitle && (
								<span className={heroSoftTitleStyle}>
									{' '}
									{heroText.softTitle}
								</span>
							)}
						</h1>
					)}
					{heroText.subtitle && (
						<p className={heroSubtitleStyle}>{heroText.subtitle}</p>
					)}
				</div>
				{linkCards && (
					<LinkCardGroup cards={linkCards} className={linkCardGroupStyle} />
				)}
			</div>
		</header>
	);
}
