/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { SideDialog as SideDialogComponent } from './side-dialog';

const meta: Meta<typeof SideDialogComponent> = {
	title: 'Side Dialog',
	component: SideDialogComponent,
	args: {
		children: 'Hello world',
		'aria-label': 'Example dialog',
		position: 'bottom',
	},
	argTypes: {
		position: {
			options: ['bottom', 'right'],
			control: 'radio',
		},
	},
};
export default meta;

type Story = StoryObj<typeof SideDialogComponent>;

export const SideDialog: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button as="button" onClick={() => setOpen(true)}>
					Open dialog
				</Button>
				<SideDialogComponent
					isOpen={open}
					{...args}
					onDismiss={() => setOpen(false)}
				/>
			</>
		);
	},
};
