import { Hero as _Hero } from "@framework/system/src/components/landing/hero"

export default function Hero() {
	return (
		<_Hero
			heroText={{
				highlightedTitle: "List of the top resources",
				softTitle: "to learn the code",
				subtitle:
					"Explore some of the top resources added by a community to learn or be up to date with your framework.",
			}}
			linkCards={[
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
			]}
		/>
	)
}
