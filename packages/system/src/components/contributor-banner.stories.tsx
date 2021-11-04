import { Story, Meta } from "@storybook/react"
import { sprinkles } from "../sprinkles/sprinkles.css"
import {
	ContributorBanner as ContributorBannerComponent,
	ContributorBannerProps,
} from "./contributor-banner"

export default {
	title: "Contributor Banner",
	component: ContributorBannerComponent,
	args: {
		children: (
			<>
				<h1
					className={sprinkles({
						textStyle: "sectionHeading",
						marginBottom: 8,
					})}
				>
					Help us to be better
				</h1>
				<p className={sprinkles({ textStyle: "bodyText" })}>
					Create a PR if you see mistakes, room for improvement, or new
					opportunities to help dev team.
				</p>
			</>
		),
		contributorImages: [
			"https://github.com/jbachhardie.png",
			"https://github.com/tvanantwerp.png",
			"https://github.com/dustinsgoodman.png",
		],
	},
} as Meta

const Template: Story<ContributorBannerProps> = (args) => (
	<ContributorBannerComponent {...args} />
)

export const ContributorBanner = Template.bind({})
