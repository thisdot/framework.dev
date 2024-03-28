import classNames from 'classnames';
import React from 'react';
import { bookDecoratorStyle } from './book-decorator.css';

export type BookDecoratorProps = React.ComponentPropsWithoutRef<'div'>;

export function BookDecorator({ children, className }: BookDecoratorProps) {
	return (
		<div className={classNames(className, bookDecoratorStyle)}>{children}</div>
	);
}
