import classNames from 'classnames'
import React from 'react'
import { cardDividerStyle } from './card-divider.css'

export interface CardDividerProps
	extends React.ComponentPropsWithoutRef<'hr'> {}

export function CardDivider({ className, ...props }: CardDividerProps) {
	return <hr className={classNames(className, cardDividerStyle)} {...props} />
}
