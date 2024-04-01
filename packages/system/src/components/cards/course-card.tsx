import React from 'react';
import { type Course } from '../../models/course';
import { ResourceCard, type ResourceCardProps } from './resource-card';

export type CourseCardProps = Omit<
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
	course: Course<string>;
};

export function CourseCard({ course, ...props }: CourseCardProps) {
	return (
		<ResourceCard
			title={course.title}
			subtitle={course.author}
			image={course.image}
			href={course.href}
			tags={course.tags}
			attributes={[
				['level', course.level],
				['format', course.format],
			]}
			{...props}
		>
			{course.description}
		</ResourceCard>
	);
}
