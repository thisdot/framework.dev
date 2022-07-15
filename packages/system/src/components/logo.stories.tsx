import { Story, Meta } from '@storybook/react'
import { Logo as LogoComponent, LogoProps } from './logo'

export default {
	title: 'Logo',
	component: LogoComponent,
} as Meta

const Template: Story<LogoProps> = (args) => <LogoComponent {...args} />

export const Logo: Story<LogoProps> = Template.bind({})
Logo.args = {
	siteName: 'react',
}
