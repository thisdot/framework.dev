import classNames from 'classnames'
import React from 'react'
import type * as Polymorphic from '@reach/polymorphic'
import { chipStyle } from './chip.css'

export type ChipProps = React.ComponentPropsWithoutRef<'button'>

export const Chip = React.forwardRef(function Button(
	{ as: Comp = 'button', className, children, type = 'button', ...props },
	ref,
): JSX.Element {
	return (
		<Comp
			ref={ref}
			className={classNames(className, chipStyle)}
			type={Comp === 'button' ? type : undefined}
			{...props}
		>
			{children}
		</Comp>
	)
}) as Polymorphic.ForwardRefComponent<'button'>
