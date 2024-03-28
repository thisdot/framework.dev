import { type Story, type Meta } from '@storybook/react'
import {
	FeaturedLibraries as FeaturedLibrariesComponent,
	type FeaturedLibrariesProps,
} from './featured-libraries'
import { exampleLibraries, exampleTags } from '../../util/example-content'

export default {
	title: 'Home/Featured Libraries',
	component: FeaturedLibrariesComponent,
	args: {
		libraries: exampleLibraries,
		libraryTags: exampleTags,
	},
} as Meta

const Template: Story<FeaturedLibrariesProps> = (args) => (
	<FeaturedLibrariesComponent {...args} />
)

export const FeaturedLibraries = Template.bind({})
