import { LinkCardProps } from "@framework/system/src/components/landing/link-card"

export const FRAMEWORK_RESOURCES = ({
	bigSize,
}: Pick<LinkCardProps, "bigSize">): LinkCardProps[] => [
	{
		title: "Framework.dev",
		href: "https://framework.dev/",
		rawIcon: "/logo-icon.svg",
		backgroundColor: "#F6FDFF",
		color: "#2E3132",
		bigSize: bigSize,
	},
	{
		title: "Angular Resources",
		href: "https://angular.framework.dev/",
		icon: "/icon-angular.svg",
		backgroundColor: "#C3002F",
		bigSize: bigSize,
	},
	{
		title: "React Resources",
		href: "https://react.framework.dev/",
		icon: "/icon-react.svg",
		backgroundColor: "#00BCDA",
		bigSize: bigSize,
	},
	{
		title: "Vue Resources",
		href: "https://vue.framework.dev/",
		icon: "/icon-vue.svg",
		backgroundColor: "#41B883",
		bigSize: bigSize,
	},
]
