import { titleCase } from "title-case"

type SocialMetaTagsProps = {
	title: string
	siteName: string
}

export function SocialMetaTags({ siteName, title }: SocialMetaTagsProps) {
	const titleCasedName = titleCase(siteName)
	const description =
		siteName === "landing"
			? `Search, compare, and discover top libraries and community-driven resources in.`
			: `Search, compare, and discover top ${titleCasedName} libraries and community-driven resources in ${titleCasedName}.`
	const url =
		siteName === "landing"
			? `https://framework.dev`
			: `https://${siteName}.framework.dev`
	const imageUrl = `${url}/${siteName}-homepage-screenshot.png`

	return (
		<>
			<meta name="title" content={title} />
			<meta name="description" content="{description}" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={imageUrl} />
		</>
	)
}
