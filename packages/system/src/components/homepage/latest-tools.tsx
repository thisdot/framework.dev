import classNames from 'classnames';
import React from 'react';
import sampleSize from 'lodash/sampleSize';
import { type Tool } from '../../models/tool';
import { latestToolsStyle } from './latest-tools.css';
import { ResourceList } from './resource-list';

export interface LatestToolsProps
	extends React.ComponentPropsWithoutRef<'div'> {
	tools: Tool<string>[];
}

export function LatestTools({ className, tools, ...props }: LatestToolsProps) {
	const randromTools = sampleSize(tools, 4);
	return (
		<ResourceList
			className={classNames(className, latestToolsStyle)}
			title="Latest tools"
			viewAll={{ title: 'View all tools', href: '/categories/tools' }}
			items={randromTools.map((tool) => {
				return {
					image: tool.image,
					title: tool.name,
					metadata: tool.author,
					href: tool.href,
					description: tool.description,
					tags: tool.tags,
				};
			})}
			{...props}
		/>
	);
}
