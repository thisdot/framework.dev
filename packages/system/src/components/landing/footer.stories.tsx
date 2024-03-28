import { type Story, type Meta } from '@storybook/react'
import { Footer as FooterComponent, type FooterProps } from './footer'

export default {
	title: 'Landing/Footer',
	component: FooterComponent,
	args: {
		children: 'Hello world',
	},
} as Meta

const Template: Story<FooterProps> = (args) => <FooterComponent {...args} />

export const Footer = Template.bind({})
