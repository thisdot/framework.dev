import { type Story, type Meta } from '@storybook/react'
import { examplePodcasts } from '../../util/example-content'
import { Podcasts as PodcastsComponent, type PodcastsProps } from './podcasts'

export default {
	title: 'Home/Podcasts',
	component: PodcastsComponent,
	args: {
		podcasts: examplePodcasts,
	},
} as Meta

const Template: Story<PodcastsProps> = (args) => <PodcastsComponent {...args} />

export const Podcasts = Template.bind({})
