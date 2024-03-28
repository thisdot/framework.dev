import { type Story, type Meta } from '@storybook/react';
import { Courses as CoursesComponent, type CoursesProps } from './courses';
import { exampleCourses } from '../../util/example-content';
import { pxToRem } from '../../util/style-utils';

export default {
	title: 'Home/Courses',
	component: CoursesComponent,
	args: {
		courses: exampleCourses,
	},
} as Meta;

const Template: Story<CoursesProps> = (args) => (
	<div style={{ maxWidth: pxToRem(800) }}>
		<CoursesComponent {...args} />
	</div>
);

export const Courses = Template.bind({});
