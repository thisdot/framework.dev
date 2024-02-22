import { type Story, type Meta } from '@storybook/react'
import { Hero as HeroComponent, HeroProps } from './hero'

export default {
	title: 'Home/Hero',
	component: HeroComponent,
	args: {
		children: 'Hello world',
	},
} as Meta

const Template: Story<HeroProps> = (args) => <HeroComponent {...args} />

export const Hero = Template.bind({})
Hero.args = {
	siteName: 'react',
}
