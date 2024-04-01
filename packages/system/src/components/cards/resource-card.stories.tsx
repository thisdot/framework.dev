/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { type AttributeDefinition } from '../../models/all-categories';
import {
	exampleBooks,
	exampleCourses,
	exampleTags,
} from '../../util/example-content';
import { ResourceCard as ResourceCardComponent } from './resource-card';

const meta: Meta<typeof ResourceCardComponent> = {
	title: 'Cards/Resource Card',
	component: ResourceCardComponent,
	args: {
		headingTag: 'h1',
		title: exampleCourses[0].title,
		subtitle: exampleCourses[0].author,
		image: exampleCourses[0].image,
		href: exampleCourses[0].href,
		attributes: [
			['level', exampleCourses[0].level],
			['format', exampleCourses[0].format],
		] as AttributeDefinition[],
		tags: exampleTags,
		layout: 'titleFirst',
		imageLayout: 'logo',
		onSelect: () => false,
		children:
			'Mollit deserunt laborum excepteur esse excepteur incididunt irure deserunt adipisicing anim in id.',
	},
	argTypes: {
		layout: {
			options: ['titleFirst', 'imageFirst'],
			control: 'inline-radio',
		},
		imageLayout: {
			options: ['logo', 'book'],
			control: 'inline-radio',
		},
		image: {
			options: ['logo', 'book'],
			mapping: {
				logo: exampleCourses[0].image,
				book: exampleBooks[0].image,
			},
			control: {
				type: 'inline-radio',
			},
		},
		onTagClick: {
			action: 'onTagClick',
		},
	},
};
export default meta;

type Story = StoryObj<typeof ResourceCardComponent>;

export const ResourceCard: Story = {
	render: ({ onSelect, ...args }) => {
		const [selected, setSelected] = useState(false);
		return (
			<ResourceCardComponent
				{...args}
				selected={selected}
				onSelect={onSelect ? (selected) => setSelected(selected) : undefined}
			/>
		);
	},
};
