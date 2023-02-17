import { Story, Meta } from '@storybook/react'
import { Homepage as HomepageComponent, HomepageProps } from './homepage'
import {
	exampleBlogs,
	exampleBooks,
	exampleCommunities,
	exampleCourses,
	exampleLibraries,
	examplePodcasts,
	exampleTags,
	exampleTools,
} from '../../util/example-content'

export default {
	title: 'Home/Homepage',
	component: HomepageComponent,
	args: {
		libraries: exampleLibraries,
		libraryTags: exampleTags,
		podcasts: examplePodcasts,
		courses: exampleCourses,
		blogs: exampleBlogs,
		books: exampleBooks,
		tools: exampleTools,
		communities: exampleCommunities,
		siteName: 'react',
	},
} as Meta

const Template: Story<HomepageProps> = (args) => <HomepageComponent {...args} />

export const Homepage = Template.bind({})
