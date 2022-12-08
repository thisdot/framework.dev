import { titleCase } from "title-case"

type SocialMetaTagsProps = {
	title: string
	siteName: string
}

export function SocialMetaTags({ siteName, title }: SocialMetaTagsProps) {
	const titleCasedSiteName = titleCase(siteName)
	const titleCasedTitle = titleCase(title)
	function formatAllFrameworkTitles() {
		switch (siteName) {
			case "graphql":
				return "GraphQL";
			case "solidjs":
				return "SolidJS";
			default:
				return titleCasedSiteName;
		}
	}

	const description =
		siteName === "landing"
			? `Search, compare, and discover top libraries and community-driven resources.`
			: `Search, compare, and discover top ${formatAllFrameworkTitles()} libraries and community-driven resources in ${formatAllFrameworkTitles()}.`
	const url =
		siteName === "landing"
			? `https://framework.dev`
			: `https://${siteName}.framework.dev`
	const imageUrl = `${url}/${siteName}-framework-1200x630.png`

	return (
		<>
			<meta name="title" content={titleCasedTitle} />
			<meta name="description" content={description} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={titleCasedTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:url" content={url} />
			<meta name="twitter:title" content={titleCasedTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />
		</>
	)
}
