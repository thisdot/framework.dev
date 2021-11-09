import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { exampleCategories } from "../util/example-content"
import { Sidebar as SidebarComponent, SidebarProps } from "./sidebar"
import { NavItem } from "./nav-item"

export default {
	title: "Sidebar",
	component: SidebarComponent,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		children: (
			<div className={sprinkles({ layout: "stack", gap: 8 })}>
				{exampleCategories.map((category) => (
					<NavItem href={`#${category}`} key={category}>
						{category}
					</NavItem>
				))}
			</div>
		),
	},
} as Meta

const Template: Story<SidebarProps> = (args) => (
	<div className={sprinkles({ layout: "sidebar" })}>
		<SidebarComponent {...args} />
		<main className={sprinkles({ backgroundColor: "surface4" })} />
	</div>
)

export const Sidebar: Story<SidebarProps> = Template.bind({})
