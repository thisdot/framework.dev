import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonBox as ComparisonBoxComponent } from './comparison-box';
import { pxToRem } from '../../util/style-utils';
import { LibraryTag } from '../../models/library-tag';

const meta: Meta<typeof ComparisonBoxComponent> = {
	title: 'Home/Comparison Box',
	component: ComparisonBoxComponent,
	args: {
		libraryTags: Object.values(LibraryTag),
	},
};
export default meta;

type Story = StoryObj<typeof ComparisonBoxComponent>;

export const ComparisonBox: Story = {
	render: (args) => (
		<div style={{ maxWidth: pxToRem(350) }}>
			<ComparisonBoxComponent {...args} />
		</div>
	),
};
