import { type Story, type Meta } from '@storybook/react';
import {
	FeatureAndList as FeatureAndListComponent,
	type FeatureAndListProps,
} from './feature-and-list';
import { exampleCourses } from '../../util/example-content';

export default {
	title: 'Feature And List',
	component: FeatureAndListComponent,
	args: {
		title: 'Example of feature and list',
		viewAll: { title: 'View all of whatever this is', href: '#' },
		items: exampleCourses.slice(0, 7).map((course) => {
			return {
				image: { src: course.image, style: 'normal' },
				title: course.title,
				metadata: course.author,
				href: course.href,
				description: course.description,
				attributes: [
					['level', course.level],
					['format', course.format],
					['paymentType', course.paymentType],
				],
			};
		}),
	},
} as Meta;

const Template: Story<FeatureAndListProps> = (args) => (
	<FeatureAndListComponent {...args} />
);

export const FeatureAndList = Template.bind({});
