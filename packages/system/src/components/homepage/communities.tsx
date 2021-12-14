import classNames from "classnames"
import React from "react"
import { Community } from "../../models/community"
import { communitiesStyle } from "./communities.css"

export interface CommunitiesProps
	extends React.ComponentPropsWithoutRef<"div"> {
	communities: Community<string>[]
}

export function Communities({
	children,
	className,
	communities,
	...props
}: CommunitiesProps) {
	return (
		<div className={classNames(className, communitiesStyle)} {...props}>
			{children}
		</div>
	)
}
