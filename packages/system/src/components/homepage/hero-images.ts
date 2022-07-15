export function getBackgroundImage(siteName: string) {
	switch (siteName) {
		case 'react':
			return '/hero-background-react.png'
		case 'angular':
			return '/hero-background-angular.png'
		case 'vue':
			return '/hero-background-vue.png'
		default:
			return ''
	}
}
