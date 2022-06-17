import classNames from "classnames"
import React from "react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { skeletonAnimated, skeletonVariants } from "./skeleton.css"

type VariantOptions = "circle" | "text"

export interface SkeletonProps extends React.ComponentPropsWithoutRef<"div"> {
	variant: VariantOptions
	height?: number
	width?: number
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
			className={classNames(
				skeletonAnimated,
				skeletonVariants[variant],
				sprinkles({
					height: "auto",
					width: "auto",
				})
			)}
			style={
				{
					"--skeleton-height": height,
					"--skeleton-width": width,
				} as React.CSSProperties
			}
			{...props}
		></div>
	)
}
