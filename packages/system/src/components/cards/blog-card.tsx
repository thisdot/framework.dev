import { type Blog } from '../../models/blog'
import { type ResourceCardProps, ResourceCard } from './resource-card'

export type BlogCardProps = Omit<
	ResourceCardProps,
	| 'title'
	| 'subtitle'
	| 'image'
	| 'layout'
	| 'imageLayout'
	| 'href'
	| 'tags'
	| 'attributes'
	| 'children'
> & {
	blog: Blog<string>
}

export function BlogCard({ blog, ...props }: BlogCardProps) {
	return (
		<ResourceCard
			title={blog.title}
			subtitle={blog.author}
			href={blog.href}
			tags={blog.tags}
			image={blog.image}
			{...props}
		>
			{blog.description}
		</ResourceCard>
	)
}
