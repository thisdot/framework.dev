import { Story, Meta } from "@storybook/react"
import { CompanyCard as CompanyCardComponent, CompanyCardProps } from "./company-card"

export default {
	title: "Company Card",
	component: CompanyCardComponent,
	args: {
		children: "Hello world",
	}
} as Meta

const Template: Story<CompanyCardProps> = (args) => <CompanyCardComponent {...args} />

export const CompanyCard = Template.bind({})