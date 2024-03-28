import { type Meta, type Story } from '@storybook/react';
import {
	ComparisonBox as ComparisonBoxComponent,
	type ComparisonBoxProps,
} from './comparison-box';
import { pxToRem } from '../../util/style-utils';
import { LibraryTag } from '../../models/library-tag';

export default {
	title: 'Home/Comparison Box',
	component: ComparisonBoxComponent,
	args: {
		libraryTags: Object.values(LibraryTag),
	},
} as Meta;

const Template: Story<ComparisonBoxProps> = (args) => (
	<div style={{ maxWidth: pxToRem(350) }}>
		<ComparisonBoxComponent {...args} />
	</div>
);

export const ComparisonBox = Template.bind({});
