import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CommunityCard as CommunityCardComponent } from './community-card';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { exampleCommunities } from '../../util/example-content';
import { imageFirstCardGrid } from './card-layouts.css';

const meta: Meta<typeof CommunityCardComponent> = {
	title: 'Cards/Community Card',
	component: CommunityCardComponent,
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

type Story = StoryObj<typeof CommunityCardComponent>;

export const CommunityCard: Story = {
	render: (args) => (
		<div
			className={sprinkles({
				backgroundColor: 'surface4',
				padding: 16,
			})}
		>
			<div className={imageFirstCardGrid}>
				{exampleCommunities.map((community) => (
					<CommunityCardComponent
						key={community.name}
						{...args}
						community={community}
					/>
				))}
			</div>
		</div>
	),
};
