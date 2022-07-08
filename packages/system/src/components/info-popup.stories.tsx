import { Story, Meta } from '@storybook/react'
import { useRef, useState } from 'react'
import { Button } from './button'
import { InfoPopup as InfoPopupComponent, InfoPopupProps } from './info-popup'

const alignmentOptions = ['center', 'start', 'end']
export default {
	title: 'Info Popup',
	component: InfoPopupComponent,
	args: {
		children:
			'Enim enim incididunt cupidatat cupidatat irure amet amet incididunt esse. Tempor excepteur nostrud exercitation anim amet excepteur dolore sunt ex sit id officia nisi laboris. Labore incididunt consequat nisi ea ea consectetur ea nisi amet. Qui id amet ad aute nulla nisi pariatur. Labore enim magna aliquip nisi proident cillum labore duis reprehenderit et labore aliqua.',
		alignItems: 'center',
		justifyItems: 'center',
	},
	argTypes: {
		alignItems: {
			options: alignmentOptions,
			control: 'inline-radio',
		},
		justifyItems: {
			options: alignmentOptions,
			control: 'inline-radio',
		},
	},
} as Meta

const Template: Story<
	InfoPopupProps & {
		alignItems: typeof alignmentOptions[number]
		justifyItems: typeof alignmentOptions[number]
	}
> = ({ alignItems, justifyItems, ...args }) => {
	const [open, setOpen] = useState(false)
	const targetRef = useRef<HTMLButtonElement | null>(null)
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
	)
}

export const InfoPopup = Template.bind({})
