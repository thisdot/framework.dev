import { type Tool } from '../../models/tool';
import { ResourceCard, type ResourceCardProps } from './resource-card';

export type ToolCardProps = Omit<
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
	tool: Tool<string>;
};

export function ToolCard({ tool, ...props }: ToolCardProps) {
	return (
		<ResourceCard
			title={tool.name}
			subtitle={tool.author}
			href={tool.href}
			tags={tool.tags}
			image={tool.image}
			{...props}
		>
			{tool.description}
		</ResourceCard>
	);
}
