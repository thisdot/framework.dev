export function getGitHubStarsUrl(
	repoName: string,
	responseType: "svg" | "json"
): string {
	switch (responseType) {
		case "svg":
			return `https://img.shields.io/github/stars/${repoName}?style=flat&logo=github`
		case "json":
			return `https://img.shields.io/github/stars/${repoName}.json`
	}
}

export function getNpmDownloadsUrl(
	npmPackage: string,
	responseType: "svg" | "json"
): string {
	switch (responseType) {
		case "svg":
			return `https://img.shields.io/npm/dm/${npmPackage}?style=flat&logo=npm&link=https://www.npmjs.com/package/${npmPackage}`
		case "json":
			return `https://img.shields.io/npm/dm/${npmPackage}?style=flat&logo=npm&link=https://www.npmjs.com/package/${npmPackage}`
	}
}

export function getBundleSizeUrl(
	npmPackage: string,
	responseType: "svg" | "json"
): string {
	switch (responseType) {
		case "svg":
			return `https://img.shields.io/bundlephobia/min/${npmPackage}?style=flat&logo=npm&link=https://bundlephobia.com/package/${npmPackage}`
		case "json":
			return `https://img.shields.io/bundlephobia/min/${npmPackage}.json`
	}
}
