import { Story, Meta } from "@storybook/react"
import {
	PageHeader as PageHeaderComponent,
	PageHeaderProps,
} from "./page-header"

export default {
	title: "Page Header",
	component: PageHeaderComponent,
} as Meta

const Template: Story<PageHeaderProps> = (args) => (
	<PageHeaderComponent {...args} />
)

export const PageHeader = Template.bind({})

PageHeader.args = {
	title: "React Courses",
	count: 27,
}
