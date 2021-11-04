import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { examplePodcasts } from "../util/example-content"
import {
	PodcastCard as PodcastCardComponent,
	PodcastCardProps,
} from "./podcast-card"

export default {
	title: "Podcast Card",
	component: PodcastCardComponent,
	args: {
		headingTag: "h1",
	},
} as Meta

const Template: Story<PodcastCardProps> = (args) => (
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
			{examplePodcasts.map((podcast) => (
				<PodcastCardComponent
					podcast={podcast}
					key={podcast.title}
					lastPublishedDate="November 4th, 2021"
					{...args}
				/>
			))}
		</div>
	</div>
)

export const PodcastCard = Template.bind({})
