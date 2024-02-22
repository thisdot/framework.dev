import { type Story, type Meta } from '@storybook/react'
import {
	ContentBanner as ContentBannerComponent,
	ContentBannerProps,
} from './content-banner'
import { examplePodcasts } from '../../util/example-content'

export default {
	title: 'Home/Content Banner',
	component: ContentBannerComponent,
	args: {
		title: 'Content banner title',
		viewAll: {
			title: 'View all things',
			href: '#',
		},
		items: examplePodcasts.slice(0, 4).map((podcast) => {
			return {
				title: podcast.title,
				metadata: podcast.hosts.join(', '),
				image: podcast.image,
				href: podcast.href,
			}
		}),
	},
} as Meta

const Template: Story<ContentBannerProps> = (args) => (
	<ContentBannerComponent {...args} />
)

export const ContentBanner = Template.bind({})
