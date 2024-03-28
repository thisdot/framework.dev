import { type Story, type Meta } from '@storybook/react';
import {
	LatestTools as LatestToolsComponent,
	type LatestToolsProps,
} from './latest-tools';
import { exampleTools } from '../../util/example-content';
import { pxToRem } from '../../util/style-utils';

export default {
	title: 'Home/Latest Tools',
	component: LatestToolsComponent,
	args: {
		tools: exampleTools,
	},
} as Meta;

const Template: Story<LatestToolsProps> = (args) => (
	<div style={{ maxWidth: pxToRem(350) }}>
		<LatestToolsComponent {...args} />
	</div>
);

export const LatestTools = Template.bind({});
