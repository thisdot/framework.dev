import classNames from "classnames"
import React from "react"
import { communitiesStyle } from "./communities.css"

export interface CommunitiesProps
	extends React.ComponentPropsWithoutRef<"div"> {}

export function Communities({ children, className, ...props }: CommunitiesProps) {
	return (
		<div className={classNames(className, communitiesStyle)} {...props}>
			{children}
		</div>
	)
}