import classNames from 'classnames';
import React from 'react';
import { cardDividerStyle } from './card-divider.css';

export type CardDividerProps = React.ComponentPropsWithoutRef<'hr'>;

export function CardDivider({ className, ...props }: CardDividerProps) {
	return <hr className={classNames(className, cardDividerStyle)} {...props} />;
}
