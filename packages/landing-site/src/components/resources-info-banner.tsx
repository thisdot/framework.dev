import { ResourcesInfoBanner as _ResourcesInfoBanner } from "@framework/system/src/components/landing/resources-info-banner"
import { sprinkles } from "@framework/system/src/sprinkles/sprinkles.css"

export default function ResourcesInfoBanner() {
	const cardResources = [
		{
			title: "Angular Resources",
			href: "https://angular.framework.dev/",
			icon: "/icon-angular.svg",
			backgroundColor: "#C3002F",
		},
		{
			title: "React Resources",
			href: "https://react.framework.dev/",
			icon: "/icon-react.svg",
			backgroundColor: "#00BCDA",
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
			title="Get Started"
			description="Select one of the frameworks below to begin exploring framework.dev!"
			cardResources={cardResources}
			className={sprinkles({
				marginTop: { mobile: 56, desktop: 152 }
			})}
		/>
	)
}
