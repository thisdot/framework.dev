import { type Podcast } from '../../models/podcast';
import { ResourceCard, type ResourceCardProps } from './resource-card';

export type PodcastCardProps = Omit<
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
	podcast: Podcast<string>;
	lastPublishedDate?: string;
};

export function PodcastCard({ podcast, ...props }: PodcastCardProps) {
	return (
		<ResourceCard
			title={podcast.title}
			subtitle={podcast.hosts.join(', ')}
			href={podcast.href}
			tags={podcast.tags}
			layout="imageFirst"
			image={podcast.image}
			{...props}
		>
			{podcast.description}
		</ResourceCard>
	);
}
