import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { exampleCourses } from '../../util/example-content';
import { titleFirstCardGrid } from './card-layouts.css';
import { CourseCard as CourseCardComponent } from './course-card';

const meta: Meta<typeof CourseCardComponent> = {
	title: 'Cards/Course Card',
	component: CourseCardComponent,
	args: {
		headingTag: 'h1',
	},
	argTypes: {
		onTagClick: {
			action: 'onTagClick',
		},
	},
};
export default meta;

type Story = StoryObj<typeof CourseCardComponent>;

export const CourseCard: Story = {
	render: (args) => (
		<div
			className={sprinkles({
				backgroundColor: 'surface4',
				padding: 16,
			})}
		>
			<div className={titleFirstCardGrid}>
				{exampleCourses.map((course) => (
					<CourseCardComponent key={course.title} {...args} course={course} />
				))}
			</div>
		</div>
	),
};
