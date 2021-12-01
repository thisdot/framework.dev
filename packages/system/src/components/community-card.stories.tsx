import { Story, Meta } from "@storybook/react"
import {
	CommunityCard as CommunityCardComponent,
	CommunityCardProps,
} from "./community-card"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { exampleCommunities } from "../util/example-content"

export default {
	title: "Cards/Community Card",
	component: CommunityCardComponent,
	args: {
		headingTag: "h1",
	},
} as Meta

const Template: Story<CommunityCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: "surface4",
			padding: 16,
		})}
	>
		<div
			className={sprinkles({
				layout: "imageFirstCardGrid",
				gap: 16,
			})}
		>
			{exampleCommunities.map((community) => (
				<CommunityCardComponent
					key={community.name}
					{...args}
					community={community}
				/>
			))}
		</div>
	</div>
)

export const CommunityCard = Template.bind({})
