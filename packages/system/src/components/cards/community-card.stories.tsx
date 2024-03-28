import { type Story, type Meta } from '@storybook/react';
import {
	CommunityCard as CommunityCardComponent,
	type CommunityCardProps,
} from './community-card';
import { sprinkles } from '../../sprinkles/sprinkles.css';
import { exampleCommunities } from '../../util/example-content';
import { imageFirstCardGrid } from './card-layouts.css';

export default {
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
} as Meta;

const Template: Story<CommunityCardProps> = (args) => (
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
);

export const CommunityCard = Template.bind({});
