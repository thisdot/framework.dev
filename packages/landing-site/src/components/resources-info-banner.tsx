import { ResourcesInfoBanner as _ResourcesInfoBanner } from "@framework/system/src/components/landing/resources-info-banner"
import { sprinkles } from "@framework/system/src/sprinkles/sprinkles.css"

export default function ResourcesInfoBanner() {
	const cardResources = [
		{
			title: "React Resources",
			href: "https://react.framework.dev/",
			icon: "/icon-react.svg",
			backgroundColor: "#00BCDA",
		},
		{
			title: "Angular Resources",
			href: "https://angular.framework.dev/",
			icon: "/icon-angular.svg",
			backgroundColor: "#C3002F",
		},
		{
			title: "Vue Resources",
			href: "https://vue.framework.dev/",
			icon: "/icon-vue.svg",
			backgroundColor: "#41B883",
		},
	]

	return (
		<_ResourcesInfoBanner
			title="Get started now"
			description="Explore some of the top resources added by a community to learn or be up to date with your framework"
			cardResources={cardResources}
			className={sprinkles({
				marginTop: { mobile: 56, desktop: 152 }
			})}
		/>
	)
}
