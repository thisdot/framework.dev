import classNames from 'classnames';
import React from 'react';
import { contributorImageStyle } from './contributor.css';

export interface ContributorData {
	login: string;
	url: string;
	avatarUrl: string;
}

export interface ContributorProps extends React.ComponentPropsWithoutRef<'a'> {
	contributor: ContributorData;
}

export const Contributor = ({
	className,
	contributor: { avatarUrl, login, url },
	...props
}: ContributorProps) => (
	<a {...props} href={url} target="_blank" rel="noreferrer">
		<img
			className={classNames(className, contributorImageStyle)}
			src={avatarUrl}
			key={avatarUrl}
			alt={login}
		/>
	</a>
);
