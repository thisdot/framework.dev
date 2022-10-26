import { LinkCardProps } from "@framework/system/src/components/landing/link-card"
import { AngularIcon } from "../icons/angular-icon"
import { ReactIcon } from "../icons/react-icon"
import { VueIcon } from "../icons/vue-icon"
import { QwikIcon } from "../icons/qwik-icon"

export const FRAMEWORK_RESOURCES = (bigSize = false): LinkCardProps[] => [
	{
		title: "Angular Resources",
		href: "https://angular.framework.dev/",
		Icon(props) {
			return <AngularIcon {...props} />
		},
		backgroundColor: "#C3002F",
		bigSize,
	},
	{
		title: "React Resources",
		href: "https://react.framework.dev/",
		Icon(props) {
			return <ReactIcon {...props} />
		},
		backgroundColor: "#00BCDA",
		bigSize,
	},
	{
		title: "Vue Resources",
		href: "https://vue.framework.dev/",
		Icon(props) {
			return <VueIcon {...props} />
		},
		backgroundColor: "#41B883",
		bigSize,
	},
	{
		title: "Qwik Resources",
		href: "https://qwik.framework.dev/",
		Icon(props) {
			return <QwikIcon {...props} />
		},
		disabled: true,
		backgroundColor: "#5468ff",
		bigSize,
	},
]
