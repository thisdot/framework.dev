import classNames from "classnames"
import React from "react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { Company } from "../models/company"
import {
	companyCardStyle,
	companyCardHeaderStyle,
	companyCardLogoStyle,
	companyCardNameStyle,
	companyCardBodyStyle,
} from "./company-card.css"

export type CompanyCardProps = React.ComponentPropsWithoutRef<"article"> & {
	headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	company: Company<string>
}

export function CompanyCard({
	company,
	headingTag: H,
	className,
	...props
}: CompanyCardProps) {
	return (
		<article className={classNames(className, companyCardStyle)} {...props}>
			<header className={companyCardHeaderStyle}>
				<img
					src={company.image}
					className={companyCardLogoStyle}
					aria-hidden
					height={40}
					width={40}
				/>
				<div className={companyCardNameStyle}>
					<a href={company.href} target="_blank" rel="noreferrer">
						<H
							className={sprinkles({
								margin: 0,
								textStyle: "bodyShort1",
								color: "strongText",
								fontWeight: "bold",
							})}
						>
							{company.name}
						</H>
					</a>
					<p
						className={sprinkles({
							textStyle: "bodyShort3",
							color: "softText",
						})}
					>
						{`${company.numberOfEmployees} employees`}
					</p>
				</div>
			</header>
			<p className={companyCardBodyStyle}>{company.description}</p>
		</article>
	)
}
