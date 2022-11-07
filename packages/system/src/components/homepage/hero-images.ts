export function getBackgroundImage(siteName: string): string | undefined {
	if (!siteName) {
		return undefined
	}

	return `/hero-background-${siteName}.png`
}
