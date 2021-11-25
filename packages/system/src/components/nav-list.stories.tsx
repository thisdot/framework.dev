import { Story, Meta } from "@storybook/react"
import { useState } from "react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { NavItem } from "./nav-item.stories"
import {
	NavList as NavListComponent,
	NavListProps,
	NavListItem,
} from "./nav-list"

export default {
	title: "Nav List",
	component: NavListComponent,
	args: {
		children: "Hello world",
	},
} as Meta

const Template: Story<NavListProps> = (args) => {
	const [current, setCurrent] = useState<string | null>(null)
	const isCurrent = (name: string) => (name === current ? "page" : undefined)
	return (
		<div className={sprinkles({ layout: "sidebar" })}>
			<NavListComponent {...args}>
				<NavListItem>
					<NavItem
						aria-current={isCurrent("Libraries")}
						aria-expanded={
							!!(
								isCurrent("Libraries") ||
								isCurrent("Data fetching") ||
								isCurrent("Component library") ||
								isCurrent("Styling") ||
								isCurrent("Internationalization") ||
								isCurrent("State")
							)
						}
						onClick={() => setCurrent("Libraries")}
					>
						Libraries
					</NavItem>
					<NavListComponent>
						<NavListItem>
							<NavItem
								aria-current={isCurrent("Data fetching")}
								onClick={() => setCurrent("Data fetching")}
							>
								Data fetching
							</NavItem>
						</NavListItem>
						<NavListItem>
							<NavItem
								aria-current={isCurrent("Component library")}
								onClick={() => setCurrent("Component library")}
							>
								Component library
							</NavItem>
						</NavListItem>
						<NavListItem>
							<NavItem
								aria-current={isCurrent("Styling")}
								onClick={() => setCurrent("Styling")}
							>
								Styling
							</NavItem>
						</NavListItem>
						<NavListItem>
							<NavItem
								aria-current={isCurrent("Internationalization")}
								onClick={() => setCurrent("Internationalization")}
							>
								Internationalization
							</NavItem>
						</NavListItem>
						<NavListItem>
							<NavItem
								aria-current={isCurrent("State")}
								onClick={() => setCurrent("State")}
							>
								State Management
							</NavItem>
						</NavListItem>
					</NavListComponent>
				</NavListItem>
				<NavListItem>
					<NavItem
						aria-current={isCurrent("Tools")}
						onClick={() => setCurrent("Tools")}
					>
						Tools
					</NavItem>
				</NavListItem>
				<NavListItem>
					<NavItem
						aria-current={isCurrent("Snippets")}
						onClick={() => setCurrent("Snippets")}
					>
						Snippets
					</NavItem>
				</NavListItem>
				<NavListItem>
					<NavItem
						aria-current={isCurrent("Courses")}
						onClick={() => setCurrent("Courses")}
					>
						Courses
					</NavItem>
				</NavListItem>
				<NavListItem>
					<NavItem
						aria-current={isCurrent("Communities")}
						onClick={() => setCurrent("Communities")}
					>
						Communities
					</NavItem>
				</NavListItem>
				<NavListItem>
					<NavItem
						aria-current={isCurrent("Podcasts")}
						onClick={() => setCurrent("Podcasts")}
					>
						Podcasts
					</NavItem>
				</NavListItem>
				<NavListItem>
					<NavItem
						aria-current={isCurrent("Books")}
						onClick={() => setCurrent("Books")}
					>
						Books
					</NavItem>
				</NavListItem>
				<NavListItem>
					<NavItem
						aria-current={isCurrent("Companies")}
						onClick={() => setCurrent("Companies")}
					>
						Companies
					</NavItem>
				</NavListItem>
			</NavListComponent>
		</div>
	)
}

export const NavList = Template.bind({})
