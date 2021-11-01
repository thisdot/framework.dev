import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { exampleCategories } from "../util/example-content"
import { Sidebar as SidebarComponent, SidebarProps } from "./sidebar"

export default {
	title: "Sidebar",
	component: SidebarComponent,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		children: (
			<div className={sprinkles({ layout: "stack", gap: 24 })}>
				{exampleCategories.map((category) => (
					<a href={`#${category}`} key={category}>
						{category}
					</a>
				))}
			</div>
		),
	},
} as Meta

const Template: Story<SidebarProps> = (args) => (
	<div className={sprinkles({ layout: "sidebar" })}>
		<SidebarComponent {...args} />
		<main className={sprinkles({ backgroundColor: "shaded" })} />
	</div>
)

export const Sidebar: Story<SidebarProps> = Template.bind({})
