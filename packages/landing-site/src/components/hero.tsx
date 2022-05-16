import { Hero as _Hero } from "@framework/system/src/components/landing/hero"

export default function Hero() {
	return (
		<_Hero
			heroText={{
				highlightedTitle: "Welcome to framework.dev",
				subtitle:
					"Search for top web technologies, compare key features, and discover community-curated resources to help you learn!",
			}}
			linkCards={[
				{
					title: "Angular Resources",
					href: "https://angular.framework.dev/",
					icon: "/icon-angular.svg",
					backgroundColor: "#C3002F",
					bigSize: true,
				},
				{
					title: "React Resources",
					href: "https://react.framework.dev/",
					icon: "/icon-react.svg",
					backgroundColor: "#00BCDA",
					bigSize: true,
				},
				{
					title: "Vue Resources",
					href: "https://vue.framework.dev/",
					icon: "/icon-vue.svg",
					backgroundColor: "#41B883",
					bigSize: true,
				},
			]}
		/>
	)
}
