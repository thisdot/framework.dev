import { type Story, type Meta } from '@storybook/react'
import startCase from 'lodash/startCase'
import { sprinkles } from '../sprinkles/sprinkles.css'
import { Sidebar as SidebarComponent, type SidebarProps } from './sidebar'
import { NavItem } from './nav-item'
import { allCategoryNames } from '../models/all-categories'
import { bodyWithNav } from '../styles/layouts.css'

export default {
	title: 'Sidebar',
	component: SidebarComponent,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		children: (
			<div className={sprinkles({ layout: 'stack', gap: 8 })}>
				{allCategoryNames.map((category) => (
					<NavItem href={`#${category}`} key={category}>
						{startCase(category)}
					</NavItem>
				))}
			</div>
		),
		siteName: 'react',
	},
} as Meta

const Template: Story<SidebarProps> = (args) => (
	<div className={bodyWithNav}>
		<SidebarComponent {...args} />
		<main className={sprinkles({ backgroundColor: 'surface4' })} />
	</div>
)

export const Sidebar: Story<SidebarProps> = Template.bind({})
