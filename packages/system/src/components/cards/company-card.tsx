import { Company } from "../../models/company"
import { ResourceCard, ResourceCardProps } from "./resource-card"

export type CompanyCardProps = Omit<
	ResourceCardProps,
	| "title"
	| "subtitle"
	| "image"
	| "layout"
	| "imageLayout"
	| "href"
	| "tags"
	| "attributes"
	| "children"
> & {
	company: Company<string>
}

export function CompanyCard({ company, ...props }: CompanyCardProps) {
	return (
		<ResourceCard
			title={company.name}
			subtitle={`${company.numberOfEmployees} employees`}
			image={company.image}
			href={company.href}
			tags={company.tags}
			{...props}
		>
			{company.description}
		</ResourceCard>
	)
}
