import classNames from 'classnames';
import React from 'react';
import { pxToRem } from '../util/style-utils';
import { skeletonAnimated, skeletonVariants } from './skeleton.css';

type VariantOptions = 'circle' | 'text';

export interface SkeletonProps extends React.ComponentPropsWithoutRef<'div'> {
	variant: VariantOptions;
	height?: number;
	width?: number;
}

export function Skeleton({
	children,
	className,
	variant,
	height,
	width,
	...props
}: SkeletonProps) {
	return (
		<div
			className={classNames(skeletonAnimated, skeletonVariants[variant])}
			style={
				{
					'--skeleton-height': height ? pxToRem(height) : '100%',
					'--skeleton-width': width ? pxToRem(width) : '100%',
				} as React.CSSProperties
			}
			{...props}
		></div>
	);
}
