import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Courses as CoursesComponent } from './courses';
import { exampleCourses } from '../../util/example-content';
import { pxToRem } from '../../util/style-utils';

const meta: Meta<typeof CoursesComponent> = {
	title: 'Home/Courses',
	component: CoursesComponent,
	args: {
		courses: exampleCourses,
	},
};
export default meta;

type Story = StoryObj<typeof CoursesComponent>;

export const Courses: Story = {
	render: (args) => (
		<div style={{ maxWidth: pxToRem(800) }}>
			<CoursesComponent {...args} />
		</div>
	),
};
