import { type Story, type Meta } from '@storybook/react'
import {
	CardSelector as CardSelectorComponent,
	type CardSelectorProps,
} from './card-selector'

export default {
	title: 'Cards/Card Selector',
	component: CardSelectorComponent,
	args: {
		checked: false,
	},
	argTypes: {
		onChange: {
			action: 'onChange',
		},
	},
} as Meta

const Template: Story<CardSelectorProps> = (args) => (
	<div
		style={{
			display: 'grid',
			width: '90vw',
			height: '90vh',
			placeItems: 'center',
		}}
	>
		<CardSelectorComponent {...args} />
	</div>
)

export const CardSelector = Template.bind({})
