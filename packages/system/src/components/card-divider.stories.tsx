import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { sprinkles } from '../sprinkles/sprinkles.css';
import { CardDivider as CardDividerComponent } from './card-divider';

const meta: Meta<typeof CardDividerComponent> = {
	title: 'Card Divider',
	component: CardDividerComponent,
	args: {
		className: sprinkles({ marginY: 12 }),
	},
};
export default meta;

type Story = StoryObj<typeof CardDividerComponent>;

export const CardDivider: Story = {
	render: (args) => (
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
				scelerisque non nunc quis varius. Cras ac commodo enim, eu tristique
				lectus. Vestibulum consequat, arcu quis feugiat pretium, metus lorem
				feugiat dolor, malesuada sodales metus ipsum eget ante. Vestibulum massa
				tortor, mollis a facilisis non, commodo nec magna. Mauris tempus lacus
				vitae ante luctus, ac porta neque ornare. Etiam sit amet fermentum enim.
				Nam eros sapien, lacinia non orci dapibus, venenatis eleifend eros.
				Vestibulum sollicitudin faucibus luctus. Cras orci lectus, iaculis sit
				amet vulputate sit amet, dignissim varius lacus.
			</p>
			<CardDividerComponent {...args} />
			<p>
				Donec placerat felis nisi, et finibus urna eleifend at. Fusce at
				lobortis metus. Sed est est, blandit non justo quis, rutrum posuere
				velit. Quisque a nunc sagittis, efficitur nibh ac, dignissim eros. Duis
				ultricies, diam et pellentesque fermentum, tortor mauris molestie nisl,
				sed cursus eros mauris non lectus. Donec nec lorem non tellus gravida
				dignissim vitae et sem. Aenean congue pretium nisl. Duis condimentum
				neque vel tellus viverra, vel consectetur lectus egestas. Sed gravida
				est eget quam porttitor, quis vestibulum ipsum consectetur. Sed quis
				laoreet ex. Aliquam id odio molestie, lobortis purus et, consectetur
				nisl. Nulla congue, nunc eu tincidunt varius, diam massa volutpat dui,
				in fermentum nulla ante vitae nisi. Donec vitae leo cursus, interdum
				nibh condimentum, porta lacus.
			</p>
		</div>
	),
};
