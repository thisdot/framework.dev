import { type Meta, type Story } from '@storybook/react'
import { Button as ButtonComponent, type ButtonProps } from './button'

export default {
	title: 'Button',
	component: ButtonComponent,
	args: {
		as: 'button',
		size: 'medium',
		color: 'primary',
		disabled: false,
		children: 'Click me!',
	},
	argTypes: {
		onClick: { action: 'clicked' },
		as: {
			options: ['button', 'a'],
			control: { type: 'radio' },
		},
		size: {
			options: ['medium', 'large', 'square', 'largeSquare'],
			control: { type: 'radio' },
		},
		color: {
			options: ['primary', 'secondary', 'tertiary', 'plain', 'destructive'],
			control: { type: 'radio' },
		},
	},
} as Meta

const Template: Story<ButtonProps> = (args) => <ButtonComponent {...args} />

export const Button = Template.bind({})

Button.parameters = {
	percy: {
		additionalSnapshots: [{ suffix: ' as anchor', args: { as: 'a' } }],
	},
}
