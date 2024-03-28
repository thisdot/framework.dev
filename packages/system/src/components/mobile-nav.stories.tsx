import { type Story, type Meta } from '@storybook/react'
import startCase from 'lodash/startCase'
import { sprinkles } from '../sprinkles/sprinkles.css'
import { NavItem } from './nav-item'
import {
	MobileNav as MobileNavComponent,
	type MobileNavProps,
} from './mobile-nav'
import { allCategoryNames } from '../models/all-categories'
import { bodyWithNav, fullscreen } from '../styles/layouts.css'
import classNames from 'classnames'

export default {
	title: 'Mobile Nav',
	component: MobileNavComponent,
	parameters: {
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'mobile2',
		},
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
	},
	argTypes: {
		// This arg exists only for rendering in the open state by Percy
		// so we want to hide it from humans
		initialMenuState: {
			table: { disable: true },
			control: { disable: true },
		},
	},
} as Meta

const Template: Story<MobileNavProps> = (args) => (
	<div className={classNames(bodyWithNav, fullscreen)}>
		<div />
		<MobileNavComponent {...args} />
	</div>
)

export const MobileNav: Story<MobileNavProps> = Template.bind({})

MobileNav.parameters = {
	percy: {
		additionalSnapshots: [
			{ suffix: ' with burger menu open', args: { initialMenuState: 'open' } },
		],
	},
}
