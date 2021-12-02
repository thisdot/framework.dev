import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../../sprinkles/sprinkles.css"
import { exampleLibraries } from "../../util/example-content"
import {
	LibraryCard as LibraryCardComponent,
	LibraryCardProps,
} from "./library-card"

export default {
	title: "Cards/Library Card",
	component: LibraryCardComponent,
	args: {
		headingTag: "h1",
	},
} as Meta

const Template: Story<LibraryCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: "surface4",
			padding: 16,
		})}
	>
		<div
			className={sprinkles({
				layout: "titleFirstCardGrid",
				gap: 16,
			})}
		>
			{exampleLibraries.map((library) => (
				<LibraryCardComponent key={library.name} {...args} library={library} />
			))}
		</div>
	</div>
)

export const LibraryCard = Template.bind({})
