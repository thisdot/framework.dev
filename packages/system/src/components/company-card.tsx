import classNames from "classnames"
import React from "react"
import { companyCardStyle } from "./company-card.css"

export interface CompanyCardProps
	extends React.ComponentPropsWithoutRef<"div"> {}

export function CompanyCard({ children, className, ...props }: CompanyCardProps) {
	return (
		<div className={classNames(className, companyCardStyle)} {...props}>
			{children}
		</div>
	)
}