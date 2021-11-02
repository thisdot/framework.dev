import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { exampleLibraries } from "../util/example-content"
import {
	LibraryCard as LibraryCardComponent,
	LibraryCardProps,
} from "./library-card"

export default {
	title: "Library Card",
	component: LibraryCardComponent,
	args: {
		headingTag: "h1",
	},
} as Meta

const Template: Story<LibraryCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: "shaded",
			padding: 16,
		})}
	>
		<div
			className={sprinkles({
				layout: "landscapeCardGrid",
				gap: 16,
			})}
		>
			{exampleLibraries.map((library) => (
				<LibraryCardComponent library={library} key={library.name} {...args} />
			))}
		</div>
	</div>
)

export const LibraryCard = Template.bind({})
