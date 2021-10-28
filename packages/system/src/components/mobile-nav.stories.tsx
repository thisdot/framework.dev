import { Story, Meta } from "@storybook/react"
import { MobileNav as MobileNavComponent, MobileNavProps } from "./mobile-nav"

export default {
	title: "Mobile Nav",
	component: MobileNavComponent,
	parameters: {
		layout: "fullscreen",
		backgrounds: {
			default: "dark",
		},
		viewport: {
			defaultViewport: "mobile2",
		},
	},
	args: {
		children: <h1>Logo</h1>,
	},
	argTypes: {
		// This arg exists only for rendering in the open state by Percy
		// so we want to hide it from humans
		initialMenuState: {
			table: { disable: true },
			control: { disable: true },
		},
	},
} as Meta

const Template: Story<MobileNavProps> = (args) => (
	<MobileNavComponent {...args} />
)

export const MobileNav: Story<MobileNavProps> = Template.bind({})

MobileNav.parameters = {
	percy: {
		additionalSnapshots: [
			{ suffix: " with burger menu open", args: { initialMenuState: "open" } },
		],
	},
}
