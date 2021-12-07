import { Story, Meta } from "@storybook/react"
import {
	CompanyCard as CompanyCardComponent,
	CompanyCardProps,
} from "./company-card"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { exampleCompanies } from "../../util/example-content"
import { titleFirstCardGrid } from "./card-layouts.css"

export default {
	title: "Cards/Company Card",
	component: CompanyCardComponent,
	args: {
		headingTag: "h1",
	},
	argTypes: {
		onTagClick: {
			action: "onTagClick",
		},
	},
} as Meta

const Template: Story<CompanyCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: "surface4",
			padding: 16,
		})}
	>
		<div className={titleFirstCardGrid}>
			{exampleCompanies.map((company) => (
				<CompanyCardComponent key={company.name} {...args} company={company} />
			))}
		</div>
	</div>
)

export const CompanyCard = Template.bind({})
