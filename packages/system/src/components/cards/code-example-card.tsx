import { CodeExample } from "../../models/code-example"
import { ResourceCardProps, ResourceCard } from "./resource-card"

export type CodeExampleCardProps = Omit<
	ResourceCardProps,
	| "title"
	| "subtitle"
	| "image"
	| "layout"
	| "imageLayout"
	| "href"
	| "tags"
	| "attributes"
	| "children"
> & {
	codeExample: CodeExample<string>
}

export function CodeExampleCard({
	codeExample,
	...props
}: CodeExampleCardProps) {
	return (
		<ResourceCard
			title={codeExample.title}
			subtitle={codeExample.author}
			href={codeExample.href}
			tags={codeExample.tags}
			{...props}
		>
			{codeExample.description}
		</ResourceCard>
	)
}
