import { Story, Meta } from "@storybook/react"
import { bookIndexMetadata } from "../../models/book"
import { codeExampleIndexMetadata } from "../../models/code-example"
import { communityIndexMetadata } from "../../models/community"
import { companyIndexMetadata } from "../../models/company"
import { courseIndexMetadata } from "../../models/course"
import { libraryIndexMetadata } from "../../models/library"
import { podcastIndexMetadata } from "../../models/podcast"
import { vars } from "../../themes/themes.css"
import {
	exampleBooks,
	exampleCodeExamples,
	exampleCommunities,
	exampleCompanies,
	exampleCourses,
	exampleLibraries,
	examplePodcasts,
	exampleTags,
} from "../../util/example-content"
import { Search as SearchComponent, SearchProps } from "./search"

const data: SearchProps["data"] = [
	{
		data: exampleBooks,
		indexMetadata: bookIndexMetadata,
		name: bookIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleCodeExamples,
		indexMetadata: codeExampleIndexMetadata,
		name: codeExampleIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleCommunities,
		indexMetadata: communityIndexMetadata,
		name: communityIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleCompanies,
		indexMetadata: companyIndexMetadata,
		name: companyIndexMetadata.name,
		tags: [],
	},
	{
		data: exampleCourses,
		indexMetadata: courseIndexMetadata,
		name: courseIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: exampleLibraries,
		indexMetadata: libraryIndexMetadata,
		name: libraryIndexMetadata.name,
		tags: exampleTags,
	},
	{
		data: examplePodcasts,
		indexMetadata: podcastIndexMetadata,
		name: podcastIndexMetadata.name,
		tags: exampleTags,
	},
]

export default {
	title: "Search",
	component: SearchComponent,
	args: {
		data,
	},
	parameters: {
		backgrounds: {
			default: "Light Theme Background",
			values: [
				{
					name: "Light Theme Background",
					value: vars.themeColors.surface4,
					default: true,
				},
			],
		},
	},
} as Meta

const Template: Story<SearchProps> = (args) => <SearchComponent {...args} />

export const Search = Template.bind({})
