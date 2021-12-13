import classNames from "classnames"
import React from "react"
import { comparisonBoxStyle } from "./comparison-box.css"

export interface ComparisonBoxProps
	extends React.ComponentPropsWithoutRef<"div"> {}

export function ComparisonBox({ children, className, ...props }: ComparisonBoxProps) {
	return (
		<div className={classNames(className, comparisonBoxStyle)} {...props}>
			{children}
		</div>
	)
}