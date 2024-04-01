import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FeatureAndList as FeatureAndListComponent } from './feature-and-list';
import { exampleCourses } from '../../util/example-content';

const meta: Meta<typeof FeatureAndListComponent> = {
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
};

export default meta;

type Story = StoryObj<typeof FeatureAndListComponent>;

export const FeatureAndList: Story = {
	render: (args) => <FeatureAndListComponent {...args} />,
};
