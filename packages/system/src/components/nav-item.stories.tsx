import { type Story, type Meta } from '@storybook/react'
import { InteractiveIcon } from '../icons/interactive-icon'
import { NavItem as NavItemComponent, type NavItemProps } from './nav-item'

export default {
	title: 'Nav Item',
	component: NavItemComponent,
	args: {
		icon: InteractiveIcon,
		children: 'Menu Item',
		count: 24,
	},
	argTypes: {
		'aria-current': {
			options: [undefined, 'page'],
			control: { type: 'radio' },
			defaultValue: undefined,
		},
	},
} as Meta

const Template: Story<NavItemProps> = (args) => <NavItemComponent {...args} />

export const NavItem = Template.bind({})
