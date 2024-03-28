import { type Story, type Meta } from '@storybook/react';
import { Skeleton as SkeletonComponent, type SkeletonProps } from './skeleton';

export default {
	title: 'Skeleton',
	component: SkeletonComponent,
	args: {
		variant: 'circle',
		height: 20,
		width: 20,
	},
} as Meta;

const Template: Story<SkeletonProps> = (args) => (
	<SkeletonComponent {...args} />
);

export const Skeleton = Template.bind({});
