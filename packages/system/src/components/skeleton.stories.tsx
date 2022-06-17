import { Story, Meta } from "@storybook/react"
import { Skeleton as SkeletonComponent, SkeletonProps } from "./skeleton"

export default {
	title: "Skeleton",
	component: SkeletonComponent,
	args: {
		children: "Hello world",
	}
} as Meta

const Template: Story<SkeletonProps> = (args) => <SkeletonComponent {...args} />

export const Skeleton = Template.bind({})

Skeleton.args = {
	variant: 'circle',
}