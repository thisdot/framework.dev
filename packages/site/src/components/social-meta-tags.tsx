import { formatFieldName } from "@framework/system/src/util/string-utils"

type SocialMetaTagsProps = {
	title: string
	siteName: string
}

export function SocialMetaTags({ siteName, title }: SocialMetaTagsProps) {
	const description = `Search, compare, and discover top ${formatFieldName(
		siteName
	)} libraries and community driven resources in ${formatFieldName(siteName)}.`
	const url = `https://${siteName}.framework.dev`
  const imageUrl = `${url}/${siteName}-homepage-screenshot.png`;

	return (
		<>
			<meta name="title" content={title} />
			<meta name="description" content={description} />

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
