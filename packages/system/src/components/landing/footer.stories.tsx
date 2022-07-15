import { Story, Meta } from '@storybook/react'
import { Footer as FooterComponent, FooterProps } from './footer'

export default {
	title: 'Landing/Footer',
	component: FooterComponent,
	args: {
		children: 'Hello world',
	},
} as Meta

const Template: Story<FooterProps> = (args) => <FooterComponent {...args} />

export const Footer = Template.bind({})
