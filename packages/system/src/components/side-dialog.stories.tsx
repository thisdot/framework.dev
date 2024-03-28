import { type Story, type Meta } from '@storybook/react'
import { useState } from 'react'
import { Button } from './button'
import {
	SideDialog as SideDialogComponent,
	type SideDialogProps,
} from './side-dialog'

export default {
	title: 'Side Dialog',
	component: SideDialogComponent,
	args: {
		children: 'Hello world',
		'aria-label': 'Example dialog',
		position: 'left',
	},
	argTypes: {
		position: {
			options: ['left', 'right'],
			control: 'radio',
		},
	},
} as Meta

const Template: Story<SideDialogProps> = (args) => {
	const [open, setOpen] = useState(false)
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
	)
}

export const SideDialog = Template.bind({})
