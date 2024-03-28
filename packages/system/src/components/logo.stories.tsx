import { type Story, type Meta } from '@storybook/react'
import { Logo as LogoComponent, type LogoProps } from './logo'

export default {
	title: 'Logo',
	component: LogoComponent,
} as Meta

const Template: Story<LogoProps> = (args) => <LogoComponent {...args} />

export const Logo: Story<LogoProps> = Template.bind({})
Logo.args = {
	siteName: 'react',
}
