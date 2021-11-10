import { Story, Meta } from "@storybook/react"
import {
	CompanyCard as CompanyCardComponent,
	CompanyCardProps,
} from "./company-card"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { exampleCompanies } from "../util/example-content"

export default {
	title: "Company Card",
	component: CompanyCardComponent,
	args: {
		headingTag: "h1",
	},
} as Meta

const Template: Story<CompanyCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: "surface4",
			padding: 16,
		})}
	>
		<div
			className={sprinkles({
				layout: "landscapeCardGrid",
				gap: 16,
			})}
		>
			{exampleCompanies.map((company) => (
				<CompanyCardComponent company={company} key={company.name} {...args} />
			))}
		</div>
	</div>
)

export const CompanyCard = Template.bind({})
