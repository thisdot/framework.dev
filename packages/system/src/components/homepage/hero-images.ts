import heroBackgroundReact from "./hero-background-react.png"
import heroBackgroundAngular from "./hero-background-angular.png"
import heroBackgroundVue from "./hero-background-vue.png"

export function getBackgroundImage(siteName: string) {
	switch (siteName) {
		case "react":
			return heroBackgroundReact
		case "angular":
			return heroBackgroundAngular
		case "vue":
			return heroBackgroundVue
		default:
			return ""
	}
}
