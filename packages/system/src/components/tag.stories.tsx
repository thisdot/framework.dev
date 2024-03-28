import { type Story, type Meta } from '@storybook/react'
import { Tag as TagComponent, type TagProps } from './tag'

export default {
	title: 'Tag',
	component: TagComponent,
	argTypes: {
		onClick: {
			action: 'onClick',
		},
	},
} as Meta

const Template: Story<TagProps> = (args) => <TagComponent {...args} />

export const Tag = Template.bind({})

Tag.args = {
	children: 'data visualization',
	color: 'neutral',
}
