export function getGitHubStarsBadge(repoName: string): string {
	return `https://img.shields.io/github/stars/${repoName}?style=flat&logo=github`
}

export function getNpmDownloadsBadge(npmPackage: string): string {
	return `https://img.shields.io/npm/dm/${npmPackage}?style=flat&logo=npm&link=https://www.npmjs.com/package/${npmPackage}`
}

export function getBundleSizeBadge(npmPackage: string): string {
	return `https://img.shields.io/bundlephobia/min/${npmPackage}?style=flat&logo=npm&link=https://bundlephobia.com/package/${npmPackage}`
}
