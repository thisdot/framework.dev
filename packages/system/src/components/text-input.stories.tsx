import { type Story, type Meta } from '@storybook/react'
import { TextInput as TextInputComponent, TextInputProps } from './text-input'

export default {
	title: 'Text Input',
	component: TextInputComponent,
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		disabled: false,
		hideLabel: false,
	},
} as Meta

const Template: Story<TextInputProps> = (args) => (
	<TextInputComponent {...args} />
)

export const TextInput = Template.bind({})
