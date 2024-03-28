import { type Story, type Meta } from '@storybook/react'
import { sprinkles } from '../../sprinkles/sprinkles.css'
import { examplePodcasts } from '../../util/example-content'
import { imageFirstCardGrid } from './card-layouts.css'
import {
	PodcastCard as PodcastCardComponent,
	type PodcastCardProps,
} from './podcast-card'

export default {
	title: 'Cards/Podcast Card',
	component: PodcastCardComponent,
	args: {
		headingTag: 'h1',
	},
	argTypes: {
		onTagClick: {
			action: 'onTagClick',
		},
	},
	parameters: {
		layout: 'fullscreen',
	},
} as Meta

const Template: Story<PodcastCardProps> = (args) => (
	<div
		className={sprinkles({
			backgroundColor: 'surface4',
			padding: 16,
		})}
	>
		<div className={imageFirstCardGrid}>
			{examplePodcasts.map((podcast) => (
				<PodcastCardComponent
					{...args}
					podcast={podcast}
					key={podcast.title}
					lastPublishedDate="November 4th, 2021"
				/>
			))}
		</div>
	</div>
)

export const PodcastCard = Template.bind({})
