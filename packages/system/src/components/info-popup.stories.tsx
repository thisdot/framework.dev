/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import {
	InfoPopup as InfoPopupComponent,
	type InfoPopupProps,
} from './info-popup';

type ArgsType = InfoPopupProps & {
	alignItems: string;
	justifyContent: string;
};

const alignmentOptions = ['center', 'start', 'end'];
const meta: Meta<ArgsType> = {
	title: 'Info Popup',
	component: InfoPopupComponent,
	args: {
		children:
			'Enim enim incididunt cupidatat cupidatat irure amet amet incididunt esse. Tempor excepteur nostrud exercitation anim amet excepteur dolore sunt ex sit id officia nisi laboris. Labore incididunt consequat nisi ea ea consectetur ea nisi amet. Qui id amet ad aute nulla nisi pariatur. Labore enim magna aliquip nisi proident cillum labore duis reprehenderit et labore aliqua.',
		alignItems: 'center',
		justifyContent: 'center',
	},
	argTypes: {
		alignItems: {
			options: alignmentOptions,
			control: 'inline-radio',
		},
		justifyContent: {
			options: alignmentOptions,
			control: 'inline-radio',
		},
	},
};
export default meta;

type Story = StoryObj<typeof InfoPopupComponent>;

export const InfoPopup: Story = {
	// @ts-expect-error These types are just for this story
	render: ({ alignItems, justifyItems, ...args }) => {
		const [open, setOpen] = useState(false);
		const targetRef = useRef<HTMLButtonElement | null>(null);
		return (
			<div
				style={{
					display: 'grid',
					width: '100vw',
					height: '100vh',
					alignItems,
					justifyItems,
				}}
			>
				<Button as="button" onClick={() => setOpen(true)} ref={targetRef}>
					Click me
				</Button>
				<InfoPopupComponent
					{...args}
					targetRef={targetRef}
					isOpen={open}
					onDismiss={() => setOpen(false)}
				/>
			</div>
		);
	},
};
